import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";

export function ImpactAreas() {
  const { impactAreas } = site;

  return (
    <section id="areas" className="scroll-mt-24 bg-champagne py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <AnimatedReveal>
            <SectionLabel index="02">Áreas de impacto</SectionLabel>
            <h2 className="mt-7 font-display text-4xl font-medium leading-[1.1] tracking-tight text-carbon sm:text-5xl">
              {impactAreas.heading}
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-carbon/70">
              {impactAreas.intro}
            </p>
          </AnimatedReveal>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t border-carbon/10">
            {impactAreas.items.map((item, i) => (
              <AnimatedReveal key={item.title} delay={i * 90}>
                <article className="group grid grid-cols-[auto_1fr] gap-5 border-b border-carbon/10 py-7 transition-transform duration-300 hover:translate-x-1 sm:gap-8 sm:py-8">
                  <span className="font-display text-2xl tabular-nums text-gold/70 transition-colors duration-300 group-hover:text-gold">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-carbon sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-base leading-relaxed text-carbon/70">
                      {item.description}
                    </p>
                  </div>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
