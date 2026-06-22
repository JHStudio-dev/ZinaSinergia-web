import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function Testimonials() {
  const { testimonials } = site;
  const [featured, ...rest] = testimonials.items;

  return (
    <section
      id="impacto"
      className="zs-surface-raised scroll-mt-24 py-24 sm:py-32"
    >
      <Container>
        <AnimatedReveal className="max-w-2xl">
          <span
            aria-hidden
            className="font-display text-6xl leading-none text-gold/60"
          >
            “
          </span>
          <h2 className="mt-2 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ivory sm:text-5xl">
            {testimonials.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ivory/70 sm:text-lg">
            {testimonials.intro}
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={80}>
          <figure className="mt-14 border-y border-ivory/10 py-10 sm:py-12">
            <blockquote className="max-w-4xl font-display text-2xl italic leading-snug text-ivory sm:text-[2rem]">
              {featured.quote}
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-ivory/55">
              <span className="h-px w-8 bg-gold/70" aria-hidden />
              {featured.role}
            </figcaption>
          </figure>
        </AnimatedReveal>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-12">
          {rest.map((item, i) => (
            <AnimatedReveal key={item.role} delay={160 + i * 90} className="h-full">
              <figure className="h-full">
                <blockquote className="font-display text-xl italic leading-relaxed text-ivory/85">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-ivory/55">
                  <span className="h-px w-6 bg-gold/70" aria-hidden />
                  {item.role}
                </figcaption>
              </figure>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
