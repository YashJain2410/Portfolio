import { portfolio as data } from "./content.js";

const app = document.querySelector("#app");
const isProjectPage = document.body.dataset.page === "project";
const home = "./index.html";
const arrow = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const external = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M7 5h8v8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const esc = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const link = (href, label, className = "text-link", icon = arrow, extra = "") => href ? `<a class="${className}" href="${esc(href)}" ${href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""} ${extra}>${esc(label)}${icon}</a>` : "";
const projectUrl = (project) => `./project.html?slug=${encodeURIComponent(project.slug)}`;

function header() {
  return `<a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <a class="wordmark" href="${home}" aria-label="${esc(data.name)} home"><span class="wordmark-symbol">${esc(data.initials)}</span><span class="wordmark-divider"></span><span class="wordmark-name">${esc(data.name)}</span></a>
      <nav class="desktop-nav" aria-label="Main navigation">
        <a href="${home}#work">Work</a><a href="${home}#about">About</a><a href="${home}#experience">Experience</a><a href="${home}#contact">Contact</a>
      </nav>
      <div class="header-actions"><button class="theme-toggle" type="button" aria-label="Switch to dark mode" aria-pressed="false"><span class="theme-icon" aria-hidden="true">☾</span><span class="theme-label">Dark</span></button>${link(data.links.resume, "Resume", "header-resume", external, 'download="Yash_Jain_Resume.pdf"')}<button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button></div>
      <nav class="mobile-nav" id="mobile-menu" aria-label="Mobile navigation" hidden><a href="${home}#work">Work</a><a href="${home}#about">About</a><a href="${home}#experience">Experience</a><a href="${home}#contact">Contact</a>${link(data.links.resume, "Resume", "mobile-resume", external)}</nav>
    </header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="footer-main"><a class="footer-mark" href="${home}">${esc(data.initials)}<span class="footer-star">✳</span></a><p>Thoughtful systems. Useful products.<br>Always learning, always building.</p></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} ${esc(data.name)}</span><div><a href="${home}#work">Work</a><a href="${home}#about">About</a>${data.links.github ? `<a href="${esc(data.links.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ""}${data.links.linkedin ? `<a href="${esc(data.links.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>` : ""}</div><span>Made with intention.</span></div></footer>`;
}

function visual(project, large = false) {
  const wrap = (body) => `<div class="project-visual visual-${esc(project.visual)}${large ? " visual-large" : ""}" aria-label="Illustrated concept of ${esc(project.name)}"><span class="visual-caption">${esc(project.visualLabel)}</span>${body}</div>`;
  if (project.visual === "interview") return wrap(`<div class="interview-orb"></div><div class="interview-interface"><div class="mock-top"><span class="mock-dot"></span><span>INTERVIEW IN PROGRESS</span><span>02:34</span></div><div class="sound-bars">${Array.from({ length: 25 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}</div><div class="mock-prompt">Tell me about a time you turned an idea into something people could use.</div><div class="mock-tags"><span>LISTENING</span><span>CONTEXT ACTIVE</span><span>LIVE FEEDBACK</span></div></div>`);
  if (project.visual === "codesage") return wrap(`<div class="sage-grid"></div><div class="sage-card"><div class="sage-query"><span class="sage-spark">✳</span>How does the authentication flow work?<span class="sage-send">↗</span></div><div class="sage-nodes"><span class="node node-a">route</span><span class="node node-b">middleware</span><span class="node node-c">token</span><span class="node node-d">user</span><svg viewBox="0 0 400 180" preserveAspectRatio="none" aria-hidden="true"><path d="M65 88 C135 88 115 45 184 45 S245 90 318 90 M185 45 C205 125 260 135 318 90" fill="none" stroke="#6b8e80" stroke-width="1.5" stroke-dasharray="4 5"/></svg></div><div class="sage-answer"><span>GROUNDED ANSWER</span><div></div><div></div><div></div></div></div>`);
  return wrap(`<div class="image-art image-art-one"></div><div class="image-art image-art-two"></div><div class="image-art image-art-three"></div><div class="image-toolbar"><span>STYLE REFERENCE</span><span>→</span><span>GENERATED VARIATIONS</span></div>`);
}

function projectCard(project, index) {
  return `<article class="project-card reveal"><a class="project-card-visual-link" href="${projectUrl(project)}" aria-label="Read about ${esc(project.name)}">${visual(project)}</a><div class="project-card-copy"><div class="project-card-top"><span class="eyebrow">${esc(project.number)} / ${esc(project.category)}</span><span class="tiny-asterisk">✳</span></div><h3><a href="${projectUrl(project)}">${esc(project.name)}</a></h3><p class="project-one-liner">${esc(project.oneLiner)}</p><p class="project-summary">${esc(project.overview)}</p><div class="project-card-bottom"><div class="mini-tags">${project.technologies.slice(0, 3).map((tech) => `<span>${esc(tech)}</span>`).join("")}</div>${link(projectUrl(project), "Explore project", "project-action", arrow, `aria-label="Explore ${esc(project.name)}"`)}</div></div></article>`;
}

function homePage() {
  return `${header()}<main id="main">
    <section class="hero"><div class="hero-wash"></div><div class="hero-grain"></div><div class="hero-content"><p class="hero-intro">${esc(data.hero.description)}</p><h1>${esc(data.hero.lineOne)}<br><em>${esc(data.hero.lineTwo)}</em></h1><div class="hero-cta">${link("#work", "Explore my work", "button button-dark")}${link(data.links.resume, "View résumé", "button button-outline", external)}</div></div><div class="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div></section>
    <div class="availability"><span class="availability-icon">✳</span><span>${esc(data.availability)}</span><a href="#contact">LET’S TALK ${external}</a></div>
    <section class="section section-work" id="work"><div class="section-intro reveal"><div class="section-number">01 / SELECTED WORK</div><div><h2>Ideas, made <em>real.</em></h2><p>Products I took from a technical question to a working system. Each one taught me something about building with purpose.</p></div></div><div class="projects-list">${data.projects.map(projectCard).join("")}</div><div class="work-end-note"><span>MORE IN THE MAKING</span><p>There is always another problem worth solving.</p>${link(data.links.github, "Follow along on GitHub", "text-link", external)}</div></section>
    <section class="belief-band"><div class="belief-orb"></div><span class="eyebrow">A NOTE ON HOW I WORK</span><p>Good technology starts with a <em>real problem</em> and ends with something people can actually use.</p><span class="belief-signature">— ${esc(data.name)}</span></section>
    <section class="section about-section" id="about"><div class="section-intro reveal"><div class="section-number">02 / ABOUT</div><div><h2>Builder at heart.<br><em>Engineer in practice.</em></h2></div></div><div class="about-grid"><div class="about-statement reveal"><div class="statement-orbit"><span>YJ</span><i></i><i></i></div><span>THE SHORT VERSION</span></div><div class="about-copy reveal"><h3>${esc(data.introduction.heading)}</h3>${data.introduction.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}<div class="about-links">${link(data.links.github, "GitHub", "text-link", external)}${link(data.links.linkedin, "LinkedIn", "text-link", external)}${link(data.links.codolio, "Codolio", "text-link", external)}</div></div></div></section>
    <section class="section experience-section" id="experience"><div class="section-intro reveal"><div class="section-number">03 / EXPERIENCE</div><div><h2>Learning by <em>doing.</em></h2><p>Hands-on work across AI and backend engineering.</p></div></div><div class="experience-list">${data.experience.map((job) => `<article class="experience-item reveal"><div class="experience-period">${esc(job.period)}</div><div><h3>${esc(job.role)}</h3>${job.company ? `<div class="experience-company">${esc(job.company)}</div>` : ""}<p>${esc(job.description)}</p>${job.highlights ? `<div class="experience-highlights">${job.highlights.map((h) => `<span>${esc(h)}</span>`).join("")}</div>` : ""}</div><span class="experience-arrow">↗</span></article>`).join("")}</div></section>
    <section class="section skills-section"><div class="section-intro reveal"><div class="section-number">04 / TOOLKIT</div><div><h2>Skills that help me <em>ship.</em></h2><p>Tools are a means to solve the problem. These are the ones I’ve built with.</p></div></div><div class="skills-grid">${data.skills.map((group, i) => `<div class="skill-group reveal"><span class="skill-index">0${i + 1}</span><h3>${esc(group.title)}</h3><div>${group.items.map((item) => `<span>${esc(item)}</span>`).join("")}</div></div>`).join("")}</div><div class="education-line"><div><span class="eyebrow">EDUCATION</span><h3>${esc(data.education.degree)}</h3><p>${esc(data.education.school)}</p></div><span>${esc(data.education.period)}</span></div><div class="small-notes">${data.notes.map((note) => `<span>✳ ${esc(note)}</span>`).join("")}</div></section>
    ${contactSection()}
  </main>${footer()}`;
}

function contactSection() {
  return `<section class="contact-section" id="contact"><div class="contact-glow"></div><div class="contact-inner"><span class="eyebrow">05 / WHAT’S NEXT</span><h2>${esc(data.contact.heading)}</h2><p>${esc(data.contact.description)}</p><div class="contact-actions">${link(`mailto:${data.email}`, "Get in touch", "button button-light", arrow)}${link(data.links.resume, "Download résumé", "button button-light-outline", external, 'download="Yash_Jain_Resume.pdf"')}</div><div class="contact-meta"><a href="mailto:${esc(data.email)}">${esc(data.email)}</a><span>${esc(data.location)} · Open to opportunities</span></div></div></section>`;
}

function projectPage(project) {
  const next = data.projects[(data.projects.indexOf(project) + 1) % data.projects.length];
  document.title = `${project.name} — ${data.name}`;
  document.querySelector('meta[name="description"]').content = project.oneLiner;
  return `${header()}<main id="main" class="case-main"><section class="case-hero"><div class="case-breadcrumb"><a href="${home}#work">← All work</a><span>${esc(project.number)} / ${esc(project.category)}</span></div><div class="case-heading"><span class="eyebrow">PROJECT CASE STUDY / ${esc(project.number)}</span><h1>${esc(project.name)}</h1><p>${esc(project.oneLiner)}</p><div class="case-actions">${link(project.links.github, "View code", "button button-dark", external)}${link(project.links.live, "Visit project", "button button-outline", external)}</div></div></section><div class="case-visual-wrap">${visual(project, true)}</div><section class="case-body"><div class="case-overview"><span class="section-number">THE IDEA</span><p>${esc(project.overview)}</p></div><div class="case-detail-grid"><article><span class="eyebrow">01 / THE PROBLEM</span><h2>What needed<br><em>solving.</em></h2><p>${esc(project.problem)}</p></article><article><span class="eyebrow">02 / THE BUILD</span><h2>How I made<br><em>it work.</em></h2><ul>${project.built.map((item) => `<li>${esc(item)}</li>`).join("")}</ul></article></div><div class="case-outcome"><span class="eyebrow">03 / THE RESULT</span><p>${esc(project.result)}</p></div><div class="case-stack"><span class="eyebrow">BUILT WITH</span><div>${project.technologies.map((tech) => `<span>${esc(tech)}</span>`).join("")}</div></div></section><a class="next-project" href="${projectUrl(next)}"><span>NEXT PROJECT / ${esc(next.number)}</span><strong>${esc(next.name)}</strong>${arrow}</a>${contactSection()}</main>${footer()}`;
}

const slug = new URLSearchParams(window.location.search).get("slug");
const selected = data.projects.find((project) => project.slug === slug);
app.innerHTML = isProjectPage && selected ? projectPage(selected) : homePage();
if (!isProjectPage || !selected) {
  document.title = `${data.name} — ${data.title}`;
  document.querySelector('meta[name="description"]').content = data.hero.description;
}

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-nav");
const themeToggle = document.querySelector(".theme-toggle");
const updateThemeToggle = () => {
  const dark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} mode`);
  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.querySelector(".theme-icon").textContent = dark ? "☀" : "☾";
  themeToggle.querySelector(".theme-label").textContent = dark ? "Light" : "Dark";
  document.querySelector('meta[name="theme-color"]').content = dark ? "#211915" : "#f8f5ec";
};
updateThemeToggle();
themeToggle.addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  try { localStorage.setItem("yash-portfolio-theme", dark ? "dark" : "light"); } catch {}
  updateThemeToggle();
});
menuToggle?.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  mobileMenu.hidden = !open;
  document.body.classList.toggle("menu-open", open);
});
mobileMenu?.querySelectorAll("a").forEach((item) => item.addEventListener("click", () => {
  mobileMenu.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}));

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}
