import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function ImpactAreas() {
  const { impactAreas } = site;

  return (
    <section id="areas" className="zs-surface scroll-mt-24 py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <AnimatedReveal>
            <span className="zs-rule-left block h-px w-16" aria-hidden />
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ivory sm:text-5xl">
              {impactAreas.heading}
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ivory/65">
              {impactAreas.intro}
            </p>
          </AnimatedReveal>
        </div>

        <div className="grid gap-x-12 sm:grid-cols-2 lg:col-span-8">
          {impactAreas.items.map((item, i) => (
            <AnimatedReveal key={item.title} delay={i * 80} className="h-full">
              <article className="group h-full border-t border-ivory/10 pb-9 pt-7">
                <span
                  aria-hidden
                  className="block h-px w-10 bg-gold/60 transition-all duration-300 group-hover:w-16"
                />
                <h3 className="mt-5 font-display text-2xl text-ivory sm:text-[1.6rem]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-ivory/60">
                  {item.description}
                </p>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
