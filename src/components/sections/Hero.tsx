import { Fragment } from "react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DecorativeFrame } from "@/components/ui/DecorativeFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";

export function Hero() {
  const { hero } = site;

  return (
    <section
      id="inicio"
      className="relative flex min-h-[90svh] scroll-mt-24 items-center overflow-hidden bg-night pt-28 pb-24 lg:pt-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-14%] top-[-6%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(circle,rgba(191,157,87,0.18),transparent_62%)] blur-2xl" />
        <div className="absolute bottom-[-22%] left-[-12%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(179,101,79,0.12),transparent_65%)] blur-2xl" />
      </div>

      <Container className="relative grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <AnimatedReveal>
            <SectionLabel>{hero.overline}</SectionLabel>
          </AnimatedReveal>

          <AnimatedReveal delay={90}>
            <h1 className="mt-7 font-display text-[2.75rem] font-medium leading-[1.05] tracking-tight text-ivory sm:text-6xl lg:text-7xl">
              {hero.title.lead}{" "}
              <em className="italic text-gold">{hero.title.accent}</em>{" "}
              {hero.title.tail}
            </h1>
          </AnimatedReveal>

          <AnimatedReveal delay={180}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">
              {hero.subtitle}
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={270}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={hero.primaryCta.href}>
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

          <AnimatedReveal delay={360}>
            <div className="mt-12 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-ivory/55">
              {hero.pillars.map((pillar, i) => (
                <Fragment key={pillar}>
                  {i > 0 ? (
                    <span
                      className="h-1 w-1 rounded-full bg-gold/70"
                      aria-hidden
                    />
                  ) : null}
                  <span>{pillar}</span>
                </Fragment>
              ))}
            </div>
          </AnimatedReveal>
        </div>

        <div className="lg:col-span-5">
          <AnimatedReveal delay={220}>
            <DecorativeFrame
              caption={hero.portrait.caption}
              note={hero.portrait.note}
            />
          </AnimatedReveal>
        </div>
      </Container>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-7 hidden justify-center lg:flex"
      >
        <span className="flex flex-col items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-ivory/45">
          Scroll
          <span className="hero-scroll-cue h-9 w-px bg-gradient-to-b from-gold/70 to-transparent" />
        </span>
      </div>
    </section>
  );
}
