# Aryamaan Upadhyay — Portfolio

Single-page portfolio. Next.js 14 (App Router), Tailwind, Framer Motion, Recharts.

Typography is Newsreader (display) and Public Sans (everything else). Colours are in
`tailwind.config.js` under `theme.extend.colors` — base, surface, raised, line, ivory,
muted, dim, brass, gilt, sage, clay.

Motion lives in `components/ui.jsx` (reveals, drawn rules, cursor spotlight, count-up),
`components/ScrollProgress.jsx` (top progress bar), `components/IsmDiagram.jsx`
(the SVG hierarchy that draws itself in) and `components/VoteLedger.jsx` (the scrolling
band of vote counts). All of it respects `prefers-reduced-motion`.

The ledger band reads from `voteLedger` in `data/profile.js` — every pairwise judgement
from Table 3. Speed is the `ledger-scroll` animation duration in `app/globals.css`;
placement is in `app/page.jsx`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## Where to edit things

**`data/profile.js` is the only file you need for content.** Every section reads from
it — hero copy, metrics, research, experience, projects, skills, credentials,
leadership, contact. Components hold layout only.

| Section | Component | Data key |
| --- | --- | --- |
| Hero + figures | `components/Hero.jsx` | `identity`, `metrics`, `education` |
| Research + MICMAC/ISM | `components/Research.jsx`, `MicmacPlot.jsx`, `IsmDiagram.jsx` | `research`, `micmac`, `ismLevels`, `consensusLinks` |
| Experience tabs | `components/Experience.jsx` | `experience` |
| Projects | `components/Projects.jsx` | `projects` |
| FinCalc + analytics | `components/Finance.jsx` | `analytics` |
| Skills + credentials | `components/Toolkit.jsx` | `skills`, `credentials` |
| Leadership | `components/Leadership.jsx` | `leadership` |
| Contact | `components/Footer.jsx` | `contact` |
| Nav order | `components/Nav.jsx` | `sections` |

## Three things to fill in before publishing

1. **`micmac.factors` in `data/profile.js`** — the six critical success factors and
   their driving-power / dependence values are placeholders. Replace them with the
   real numbers from your reachability matrix, and update `ismLevels` to match your
   level partition. The chart derives quadrants automatically from whatever you enter.
2. **`contact.github`** — currently points at github.com with no handle.
3. **`public/Aryamaan-Upadhyay-Resume.pdf`** — add the file.

## Deploy

Push to GitHub, import the repo on Vercel, deploy. No environment variables needed.

## Notes on the build

- Fonts load through `next/font/google` (Plus Jakarta Sans, Inter, JetBrains Mono),
  so a network connection is needed at build time.
- The canvas background pauses on tab blur and renders one static frame under
  `prefers-reduced-motion`.
- Colours live in `tailwind.config.js` under `theme.extend.colors`.
