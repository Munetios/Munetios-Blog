import { archive } from "./blog-archive.js";
import { releases } from "./blog-releases.js?v=2026-11-26";
import { matchLocale, messages } from "./blog-i18n.js";

const siteName = "Munetios Blog";
const languageKey = "munetios-blog-language";
const ui = window.MunetiosUI;
const main = document.getElementById("blog-content");
const searchInput = document.getElementById("search-input");
const languageSelect = document.getElementById("blog-language");
const themeSelect = document.getElementById("blog-theme");
const archiveButton = document.querySelector(".blog-archive-button");
const shareUrl = document.getElementById("share-url");
const copyStatus = document.getElementById("copy-status");

const legacySlug = (title) => title.toLowerCase().replace(/\s+/g, "-");
const simpleSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const normalize = (text) => text.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
const posts = [...releases, ...archive.map((post) => {
  const [month, day, year] = post.date.split("-");
  return { ...post, date: `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`, body: post.summary };
})].map((post) => {
  const body = document.createElement("template");
  body.innerHTML = post.body;
  return {
    ...post,
    slug: post.slug || legacySlug(post.title),
    searchable: normalize([post.title, body.content.textContent, ...post.tags].join(" ")),
  };
}).sort((a, b) => b.date.localeCompare(a.date));

const postLinks = new Map();
for (const post of posts) {
  for (const slug of [post.slug, legacySlug(post.title), simpleSlug(post.title)]) {
    if (!postLinks.has(slug)) postLinks.set(slug, post);
  }
}

let storedLanguage;
try { storedLanguage = localStorage.getItem(languageKey); } catch {}
let locale = matchLocale(storedLanguage || navigator.language);
const t = (key) => messages[locale][key];
const postHref = (post) => "#/post/" + encodeURIComponent(post.slug);
const icon = (name) => el("span", "mu-icon", name, { "aria-hidden": "true" });

function el(tag, className, text, attributes = {}) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  for (const [name, value] of Object.entries(attributes)) node.setAttribute(name, value);
  return node;
}

function link(text, href, symbol, className = "mu-btn") {
  const anchor = el("a", className, undefined, { href });
  const label = el("span", "", text);
  if (symbol === "arrow_forward") anchor.append(label, icon(symbol));
  else anchor.append(icon(symbol), label);
  return anchor;
}

function metadata(post) {
  const row = el("div", "blog-meta");
  if (post.category) row.append(el("span", "blog-category", t(post.category)));
  const date = new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" });
  row.append(el("time", "", date.format(new Date(post.date)), { datetime: post.date }));
  return row;
}

function postImage(post, className) {
  if (!post.image || post.image.startsWith("https://placehold.co/")) return null;
  const src = post.image.replace("https://blog.munetios.com/", "");
  const image = el("img", className, undefined, { src, alt: "", loading: "lazy", decoding: "async" });
  image.addEventListener("error", () => image.remove(), { once: true });
  return image;
}

function postGrid(items, headingTag = "h2") {
  const list = el("ul", "blog-grid");
  for (const post of items) {
    const item = el("li");
    const card = el("a", "mu-tile blog-card", undefined, { href: postHref(post) });
    const image = postImage(post, "blog-card-image");
    if (image) {
      card.append(image);
    } else {
      const circle = el("span", "mu-icon-circle", undefined, { "aria-hidden": "true" });
      circle.append(icon(post.icon || "article"));
      card.append(circle);
    }
    card.append(el(headingTag, "mu-h-title", post.title, { lang: "en" }));
    if (post.category) card.append(el("p", "", post.summary, { lang: "en" }));
    card.append(metadata(post));
    item.append(card);
    list.append(item);
  }
  return list;
}

function home() {
  const [featured, ...recent] = posts;
  const feature = el("article", "mu-glass mu-panel liquid-glass blog-feature");
  const copy = el("div", "blog-feature-copy");
  copy.append(
    metadata(featured),
    el("h2", "mu-h-display", featured.title, { lang: "en" }),
    el("p", "mu-muted", featured.summary, { lang: "en" }),
    link(t("read"), postHref(featured), "arrow_forward", "mu-btn mu-btn-primary"),
  );
  const artwork = el("div", "blog-feature-art", undefined, { "aria-hidden": "true" });
  artwork.append(el("img", "", undefined, { src: "munetios-logo.png", alt: "", width: "150", height: "150" }));
  feature.append(copy, artwork);
  const latest = el("section", "", undefined, { "aria-labelledby": "latest-title" });
  const heading = el("div", "blog-section-heading");
  heading.append(el("h2", "mu-h-section", t("latest"), { id: "latest-title" }), link(t("all"), "#/all", "arrow_forward"));
  latest.append(heading, postGrid(recent.slice(0, 3), "h3"));
  main.replaceChildren(el("h1", "mu-h-display blog-page-title", siteName), feature, latest);
}

function listing(query) {
  const searching = query !== undefined;
  const heading = t(searching ? "searchResults" : "all");
  const terms = normalize(query || "").split(/\s+/).filter(Boolean);
  const items = searching ? posts.filter((post) => terms.length && terms.every((word) => post.searchable.includes(word))) : posts;
  main.append(el("h1", "mu-h-display blog-page-title", heading));
  if (searching && query) main.append(el("p", "mu-muted", query));
  main.append(items.length ? postGrid(items) : el("p", "mu-muted", t("noResults")));
  document.title = `${heading} | ${siteName}`;
}

function article(post) {
  const content = el("article", "blog-article");
  content.append(link(t("back"), "#/", "arrow_back", "mu-btn blog-return"));
  const panel = el("div", "mu-glass mu-panel liquid-glass blog-article-panel");
  const share = el("button", "mu-btn", undefined, { type: "button" });
  share.append(icon("share"), el("span", "", t("share")));
  share.addEventListener("click", () => openShare(post));
  panel.append(metadata(post), el("h1", "mu-h-display blog-page-title", post.title, { lang: "en" }), share);
  const image = postImage(post, "blog-article-image");
  if (image) panel.append(image);
  const prose = el("div", "blog-prose", undefined, { lang: "en" });
  prose.innerHTML = post.body;
  panel.append(prose);
  const tags = el("ul", "blog-tags", undefined, { lang: "en" });
  for (const tag of post.tags) tags.append(el("li", "mu-chip", tag));
  panel.append(tags);
  content.append(panel);
  main.append(content);
  document.title = `${post.title} | ${siteName}`;
}

function openShare(post) {
  const url = new URL(postHref(post), location.href).href;
  shareUrl.value = url;
  copyStatus.textContent = "";
  document.getElementById("share-facebook").href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
  document.getElementById("share-chatgpt").href = "https://chatgpt.com/?q=" + encodeURIComponent(url);
  ui.openModal("blog-share");
}

function route(moveFocus = false) {
  const path = location.hash.slice(1);
  let slug = "";
  try { slug = decodeURIComponent(path.replace(/^\/(?:post\/)?/, "")).toLowerCase(); } catch {}
  const onArchive = path === "/all";
  main.replaceChildren();
  document.title = siteName;
  archiveButton.removeAttribute("aria-current");
  if (onArchive) {
    archiveButton.setAttribute("aria-current", "page");
    listing();
  } else if (path === "/search" || path.startsWith("/search?")) {
    searchInput.value = new URLSearchParams(path.split("?").slice(1).join("?")).get("q")?.trim() || "";
    listing(searchInput.value);
  } else if (postLinks.has(slug)) {
    article(postLinks.get(slug));
  } else if (path && path !== "/" && path !== "blog-content") {
    main.append(el("h1", "mu-h-display blog-page-title", t("notFound")), link(t("back"), "#/", "arrow_back"));
  } else {
    home();
  }
  if (moveFocus) {
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }
}

function applyLocale() {
  document.documentElement.lang = locale;
  document.querySelectorAll("[data-t]").forEach((node) => { node.textContent = t(node.dataset.t); });
  document.querySelectorAll("[data-aria]").forEach((node) => { node.setAttribute("aria-label", t(node.dataset.aria)); });
  document.querySelectorAll("[data-placeholder]").forEach((node) => { node.placeholder = t(node.dataset.placeholder); });
  languageSelect.value = locale;
  ui.refreshSelect(languageSelect);
  ui.refreshSelect(themeSelect);
  route();
}

themeSelect.value = ui.theme.get();
ui.enhanceSelect(themeSelect);
ui.enhanceSelect(languageSelect);
themeSelect.addEventListener("change", () => ui.theme.set(themeSelect.value));
languageSelect.addEventListener("change", () => {
  locale = languageSelect.value;
  try { localStorage.setItem(languageKey, locale); } catch {}
  applyLocale();
});

document.querySelector(".blog-skip").addEventListener("click", (event) => {
  event.preventDefault();
  main.focus();
});
document.getElementById("search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();
  if (!query) return;
  ui.closeModal("blog-search");
  const hash = "#/search?" + new URLSearchParams({ q: query });
  if (location.hash === hash) route(true);
  else location.hash = hash;
});
document.getElementById("copy-link").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(shareUrl.value);
    copyStatus.textContent = t("copied");
  } catch {
    shareUrl.focus();
    shareUrl.select();
    copyStatus.textContent = t("copyFailed");
  }
});
window.addEventListener("hashchange", () => {
  if (!document.getElementById("blog-share").hidden) ui.closeModal("blog-share");
  route(true);
});
applyLocale();
