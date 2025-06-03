# React Authentication Example

This project uses [React](https://react.dev/) and [Vite](https://vitejs.dev/) to render a small authentication demo with login, registration and a protected dashboard. A tiny Node/Express server stores users in `users.txt`.

## Getting started

Install the dependencies and start the React development server:

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

To test the full application with the Node server (which stores users in
`users.txt`), build the project and then run:

```bash
npm start
```

The server serves the `dist/` files on `http://localhost:3000` and exposes
`/register`, `/login`, `/dashboard-data` and `/logout` endpoints.

## Deploying to Netlify

1. Create a site on Netlify and connect this repository.
2. Set the **build command** to `npm run build` and **publish directory** to `dist`.
3. Add repository secrets `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` for the GitHub workflow.
4. Every push to `main` runs `.github/workflows/netlify.yml`, which installs
   dependencies, builds the project, and then deploys the `dist` folder to
   Netlify. The workflow passes `--no-build` to the Netlify CLI so the deploy
   step does not attempt to run the build command again.

If the workflow logs show it is waiting for authorization, verify that the secrets are set correctly in your repository settings.

## Deploying to Render

Render can also host the production build:

1. Connect your GitHub repo and choose **Static Site**.
2. Use `npm run build` as the build command and `dist` as the publish directory.
