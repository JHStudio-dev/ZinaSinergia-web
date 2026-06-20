"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { site } from "@/data/site";

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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ivory/10 bg-night/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <Container
        className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a
          href="#inicio"
          className="group flex items-center gap-2.5"
          aria-label="Zina Sinergia, ir al inicio"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold transition-transform duration-300 group-hover:scale-150" />
          <Wordmark tone="dark" />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm text-ivory/75 transition-colors hover:text-ivory"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href={site.cta.href}
          className="hidden rounded-full border border-ivory/20 px-5 py-2 text-sm text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/70 hover:text-gold lg:inline-flex"
        >
          {site.cta.label}
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex flex-col items-end gap-1.5 lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span className="h-px w-7 bg-ivory" />
          <span className="h-px w-5 bg-ivory" />
        </button>
      </Container>

      <div
        className={`fixed inset-0 z-50 flex flex-col bg-night transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <Container className="flex h-20 items-center justify-between">
          <Wordmark tone="dark" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="relative h-7 w-7"
          >
            <span className="absolute left-1/2 top-1/2 h-px w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-ivory" />
            <span className="absolute left-1/2 top-1/2 h-px w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-ivory" />
          </button>
        </Container>

        <Container className="flex flex-1 flex-col justify-center">
          {site.nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-ivory/10 py-4 font-display text-3xl text-ivory transition-colors hover:text-gold"
            >
              <span className="text-sm text-gold">0{i + 1}</span>
              {item.label}
            </a>
          ))}
          <a
            href={site.cta.href}
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex w-fit rounded-full bg-gold px-7 py-3 text-sm text-night"
          >
            {site.cta.label}
          </a>
        </Container>
      </div>
    </header>
  );
}
