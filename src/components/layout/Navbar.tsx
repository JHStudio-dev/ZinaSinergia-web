"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "@/components/ui/Wordmark";
import { site } from "@/data/site";

const taglineWords = site.brand.tagline
  .split(".")
  .map((part) => part.trim())
  .filter(Boolean);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="zs-navbar">
      <div className="zs-navbar__shell" data-hidden={scrolled}>
        <a
          href="#inicio"
          className="zs-navbar__brand"
          aria-label="Zina Sinergia, ir al inicio"
        >
          <Wordmark tone="dark" />
        </a>

        <span className="zs-navbar__orbital" aria-hidden="true">
          <span className="zs-navbar__orbital-node" />
        </span>

        <nav className="zs-navbar__links">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="zs-navbar__link">
              {item.label}
            </a>
          ))}
          <a href={site.cta.href} className="zs-navbar__cta">
            {site.cta.label}
            <span aria-hidden="true" className="text-gold">
              →
            </span>
          </a>
        </nav>
      </div>

      <div className="zs-navbar__bar" data-visible={scrolled}>
        <a
          href="#inicio"
          className="zs-navbar__bar-brand"
          aria-label="Zina Sinergia, ir al inicio"
        >
          <span className="zs-tick h-5" />
          <Wordmark tone="dark" />
        </a>
        <nav className="zs-navbar__links" aria-label="Navegación principal">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="zs-navbar__link">
              {item.label}
            </a>
          ))}
        </nav>
        <a href={site.cta.href} className="zs-navbar__cta zs-navbar__bar-cta">
          {site.cta.label}
          <span aria-hidden="true" className="text-gold">
            →
          </span>
        </a>
      </div>

      <div className="zs-navbar__mobile">
        <a
          href="#inicio"
          className="flex items-center gap-2.5"
          aria-label="Zina Sinergia, ir al inicio"
        >
          <span className="zs-tick h-5" />
          <Wordmark tone="dark" />
        </a>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="group flex items-center gap-2.5 rounded-full border border-gold/30 px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-ivory/80 transition-colors duration-300 hover:border-gold/60 hover:text-ivory"
        >
          Menú
          <span className="flex flex-col gap-[3px]">
            <span className="h-px w-4 bg-gold" />
            <span className="h-px w-2.5 bg-gold transition-all duration-300 group-hover:w-4" />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 flex flex-col bg-night transition-[opacity,visibility] duration-300 lg:hidden ${
          open
            ? "visible opacity-100 pointer-events-auto"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent"
        />

        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
          <a
            href="#inicio"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5"
          >
            <span className="zs-tick h-5" />
            <Wordmark tone="dark" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="relative h-9 w-9"
          >
            <span className="absolute left-1/2 top-1/2 h-px w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-ivory" />
            <span className="absolute left-1/2 top-1/2 h-px w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-ivory" />
          </button>
        </div>

        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 sm:px-8">
          <nav className="flex flex-col">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-ivory/10 py-5 font-display text-[2rem] leading-none text-ivory transition-colors duration-300 hover:text-gold"
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className="-translate-x-2 text-base text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  →
                </span>
              </a>
            ))}
          </nav>

          <a
            href={site.cta.href}
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-medium text-night"
          >
            {site.cta.label}
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 pb-10 sm:px-8">
          <div className="flex flex-col gap-1.5 text-[0.7rem] uppercase tracking-[0.34em] text-gold/70">
            {taglineWords.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
