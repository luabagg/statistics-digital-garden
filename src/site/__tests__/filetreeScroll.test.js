import { describe, expect, it } from "vitest";
import {
  FILETREE_SCROLL_STORAGE_KEY,
  setupFiletreeScrollRestoration,
} from "../scripts/filetreeScroll.js";

function createContainer({ isVisible = () => true } = {}) {
  const listeners = new Map();
  let scrollTop = 0;

  return {
    get scrollTop() {
      return scrollTop;
    },
    set scrollTop(value) {
      if (isVisible()) scrollTop = value;
    },
    addEventListener(type, listener, options) {
      listeners.set(type, { listener, options });
    },
    dispatch(type, target = {}) {
      listeners.get(type)?.listener({ target });
    },
    listenerOptions(type) {
      return listeners.get(type)?.options;
    },
  };
}

function createDocument(container, wrapper = {}) {
  return {
    querySelector(selector) {
      if (selector === ".filetree-sidebar > .folder") return container;
      if (selector === ".filetree-wrapper") return wrapper;
      return null;
    },
  };
}

function createStorage() {
  const values = new Map();

  return {
    getItem(key) {
      return values.get(key) ?? null;
    },
    setItem(key, value) {
      values.set(key, value);
    },
  };
}

describe("filetree scroll restoration", () => {
  it("restores the saved filetree scroll position", () => {
    const container = createContainer();
    const documentRef = createDocument(container);
    const storage = createStorage();
    storage.setItem(FILETREE_SCROLL_STORAGE_KEY, "240");

    setupFiletreeScrollRestoration({ documentRef, storage });

    expect(container.scrollTop).toBe(240);
  });

  it("retries restoration after Alpine makes the mobile wrapper visible", () => {
    let isVisible = false;
    let observerCallback;
    const animationFrames = [];
    const wrapper = {};
    const container = createContainer({ isVisible: () => isVisible });
    const documentRef = createDocument(container, wrapper);
    const storage = createStorage();
    const observed = [];
    const windowRef = {
      MutationObserver: class {
        constructor(callback) {
          observerCallback = callback;
        }

        observe(...args) {
          observed.push(args);
        }
      },
      requestAnimationFrame(callback) {
        animationFrames.push(callback);
      },
    };
    storage.setItem(FILETREE_SCROLL_STORAGE_KEY, "240");

    setupFiletreeScrollRestoration({ documentRef, storage, windowRef });

    expect(container.scrollTop).toBe(0);
    expect(observed).toEqual([
      [wrapper, { attributes: true, attributeFilter: ["style"] }],
    ]);

    isVisible = true;
    observerCallback([{ attributeName: "style", type: "attributes" }]);

    expect(container.scrollTop).toBe(0);
    expect(animationFrames).toHaveLength(1);

    animationFrames.shift()();
    expect(container.scrollTop).toBe(240);
  });

  it("saves the current position on scroll and before note navigation", () => {
    const container = createContainer();
    const documentRef = createDocument(container);
    const storage = createStorage();
    setupFiletreeScrollRestoration({ documentRef, storage });

    expect(container.listenerOptions("click")).toEqual({ capture: true });

    container.scrollTop = 315;
    container.dispatch("scroll");
    expect(storage.getItem(FILETREE_SCROLL_STORAGE_KEY)).toBe("315");

    container.scrollTop = 420;
    container.dispatch("click", {
      closest: selector => (selector === "a.filename" ? {} : null),
    });
    expect(storage.getItem(FILETREE_SCROLL_STORAGE_KEY)).toBe("420");
  });

  it("does nothing when the filetree is absent or storage methods throw", () => {
    const container = createContainer();
    const documentRef = createDocument(container);
    const missingDocument = createDocument(null, null);
    const storage = createStorage();
    const throwingStorage = {
      getItem() {
        throw new Error("Storage unavailable");
      },
      setItem() {
        throw new Error("Storage unavailable");
      },
    };

    expect(() =>
      setupFiletreeScrollRestoration({
        documentRef: missingDocument,
        storage,
      }),
    ).not.toThrow();
    expect(() =>
      setupFiletreeScrollRestoration({ documentRef, storage: throwingStorage }),
    ).not.toThrow();

    container.scrollTop = 100;
    expect(() => container.dispatch("scroll")).not.toThrow();
  });

  it("guards a throwing sessionStorage getter during setup and navigation", () => {
    const container = createContainer();
    const documentRef = createDocument(container);
    const windowRef = {};
    Object.defineProperty(windowRef, "sessionStorage", {
      get() {
        throw new Error("Storage access denied");
      },
    });

    expect(() =>
      setupFiletreeScrollRestoration({ documentRef, windowRef }),
    ).not.toThrow();
    expect(() =>
      container.dispatch("click", {
        closest: selector => (selector === "a.filename" ? {} : null),
      }),
    ).not.toThrow();
  });
});
