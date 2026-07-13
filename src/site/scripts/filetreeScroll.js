export const FILETREE_SCROLL_STORAGE_KEY =
  "digital-garden:filetree-scroll-top";

export function setupFiletreeScrollRestoration({
  documentRef = document,
  storage = window.sessionStorage,
} = {}) {
  const container = documentRef.querySelector(".filetree-sidebar > .folder");
  if (!container) return;

  const save = () => {
    try {
      storage.setItem(
        FILETREE_SCROLL_STORAGE_KEY,
        String(container.scrollTop),
      );
    } catch {}
  };

  try {
    const savedPosition = Number(
      storage.getItem(FILETREE_SCROLL_STORAGE_KEY),
    );
    if (Number.isFinite(savedPosition) && savedPosition >= 0) {
      container.scrollTop = savedPosition;
    }
  } catch {}

  container.addEventListener("scroll", save, { passive: true });
  container.addEventListener(
    "click",
    event => {
      if (event.target.closest?.("a.filename")) save();
    },
    { capture: true },
  );
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  const initialize = () => {
    window.requestAnimationFrame(() => setupFiletreeScrollRestoration());
  };

  if (window.Alpine) {
    initialize();
  } else {
    document.addEventListener("alpine:initialized", initialize, { once: true });
  }
}
