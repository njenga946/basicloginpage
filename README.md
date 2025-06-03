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
