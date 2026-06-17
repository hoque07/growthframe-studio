# GrowthFrame Studio

Content, Web, and Growth Systems for Modern Brands.

GrowthFrame Studio is a production-ready one-page React website for a compact digital growth agency serving marketing agencies, startups, small businesses, and personal brands. It focuses on ethical services: video editing, social media management, web development, landing pages, branding, marketing support, organic strategy, and AI-assisted workflow systems.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- GitHub Pages-ready static build

## Local Setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## GitHub Repository

Recommended repository:

```bash
git remote add origin https://github.com/hoque07/growthframe-studio.git
```

The Vite base path is already configured in `vite.config.js`:

```js
base: "/growthframe-studio/"
```

## Version System

Use separate branches for each deployed website version:

- `main`: stable backup branch
- `version-1`: first stable release and rollback backup
- `version-2`: current live production version
- `version-3`: experimental future update branch

Only one branch should be selected as the live GitHub Pages source at a time.

## Version-1 Workflow

```bash
git init
git add .
git commit -m "Release version 1"
git branch -M main
git remote add origin https://github.com/hoque07/growthframe-studio.git
git push -u origin main
git checkout -b version-1
git push -u origin version-1
```

In GitHub, open the repository settings and set GitHub Pages to deploy from the `version-1` branch.

## Version-2 Live Workflow

Create the live production branch from the protected version-1 backup:

```bash
git checkout version-1
git checkout -b version-2
npm run build
git add .
git commit -m "Release version 2"
git push -u origin version-2
```

In GitHub Pages settings, switch the source branch from `version-1` to `version-2`.

## Version-3 Future Workflow

```bash
git checkout version-2
git checkout -b version-3
git push -u origin version-3
```

Use `version-3` for experiments. When it is stable, switch GitHub Pages to `version-3` or merge the approved changes into a new release branch.

## Safe Live Version Switching

1. Keep `version-1` untouched after first release.
2. Build and test the newer branch locally.
3. Push the newer branch to `https://github.com/hoque07/growthframe-studio`.
4. Change GitHub Pages source branch in repository settings.
5. If the live site has an issue, switch GitHub Pages back to the last stable branch.

## Customization

Most website content lives in `src/data/siteData.js`.

Update these values before launch:

- Contact email
- WhatsApp number
- Social links
- Portfolio project names
- Package details
- Team descriptions

The main visual asset is `src/assets/growthframe-hero.png`.

## Project Structure

```text
src/
  assets/
  components/
  data/
  sections/
  App.jsx
  main.jsx
  index.css
```

## Deployment Notes

This project is configured for GitHub Pages under:

```text
https://github.com/hoque07/growthframe-studio
```

After pushing the selected version branch, enable Pages from that branch in GitHub repository settings. The deployed site will use the `/growthframe-studio/` base path.
