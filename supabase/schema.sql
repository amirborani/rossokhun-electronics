create table if not exists public.delivery_staff (
  user_id uuid primary key references auth.users (id) on delete cascade,
  role text not null check (role in ('owner', 'courier')),
  created_at timestamptz not null default now()
);

create table if not exists public.delivery_orders (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique check (reference ~ '^[A-Z0-9-]{6,20}$'),
  description text not null check (char_length(description) between 2 and 180),
  tracking_token_hash text not null unique check (tracking_token_hash ~ '^[0-9a-f]{64}$'),
  status text not null default 'ready'
    check (status in ('ready', 'assigned', 'out_for_delivery', 'delivered', 'cancelled')),
  courier_id uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (status <> 'ready' or courier_id is null)
);

create table if not exists public.delivery_locations (
  order_id uuid primary key references public.delivery_orders (id) on delete cascade,
  courier_id uuid not null references auth.users (id) on delete cascade,
  latitude double precision not null check (latitude between -90 and 90),
  longitude double precision not null check (longitude between -180 and 180),
  accuracy double precision check (accuracy is null or accuracy >= 0),
  recorded_at timestamptz not null default now()
);

create index if not exists delivery_orders_courier_status_idx
  on public.delivery_orders (courier_id, status, created_at desc);

create or replace function public.touch_delivery_location()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.recorded_at := now();
  return new;
end;
$$;

drop trigger if exists touch_delivery_location_recorded_at on public.delivery_locations;
create trigger touch_delivery_location_recorded_at
  before update on public.delivery_locations
  for each row execute function public.touch_delivery_location();

alter table public.delivery_staff enable row level security;
alter table public.delivery_orders enable row level security;
alter table public.delivery_locations enable row level security;

create or replace function public.has_delivery_role(required_role text)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.delivery_staff staff
    where staff.user_id = auth.uid()
      and staff.role = required_role
  );
$$;

revoke all on function public.has_delivery_role(text) from public, anon;
grant execute on function public.has_delivery_role(text) to authenticated;

create policy "Staff can view their own role"
  on public.delivery_staff for select to authenticated
  using (user_id = auth.uid() or public.has_delivery_role('owner'));

create policy "Owners manage delivery staff"
  on public.delivery_staff for all to authenticated
  using (public.has_delivery_role('owner'))
  with check (public.has_delivery_role('owner'));

create policy "Owners view all delivery orders"
  on public.delivery_orders for select to authenticated
  using (public.has_delivery_role('owner'));

create policy "Couriers view open or assigned delivery orders"
  on public.delivery_orders for select to authenticated
  using (
    public.has_delivery_role('courier')
    and (courier_id = auth.uid() or (courier_id is null and status = 'ready'))
  );

create policy "Owners create delivery orders"
  on public.delivery_orders for insert to authenticated
  with check (public.has_delivery_role('owner') and status = 'ready' and courier_id is null);

create policy "Owners update delivery orders"
  on public.delivery_orders for update to authenticated
  using (public.has_delivery_role('owner'))
  with check (public.has_delivery_role('owner'));

create policy "Owners view delivery locations"
  on public.delivery_locations for select to authenticated
  using (public.has_delivery_role('owner'));

create policy "Couriers view their assigned location"
  on public.delivery_locations for select to authenticated
  using (courier_id = auth.uid() and public.has_delivery_role('courier'));

create policy "Assigned couriers publish their own location"
  on public.delivery_locations for insert to authenticated
  with check (
    courier_id = auth.uid()
    and public.has_delivery_role('courier')
    and exists (
      select 1 from public.delivery_orders orders
      where orders.id = order_id
        and orders.courier_id = auth.uid()
        and orders.status = 'out_for_delivery'
    )
  );

create policy "Assigned couriers update their own location"
  on public.delivery_locations for update to authenticated
  using (courier_id = auth.uid() and public.has_delivery_role('courier'))
  with check (
    courier_id = auth.uid()
    and public.has_delivery_role('courier')
    and exists (
      select 1 from public.delivery_orders orders
      where orders.id = order_id
        and orders.courier_id = auth.uid()
        and orders.status = 'out_for_delivery'
    )
  );

create policy "Assigned couriers stop sharing their location"
  on public.delivery_locations for delete to authenticated
  using (courier_id = auth.uid() and public.has_delivery_role('courier'));

grant select, insert, update on public.delivery_staff to authenticated;
grant select, insert, update on public.delivery_orders to authenticated;
grant select, insert, update, delete on public.delivery_locations to authenticated;

create or replace function public.touch_delivery_order()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists touch_delivery_order_updated_at on public.delivery_orders;
create trigger touch_delivery_order_updated_at
  before update on public.delivery_orders
  for each row execute function public.touch_delivery_order();

create or replace function public.clean_inactive_delivery_location()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.status <> 'out_for_delivery' then
    delete from public.delivery_locations where order_id = new.id;
  end if;
  return new;
end;
$$;

drop trigger if exists clear_location_after_delivery on public.delivery_orders;
create trigger clear_location_after_delivery
  after update of status on public.delivery_orders
  for each row execute function public.clean_inactive_delivery_location();

create or replace function public.claim_delivery_order(p_order_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null or not public.has_delivery_role('courier') then
    raise exception 'A registered courier account is required.';
  end if;

  update public.delivery_orders
  set courier_id = auth.uid(), status = 'assigned'
  where id = p_order_id and status = 'ready' and courier_id is null;

  if not found then
    raise exception 'This delivery is no longer available.';
  end if;
end;
$$;

create or replace function public.start_delivery(p_order_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null or not public.has_delivery_role('courier') then
    raise exception 'A registered courier account is required.';
  end if;

  update public.delivery_orders
  set status = 'out_for_delivery'
  where id = p_order_id and courier_id = auth.uid() and status = 'assigned';

  if not found then
    raise exception 'This delivery cannot be started.';
  end if;
end;
$$;

create or replace function public.pause_delivery(p_order_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null or not public.has_delivery_role('courier') then
    raise exception 'A registered courier account is required.';
  end if;

  update public.delivery_orders
  set status = 'assigned'
  where id = p_order_id and courier_id = auth.uid() and status = 'out_for_delivery';

  if not found then
    raise exception 'This delivery cannot be paused.';
  end if;
end;
$$;

create or replace function public.complete_delivery(p_order_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null or not public.has_delivery_role('courier') then
    raise exception 'A registered courier account is required.';
  end if;

  update public.delivery_orders
  set status = 'delivered'
  where id = p_order_id
    and courier_id = auth.uid()
    and status in ('assigned', 'out_for_delivery');

  if not found then
    raise exception 'This delivery cannot be completed.';
  end if;
end;
$$;

revoke all on function public.claim_delivery_order(uuid) from public, anon;
revoke all on function public.start_delivery(uuid) from public, anon;
revoke all on function public.pause_delivery(uuid) from public, anon;
revoke all on function public.complete_delivery(uuid) from public, anon;
grant execute on function public.claim_delivery_order(uuid) to authenticated;
grant execute on function public.start_delivery(uuid) to authenticated;
grant execute on function public.pause_delivery(uuid) to authenticated;
grant execute on function public.complete_delivery(uuid) to authenticated;

create or replace function public.get_public_delivery_tracking(p_token_hash text)
returns table (
  reference text,
  status text,
  updated_at timestamptz,
  latitude double precision,
  longitude double precision,
  location_recorded_at timestamptz
)
language plpgsql
security definer
set search_path = ''
as $$
begin
  if p_token_hash !~ '^[0-9a-f]{64}$' then
    return;
  end if;

  delete from public.delivery_locations locations
  using public.delivery_orders orders
  where locations.order_id = orders.id
    and orders.tracking_token_hash = p_token_hash
    and locations.recorded_at <= now() - interval '2 minutes';

  return query
  select
    orders.reference,
    orders.status,
    orders.updated_at,
    locations.latitude,
    locations.longitude,
    locations.recorded_at
  from public.delivery_orders orders
  left join public.delivery_locations locations
    on locations.order_id = orders.id
    and locations.recorded_at > now() - interval '2 minutes'
  where orders.tracking_token_hash = p_token_hash
    and orders.status <> 'cancelled'
  limit 1;
end;
$$;

revoke all on function public.get_public_delivery_tracking(text) from public;
grant execute on function public.get_public_delivery_tracking(text) to anon, authenticated;
