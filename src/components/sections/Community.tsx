import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";

export function Community() {
  const { community } = site;

  return (
    <section id="comunidad" className="scroll-mt-24 bg-champagne py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <AnimatedReveal>
            <SectionLabel index="06">Comunidad</SectionLabel>
            <h2 className="mt-7 font-display text-4xl font-medium leading-[1.1] tracking-tight text-carbon sm:text-5xl">
              {community.heading}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-carbon/70 sm:text-lg">
              {community.intro}
            </p>
            <div className="mt-9">
              <Button href={community.cta.href} variant="secondary" external>
                {community.cta.label}
              </Button>
            </div>
          </AnimatedReveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-5 sm:grid-cols-3">
            {community.items.map((item, i) => (
              <AnimatedReveal key={item.title} delay={i * 100} className="h-full">
                <article className="group flex h-full flex-col rounded-2xl border border-carbon/10 bg-ivory/60 p-6 transition-colors duration-300 hover:border-gold/50">
                  <span className="h-px w-10 bg-gold/60 transition-all duration-300 group-hover:w-16" aria-hidden />
                  <h3 className="mt-5 font-display text-2xl text-carbon">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-carbon/70">
                    {item.description}
                  </p>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
