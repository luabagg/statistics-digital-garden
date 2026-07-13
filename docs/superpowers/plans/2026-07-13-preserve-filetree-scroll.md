# Preserve Filetree Scroll Position Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Preserve the filetree menu's vertical scroll position when a user opens another note.

**Architecture:** Add a small browser ES module that restores the scrollable filetree folder from `sessionStorage` after Alpine initializes and saves the position while scrolling and immediately before note-link navigation. Include it only with the filetree component, and unit-test the behavior with lightweight DOM/storage fakes.

**Tech Stack:** Eleventy/Nunjucks, browser JavaScript ES modules, Alpine.js, Vitest.

## Global Constraints

- Work only in `/home/luanb/development/digitalgarden-worktrees/fix-related-note-scroll` on branch `fix/preserve-related-note-scroll` created from `main`.
- Preserve only the filetree menu's internal scroll position; do not alter the new note page's document scroll position.
- Use `sessionStorage`, so position is scoped to the current browser tab/session and does not become stale across future visits.
- Storage failures must not break navigation.
- Keep the implementation dependency-free and focused on this bug.

---

### Task 1: Persist and restore filetree scroll

**Files:**
- Create: `src/site/scripts/filetreeScroll.js`
- Create: `src/site/scripts/__tests__/filetreeScroll.test.js`
- Modify: `src/site/_includes/components/filetree.njk`

**Interfaces:**
- Consumes: `.filetree-sidebar > .folder`, note links matching `a.filename`, browser `sessionStorage`, Alpine's `alpine:initialized` event.
- Produces: `setupFiletreeScrollRestoration({ documentRef, storage })` and `FILETREE_SCROLL_STORAGE_KEY` exports for focused tests.

- [x] **Step 1: Write the failing tests**

Create tests that import `setupFiletreeScrollRestoration` and verify:

```js
it("restores the saved filetree scroll position", () => {
  storage.setItem(FILETREE_SCROLL_STORAGE_KEY, "240");
  setupFiletreeScrollRestoration({ documentRef, storage });
  expect(container.scrollTop).toBe(240);
});

it("saves the current position on scroll and before note navigation", () => {
  setupFiletreeScrollRestoration({ documentRef, storage });
  container.scrollTop = 315;
  container.dispatch("scroll");
  expect(storage.getItem(FILETREE_SCROLL_STORAGE_KEY)).toBe("315");

  container.scrollTop = 420;
  container.dispatch("click", { closest: selector => selector === "a.filename" ? {} : null });
  expect(storage.getItem(FILETREE_SCROLL_STORAGE_KEY)).toBe("420");
});

it("does nothing when the filetree is absent or storage is unavailable", () => {
  expect(() => setupFiletreeScrollRestoration({ documentRef: missingDocument, storage })).not.toThrow();
  expect(() => setupFiletreeScrollRestoration({ documentRef, storage: throwingStorage })).not.toThrow();
});
```

- [x] **Step 2: Run the focused test and verify it fails**

Run:

```bash
TZ=UTC npm test -- src/site/scripts/__tests__/filetreeScroll.test.js
```

Expected: FAIL because `src/site/scripts/filetreeScroll.js` does not exist.

- [x] **Step 3: Implement the minimal browser module**

Create `src/site/scripts/filetreeScroll.js` with:

```js
export const FILETREE_SCROLL_STORAGE_KEY = "digital-garden:filetree-scroll-top";

export function setupFiletreeScrollRestoration({
  documentRef = document,
  storage = window.sessionStorage,
} = {}) {
  const container = documentRef.querySelector(".filetree-sidebar > .folder");
  if (!container) return;

  const save = () => {
    try {
      storage.setItem(FILETREE_SCROLL_STORAGE_KEY, String(container.scrollTop));
    } catch {}
  };

  try {
    const savedPosition = Number(storage.getItem(FILETREE_SCROLL_STORAGE_KEY));
    if (Number.isFinite(savedPosition) && savedPosition >= 0) {
      container.scrollTop = savedPosition;
    }
  } catch {}

  container.addEventListener("scroll", save, { passive: true });
  container.addEventListener("click", event => {
    if (event.target.closest?.("a.filename")) save();
  });
}
```

Add guarded browser initialization that waits for Alpine when needed and runs once on the next animation frame. Add this module to the end of `filetree.njk`:

```html
<script type="module" src="/scripts/filetreeScroll.js"></script>
```

- [x] **Step 4: Run focused and full verification**

Run:

```bash
TZ=UTC npm test -- src/site/scripts/__tests__/filetreeScroll.test.js
TZ=UTC npm test
npm run build
```

Expected: focused tests pass, all 234+ tests pass, and the production build succeeds.

- [x] **Step 5: Commit**

```bash
git add docs/superpowers/plans/2026-07-13-preserve-filetree-scroll.md src/site/scripts/filetreeScroll.js src/site/scripts/__tests__/filetreeScroll.test.js src/site/_includes/components/filetree.njk
git commit -m "fix: preserve filetree scroll"
```
