# كتالوج أعلاف الهرم | Alharam Feed Catalog

A responsive, Arabic right-to-left catalog website for Alharam feed products and related brands.

## Features

- Arabic RTL layout
- Product categories and product cards
- Live search across product names and categories
- Responsive layout for desktop and mobile
- Contact links that open the phone dialer
- React components, custom CSS, and Lucide icons

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4 (used for the base CSS utilities)
- Lucide React icons
- Google Fonts: Alexandria and IBM Plex Mono

## Run locally

You need Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

Vite prints a local URL in the terminal. Open it in your browser.

## Create a production build

```bash
npm run build
npm run preview
```

The production site is written to `dist/`.

## Main source files

- `src/App.tsx` — product data, search behavior, site sections, and contact details
- `src/index.css` — visual design, typography, layout, and responsive styles
- `src/main.tsx` — React app entry point
- `src/components/error-boundary.tsx` — app error boundary
- `index.html` — HTML document and page metadata
- `public/favicon.svg` — website favicon
- `public/images/alharam-farm-animals.png` — asset carried over from the supplied project; it is included but is not currently displayed by the page

## Update product and contact information

Edit the `groups` array near the top of `src/App.tsx` to update brands and product names. Update the contact phone numbers and address in the footer section of the same file. Product cards currently use designed image placeholders rather than individual product photographs.

## Publish the source on GitHub

1. Create a new repository on GitHub.
2. Extract this project ZIP and open a terminal in its folder.
3. Run the following commands, replacing the URL with your repository URL:

```bash
git init
git add .
git commit -m "Initial commit: Alharam Feed Catalog"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Do not commit API keys, passwords, or private environment files. The `.gitignore` file excludes `.env` files and generated build/dependency folders.

## Deployment

The Vite configuration uses a relative asset base, which is suitable for a GitHub Pages project site. Build the project with `npm run build`, then publish the generated `dist/` directory through your preferred static hosting provider. The site is frontend-only and does not require a backend server.
