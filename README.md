# Paragon Global Network — Website Redesign

A modern, responsive React website for **Paragon Global Network** — a clinical research training and job placement platform offering CRA, CDM, and CRC certification courses.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Build for production
npm run build
```

The dev server runs at `http://localhost:3000`.
The production build outputs to `/build` — ready for deployment.

---

## Tech Stack

| Technology       | Version  | Purpose                     |
|-----------------|----------|-----------------------------|
| React           | 18.3.1   | UI framework                |
| React DOM       | 18.3.1   | DOM rendering               |
| React Scripts   | 5.0.1    | Build tooling (CRA)         |
| Google Fonts    | CDN      | Cormorant Garamond + Outfit |

**Zero external UI libraries** — all components, animations, toast system, and routing are built from scratch.

---

## Project Structure

```
paragon-global-network/
├── public/
│   └── index.html              # HTML entry point with font preloads
├── src/
│   ├── index.js                # React DOM root mount
│   ├── App.js                  # Root component — router + layout
│   ├── assets/                 # (place logos, images here)
│   ├── components/
│   │   ├── Footer.js           # Site footer with newsletter + links
│   │   ├── Logo.js             # SVG ParagonLogo + Wordmark
│   │   ├── Navbar.js           # Fixed nav with mobile hamburger
│   │   ├── Router.js           # Hash-based useRoute() + <Link>
│   │   └── UI.js               # Shared atoms: FadeIn, Btn, Input,
│   │                           #   SectionLabel, SectionTitle, 
│   │                           #   MolSvg, PageHero
│   ├── context/
│   │   └── ToastContext.js     # Toast notification provider + hook
│   ├── pages/
│   │   ├── HomePage.js         # Landing — hero, stats, courses, CTA
│   │   ├── ProgramsPage.js     # CRA / CDM / CRC detail cards
│   │   ├── AboutPage.js        # Mission, features, team
│   │   ├── CareersPage.js      # Job listings + resume upload
│   │   ├── BlogPage.js         # Article grid
│   │   ├── ContactPage.js      # Contact form with validation
│   │   ├── EnrollPage.js       # Multi-step enrollment wizard
│   │   └── NotFoundPage.js     # 404 fallback
│   └── styles/
│       ├── brand.js            # Color tokens (single source of truth)
│       └── global.css          # Reset, keyframes, responsive rules
└── package.json
```

---

## Pages & Features

| Page       | Route        | Key Features                                    |
|-----------|-------------|------------------------------------------------|
| Home      | `#/`        | Hero, stats bar, course cards, testimonials, CTA |
| Programs  | `#/programs`| 3 detailed courses with modules, pricing, toasts |
| About     | `#/about`   | Mission section, feature checklist, team grid    |
| Careers   | `#/careers` | 6 job listings, apply buttons, resume upload     |
| Blog      | `#/blog`    | 6 article cards with categories                  |
| Contact   | `#/contact` | Contact info + form with validation              |
| Enroll    | `#/enroll`  | 3-step wizard: info → program → confirmation     |
| 404       | `#/*`       | Fallback for unknown routes                      |

---

## Toast Notifications

Every interactive element triggers contextual toasts:

- **Success (green):** Apply to jobs, enroll, upload resume, subscribe, send message, download brochure
- **Error (red):** Form validation failures, simulated server timeouts (~30% random chance on contact/enroll), profile registration failure
- **Info (orange):** Step progression, blog clicks, load more, social links

---

## Deployment

### Vercel
```bash
npm run build
# drag /build folder to vercel.com, or:
npx vercel --prod
```

### Netlify
```bash
npm run build
# drag /build folder to netlify.com, or connect GitHub repo
```

### GitHub Pages
```bash
# Add to package.json: "homepage": "https://yourusername.github.io/paragon-global-network"
npm install gh-pages --save-dev
# Add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
npm run deploy
```

### Static Hosting (any server)
The `/build` folder contains pure static files. Upload to any web server, S3 bucket, or CDN.

---

## Customization

- **Colors:** Edit `src/styles/brand.js` — all components reference this single file
- **Fonts:** Change imports in `public/index.html` and CSS variables in `src/styles/global.css`
- **Logo:** Replace the SVG in `src/components/Logo.js` with the client's actual logo file
- **Content:** Each page file contains its own data arrays at the top — easy to edit

---

## License

Built as a demo/prototype for client presentation purposes.
