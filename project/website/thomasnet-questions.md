# Questions for Mike to ask the ThomasNet (Navigator) rep

Context: PennRadiant's catalog runs on **ThomasNet Navigator** (`catalog.pennradiant.com`).
We're building a custom-branded site/design system. Goal: keep Google rankings while moving
to the new look. These questions determine which migration path is viable.

## A. Branding / template customization (re-skin path — zero SEO risk)
1. How much of the catalog's **header, footer, navigation, logo, colors, fonts, and CSS** can we customize via templates? Can we inject custom CSS / a custom header & footer?
2. Can we change page **layout templates** (category grids, item tables, model tiles), or only the surrounding "chrome"?
3. Can we add **custom landing pages** (e.g. Gas Heating, Cooling) within the catalog domain?
4. Is there a **staging/sandbox** environment to preview branding changes before they go live?

## B. Data / integration (headless path — best end result)
5. Do you offer a **data feed, export, or API** for catalog content (models, part #s, descriptions, prices, inventory)?
6. Can the **cart / "Request a Quote" flow** be embedded or called from an external (custom-designed) site, or must checkout stay on the catalog domain?
7. Can product images / bubbled diagrams be pulled programmatically (image URLs / feed)?

## C. SEO / migration control (full-replacement path)
8. If we move to a new platform, can we set up **301 redirects FROM** `catalog.pennradiant.com` URLs — or will ThomasNet do it / can the subdomain stay live during transition?
9. Can we export the current **URL list + meta titles/descriptions** that are ranking, so we can preserve them?
10. Who controls **DNS / the subdomain** (`catalog.` vs `www.`/apex)? Can the new site live on `www` while the catalog stays on `catalog.` temporarily?
11. Is there a **contract term / data-ownership** clause we should know about before migrating away?

## D. Cost / support
12. What's included in the current plan vs. add-on cost for customization or API access?
13. Typical timeline + support for branding or integration changes?

**Recommended order:** A first (cheapest, zero ranking risk). If A is too limited, ask B
(keep ThomasNet data, our design). C only if fully replacing.
