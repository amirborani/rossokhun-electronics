# Moddee Shop delivery tracking setup

The tracking pages are prepared, but live tracking is **not active** until a Supabase project is configured and the site is deployed over HTTPS. This feature records orders that arrive through WhatsApp; it does not add online checkout, payments, customer accounts, or a real product catalog.

## 1. Create the Supabase project

Create a Supabase project in a region close to the shop and delivery area. In the SQL Editor, run `supabase/schema.sql` once. It creates the order, approved-staff, and short-lived courier-location tables; row-level security is enabled, and public access is limited to the status and current location for a valid tracking link.

## 2. Create and approve staff accounts

In Supabase Authentication, create an account for the shop owner and an account for each approved courier. The sign-in pages send a one-time email link and do not create new accounts.

Copy each user's UUID from Authentication and register the roles in the SQL Editor:

```sql
insert into public.delivery_staff (user_id, role)
values
  ('OWNER-AUTH-USER-UUID', 'owner'),
  ('COURIER-AUTH-USER-UUID', 'courier');
```

Replace the example IDs with the actual UUIDs. Repeat the courier row for each approved courier. Only the owner role can manage deliveries; courier accounts can claim an unassigned order and share GPS for that order.

## 3. Connect the local site

Copy `.env.example` to `.env.local` and fill in the project's URL and **publishable** key from Supabase's Connect/API settings:

```text
VITE_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR-PUBLISHABLE-KEY
```

Never put a Supabase `service_role` or secret key in this website. The publishable key is intended for browser use; the database's row-level security protects the data. Install dependencies and start the site:

```powershell
npm install
npm run dev
```

Open the printed local URL. Browser geolocation works on `localhost` for development and requires HTTPS on a deployed site.

## 4. Set the deployed URL

Deploy the Vite site to an HTTPS host and set Supabase Authentication's **Site URL** and allowed redirect URLs to the actual site origins, including `delivery-admin.html` and `courier.html`. Rebuild/redeploy with the two `VITE_SUPABASE_*` values configured in the hosting provider.

## 5. Daily workflow

1. The owner opens `delivery-admin.html`, signs in, and creates a short order description for a purchase received through WhatsApp.
2. The site generates a one-time tracking link. Copy it immediately and send it to the customer through WhatsApp; the raw link is not stored, so it cannot be recovered from the order list.
3. An approved courier opens `courier.html`, claims an unassigned delivery, and explicitly starts GPS sharing when ready to deliver.
4. The customer opens the private link. The map refreshes every five seconds while the courier is sharing. The courier can pause sharing or mark the delivery complete.

The courier must grant location permission. Coordinates are written only during an active delivery and are not exposed through a customer-facing table. They are deleted when sharing is paused or the delivery status changes, and are hidden from public tracking after two minutes without an update. The tracking endpoint deletes expired coordinates the next time that link is checked. For automatic cleanup even when no customer is viewing a tracking page, enable Supabase's `pg_cron` extension and schedule this database command:

```sql
select cron.schedule(
  'moddee-expired-delivery-locations',
  '* * * * *',
  $$delete from public.delivery_locations where recorded_at <= now() - interval '2 minutes'$$
);
```

Public tracking links act like private access codes; only send them to the intended customer. Do not put customer names, phone numbers, or street addresses in the order description. OpenStreetMap provides map tiles without an API key; keep its map attribution visible and follow its tile usage policy.
