import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { PortraitImage } from "@/components/ui/PortraitImage";
import { site } from "@/data/site";

export function About() {
  const { about } = site;

  return (
    <section
      id="sobre-zina"
      className="zs-surface-raised scroll-mt-24 py-24 sm:py-32 lg:py-40"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <AnimatedReveal>
              <h2 className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-gold sm:text-5xl">
                {about.heading}
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={120}>
              <p className="mt-8 max-w-xl font-display text-2xl italic leading-[1.3] text-ivory/90 sm:text-[1.7rem]">
                {about.lead}
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={180}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">
                {about.body}
              </p>
            </AnimatedReveal>
          </div>

          <div className="lg:col-span-5">
            <AnimatedReveal delay={160}>
              <div className="zs-portrait mx-auto aspect-[4/5] w-full max-w-sm lg:mx-0 lg:ml-auto">
                <span className="zs-grain absolute inset-0" aria-hidden />
                <PortraitImage
                  src={about.photo}
                  alt="Retrato de Zina, mentora y conferencista de Zina Sinergia"
                />
              </div>
            </AnimatedReveal>
          </div>
        </div>

        <AnimatedReveal delay={120}>
          <figure className="mt-16 max-w-3xl border-l-2 border-gold/40 pl-7 sm:mt-20 sm:pl-9">
            <blockquote className="font-display text-[1.7rem] italic leading-snug text-ivory/90 sm:text-3xl">
              {about.manifesto}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-ivory/55">
              <span className="h-px w-8 bg-gold" aria-hidden />
              {about.signature}
            </figcaption>
          </figure>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
