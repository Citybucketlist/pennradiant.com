# Penn Radiant Design System — Project Memory

This project is the design system for **Penn Radiant Products (PRP)** — pennradiant.com.

## Key contacts
- **Mike Lieb** — MLieb@pennradiant.com (main contact)
- **Patty** — patty@pennradiant.com (main contact)
- Justin and the user (citybucketlist.com) are building this system out for full access.

## Primary product lines
Most of what PRP sells is **heaters and parts from Space-Ray (spaceray.com) and
Heat Wagon (heatwagon.com)**. These two brands are the core catalog.

## SEO / migration (catalog → new site)
The product catalog runs on **ThomasNet Navigator** (`catalog.pennradiant.com`). Moving away
from it risks Google rankings UNLESS handled carefully. Reference docs:
- **`website/SEO-redirects.md`** — old catalog URL → new page 301 redirect map (+ migration rules).
- **`website/thomasnet-questions.md`** — questions for Mike's ThomasNet rep, covering 3 paths:
  (A) re-skin the catalog with our branding = **zero ranking risk**, same URLs/platform;
  (B) headless — keep ThomasNet data/cart, our custom design as front-end (needs dev/API);
  (C) full replacement — rebuild + 301 every old URL (highest risk).
- **Key rule:** if the site stays on the catalog domain/platform and we only re-skin it,
  rankings carry over automatically. Full migration needs 301s from every ranking URL.

## Model-parts rollout status (Heat Wagon)
Workflow per model: staged bubbled diagram + PDF parts list + catalog net price → table via
`model-detail.jsx`. Catalog publishes prices for some models only (QUOTE otherwise; the 2000
series isn't published — QUOTE-only).
- **Done w/ real parts:** 1800 (full + prices), 1800B (Body/Pipe priced, Control listed),
  950H (Body/Fan/Burner **priced** from catalog; Vapor + Control listed, QUOTE), 2000 (all
  4 groups listed from PDF, QUOTE).
- **Diagrams staged, parts pending:** 2730C/3050, VG400/500/1000, i36 (+ Sure Flame set).
- To add prices: pull the model's catalog `viewitems` page (e.g.
  `catalog.pennradiant.com/viewitems/heat-wagon-950h-l-parts/…`) for Net Price per part.

## What this project is
A reusable brand/design system: colors, type, fonts, logos, brand assets, UI kit
recreations of the PennRadiant.com website. See README.md for the full index.

## Source material
The brand assets live in a mounted folder `••• Penn Radiant/` (Adobe + image files,
website mockups). There is NO live codebase — recreations are built from the 2025/2026
website mockups and the live pennradiant.com site.

## Heat Wagon / Space-Ray model parts reference
**`assets/hw-reference/PRP Parts Layouts_2023.pdf`** — official "Quick Reference Guide to
Parts" (96 pages). The authoritative source for **Heat Wagon, Space-Ray and Sure Flame
model parts lists** (item # · part # · description), keyed to the bubbled illustration
diagrams. Extracted plain-text version: `assets/hw-reference/parts-layouts-text.md` (search
this for a model name, e.g. "Series 2000 (L)", "P4000 & P6000", "S1505B").
- **Pricing is NOT in the PDF** — pull current net prices from **catalog.pennradiant.com**
  per model/group (QUOTE where unpublished).
- Workflow for a model page: use the staged bubbled diagram (`assets/hw-diagrams/…`), take
  the item#/part#/description rows from this PDF, add prices from the catalog, and render
  the table under each illustration via the `model-detail.jsx` template.
