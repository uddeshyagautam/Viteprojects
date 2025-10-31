# React + Vite

A minimal React app bootstrapped with Vite. It includes hot module replacement (HMR) and ESLint configured for a smooth developer experience.

## Tech Stack
- **Build tool**: Vite
- **UI**: React 19
- **Linting**: ESLint (with React Hooks and React Refresh plugins)

## Project Structure
```
/ (project root)
├─ public/
│  └─ vite.svg
├─ src/
│  ├─ App.jsx
│  ├─ Post.jsx
│  ├─ adpost.jsx
│  ├─ adn1.jsx
│  ├─ main.jsx
│  ├─ App.css
│  ├─ index.css
│  └─ assets/
│     └─ react.svg
├─ index.html
├─ package.json
├─ vite.config.js
└─ eslint.config.js
```

## Getting Started

### Prerequisites
- Node.js 18+ recommended
- npm (comes with Node) or pnpm/yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
This starts the Vite dev server with HMR. Open the URL printed in the terminal (usually `http://localhost:5173`).

### Lint
```bash
npm run lint
```

### Build
```bash
npm run build
```
Outputs a production build to the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Serves the contents of `dist/` locally to verify the production build.

## Scripts (package.json)
- `dev`: Start the Vite development server
- `build`: Build for production
- `preview`: Preview the production build locally
- `lint`: Run ESLint over the project

## Notes
- This project uses React Fast Refresh via Vite's React plugin for instant feedback during development.
- ESLint is configured to catch common issues early. Consider integrating with your editor for inline diagnostics.
