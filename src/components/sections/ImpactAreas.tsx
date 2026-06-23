import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function ImpactAreas() {
  const { impactAreas } = site;

  return (
    <section id="areas" className="zs-surface scroll-mt-24 py-24 sm:py-32 lg:py-40">
      <Container>
        <AnimatedReveal className="max-w-3xl">
          <h2 className="font-display text-3xl font-medium leading-[1.12] tracking-tight text-ivory sm:text-4xl lg:text-5xl">
            {impactAreas.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/65 sm:text-lg">
            {impactAreas.intro}
          </p>
        </AnimatedReveal>

        <div className="mt-16 grid gap-x-16 gap-y-12 sm:grid-cols-2 lg:mt-20">
          {impactAreas.items.map((item, i) => (
            <AnimatedReveal key={item.title} delay={i * 80}>
              <article className="group border-t border-ivory/10 pt-6">
                <span
                  aria-hidden
                  className="block h-px w-10 bg-gold/60 transition-all duration-300 group-hover:w-16"
                />
                <h3 className="mt-5 font-display text-2xl text-ivory sm:text-[1.7rem]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-ivory/60">
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
