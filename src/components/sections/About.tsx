import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function About() {
  const { about } = site;

  return (
    <section
      id="sobre-zina"
      className="zs-surface-raised scroll-mt-24 py-24 sm:py-32 lg:py-40"
    >
      <Container>
        <AnimatedReveal>
          <h2 className="max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-gold sm:text-5xl lg:text-6xl">
            {about.heading}
          </h2>
        </AnimatedReveal>

        <AnimatedReveal delay={120}>
          <p className="mt-12 max-w-2xl font-display text-2xl italic leading-[1.3] text-ivory/90 sm:text-[1.9rem] lg:ml-[16%]">
            {about.lead}
          </p>
        </AnimatedReveal>

        {/* Slot reservado: aquí puede entrar un retrato de Zina junto al texto. */}
        <AnimatedReveal delay={180}>
          <p className="mt-12 max-w-[58ch] text-base leading-relaxed text-ivory/70 sm:text-lg">
            {about.body}
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={240}>
          <figure className="mt-16 max-w-3xl rounded-2xl bg-champagne px-8 py-10 text-carbon sm:px-12 sm:py-14 lg:ml-auto">
            <p className="font-display text-2xl leading-snug text-carbon sm:text-3xl">
              {about.manifesto}
            </p>
            <figcaption className="mt-7 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-carbon/60">
              <span className="h-px w-8 bg-gold" aria-hidden />
              {about.signature}
            </figcaption>
          </figure>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
