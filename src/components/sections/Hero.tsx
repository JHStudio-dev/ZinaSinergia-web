import { Fragment } from "react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site, whatsappUrl } from "@/data/site";

export function Hero() {
  const { hero } = site;
  const primaryHref = whatsappUrl(
    "Hola Zina, me gustaría agendar una conversación. ¿Cómo empezamos?",
  );

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] scroll-mt-24 items-center overflow-hidden bg-night pt-28 pb-20"
    >
      <div aria-hidden className="zs-hero__texture" />
      <div aria-hidden className="zs-hero__glow" />
      <div aria-hidden className="zs-hero__waves">
        <svg viewBox="0 0 560 820" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="zsFold" x1="0" y1="0" x2="0.25" y2="1">
              <stop offset="0" stopColor="#c2a15c" stopOpacity="0" />
              <stop offset="0.38" stopColor="#e6cd8b" stopOpacity="0.85" />
              <stop offset="0.62" stopColor="#c2a15c" stopOpacity="0.4" />
              <stop offset="1" stopColor="#c2a15c" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="zsFoldDim" x1="0" y1="0" x2="0.25" y2="1">
              <stop offset="0" stopColor="#c2a15c" stopOpacity="0" />
              <stop offset="0.5" stopColor="#c2a15c" stopOpacity="0.22" />
              <stop offset="1" stopColor="#c2a15c" stopOpacity="0" />
            </linearGradient>
            <path
              id="zsFoldA"
              d="M 300 -60 C 170 170 330 330 215 510 C 135 645 280 745 195 900"
            />
            <path
              id="zsFoldB"
              d="M 360 -60 C 235 160 405 300 250 470 C 150 615 320 760 235 915"
            />
          </defs>
          <g
            fill="none"
            stroke="url(#zsFoldDim)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          >
            <use href="#zsFoldA" transform="translate(-70 0)" />
            <use href="#zsFoldB" transform="translate(-30 0)" />
            <use href="#zsFoldA" transform="translate(12 0)" />
          </g>
          <g
            fill="none"
            stroke="url(#zsFold)"
            strokeWidth="1.1"
            vectorEffect="non-scaling-stroke"
          >
            <use href="#zsFoldB" transform="translate(54 0)" />
            <use href="#zsFoldA" transform="translate(98 0)" />
            <use href="#zsFoldB" transform="translate(142 0)" />
            <use href="#zsFoldA" transform="translate(190 0)" />
            <use href="#zsFoldB" transform="translate(238 0)" />
            <use href="#zsFoldA" transform="translate(288 0)" />
            <use href="#zsFoldB" transform="translate(338 0)" />
          </g>
        </svg>
      </div>

      <Container className="relative z-10 w-full">
        <div className="max-w-3xl">
          <AnimatedReveal>
            <p className="mb-7 flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.34em] text-ivory/55">
              <span className="zs-tick h-4" />
              {hero.lead}
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={80}>
            <h1 className="font-display text-[2.9rem] font-medium leading-[1.04] tracking-tight text-ivory sm:text-6xl lg:text-[4.6rem]">
              <span className="block">{hero.title.line1}</span>
              <span className="block">
                {hero.title.line2}{" "}
                <span className="text-gold">{hero.title.accent}</span>
              </span>
            </h1>
          </AnimatedReveal>

          <AnimatedReveal delay={160}>
            <div className="mt-8 flex items-start gap-5">
              <span
                aria-hidden
                className="mt-3.5 hidden h-px w-12 shrink-0 bg-gradient-to-r from-gold to-transparent sm:block"
              />
              <p className="max-w-xl text-base leading-relaxed text-ivory/70 sm:text-[1.05rem]">
                {hero.subtitle}
              </p>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={240}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={primaryHref} external>
                {hero.primaryCta.label}
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={320}>
            <div className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-ivory/10 pt-6 text-[0.78rem] tracking-wide text-ivory/60">
              {hero.signature.map((item, i) => (
                <Fragment key={item}>
                  {i > 0 ? (
                    <span
                      aria-hidden
                      className="h-1 w-1 rounded-full bg-gold/55"
                    />
                  ) : null}
                  <span>{item}</span>
                </Fragment>
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </Container>

      <span
        aria-hidden
        className="absolute right-5 top-1/2 hidden -translate-y-1/2 lg:block"
      >
        <span className="zs-vertical-text text-[0.66rem] text-gold/40">
          {hero.aside}
        </span>
      </span>
    </section>
  );
}
