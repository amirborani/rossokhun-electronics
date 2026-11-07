---
name: Moddee Shop
description: A bright orbital-atlas storefront in a pink-and-green palette with a Thai-English sample catalog.
colors:
  ink: "#203728"
  muted: "#536b57"
  secondary-copy: "#48634d"
  deep-copy: "#3a5540"
  line: "#d8e4d8"
  silver-deep: "#bfd2c1"
  silver-panel: "#d3e2d4"
  surface: "#ffffff"
  canvas: "#f7faf6"
  accent: "#bd4d76"
  accent-pale: "#f9eaf0"
  accent-dark: "#87304f"
  accent-border: "#a53d63"
  signal: "#559568"
  signal-light: "#e3f1e4"
  mist: "#eff5ed"
  ice: "#f9edf1"
  hero-canvas: "#fbf5f5"
  panel-canvas: "#f1f6ef"
  quiet-canvas: "#f3f7f1"
  badge-edge: "#ead4dd"
  flight-edge: "#bfd9c2"
  flight-ready: "#eaf4e9"
  placeholder: "#eff5ed"
typography:
  display:
    fontFamily: '"Leelawadee UI", "Noto Sans Thai", "Segoe UI", Tahoma, sans-serif'
    fontSize: "clamp(32px, 4vw, 48px)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-.04em"
  body:
    fontFamily: '"Leelawadee UI", "Noto Sans Thai", "Segoe UI", Tahoma, sans-serif'
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  compact: "3px"
  control: "4px"
  panel: "5px"
  hero: "8px"
spacing:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "43px"
  input-search:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "0 12px"
    height: "46px"
  chip-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "5px 13px"
    height: "33px"
---

# Design System: Moddee Shop

## Overview

**Creative North Star: "The Bright Orbital Atlas"**

Moddee Shop is a sample-product storefront seen through a luminous spacecraft navigation display: pearl-white surfaces, botanical green instrumentation, vivid rose-pink actions, plotted orbit lines, and deep green ink. The Japanese print direction is replaced. Pink and green are the committed shop palette.

The orbital drawing is atmosphere, not a claim about the shop, its location, products, or delivery service. Keep photographic product examples and the owner's real portrait intact. Thai and English browsing, reseller details, and the optional delivery tracker retain their existing purpose and behavior.

**Key Characteristics:**
- Bright pearl-white surfaces, soft leafy greens, saturated pink actions, and deep green ink.
- Orbital linework is an original vector illustration, not interactive data.
- A quick local star-signal game gives visitors a playful break without implying purchases, accounts, or online multiplayer.
- Sample products, prices, shop contacts, and backend requirements remain truthful and visible.

## Colors

Use a light science-fiction palette: white and pale green occupy broad surfaces; pink carries the primary actions and prices, while green marks status and active details.

### Primary
- **Moddee Pink** (#bd4d76), **Deep Rose** (#87304f): brand marks, prices, selected controls, and primary actions.
- **Garden Green** (#559568): active navigation edge and small signal details.

### Neutral
- **Garden Ink** (#203728): main headings and text.
- **Secondary Copy** (#48634d), **Deep Copy** (#3a5540), **Muted Green** (#536b57): supporting text and labels.
- **Pearl Green** (#f7faf6), **White Surface** (#ffffff): page and card backgrounds.
- **Rose Mist** (#f9edf1), **Leaf Mist** (#eff5ed), **Panel Green** (#f1f6ef): low-emphasis surfaces.
- **Leaf Lines** (#d8e4d8), **Green Edge** (#bfd2c1), **Panel Edge** (#d3e2d4): borders and control edges.
- **Pink Wash** (#f9eaf0), **Ready Green** (#eaf4e9), **Quiet Green** (#f3f7f1): status surfaces.
- **Hero Pink** (#c45c83), **Hero Green** (#6fa578): illustration accents.

### Named Rules
**The Real Interface Rule.** Orbit lines are decorative; only live, configured systems may claim real tracking, inventory, or availability.
**The Sample Stays Visible Rule.** Example products and prices remain marked as samples wherever they appear.
**The Shop Palette Rule.** Pink owns the primary action and expressive moments; green carries the quiet structure and status signals. WhatsApp and LINE marks retain their recognizable brand colors.

## Typography

**Display Font:** Leelawadee UI with Noto Sans Thai, Segoe UI, and platform fallbacks.
**Body Font:** The same Thai-capable system stack.
**Label/Mono Font:** No separate label or monospace face.

**Character:** A familiar workhorse sans keeps Thai and Latin scripts readable; spacing, orbit geometry, and pink/green instrument states carry the speculative-fiction character.

### Hierarchy
- **Display** (800, `clamp(32px, 4vw, 48px)`, 1.2 line-height): storefront welcome headline.
- **Body** (400, 15px, 1.55 line-height): product and explanatory copy.
- **Controls** (compact system sizes): search, navigation, demo badges, and status labels.

### Named Rules
**The Two-Script Rule.** Thai and English use the same legible sans-serif voice.

## Layout

The storefront keeps a centered content width capped at 1200px, a five-column desktop catalog, and a two-column mobile grid. The first viewport pairs a search-led masthead with a wide orbital illustration; its text and browse action stay left while a solid owner contact panel anchors the image. Navigation and filters scroll horizontally on narrow screens. Staff and tracking pages use a centered reading width and stack their forms on mobile.

## Elevation & Depth

Depth comes from thin green-tinted borders, bright tonal layers, and plotted orbital paths. Small offset shadows distinguish the owner panel and hovered products; avoid dark glass, heavy glows, and dense sci-fi decoration.

### Shadow Vocabulary
- **Owner Profile** (`0 8px 22px rgb(25 67 94 / 11%)`): Separates the shop identity from the illustrated field.
- **Product Hover** (`0 7px 18px rgb(25 67 94 / 12%)`): Raises a tile slightly on hover.

## Shapes

Controls and cards use compact 3–5px corners, with an 8px radius on the hero. Fine, green-tinted borders and small registration-like marks suggest instrument panels without sacrificing standard control affordances. Do not use glass blur or neon halos as decoration.

## Components

### Buttons
- **Shape:** 4px corners for primary actions.
- **Primary:** Pink fill, white text, and a direct action label.
- **Hover / Focus:** Deep rose on hover; visible green focus outline for keyboard use.
- **Secondary:** White fill with a thin silver edge.

### Chips
- **Style:** White surface, leaf-green border, and deep green copy.
- **State:** Selected filters use the primary pink with white text.

### Cards / Containers
- **Corner Style:** 5px for product and profile panels.
- **Background:** White on pearl-silver.
- **Shadow Strategy:** Fine borders at rest; a small offset shadow on hover.
- **Border:** Soft leaf green, with pink reserved for active interaction.

### Inputs / Fields
- **Style:** White search and form fields with a green-tinted border.
- **Focus:** Green edge and a restrained outer focus ring.
- **Error / Disabled:** Muted neutral states with readable contrast.

### Navigation
- **Style:** Dark garden ink on white; pink signals the active state and green carries hover details.
- **Mobile:** Category links scroll horizontally without wrapping.

### Owner Profile
The owner's real portrait and all confirmed contact routes stay legible in a solid white panel, separate from the illustrated orbital field.

### AI Shop Assistant
The fixed chat panel uses the same pink primary actions and green surfaces. It clearly warns visitors not to share sensitive information and links to WhatsApp when its Supabase-backed AI service is not configured.

### Delivery Tracking
WhatsApp orders remain manual. If Supabase and HTTPS are configured, approved couriers explicitly start GPS sharing and customers see only a reference, status, and recent coordinates.

## Do's and Don'ts

### Do:
- **Do** keep product search, categories, and sorting easy to find.
- **Do** preserve the owner's supplied portrait and confirmed contact links.
- **Do** label every demo item and example price.
- **Do** use plotted orbital geometry as illustration, not fake live telemetry.
- **Do** keep Thai and English controls and product details in parity.

### Don't:
- **Don't** let the speculative illustration imply live delivery or product telemetry.
- **Don't** imply checkout or payment is active, or tracking is live before backend setup.
- **Don't** expose a customer's address or phone on a public tracking page.
- **Don't** present sample catalog details as real offers.
