// HAQAGen project page interactions
(() => {
  const root = document.documentElement;

  // Theme
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    root.dataset.theme = savedTheme;
  }

  themeToggle?.addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  });

  // Mobile nav
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");
  burger?.addEventListener("click", () => {
    const isHidden = mobileNav.hasAttribute("hidden");
    if (isHidden) mobileNav.removeAttribute("hidden");
    else mobileNav.setAttribute("hidden", "");
  });
  mobileNav?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mobileNav.setAttribute("hidden", ""));
  });

  // Reveal on scroll
  const revealEls = Array.from(document.querySelectorAll(".reveal"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => io.observe(el));

  // Tabs
  const tabs = Array.from(document.querySelectorAll(".tab"));
  const panes = Array.from(document.querySelectorAll(".tabpane"));

  function setTab(id) {
    tabs.forEach(t => {
      const active = t.dataset.tab === id;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", active ? "true" : "false");
    });
    panes.forEach(p => p.classList.toggle("is-active", p.id === id));
  }

  tabs.forEach(t => {
    t.addEventListener("click", () => setTab(t.dataset.tab));
  });

  // Lightbox
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightboxImg");
  const lbCap = document.getElementById("lightboxCap");
  const lbClose = document.getElementById("lightboxClose");

  function openLightbox(imgEl) {
    lbImg.src = imgEl.getAttribute("src");
    lbImg.alt = imgEl.getAttribute("alt") || "Figure";
    const cap = imgEl.closest("figure")?.querySelector("figcaption")?.textContent || "";
    lbCap.textContent = cap.trim();
    lb.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lb.setAttribute("hidden", "");
    lbImg.src = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".js-lightbox").forEach(img => {
    img.addEventListener("click", () => openLightbox(img));
  });

  lbClose?.addEventListener("click", closeLightbox);
  lb?.addEventListener("click", (e) => {
    if (e.target === lb) closeLightbox();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lb.hasAttribute("hidden")) closeLightbox();
  });

  // Copy BibTeX
  const copyBtn = document.getElementById("copyBib");
  const bib = document.getElementById("bibtex");
  copyBtn?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(bib.innerText);
      copyBtn.textContent = "Copied!";
      setTimeout(() => copyBtn.textContent = "Copy BibTeX", 1200);
    } catch (err) {
      copyBtn.textContent = "Copy failed";
      setTimeout(() => copyBtn.textContent = "Copy BibTeX", 1200);
    }
  });
})();
