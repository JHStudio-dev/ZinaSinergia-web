import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";

export function Testimonials() {
  const { testimonials } = site;
  const [featured, ...rest] = testimonials.items;

  return (
    <section id="impacto" className="scroll-mt-24 bg-night py-24 sm:py-32">
      <Container>
        <AnimatedReveal className="max-w-2xl">
          <SectionLabel>Testimonios</SectionLabel>
          <h2 className="mt-7 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ivory sm:text-5xl">
            {testimonials.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ivory/70 sm:text-lg">
            {testimonials.intro}
          </p>
        </AnimatedReveal>

        <div className="mt-14 space-y-6">
          <AnimatedReveal delay={80}>
            <figure className="rounded-3xl border border-gold/20 bg-carbon p-8 sm:p-12">
              <span aria-hidden className="font-display text-6xl leading-none text-gold/55">
                “
              </span>
              <blockquote className="mt-2 max-w-3xl font-display text-2xl italic leading-snug text-ivory sm:text-3xl">
                {featured.quote}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-ivory/55">
                <span className="h-px w-8 bg-gold/70" aria-hidden />
                {featured.role}
              </figcaption>
            </figure>
          </AnimatedReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((item, i) => (
              <AnimatedReveal key={item.role} delay={160 + i * 90} className="h-full">
                <figure className="flex h-full flex-col rounded-3xl border border-ivory/10 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
                  <blockquote className="font-display text-xl italic leading-relaxed text-ivory/90">
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-ivory/55">
                    <span className="h-px w-6 bg-gold/70" aria-hidden />
                    {item.role}
                  </figcaption>
                </figure>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
