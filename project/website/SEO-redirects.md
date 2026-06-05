# PennRadiant.com — SEO Redirect Mapping (migration starter)

**Purpose:** when the new `website/` pages go live, every old catalog URL that ranks in
Google must **301-redirect** to its new equivalent so ranking equity + inbound links carry
over and customers never hit a 404. Hand this to whoever deploys the production site.

> Source domain today: `catalog.pennradiant.com` (ThomasNet Navigator platform)
> New pages: paths under the production site root (shown here as `/…`)

## Rules
1. Use **301 (permanent)** redirects, not 302.
2. Keep the catalog live **in parallel** during transition; flip redirects model-by-model as each new page launches.
3. After launch: submit a fresh XML sitemap + request re-crawl in Google Search Console; monitor Coverage/Crawl errors for 4–8 weeks.
4. Preserve each new page's `<title>`, meta description, H1, and image `alt` text using the ranking keywords (e.g. "Heat Wagon 950H (L) Parts").

## Top-level / category redirects
| Old catalog URL | → New page |
|---|---|
| `/category/all-categories-heat-wagon-factory-heater-parts` | `/heat-wagon-parts.html` |
| `/category/e-flame-replacement-parts-sure-flame-factory-parts` | `/sure-flame-parts.html` |
| `/category/all-categories-parts` | `/parts.html` |
| `/category/gas-fired-heating` | `/gas-heating.html` |
| `/category/electric-heating` | `/electric-heating.html` |
| `/category/all-categories-cooling-equipment-2` | `/cooling.html` |

## Heat Wagon model pages (built)
| Old catalog category URL | → New page |
|---|---|
| `/category/heat-wagon-1800-l-parts` | `/heat-wagon-1800-parts.html` |
| `/category/heat-wagon-1800b-l-parts` *(confirm slug)* | `/heat-wagon-1800b-parts.html` |
| `/category/heat-wagon-2000-l-parts` *(confirm slug)* | `/heat-wagon-2000-parts.html` |
| `/category/heat-wagon-950h-l-parts` | `/heat-wagon-950h-parts.html` |
| `/category/heat-wagon-2730c-3050-parts` *(confirm slug)* | `/heat-wagon-2730c-parts.html` |
| `/category/heat-wagon-vg400-parts` *(confirm slug)* | `/heat-wagon-vg400-parts.html` |
| `/category/heat-wagon-vg500-parts` *(confirm slug)* | `/heat-wagon-vg500-parts.html` |
| `/category/heat-wagon-vg1000-parts` *(confirm slug)* | `/heat-wagon-vg1000-parts.html` |
| `/category/heat-wagon-i36-parts` *(confirm slug)* | `/heat-wagon-i36-parts.html` |

*Slugs marked "confirm" — pull the exact live URL from the catalog's breadcrumb/address bar
before deploying. The 950H + 1800 slugs above are confirmed from live pages.*

## Sub-group (viewitems) pages → tab anchors
The catalog splits each model into separate "viewitems" pages per part group (Body, Control
Panel, Pipe Train). Our new model page puts those in **tabs on one page**. Redirect each old
group URL to the model page (optionally with a `#tab` anchor once we add tab IDs):
| Old (example) | → New |
|---|---|
| `/viewitems/heat-wagon-950h-l-parts/…-body-fan-burner-parts` | `/heat-wagon-950h-parts.html` |
| `/viewitems/heat-wagon-950h-l-parts/…-control-panel` | `/heat-wagon-950h-parts.html` |
| `/viewitems/heat-wagon-950h-l-parts/…-pipe-train` | `/heat-wagon-950h-parts.html` |

## Catalog stays external (for now)
Pages we did **not** rebuild (most catalog category/item pages) should keep pointing at the
live catalog — no redirect needed until/unless they're rebuilt.

## Open question for the deployer
Can 301s be set **from** `catalog.pennradiant.com` URLs? It's a hosted ThomasNet platform —
confirm whether Penn Radiant controls redirects there, or whether the catalog subdomain
stays live while the new site runs on the apex/`www`. This is the make-or-break technical item.
