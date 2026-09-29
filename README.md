# Yash Jain — Portfolio

A lightweight static portfolio built with HTML, CSS, and vanilla JavaScript. There is no build step, package manager, framework, or API key.

## Update the portfolio

Edit **[`content.js`](./content.js)** for the name, hero copy, projects, experience, skills, education, email, and social links. Both the homepage and individual project pages use this file. Each project needs a unique `slug`; its page URL is `project.html?slug=your-slug`. Leave an optional project `live` link empty to hide its button.

To replace the downloadable résumé, overwrite `assets/Yash_Jain_Resume.pdf` with your latest PDF. If you change the filename, also update `links.resume` in `content.js`.

## Preview locally

Because the site uses JavaScript modules, open it through a local server rather than double-clicking the HTML file:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deploy

Push the folder to GitHub, then import the repository into Vercel or Netlify. Choose **Other** as the framework. There is no build command; use `.` as the output directory if asked. The same files can also be hosted on GitHub Pages.

## Files

- `content.js` — all portfolio content and links
- `app.js` — page rendering and menu behavior
- `styles.css` — presentation and responsive layout
- `index.html` — homepage entry point
- `project.html` — shared project detail page
- `assets/` — favicon and downloadable résumé

The project visuals are CSS illustrations of the systems described. Replace or supplement them with screenshots when you have product imagery ready.
