export const FILETREE_SCROLL_STORAGE_KEY =
  "digital-garden:filetree-scroll-top";

export function setupFiletreeScrollRestoration(options = {}) {
  const documentRef =
    options.documentRef ??
    (typeof document !== "undefined" ? document : null);
  const windowRef =
    options.windowRef ?? (typeof window !== "undefined" ? window : null);
  const container = documentRef?.querySelector(
    ".filetree-sidebar > .folder",
  );
  if (!container) return;

  let storage = options.storage;
  if (storage === undefined) {
    try {
      storage = windowRef?.sessionStorage;
    } catch {
      storage = null;
    }
  }

  const save = () => {
    try {
      storage?.setItem(
        FILETREE_SCROLL_STORAGE_KEY,
        String(container.scrollTop),
      );
    } catch {}
  };

  const restore = () => {
    try {
      const storedPosition = storage?.getItem(FILETREE_SCROLL_STORAGE_KEY);
      if (storedPosition === null || storedPosition === undefined) return;

      const savedPosition = Number(storedPosition);
      if (Number.isFinite(savedPosition) && savedPosition >= 0) {
        container.scrollTop = savedPosition;
      }
    } catch {}
  };

  const wrapper = documentRef.querySelector(".filetree-wrapper");
  const MutationObserverRef = windowRef?.MutationObserver;
  const requestAnimationFrame =
    windowRef?.requestAnimationFrame?.bind(windowRef);
  if (
    wrapper &&
    typeof MutationObserverRef === "function" &&
    requestAnimationFrame
  ) {
    const observer = new MutationObserverRef(() => {
      requestAnimationFrame(restore);
    });
    observer.observe(wrapper, {
      attributes: true,
      attributeFilter: ["style"],
    });
  }

  restore();

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
