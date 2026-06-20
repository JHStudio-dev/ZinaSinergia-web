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
      className="relative flex min-h-[100svh] scroll-mt-24 items-center overflow-hidden bg-night pt-24 pb-16"
    >
      <div aria-hidden className="zs-hero__texture" />
      <div aria-hidden className="zs-hero__glow" />
      <div aria-hidden className="zs-hero__waves" />

      <Container className="relative z-10 grid w-full items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <AnimatedReveal>
            <h1 className="font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight text-ivory sm:text-5xl lg:text-6xl">
              <span className="block">{hero.title.line1}</span>
              <span className="block">{hero.title.line2}</span>
            </h1>
          </AnimatedReveal>

          <AnimatedReveal delay={120}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/65 sm:text-[1.05rem]">
              {hero.subtitle}
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={210}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
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

          <AnimatedReveal delay={300}>
            <div className="mt-10 max-w-lg border-t border-ivory/10 pt-5">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[0.72rem] uppercase tracking-[0.2em] text-ivory/55">
                {hero.signature.map((item, i) => (
                  <Fragment key={item}>
                    {i > 0 ? (
                      <span className="text-gold/50" aria-hidden>
                        /
                      </span>
                    ) : null}
                    <span>{item}</span>
                  </Fragment>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>

        <div className="hidden justify-center lg:col-span-1 lg:flex">
          <span className="zs-vertical-text text-[0.68rem] text-gold/45">
            {hero.aside}
          </span>
        </div>

        <div className="lg:col-span-5">
          <AnimatedReveal delay={180}>
            <div className="relative mx-auto w-full max-w-sm rounded-[2.25rem] border border-gold/30 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-10">
              <div className="flex min-h-[22rem] flex-col sm:min-h-[26rem]">
                <span className="font-display text-2xl tracking-[0.16em] text-gold/85">
                  {hero.panel.monogram}
                </span>

                <p className="my-auto font-display text-3xl leading-[1.12] text-ivory sm:text-4xl">
                  {hero.panel.phrase.map((line, i) => (
                    <Fragment key={line}>
                      {i > 0 ? <br /> : null}
                      {line}
                    </Fragment>
                  ))}
                </p>

                <div className="mt-8 border-t border-gold/20 pt-5 text-[0.7rem] uppercase tracking-[0.22em] text-gold/85">
                  {hero.panel.roles.join(" · ")}
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </Container>

      <span
        aria-hidden
        className="absolute bottom-6 right-6 text-lg text-gold/55"
      >
        ✦
      </span>
    </section>
  );
}
