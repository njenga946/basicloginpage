# React Authentication Example

This project uses [React](https://react.dev/) and [Vite](https://vitejs.dev/) to render a small authentication demo with login, registration and a protected dashboard. A tiny Node/Express server stores users in `users.txt`.

## Getting started

Install the dependencies and start the React development server:

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


4. Every push to `main` will trigger the workflow in `.github/workflows/netlify.yml` to build and deploy the site.
   The workflow installs dependencies with `npm install` since the project does
   not include a `package-lock.json`.


If the workflow logs show it is waiting for authorization, verify that the secrets are set correctly in your repository settings.

## Deploying to Render

Render can also host the production build:

1. Connect your GitHub repo and choose **Static Site**.
2. Use `npm run build` as the build command and `dist` as the publish directory.


# Basic Login Page

This repository contains a simple HTML login page. Open `index.html` in your browser to see it in action or serve it locally with:

```bash
python3 -m http.server 8000
```

Visit `http://localhost:8000` in your browser to view the page.

## Hosting online with GitHub Pages

If you want to share the login page publicly, you can host it for free using GitHub Pages:

1. Create a repository on GitHub and push these files to it.
2. In the repository's **Settings** page, find the **Pages** section.
3. Choose the main branch (and `/root` if asked) as the source, then save.
4. After a few moments, your page will be available at `https://<username>.github.io/<repository-name>/`.

That's it! You now have a simple login page served online.

## Hosting with Netlify

Netlify is another free option for serving static sites:

1. Sign up at [Netlify](https://www.netlify.com/) and choose **Add new site** > **Import an existing project**.
2. Connect your GitHub repository that contains this login page.
3. Leave the build command empty since this is a static site and keep the publish directory as `/` (the repository root).
4. Click **Deploy site**. Netlify will provide a live URL that you can share.
5. If you encounter a "Page not found" message, make sure the publish directory is set to `/` and that `index.html` is in the repository root. You can also include a simple `404.html` to customize the error page.

## Hosting with Render

Render offers a similar approach for static sites:

1. Create an account at [Render](https://render.com/).
2. From the dashboard, click **New Static Site** and connect your GitHub repo.
3. No build command is needed; set the publish directory to `/`.
4. Hit **Create Static Site** and Render will deploy your login page with its own URL.

