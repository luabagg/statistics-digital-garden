import { describe, expect, it } from "vitest";
import {
  FILETREE_SCROLL_STORAGE_KEY,
  setupFiletreeScrollRestoration,
} from "../filetreeScroll.js";

function createContainer() {
  const listeners = new Map();

  return {
    scrollTop: 0,
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
    const documentRef = { querySelector: () => container };
    const storage = createStorage();
    storage.setItem(FILETREE_SCROLL_STORAGE_KEY, "240");

    setupFiletreeScrollRestoration({ documentRef, storage });

    expect(container.scrollTop).toBe(240);
  });

  it("saves the current position on scroll and before note navigation", () => {
    const container = createContainer();
    const documentRef = { querySelector: () => container };
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

  it("does nothing when the filetree is absent or storage is unavailable", () => {
    const container = createContainer();
    const documentRef = { querySelector: () => container };
    const missingDocument = { querySelector: () => null };
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
});
