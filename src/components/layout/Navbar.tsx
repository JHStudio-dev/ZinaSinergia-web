"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
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
    const onScroll = () => setScrolled(window.scrollY > 16);
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ivory/10 bg-night/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <span
        aria-hidden
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-25" : "opacity-100"
        }`}
      />

      <Container
        className={`relative flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-20 sm:h-24"
        }`}
      >
        <a
          href="#inicio"
          className="group flex items-center gap-3"
          aria-label="Zina Sinergia, ir al inicio"
        >
          <span className="zs-tick h-6 transition-transform duration-300 group-hover:scale-y-125" />
          <Wordmark tone="dark" />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="zs-link text-sm tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={site.cta.href}
          className="group/cta hidden items-center gap-2 rounded-full border border-gold/40 px-5 py-2 text-sm text-ivory transition-all duration-300 hover:border-gold hover:bg-gold/10 lg:inline-flex"
        >
          {site.cta.label}
          <span
            aria-hidden
            className="text-gold transition-transform duration-300 group-hover/cta:translate-x-0.5"
          >
            →
          </span>
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group flex h-9 w-9 flex-col items-end justify-center gap-1.5 lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span className="h-px w-7 bg-ivory transition-colors duration-300 group-hover:bg-gold" />
          <span className="h-px w-5 bg-ivory transition-all duration-300 group-hover:w-7 group-hover:bg-gold" />
        </button>
      </Container>

      <div
        className={`fixed inset-0 z-50 flex flex-col bg-night transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent"
        />

        <Container className="flex h-20 items-center justify-between">
          <a
            href="#inicio"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <span className="zs-tick h-6" />
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
        </Container>

        <Container className="flex flex-1 flex-col justify-center">
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
                  aria-hidden
                  className="text-base text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2"
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
            <span aria-hidden>→</span>
          </a>
        </Container>

        <Container className="pb-10">
          <div className="flex flex-col gap-1.5 text-[0.7rem] uppercase tracking-[0.34em] text-gold/70">
            {taglineWords.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
}
