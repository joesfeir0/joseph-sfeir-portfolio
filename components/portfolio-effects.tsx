"use client";

import { useEffect } from "react";

const revealSelector = [
  ".signal-manifesto__lead",
  ".signal-chain article",
  ".signal-trace__header",
  ".signal-timeline article",
  ".signal-stack",
  ".signal-work__header",
  ".signal-project",
  ".signal-field__header",
  ".signal-photo",
  ".signal-field__note",
  ".signal-contact__inner",
  ".site-footer__brand",
  ".site-footer__links",
].join(",");

export function PortfolioEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const homeHero = document.querySelector<HTMLElement>(".signal-hero");
    let scrollFrame = 0;

    const updateProgress = () => {
      const scrollable = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const progress = Math.min(Math.max(window.scrollY / scrollable, 0), 1);
      root.style.setProperty("--page-progress", progress.toFixed(4));
      const heroRevealPoint = Math.min(window.innerHeight * 0.12, 96);
      root.classList.toggle(
        "hero-nav-hidden",
        Boolean(
          homeHero && homeHero.getBoundingClientRect().bottom > heroRevealPoint,
        ),
      );
      scrollFrame = 0;
    };

    const requestProgressUpdate = () => {
      if (!scrollFrame)
        scrollFrame = window.requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate);
    updateProgress();
    root.classList.add("js-effects-ready");

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector),
    );

    revealTargets.forEach((target, index) => {
      target.classList.add("js-reveal");
      target.style.setProperty("--reveal-delay", `${(index % 4) * 65}ms`);
    });

    let revealObserver: IntersectionObserver | undefined;
    if (!reducedMotion && "IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            revealObserver?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -10%", threshold: 0.12 },
      );
      revealTargets.forEach((target) => revealObserver?.observe(target));
    } else {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
    }

    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        ".site-navigation a, .mobile-menu nav a",
      ),
    );
    const sections = ["work", "about", "journey"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const setActiveSection = (id: string) => {
      navLinks.forEach((link) => {
        const active =
          new URL(link.href, window.location.href).hash === `#${id}`;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (activeEntry?.target.id) setActiveSection(activeEntry.target.id);
      },
      { rootMargin: "-24% 0px -68%", threshold: 0 },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    const tiltCleanups: Array<() => void> = [];
    if (!reducedMotion && window.matchMedia("(pointer: fine)").matches) {
      const tiltTargets = Array.from(
        document.querySelectorAll<HTMLElement>(".signal-project__stage"),
      );

      tiltTargets.forEach((target) => {
        target.classList.add("js-tilt");
        const photoTargets = Array.from(
          target.querySelectorAll<HTMLElement>(
            ".automatch-screen, .fitai-screen",
          ),
        );
        target.classList.toggle("js-photo-parallax", photoTargets.length > 0);

        const handleMove = (event: PointerEvent) => {
          const rect = target.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          target.style.setProperty(
            "--tilt-x",
            `${((0.5 - y) * 4).toFixed(2)}deg`,
          );
          target.style.setProperty(
            "--tilt-y",
            `${((x - 0.5) * 4).toFixed(2)}deg`,
          );
          target.style.setProperty("--shine-x", `${(x * 100).toFixed(1)}%`);
          target.style.setProperty("--shine-y", `${(y * 100).toFixed(1)}%`);
          photoTargets.forEach((photo, index) => {
            const depth = 4 + index * 2;
            photo.style.setProperty(
              "--photo-shift-x",
              `${((x - 0.5) * depth).toFixed(2)}px`,
            );
            photo.style.setProperty(
              "--photo-shift-y",
              `${((y - 0.5) * depth * 0.7).toFixed(2)}px`,
            );
          });
        };
        const handleLeave = () => {
          target.style.setProperty("--tilt-x", "0deg");
          target.style.setProperty("--tilt-y", "0deg");
          target.style.setProperty("--shine-x", "50%");
          target.style.setProperty("--shine-y", "50%");
          photoTargets.forEach((photo) => {
            photo.style.setProperty("--photo-shift-x", "0px");
            photo.style.setProperty("--photo-shift-y", "0px");
          });
        };
        target.addEventListener("pointermove", handleMove);
        target.addEventListener("pointerleave", handleLeave);
        tiltCleanups.push(() => {
          target.removeEventListener("pointermove", handleMove);
          target.removeEventListener("pointerleave", handleLeave);
          target.classList.remove("js-tilt", "js-photo-parallax");
          photoTargets.forEach((photo) => {
            photo.style.removeProperty("--photo-shift-x");
            photo.style.removeProperty("--photo-shift-y");
          });
        });
      });

      const handlePointer = (event: PointerEvent) => {
        root.classList.add("has-pointer");
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
      };
      window.addEventListener("pointermove", handlePointer, { passive: true });
      tiltCleanups.push(() =>
        window.removeEventListener("pointermove", handlePointer),
      );
    }

    return () => {
      window.removeEventListener("scroll", requestProgressUpdate);
      window.removeEventListener("resize", requestProgressUpdate);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      revealObserver?.disconnect();
      sectionObserver.disconnect();
      tiltCleanups.forEach((cleanup) => cleanup());
      revealTargets.forEach((target) => {
        target.classList.remove("js-reveal", "is-visible");
        target.style.removeProperty("--reveal-delay");
      });
      navLinks.forEach((link) => {
        link.classList.remove("is-active");
        link.removeAttribute("aria-current");
      });
      root.classList.remove(
        "js-effects-ready",
        "has-pointer",
        "hero-nav-hidden",
      );
      root.style.removeProperty("--page-progress");
      root.style.removeProperty("--pointer-x");
      root.style.removeProperty("--pointer-y");
    };
  }, []);

  return (
    <>
      <div className="site-progress" aria-hidden="true">
        <span />
      </div>
      <div className="pointer-orb" aria-hidden="true" />
    </>
  );
}
