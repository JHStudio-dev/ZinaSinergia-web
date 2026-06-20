import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";

export function About() {
  const { about } = site;

  return (
    <section
      id="sobre-zina"
      className="scroll-mt-24 bg-ivory py-24 sm:py-32"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <AnimatedReveal>
            <SectionLabel index="01">Sobre Zina</SectionLabel>
            <h2 className="mt-7 font-display text-4xl font-medium leading-[1.1] tracking-tight text-carbon sm:text-5xl">
              {about.heading}
            </h2>
          </AnimatedReveal>
        </div>

        <div className="lg:col-span-7 lg:pt-2">
          <AnimatedReveal delay={120}>
            <p className="font-display text-2xl italic leading-snug text-carbon/90 sm:text-3xl">
              {about.lead}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-carbon/70 sm:text-lg">
              {about.body}
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={220}>
            <figure className="mt-12 overflow-hidden rounded-3xl bg-carbon px-8 py-10 text-ivory sm:px-12 sm:py-14">
              <span aria-hidden className="font-display text-5xl leading-none text-gold/70">
                “
              </span>
              <blockquote className="mt-3 font-display text-2xl leading-snug text-ivory sm:text-3xl">
                {about.manifesto}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-ivory/60">
                <span className="h-px w-8 bg-gold/60" aria-hidden />
                {about.signature}
              </figcaption>
            </figure>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
