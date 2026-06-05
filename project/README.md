# Penn Radiant Products — Design System

> **Penn Radiant Products (PRP)** · [pennradiant.com](https://pennradiant.com)
> *Industrial Infrared Heating & Cooling Solutions — Built to Last, in the USA, Since 1965.*

This folder is a reusable design system for Penn Radiant Products: brand colors, type,
fonts, logos, real product/brand assets, and high-fidelity UI-kit recreations of the
PennRadiant.com website. Use it to produce on-brand interfaces, marketing pages, quotes,
slides, and prototypes.

---

## Company & product context

Penn Radiant Products is a Pittsburgh-area (Wexford, PA) **industrial heating & cooling
distributor and manufacturer**, family-run and founded by **Del Lieb in 1965**. PRP
sells, services, and ships a deep catalog of commercial/industrial climate equipment and
replacement parts across North America, with a strong made-in-USA, "built to last"
identity (American flag appears in the logo and throughout).

It is a **catalog + quote** business, not a typical e-commerce checkout brand. The core
jobs of the site are: *browse equipment by category → find the exact replacement part →
request a quote / call sales.* A signature feature is the **Replacement Parts Finder**.

### Product categories (top-level nav)
- **Gas Heaters / Gas Heating** — infrared tube heaters, high-intensity ceramic heaters, direct & indirect fired
- **Electric Heaters / Electric Heating** — overhead electric infrared, quartz tube lamps, heating elements
- **Heater Parts** — electrodes, tubes, motors, burner heads, controls, ceramic burner parts
- **Space Heaters** — portable electric & portable electric infrared heaters
- **Cooling** — industrial fans, crane-cab fans, exhaust ventilators, portable A/C, misting fans
- **Thaw Equipment** — railcar thaw sheds, makeup-air, thawing stations
- Specialty applications: Car/Truck Wash heaters (Wind Blocker Series®), Restaurant & Hospitality, CNG-approved tube heaters, Railcar Thaw Sheds.

### Brands PRP carries / represents (logos in `assets/brands/`)
PRP's **primary product lines are Space-Ray ([spaceray.com](https://spaceray.com)) and
Heat Wagon ([heatwagon.com](https://heatwagon.com))** — most of what they sell is heaters
and replacement parts from these two. Also carried: Sure Flame, SunStar, Fostoria, TPI,
Aitken, Schaefer, Pro-Kool, WayCool, Maxitrol, Fisher, Rego, Penn Fan, Nordic Air,
Marley/QMark, Chromalox. UL & CSA certification marks and UPS shipping are also used.

### Key contacts
- **Mike Lieb** — MLieb@pennradiant.com
- **Patty** — patty@pennradiant.com
- Sales: sales@pennradiant.com · **1.800.438.2503**

### Sources used to build this system
- Mounted asset folder `••• Penn Radiant/` — logos, product photography, website mockups, brochures, parts reference sheets (Adobe `.ai`/`.psd` + exported `.jpg`/`.png`). Read-only; not assumed available to future readers.
- `2026 PRP Website Mockup/` mobile mockups (the most current direction) and `2025 PRP Website Mockup/` "Test Block" category modules → primary reference for the UI kit.
- The live site **pennradiant.com**.
- Print font list (`Document fonts/`) confirming **Myriad Pro** as the brand typeface.
- There is **no source codebase** — UI recreations are built from the mockups + live site.

---

## CONTENT FUNDAMENTALS — voice & copy

The tone is **plain-spoken, industrial, confident, and American**. It reads like a
knowledgeable supplier who has done this since 1965 — not a slick startup. No fluff, no
jargon-for-its-own-sake, no hype words like "revolutionary." Specs and BTU/kW numbers do
the selling.

- **Voice:** third person / brand-and-product first ("Penn Radiant Products was started in 1965 by Del Lieb…", "Built for Harsh Environments"). Speaks *to* the customer with direct imperatives in CTAs ("Shop All Products", "Request a Quote", "Quickly find parts from our entire catalog!").
- **Person:** mostly impersonal/product-led. "You" appears only in helpful instructions. Rarely "we."
- **Casing:** Headlines and section labels are frequently **ALL CAPS** ("INDUSTRIAL INFRARED HEATING & COOLING SOLUTIONS", "HIGH INTENSITY CERAMIC HEATERS", "CAR/TRUCK WASH TUBE HEATERS"). Title Case for nav items and buttons. Sentence case for descriptive body copy.
- **Two-weight headlines:** category labels mix a lighter word with a heavy word — *"INFRARED **TUBE** HEATERS"*, *"DIRECT FIRED **HEATERS**"*. This is a core brand tic.
- **Numbers & specs are prominent:** "100,000, 212,000, & 250,000 Btu", "1.5 kW – 60 kW", "wind resistance up to 40 mph", "Since 1965". Specs are bulleted with small red triangle markers.
- **Heritage cues:** "Since 1965", "Built to Last", "Made in the USA", founder Del Lieb is featured by name and photo. American flag is a recurring motif.
- **Punctuation:** exclamation points appear in helper/marketing lines ("Quickly find parts from our entire catalog!"). Otherwise restrained.
- **Emoji:** **never.** Not part of the brand.
- **Vibe:** rugged, dependable, no-nonsense, patriotic, expert. Think industrial supply catalog meets family business.

**Example copy:**
> *"Penn Radiant Products was started in 1965 by Del Lieb. Since the beginning PRP has evolved to offer all types of heating and cooling products — from gas fired to electric heating equipment to misting fans and portable air conditioning units."*
> *"Built For Harsh Environments"* · *"Indoor or Outdoor Rated."* · *"Reduce Wasted Material/Asset. Reduce Safety Concerns."*

---

## VISUAL FOUNDATIONS

The look is **bold, high-contrast, industrial American**. White product-catalog
backgrounds, a hot **red** brand color, a strong **infrastructure blue** hero, and
**near-black feature bands** for dramatic application photography. Heavy bold/italic
sans-serif type. Lots of clean product photography on white with soft drop shadows.

### Color
- **Red `#ED1D24`** is the brand signature — the slanted logo banner, section-header tags, spec-bullet triangles, primary buttons. Used as a bold accent, not as large fills.
- **Blue** is the workhorse environment color: hero gradient (`#0A6FB0 → #0C5D8F → #093A5A`), links, the brighter `#0B81C2` used on the angled "category tag" labels.
- **Near-black `#1C1C1E`** bands frame full-bleed application photography (Restaurant & Hospitality, Industrial Radiant, Railcar Thaw Sheds).
- **Infrared orange `#E25A1F`** is an *earned* accent — it's literally the glow of a ceramic heater element. Use it tiny and meaningful, never as decoration.
- **Neutrals** are slightly cool industrial grays; `#F0EFF0` is the standard alternating band (e.g. the Parts Finder strip).
- **USA flag** red/white/blue appear as a heritage device beside the logo and "Since 1965".

### Type
- **Myriad Pro** is the brand face (print + web). Substituted here with **Source Sans 3** (Adobe's open-source Myriad sibling). Headlines are **heavy (800–900), often italic**; the logo wordmark is bold italic.
- Section/category headers are **UPPERCASE** and frequently two-weight (light + heavy).
- Body copy is regular-weight, comfortable line-height, dark gray on white.
- Spec lists use small **red right-triangle (▸) bullets**.

### Backgrounds
- Default page = **white**, catalog-style.
- Alternating light-gray bands (`#F0EFF0`) separate utility modules.
- **Full-bleed dark photography bands** for applications/installs — high drama, white headline over the image, often with a subtle dark gradient for text protection.
- **Hero = solid blue gradient** (top lighter → deep navy), with the founder photo or product cut out on the right. No noise/texture; flat, clean, confident.
- No gradients-as-decoration beyond the hero/heat-pattern graphics; no purple; no glassmorphism.

### The signature "angled" motif
The logo is a **right-leaning parallelogram** (the right edge is cut at an angle) with a
soft drop shadow. This angled-banner shape echoes through the site as **section-header
tags** and the **blue diagonal category labels** ("HIGH INTENSITY CERAMIC HEATERS"). When
in doubt, a label that needs emphasis becomes a colored angled tag with the corner sheared.

### Borders, cards & elevation
- **Cards** = white, hairline border (`#E4E3E6`/`#C9C8CC`), gentle radius (~`7–12px`), soft shadow (`0 6px 18px rgba(20,20,30,.07)`). Catalog category cards are mostly **flat with a 1px divider** between rows rather than heavy boxes.
- **Drop shadow** is a brand device — the red logo banner always carries a `2px 3px 5px rgba(0,0,0,.28)` shadow; product photos sit on soft contact shadows.
- Corner radius is **modest** (4–12px) — industrial, not pill-soft. Buttons ~7px. The logo banner itself is more rounded.

### Buttons & states
- **Primary:** solid red `#ED1D24`, white text, ~7px radius. On dark/hero it may be **white with blue/red text** ("Shop All Products" white fill, "Request a Quote" outline).
- **Hover:** darken ~8–10% (`--prp-red-dark`, `--link-hover`); links go darker blue. Subtle.
- **Press:** slightly darker still + 1px nudge down; no playful scale-bounce. Industrial = restrained.
- **Outline/secondary:** transparent with 2px border (white on hero, red/charcoal on light).

### Motion
- **Restrained.** Quick (150–220ms) ease-out fades and color transitions on hover. No bounces, no parallax theatrics, no spring physics. Accordions/menus slide-fade. Carousels cross-fade. The brand feels solid and still — motion confirms interaction, it doesn't perform.

### Imagery
- **Clean studio product cut-outs on white** with soft shadows = the catalog backbone.
- **Real install/application photography** (car washes, warehouses, hangars, railyards) used full-bleed in dark bands, often **slightly warm**, real and gritty — not stocky.
- Infrared/heat-pattern diagrams use a warm orange glow gradient.
- No illustration style of its own; no hand-drawn elements. Photography carries everything.

### Layout rules
- Centered content column, ~`1200px` max width, generous white space in catalog grids.
- Fixed/sticky red-banner **header** with logo left, search + phone + account icons right; hamburger on mobile.
- Strong horizontal banding: hero → category grid → parts finder strip → application/feature bands → brand logo wall → footer.
- Mobile: single-column category list with thumbnail + chevron rows.

### Transparency / blur
- Used sparingly. Text-protection gradients over photos (linear dark-to-transparent) rather than blur panels. No frosted glass.

---

## ICONOGRAPHY

Penn Radiant does **not** use a formal icon library. Its "iconography" is mostly:
- **Photographic category thumbnails** — small studio cut-out photos of the actual
  equipment stand in for icons in the category list (a tube heater, a blower motor, a
  ceramic heater). These live in `assets/products/`.
- **A few simple UI glyphs** in the header — **search (magnifier), phone (handset),
  user/account, hamburger menu, and right chevrons (›)** on list rows. These are thin,
  simple line icons.
- **Red right-triangle bullets (▸)** for spec lists — a recurring brand mark.
- **The American flag** as a heritage glyph beside the logo and "Since 1965".
- **Certification & partner marks** as logos, not icons: UL, CSA, UPS, and the brand
  logo wall (Space-Ray, Heat Wagon, etc.) in `assets/brands/`.

**Substitution (flag to user):** because the original site has no exported icon set, the
UI kit uses **Lucide** (https://lucide.dev) via CDN for the header glyphs (search, phone,
user, menu, chevron-right) — a thin, neutral line set that matches the site's simple
glyphs. Photographic thumbnails and the ▸ spec bullet are kept as the brand's real
iconography. Swap Lucide for licensed marks if PRP standardizes an icon set later.

- **Emoji:** never used.
- **Unicode as icon:** only the ▸/› triangle-chevron family.

---

## Index — what's in this folder

| Path | What it is |
|---|---|
| `README.md` | This file — context, content & visual foundations, iconography, index |
| `CLAUDE.md` | Project memory (contacts, scope) |
| `colors_and_type.css` | CSS variables for colors + type, semantic classes, radius/shadow/spacing |
| `SKILL.md` | Agent-Skills-compatible entry point |
| `assets/logos/` | PennRadiant.com primary logo, "Since 1965" mark |
| `assets/brands/` | Carried-brand logos (Space-Ray, Heat Wagon, Sure Flame, etc.) |
| `assets/products/` | Real product/category photography + founder photo |
| `preview/` | Design-system cards (colors, type, components) shown in the Design System tab |
| `ui_kits/website/` | High-fidelity component recreation of the PennRadiant.com site (React/JSX components + interactive `index.html`) |
| `website/` | **Working build of the live PennRadiant.com site** — Home, Gas Heating, Contact, History (real content + nav). See `website/README.md` |

### UI kits
- **`ui_kits/website/`** — the PennRadiant.com marketing/catalog site: header, hero, category grid, Replacement Parts Finder, category "diagonal tag" blocks, application feature band, brand logo wall, footer, quote-request flow. See its own README.
