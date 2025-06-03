# React Login Page

This project uses [React](https://react.dev/) and [Vite](https://vitejs.dev/) to render a simple login form.

## Getting started

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

The app will be available at the URL printed in the terminal.

To create a production build, run:

```bash
npm run build
```

The optimized files will be generated in the `dist/` folder.

## Deploying to Netlify

1. Create a site on Netlify and connect this repository.
2. Set the **build command** to `npm run build` and **publish directory** to `dist`.
3. Add repository secrets `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` for the GitHub workflow.
4. Every push to `main` will trigger the workflow in `.github/workflows/netlify.yml` to build and deploy the site.

If the workflow logs show it is waiting for authorization, verify that the secrets are set correctly in your repository settings.

## Deploying to Render

Render can also host the production build:

1. Connect your GitHub repo and choose **Static Site**.
2. Use `npm run build` as the build command and `dist` as the publish directory.
