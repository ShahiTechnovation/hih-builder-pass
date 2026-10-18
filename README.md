# Hack in Hills ’26 · Builder Pass (Community Edition)

A dedicated, independent digital swag pass generator celebrating all developers and builders who participated in **Hack in Hills ’26** (20–21 November 2026, Manali, Himachal Pradesh).

- **Production URL**: [https://builder.hackinhills.com](https://builder.hackinhills.com/)
- **Core Spirit**: *"I'm proud to be part of Hack in Hills '26. 🏔️"*
- **Audience**: All registered developers, participating builders, students, and teams across the community.

---

## Key Features

- **Inclusive Community Identity**:
  - Primary Event Branding: `HACK IN HILLS '26`
  - Pass Type: `BUILDER PASS`
  - Circular Checkpoint Stamp: `HIH '26 / BUILDER` with mountain peak insignia
  - Polaroid Caption: Handwritten *"Built for the climb."*
  - Identity Section: `HACK IN HILLS '26 · BUILDER`
  - Default Quote: *"Code at altitude, dream without limits."*
  - Event Information: Finale dates (`20–21 NOV 2026`) and location (`MANALI · 2,050 M`) presented as upcoming hackathon finale details.
- **Client-Side Privacy**:
  - 100% client-side rendering on an HTML5 `<canvas>` element (1080×1350 PNG export).
  - Photos never leave the browser.
- **Three Platform Actions**:
  1. **Download Builder Pass**: High-resolution PNG (`HIH26-BuilderPass-<YourName>.png`).
  2. **Copy X Caption**: Strictly ≤ 280-character caption with platform handles (`@Tiny_Fish`, `@theBuilder_base`, `@Web3indiaHQ`, `@nexido_official`) and `#HIH26`.
  3. **Copy LinkedIn Caption**: Community storytelling format with full attribution (`Powered by @TinyFish. Organised by @Builderbase, @Web3India and @Nexido.`) and `#HackInHills #HIH26 #BuildInPublic`.
- **Himalayan Visual Design**:
  - Snowy mountain presets (Snow, Dusk, Topo, Sunrise).
  - Mountain ridge frosted glass card with summit flag.
  - Realistic taped Polaroid frame with custom photo zoom and pan controls.
  - Full partner strip: **Powered by TinyFish**, **Sponsored by Google Developers**, and **Organised by OC** (Builderbase, Web3 India, Nexido).
  - Ambient snowfall/ember particles and drifting backdrop.

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation & Development
```bash
cd hih26-builder-pass
npm install
npm run dev
```
Open [http://localhost:5174](http://localhost:5174) in your browser (runs on port 5174 to avoid any conflict with port 5173).

### Running Automated Tests
```bash
npm test
```
Verifies caption text, platform handles, character limits (≤ 280), and ensures zero qualification claims appear.

### Production Build
```bash
npm run build
npm run preview
```

---

## Deployment to `builder.hackinhills.com`

This project is completely decoupled from `flex.hackinhills.com`. Deploying this project will never affect or overwrite `flex.hackinhills.com`.

### Step 1: Create a New GitHub Repository
1. Go to [GitHub](https://github.com/new) and create a new repository:
   - Name: `hih26-builder-pass`
   - Visibility: Public or Private
   - Do **not** initialize with README or .gitignore (already present)

### Step 2: Initialize Git and Push
In the `hih26-builder-pass` directory:
```bash
git init
git add .
git commit -m "feat: initial commit for Hack in Hills '26 Community Builder Pass"
git branch -M main
git remote add origin https://github.com/<your-username>/hih26-builder-pass.git
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com).
2. Click **Add New...** → **Project**.
3. Import the `hih26-builder-pass` repository.
4. Keep the default build settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.

### Step 4: Add Custom Domain (`builder.hackinhills.com`)
1. In the Vercel project settings, navigate to **Settings** → **Domains**.
2. Enter: `builder.hackinhills.com` and click **Add**.
3. In your DNS manager (e.g. Cloudflare / Namecheap / GoDaddy) for `hackinhills.com`:
   - Add a `CNAME` record:
     - **Type**: `CNAME`
     - **Name**: `builder`
     - **Target**: `cname.vercel-dns.com`
4. Once DNS propagates, Vercel will automatically issue and verify a free SSL certificate.

### Step 5: Verification Checklist
- Visit `https://builder.hackinhills.com` and verify the community Builder Pass loads cleanly.
- Visit `https://flex.hackinhills.com` and verify the Top 500 Builder Pass remains completely unchanged and functional.

---

## Project Structure

```
hih26-builder-pass/
├── bg/                   # Mountain background presets (ice, dusk, topo, sunrise)
├── logos/                # Official sponsor and organizer logos
├── src/
│   ├── config.js         # Centralized brand copy, social handles, quotes, themes
│   ├── captions.js       # X and LinkedIn caption generators & weighted counter
│   └── main.js           # Canvas rendering, photo handling & UI interactions
├── test/
│   └── captions.test.js  # Automated test suite for social captions
├── index.html            # Main web page & responsive layout
├── package.json          # Independent dependencies & scripts
├── vite.config.js        # Independent build & dev server config (port 5174)
└── vercel.json           # Independent deployment configuration
```
