"use client";
import { useEffect } from "react";

let hasVisited = false; // session‑wide flag

export default function ScrollHash() {
  useEffect(() => {
    const { hash, pathname } = window.location;

    // nothing to do if there isn’t a fragment
    if (!hash) {
      hasVisited = true;
      return;
    }

    const id = hash.slice(1); // target element id

    // helper that scrolls to the fragment target if it exists
    const scrollTarget = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // only on the very first visit do we care about “reload vs navigate”
    if (!hasVisited) {
      // the old `performance.navigation` API is deprecated but still
      // present; the newer one lives in navigation entries.
      const entries = performance.getEntriesByType(
        "navigation"
      ) as PerformanceNavigationTiming[];
      const isReload =
        performance.navigation?.type === 1 ||
        entries.some((e) => e.type === "reload");

      if (isReload) {
        // hard refresh → jump to top and clear the hash
        window.scrollTo({ top: 0, left: 0 });
        window.history.replaceState(null, "", pathname);
      } else {
        // deep‑link or client nav from another site – scroll normally
        scrollTarget();
      }
    } else {
      // subsequent mounts (client‑side transitions) – just scroll
      scrollTarget();
    }

    hasVisited = true;
  }, []);
}