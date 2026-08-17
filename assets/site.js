// ============================================================
//  site.js — builds the nav, gallery grids, and lightbox
//  from config.js. You should not need to edit this file.
// ============================================================

/* ---------- shared: build the top navigation ---------- */
function buildNav(activeSlug) {
  const galleryLinks = GALLERIES
    .map(g => `<a href="gallery.html?g=${g.slug}">${g.title}</a>`)
    .join("");

  return `
    <nav class="nav" id="nav">
      <a class="nav__name" href="index.html">${SITE.name}</a>
      <button class="nav__toggle" id="navToggle" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav__menu" id="navMenu">
        <li class="nav__item">
          <span class="nav__link">Galleries</span>
          <div class="nav__dropdown">${galleryLinks}</div>
        </li>
        <li class="nav__item"><a class="nav__link" href="about.html">About / Contact</a></li>
      </ul>
    </nav>`;
}

function wireNav(isInner) {
  const nav = document.getElementById("nav");
  if (isInner) nav.classList.add("inner");

  // transparent -> solid on scroll (hero pages only)
  if (!isInner) {
    const onScroll = () => nav.classList.toggle("solid", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // mobile toggle
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  toggle.addEventListener("click", () => menu.classList.toggle("open"));
}

/* ---------- landing page: hero slideshow ---------- */
function buildHeroSlideshow() {
  const container = document.getElementById("heroSlides");
  if (!container) return;

  // Use the slide list if provided, otherwise fall back to the single hero image.
  const slides = (SITE.heroSlides && SITE.heroSlides.length)
    ? SITE.heroSlides
    : [SITE.heroImage];

  // Build a stacked layer for each slide.
  slides.forEach((src, i) => {
    const layer = document.createElement("div");
    layer.className = "hero__slide";
    layer.style.backgroundImage = `url('${src}')`;
    if (i === 0) layer.classList.add("is-active");
    container.appendChild(layer);
  });

  // Nothing to cycle if there's only one image.
  if (slides.length < 2) return;

  const layers = container.querySelectorAll(".hero__slide");
  let current = 0;
  const hold = (SITE.heroSlideSeconds || 5) * 1000;

  setInterval(() => {
    layers[current].classList.remove("is-active");
    current = (current + 1) % layers.length;
    layers[current].classList.add("is-active");
  }, hold);
}

/* ---------- gallery page: build the grid ---------- */
function buildGallery() {
  const params = new URLSearchParams(location.search);
  const slug = params.get("g") || GALLERIES[0].slug;
  const gallery = GALLERIES.find(g => g.slug === slug) || GALLERIES[0];

  document.title = `${gallery.title} — ${SITE.name}`;

  const head = document.getElementById("galleryHead");
  head.innerHTML = `
    <h1 class="page__title">${gallery.title}</h1>
    ${gallery.blurb ? `<p class="page__blurb">${gallery.blurb}</p>` : ""}`;

  const grid = document.getElementById("galleryGrid");

  if (!gallery.photos.length) {
    grid.insertAdjacentHTML("afterend",
      `<p class="empty-note">Photographs coming soon.</p>`);
    return;
  }

  gallery.photos.forEach((file, i) => {
    const img = document.createElement("img");
    img.src = `galleries/${gallery.slug}/${file}`;
    img.alt = `${gallery.title} ${i + 1}`;
    img.loading = "lazy";
    img.addEventListener("load", () => img.classList.add("loaded"));
    img.addEventListener("click", () => openLightbox(gallery, i));
    grid.appendChild(img);
  });
}

/* ---------- lightbox ---------- */
let lbGallery = null, lbIndex = 0;

function openLightbox(gallery, index) {
  lbGallery = gallery; lbIndex = index;
  document.getElementById("lbImg").src =
    `galleries/${gallery.slug}/${gallery.photos[index]}`;
  document.getElementById("lightbox").classList.add("open");
}
function closeLightbox() { document.getElementById("lightbox").classList.remove("open"); }
function stepLightbox(dir) {
  if (!lbGallery) return;
  lbIndex = (lbIndex + dir + lbGallery.photos.length) % lbGallery.photos.length;
  document.getElementById("lbImg").src =
    `galleries/${lbGallery.slug}/${lbGallery.photos[lbIndex]}`;
}
document.addEventListener("keydown", e => {
  if (!document.getElementById("lightbox")?.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") stepLightbox(-1);
  if (e.key === "ArrowRight") stepLightbox(1);
});
