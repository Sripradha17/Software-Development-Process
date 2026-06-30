# Software Development Process

An interactive learning platform that teaches the Software Development Life
Cycle (SDLC) two ways side by side: the traditional process, and an
AI-augmented version of the same process. Every phase — planning, analysis,
design, implementation, testing, deployment, maintenance, review — gets a
narrative page, a quiz, and a place in a branching decision simulation, so
the difference between "how this phase works" and "how AI changes this
phase" is concrete rather than abstract.

It's a fully client-side React single-page app. No backend, no database —
all educational content lives in version-controlled JS data files.

```
React 19 · React Router 7 · Vite (rolldown-vite) · Framer Motion
@dnd-kit · Vitest + React Testing Library · Cypress + cypress-axe
```

---

## Table of Contents

- [What's inside](#whats-inside)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Interactive features](#interactive-features)
- [Design system](#design-system)
- [Testing](#testing)
- [Known limitations and roadmap](#known-limitations-and-roadmap)
- [Deployment](#deployment)
- [License](#license)

---

## What's inside

- **16 phase pages** — 8 traditional SDLC phases and 8 AI-augmented
  counterparts, each with a process visualization, a "drawbacks &
  resolutions" reveal section, and an embedded quiz.
- **Drag-and-drop quiz** — reorder SDLC phases into the correct sequence, or
  match terms to definitions via drop targets, with a per-question timer and
  a scored results screen.
- **Branching decision simulations** — pick a path through a project
  scenario; an outcome tracker shows budget, timeline, quality, satisfaction
  (and, for AI scenarios, an AI-efficiency metric) shift in real time based
  on your choices, ending in a results screen with lessons learned.
- **Case studies** — real-world style scenarios with a scored outcome.
- **A learning hub** — a stage map of all 8 phases with a session-scoped
  "explored X of 8" tracker and one-click navigation into any phase.

See [`RECRUITER_QA.txt`](RECRUITER_QA.txt) for a deep technical Q&A about how
this is built and why, and [`AI-SDLC-PROJECT-CREATION.txt`](AI-SDLC-PROJECT-CREATION.txt)
for how AI-augmented practices were used to build the project itself.

---

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| UI | React 19 | Component model, hooks, concurrent rendering |
| Routing | React Router 7 | Client-side routing, no SSR needed |
| Build | Vite (rolldown-vite engine) | Fast dev server + HMR |
| Animation | Framer Motion | Declarative `animate`/`variants`/`AnimatePresence` for route and section transitions |
| Drag & drop | @dnd-kit | Accessible (keyboard-operable) sortable lists and drop targets |
| Icons (process diagrams only) | lucide-react | Used in `ProcessVisualization`; the rest of the UI is deliberately icon-free (see Design system) |
| Unit/integration tests | Vitest + React Testing Library | Vite-native, Jest-compatible, tests behavior not implementation |
| E2E + accessibility | Cypress + cypress-axe | Real-browser flows and automated a11y checks |
| Linting | ESLint 9 | Code quality gate |

`@xyflow/react`, `d3`, `lottie-react`, `@react-spring/web`, `react-icons`,
and `tailwindcss` are present in `package.json` but not currently wired into
any rendered component — they were installed for earlier experiments and
left as-is rather than silently removed. All real styling goes through the
centralized `src/styles/index.js` design system, not Tailwind classes.

---

## Getting started

**Prerequisites:** Node.js 18+, npm 9+

```bash
git clone https://github.com/Sripradha17/Software-Development-Process.git
cd Software-Development-Process
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` (fixed port; the config uses
`strictPort` so it fails fast instead of silently picking another port if
5173 is already in use).

---

## Available scripts

```bash
npm run dev            # Start the Vite dev server
npm run build           # Production build to dist/
npm run preview         # Preview the production build locally
npm run lint             # Run ESLint

npm test                  # Run the Vitest suite once
npm run test:watch        # Run Vitest in watch mode
npm run test:coverage     # Run Vitest with coverage report
npm run test:ui           # Run Vitest with the browser UI

npm run cypress:open      # Open Cypress interactively
npm run cypress:run       # Run Cypress headlessly
npm run e2e                # Start the dev server and run Cypress against it
npm run e2e:open           # Start the dev server and open Cypress interactively
```

---

## Project structure

```
src/
  pages/
    sdlc/             Traditional SDLC phase pages + the landing/intro page
    ai-sdlc/          AI-augmented counterparts of the same 8 phases
  components/
    SimulationEngine.jsx, SimulationHub.jsx, OutcomeTracker.jsx
    DragDropQuiz.jsx, Quiz.jsx, CaseStudy.jsx, CaseStudyList.jsx
    Menu.jsx, NetworkBackground.jsx, PageTransition.jsx
    ScrollProgressBar.jsx, ScrollToTopButton.jsx
    visualizations/ProcessVisualization.jsx
  constants/
    sdlc/, ai-sdlc/     Per-phase content: steps, types, pitfalls, narrative
    quiz/                Quiz question banks, one file per phase
    simulation/           Branching scenario trees for the simulation engine
    caseStudy/             Case study scenario data
  styles/index.js        Centralized design system (every page imports from here)
  test/                   Vitest setup, global mocks, shared test utilities
```

The traditional and AI-augmented phase pages are intentionally parallel in
structure (same section flow: intro → visualization → steps → types →
drawbacks → quiz) so the two tracks stay easy to compare — see
[`RECRUITER_QA.txt`](RECRUITER_QA.txt) for the trade-offs of that decision
and what a future refactor would look like.

---

## Interactive features

**Quiz** — multiple choice with answer locking and inline explanations per
question.

**Drag-and-drop quiz** (`/drag-drop-quiz/:type`) — built on @dnd-kit with a
`PointerSensor` and a `KeyboardSensor`, so it's operable without a mouse.
Two question types: vertical-list reordering (`arrayMove` +
`SortableContext`) and drop-target matching.

**Simulation engine** (`/simulation/:type/:scenarioId`) — a sequence of
decisions; each choice mutates a metrics object that `OutcomeTracker`
renders with direction-aware coloring (lower-is-better for cost/timeline,
higher-is-better for quality/satisfaction), ending in a scored results
screen with a decision timeline and lessons learned.

**Case studies** (`/case-study/:type/:caseId`) — scenario-based assessments
with a pass/fail scored outcome.

---

## Design system

- **No emoji, no raster images, anywhere in the UI.** Icon-shaped elements
  were replaced with small animated CSS/SVG accents (gradient bars, pulsing
  dots) — color and motion instead of pictograms.
- **One color family.** A teal-to-blue brand palette
  (`#38b2ac → #319795 → #4bb1b4 → #325fa1` and neighboring shades) is used
  consistently for buttons, accents, and the 8-stage progression on the
  learning hub. Semantic colors (success green / warning amber / error red
  for quiz feedback and simulation health) are kept separate from brand
  colors on purpose — they signal meaning, not identity.
- **Animated, not static.** Route changes animate via `PageTransition` +
  `AnimatePresence`; the homepage hero has a generative SVG network
  background (`NetworkBackground.jsx`) built from plain SVG + CSS
  `@keyframes` (not framer-motion's SVG primitives — see
  `RECRUITER_QA.txt` for why); a scroll-progress bar and a scroll-to-top
  button persist across every route.
- **Responsive.** Fluid type via `clamp()`, CSS Grid with `auto-fit`/
  `minmax()` for card layouts, and the floating section-nav collapses from a
  vertical pill (desktop) to a horizontal scrollable bar pinned to the
  bottom of the screen under 768px.

---

## Testing

148 tests across 14 files — every phase page, every shared component, and an
integration suite that renders all pages and checks navigation, accessible
heading structure, error handling with missing/malformed data, and
unmount/memory-leak behavior.

```bash
npm test
```

See [`TEST_DOCUMENTATION.md`](TEST_DOCUMENTATION.md) for the full breakdown
of test categories, mocking strategy, and how to add new tests.

> Note: running the full suite in one parallel pass can occasionally show a
> timeout on a couple of integration tests on slower machines (CPU
> contention from 14 files running concurrently, not a logic bug — those
> same tests pass in well under 2s in isolation). `testTimeout` is set to
> 15s in `vite.config.js` to absorb this.

---

## Known limitations and roadmap

- **Duplicated phase-page structure.** The 16 phase pages are near-identical
  in shape; a data-driven `<PhasePage>` component would be the single
  biggest maintainability win.
- **Single JS bundle (~1.1 MB, ~275 KB gzipped).** No route-based code
  splitting yet — `React.lazy()` per page is the natural next step.
- **No persisted progress.** Quiz scores and simulation outcomes reset on
  refresh; would need localStorage at minimum, or a backend if user accounts
  are ever wanted.
- **No theme toggle.** Colors are hardcoded inline per component rather than
  driven by CSS custom properties, so a real light/dark toggle needs that
  migration first — shipping a toggle that only changed the background
  would be worse than not having it.
- **No formal contrast audit** against WCAG AA across the full color set.

---

## Deployment

This is a static SPA — `npm run build` produces a `dist/` folder that can be
hosted on any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages,
S3+CloudFront, etc.).

### GitHub Pages

```bash
npm run build
```

Deploy the contents of `dist/` to the `gh-pages` branch (e.g. via the
`gh-pages` npm package or a GitHub Actions workflow). Because this app uses
client-side routing with paths like `/planning` and `/simulation/:type`,
GitHub Pages needs either a `404.html` fallback that redirects to
`index.html`, or a Hash Router, to handle direct loads/refreshes of
non-root routes correctly.

---

## License

No license file is currently included in this repository. All rights are
reserved by the author unless and until a license is added.
