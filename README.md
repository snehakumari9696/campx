# Campx-inspired full-site frontend recreation (MERN-ready)

This is a React + Vite frontend starter based on publicly visible Campx website information. It is not affiliated with Campx and is not an exact reproduction. Use it only for learning, prototyping, or an authorized project. Replace brand marks, copy, and assets before public/commercial use unless you have permission.

## Run locally

1. Install Node.js 20+.
2. Open this folder in VS Code / OpenCode.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite (usually http://localhost:5173).
6. Run `npm run build` to verify production compilation.

## Included routes

- `/` — homepage with hero, trust strip, campus activity, system cards, configuration selector, deployment, FAQ and CTA.
- `/platform` — platform and Medha overview.
- `/platform/academics`, `/platform/finance`, `/platform/operations`, `/platform/enrollment`, `/platform/people` — system detail templates populated from data.
- `/about`, `/enterprise`, `/roi-calculator`, `/book-a-demo`.
- `/xpress`, `/security`, `/blueprint`, `/contact`, `/terms`, `/privacy`, `/shipping-policy` — starter placeholder pages, not full source-site content.

## Important scope / gaps

The original public site has more routes and detailed page-specific interactions than can be faithfully recovered from a URL-only crawl. This starter includes page structure and functional frontend prototypes, not the complete original site. The demo form does not submit to a server. ROI math is illustrative and not Campx's official calculator. Some original sections, visual assets, page animations, menu behavior, legal copy, articles, downloadable resources, and responsive details still need manual verification and refinement.

## Recommended next steps in OpenCode

1. Inspect every original URL and capture desktop + mobile screenshots at matching viewport sizes.
2. Build a route inventory from the original site's sitemap and every internal navigation/footer link. Replace the placeholder routes with dedicated page components.
3. Inspect original page interactions: sticky header, scroll-triggered transitions, system carousel, configurator behavior, FAQ, calculator formulas, forms, cookie preferences and any tour/demo flows.
4. Recreate visuals with original-created SVG/CSS illustrations. Do not hotlink or copy proprietary images/logos without permission.
5. Compare screenshots side-by-side at 1440px, 1024px, 768px and 390px; iterate section by section.
6. Only add Express/MongoDB if the project needs persisted demo enquiries, CMS content, authentication or admin tools. The marketing site itself can remain frontend-only.

## Stack

React, Vite, React Router, Tailwind CSS dependency/configuration, custom CSS, Lucide React, Framer Motion dependency ready for animation work.
