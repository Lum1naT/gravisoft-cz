# GraviSoft

Professional presentation site for GraviSoft, built with Next.js and exported as static files for GitHub Pages.

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

The static site is generated in `out/`.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` validates pull requests and deploys the default branch to GitHub Pages. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
