# Yash Jain — AI Engineer & Software Developer

My personal portfolio: a place to see what I build, how I approach engineering problems, and where I want to go next. I am an AI engineer intern and computer science student interested in AI/ML, data science, and software engineering roles.

The site presents each project as a short case study—**the problem, the system I built, and the result**—so visitors can understand the work without reading through a résumé first.

## Featured work

| Project | What it does | Source |
| --- | --- | --- |
| AI Voice Interview Platform | Runs live, two-way AI interviews with context-aware follow-ups and rubric-based evaluation. | [GitHub](https://github.com/YashJain2410/AI-Interview-Platform) |
| CodeSage | Answers codebase questions using syntax trees, call graphs, and hybrid retrieval. | [GitHub](https://github.com/YashJain2410/CodeSage) |
| AI Image Generation Platform | Creates consistent product visuals with style references and multiple model providers. | [GitHub](https://github.com/YashJain2410/AI-Image-Generator) |

## What is in this repository

- A responsive homepage with projects, background, experience, skills, and contact information
- A shared case-study page for every project
- Light and dark themes with a saved visitor preference
- A downloadable résumé and links to GitHub, LinkedIn, and email
- A single content file for portfolio text and links

The visual direction takes cues from the editorial typography, warm colors, compact navigation, and model cards on [Microsoft AI](https://microsoft.ai/). The project illustrations are CSS concept visuals, not screenshots of the applications. The interface uses Red Hat Mono and Newsreader from Google Fonts. Microsoft AI's display font, Bradford LL, requires a separate web licence from [Lineto](https://lineto.com/information/help/licence-user-rights/basic-licencing), so it is not bundled here.

## Run locally

This is a static HTML/CSS/JavaScript site. It has **no dependencies and no build step**. Serve the repository folder locally because JavaScript modules do not work reliably when an HTML file is opened directly:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Update the site

Edit [`content.js`](./content.js) to change the hero tagline, bio, project card descriptions and case studies, experience, skills, education, email, and social links. The homepage and all project pages read from that one file. Every project needs a unique `slug`; its detail page is `project.html?slug=your-slug`. Leave an optional `live` URL empty to hide its button.

To update the résumé download, replace [`assets/Yash_Jain_Resume.pdf`](./assets/Yash_Jain_Resume.pdf). If you rename the PDF, update `links.resume` in `content.js` too.

Theme styles and layout live in [`styles.css`](./styles.css). Page rendering and the theme switch live in [`app.js`](./app.js). The theme is remembered in the visitor's browser using `localStorage`.

## Deploy

This repository can be hosted on Vercel, Netlify, or GitHub Pages as a static site. For Vercel or Netlify, import the repository, select **Other** as the framework, leave the build command empty, and use the repository root (`.`) as the output directory if prompted. No environment variables are needed.

## Repository map

```text
.
├── content.js       # Portfolio content and links
├── app.js           # Page rendering, mobile menu, theme switch
├── styles.css       # Visual design and responsive styles
├── index.html       # Homepage
├── project.html     # Shared project case-study page
└── assets/          # Favicon and résumé PDF
```
