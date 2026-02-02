// assets/js/main.js

// 1) Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", id);
  });
});

// 2) Active nav link while scrolling
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('a[href^="#"]');

const setActiveLink = () => {
  let currentId = "";
  sections.forEach((sec) => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) currentId = sec.id;
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });
};

window.addEventListener("scroll", setActiveLink);
setActiveLink();

// 3) Scroll reveal (simple + clean)
const revealEls = document.querySelectorAll("[data-reveal]");
const reveal = () => {
  const trigger = window.innerHeight * 0.88;
  revealEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) el.classList.add("reveal-in");
  });
};
window.addEventListener("scroll", reveal);
reveal();

// 4) Back to top button
const backTop = document.querySelector("[data-backtop]");
if (backTop) {
  const toggleBackTop = () => {
    backTop.classList.toggle("show", window.scrollY > 600);
  };
  window.addEventListener("scroll", toggleBackTop);
  toggleBackTop();

  backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 5) Copy email button
const copyBtn = document.querySelector("[data-copy-email]");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const email = copyBtn.getAttribute("data-copy-email");
    try {
      await navigator.clipboard.writeText(email);
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy Email"), 1200);
    } catch {
      alert("Copy failed — please copy manually.");
    }
  });
}

// 6) Dark mode toggle (optional)
const themeBtn = document.querySelector("[data-theme-toggle]");
if (themeBtn) {
  const key = "theme";
  const apply = (t) => document.documentElement.setAttribute("data-theme", t);

  const saved = localStorage.getItem(key) || "light";
  apply(saved);

  themeBtn.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    localStorage.setItem(key, next);
  });
}
