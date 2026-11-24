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

## Stack

React, Vite, React Router, Tailwind CSS dependency/configuration, custom CSS, Lucide React, Framer Motion dependency ready for animation work.
