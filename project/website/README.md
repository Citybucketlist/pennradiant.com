# PennRadiant.com — Website

A build-out of the Penn Radiant marketing site using the design system, grounded in real
content pulled from the live **pennradiant.com**. This is the working
website folder; `ui_kits/website/` remains the component reference.

## Pages
| File | Page |
|---|---|
| `index.html` | **Home** — rotating banner carousel, intro band, color-coded popular categories, Replacement Parts Finder, application feature band, brand wall |
| `gas-heating.html` | **Gas Heating** category landing — angled-tab subcategory cards (heaters + parts/regulators), expert-help band |
| `heat-wagon-parts.html` | **Heat Wagon Factory Parts** — catalog category recreated in PRP style, using the official Heat Wagon model icon tiles (`assets/hw-icons/`); browse-by-model grid linking to the live catalog |
| `sure-flame-parts.html` | **Sure Flame Factory Parts** — same catalog template using the official Sure Flame model icon tiles (`assets/sf-icons/`) |
| `heat-wagon-1800-parts.html` | **Model 1800 (L) detail page** — the reference model page (full real parts, prices & bubbled diagrams). |
| `model-detail.jsx` | **Reusable model-detail template.** A model page sets `window.MODEL = {…}` then loads this — renders the hero, spec chips, Most-Requested row, group tabs (each with its bubbled diagram + parts table *or* a request-pricing panel), add-to-quote + sticky quote bar, and featured-part callout. |
| `heat-wagon-{1800b,950h,2000,2730c,vg400,vg500,vg1000,i36}-parts.html` | **Per-model detail pages** built on the template, using each model's official icon tile + its real catalog part-group structure. The 1800 has full parts/prices wired; the rest show the same layout with **request-pricing panels** (no invented part numbers) ready to drop real parts into as supplied. Tiles on the Heat Wagon parts grid deep-link to each. |
| `contact.html` | **Contact** — real phone/fax/email, all three PRP addresses, quote form with success state |
| `history.html` | **History / About** — founder story (Del Lieb, 1965), timeline, stat strip |

## Shared code
- `site.jsx` — shared components exported to `window`: `Header` (full **gradient-blue** header — American flag + all-white PennRadiant.com banner logo on the left, phone number over a "Built to Last in the USA · Since 1965" tagline on the right, and a deep-navy nav bar with dropdown submenus — "blue all the way down"), `Footer` (real addresses + contact), `BannerCarousel`, `IntroBand`, `PartsFinder`, `BrandWall`, `Button`, icon set. Edit nav/header/footer here and it updates every page. **The flag (`assets/logos/usa-flag.png`) is a placeholder cropped from the logo — swap with the client's clean flag file when provided.**
- `styles.css` — site styles (loaded after `../colors_and_type.css`).

Each page is a standalone HTML file: links `../colors_and_type.css` + `styles.css`, loads
React 18 + Babel + `site.jsx`, then an inline page script composes the shared components
with page-specific content.

## Conventions & fidelity notes
- **Page-hero bars are LIGHT GRAY (`.pagehero light`, #ECEBED) with dark text** — not blue. The full-blue header already carries the brand color, so interior page heroes (Gas Heating, Parts, Heat Wagon Parts, Contact, model pages, etc.) use light gray to avoid stacking too much blue. Eyebrow stays red, headline ink, subtext gray. (A `.pagehero dark` ink variant also exists.)
- **Catalog stays external.** The real product catalog lives on `catalog.pennradiant.com`; all product/category links open there in a new tab. We don't rebuild the catalog.
- **Color-coded category tags:** red = heating, blue = cooling, gray = parts.
- **Rotating banners** use the client's real header art in `assets/headers/`.
- Icons are inline SVG (Lucide style). Type is Source Sans 3 (Myriad Pro substitute).
- Contact form and search are front-end only (no backend wired).
- **Contact-form anti-solicitation measures** (to cut delivery/sales/SEO spam): (1) a hidden **honeypot** field bots fill but people never see — silently dropped; (2) a **time-trap** that rejects submissions faster than ~3s; (3) a lightweight **human math check** (no third-party captcha); (4) a required **"I'm a customer, not selling" consent** checkbox; (5) a visible **"No soliciting"** notice. **When wiring a backend, ALSO enforce these server-side** (honeypot + timing + a real CAPTCHA/Akismet and an email allow/deny list), since client checks alone don't stop determined bots. Consider routing form mail to a filtered inbox separate from `info@`.
- Real facts used: 1.800.438.2503 · fax 412.635.8016 · info@pennradiant.com · Shipping 8105 Perry Highway, Pittsburgh PA 15237 · Mailing PO Box 1354, Wexford PA 15090 · LTL CXL, 267 Blue Run Road, Cheswick PA 15024.

## Not yet built (next passes)
Electric Heating / Parts / Cooling landings (currently link to catalog), a product-detail
template, an Applications/Railcar-Thaw-Shed page, and Services sub-pages (manuals, spec
sheets, territories — currently link to the live site).
