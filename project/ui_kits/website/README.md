# PennRadiant.com — Website UI Kit

High-fidelity, mostly-cosmetic recreation of the Penn Radiant Products marketing/catalog
website (pennradiant.com), built from the 2025/2026 mockups and the live site. Interactive
click-through — not production code.

## Run it
Open `index.html`. It loads `../../colors_and_type.css`, `styles.css`, and `components.jsx`
(React 18 + Babel via CDN). All components are exported to `window` at the end of
`components.jsx` so the inline app script in `index.html` can use them.

## What's interactive
- **Top nav + logo** → switch between Home and category listing pages.
- **Rotating banners** → auto-advance every 5s (pause on hover); arrows + dots navigate; click a banner to open its category.
- **Category rows / popular-category blocks** → open that category's product listing.
- **Search** (header bar or Replacement Parts Finder) → results list; Enter or the button submit.
- **Request a Quote** (header, hero, feature band, product cards, footer) → modal form with a success state.

## Components (`components.jsx`)
| Component | Role |
|---|---|
| `Header` | Sticky red-banner logo, phone, search/account glyphs, dark nav bar, search strip |
| `BannerCarousel` | Full-bleed **rotating category banners** (real PRP headers in `assets/headers/`) — auto-advance, cross-fade, arrows + dots, each links to its category |
| `IntroBand` | Slim brand intro strip (headline + one line + CTAs) under the carousel |
| `Hero` | *(legacy)* blue-gradient hero with install photo — kept/exported but the homepage now leads with `BannerCarousel` |
| `CategoryGrid` | Two-column thumbnail + label + chevron category list |
| `PartsFinder` | The signature "Replacement Parts Finder" strip |
| `CategoryBlocks` | Angled-tag product blocks (the brand's signature category module) |
| `FeatureBand` | Full-bleed dark application band over a real install photo |
| `BrandWall` | Carried-brand logo grid (Space-Ray, Heat Wagon, …) |
| `Footer` | Dark footer with product/brand/company columns + heritage line |
| `CategoryPage` | Breadcrumb + product grid for a category |
| `SearchResults` | Filtered catalog results list |
| `QuoteModal` | Request-a-quote dialog with success confirmation |
| `Button` (`PRPButton`) | Variants: `red`, `blue`, `white`, `ghost`, `outline`; sizes `sm`/`lg` |

## Fidelity notes / corners cut
- Icons are inline SVGs in the **Lucide** style (search, phone, user, menu, chevron, x, check) — the live site has no exported icon set.
- Product data, part numbers and specs are representative placeholders, not the live catalog.
- Some category thumbnails reuse the closest real PRP product cut-out available in `assets/`.
- No real cart/checkout — PRP is a quote-and-call business, so the primary action is **Request a Quote**, matching the real site.
- Type is **Source Sans 3** (Myriad Pro substitute) — see root README.
