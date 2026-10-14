import { useEffect } from "react";
import { navigation } from "../data/site.js";

export function usePortfolioObservers(setActive) {
  useEffect(() => {
    const updateActiveSection = () => {
      const lastSectionId = navigation[navigation.length - 1].id;
      const headerOffset = document.querySelector(".site-header")?.offsetHeight ?? 0;
      const hashTargetId = window.location.hash.slice(1);
      const hashTarget = navigation.some((item) => item.id === hashTargetId)
        ? document.getElementById(hashTargetId)
        : null;

      if (hashTarget) {
        const targetBounds = hashTarget.getBoundingClientRect();
        if (targetBounds.bottom > headerOffset && targetBounds.top < window.innerHeight) {
          setActive(hashTargetId);
          return;
        }
      }

      const pageBottom = window.scrollY + window.innerHeight;
      const documentBottom = document.documentElement.scrollHeight;

      if (pageBottom >= documentBottom - 2) {
        setActive(lastSectionId);
        return;
      }

      const activationLine = headerOffset + 24;
      let currentSection = navigation[0].id;

      for (const item of navigation) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= activationLine) {
          currentSection = item.id;
        }
      }

      setActive(currentSection);
    };

    const setActiveFromHash = () => {
      const targetSection = window.location.hash.slice(1);
      if (navigation.some((item) => item.id === targetSection)) {
        setActive(targetSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", setActiveFromHash);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealObserver =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                if (entry.isIntersecting) {
                  entry.target.classList.add("is-visible");
                  revealObserver.unobserve(entry.target);
                }
              }
            },
            { threshold: 0.12 },
          );

    if (revealObserver && !motionQuery.matches) {
      document.querySelectorAll(".reveal").forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add("is-visible");
        }
        element.classList.add("motion-ready");
        revealObserver.observe(element);
      });
    }

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", setActiveFromHash);
      revealObserver?.disconnect();
    };
  }, [setActive]);
}
