import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";

export function Method() {
  const { method } = site;

  return (
    <section
      id="metodo"
      className="zs-surface-raised scroll-mt-24 py-24 sm:py-32"
    >
      <Container>
        <AnimatedReveal className="max-w-2xl">
          <SectionLabel>{method.eyebrow}</SectionLabel>
          <h2 className="mt-7 font-display text-4xl font-medium leading-[1.05] tracking-tight text-ivory sm:text-5xl">
            {method.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ivory/70 sm:text-lg">
            {method.intro}
          </p>
        </AnimatedReveal>

        <div className="relative mt-16 sm:mt-20">
          <span
            aria-hidden
            className="absolute inset-x-0 top-1.5 hidden h-px bg-gradient-to-r from-gold/50 via-gold/30 to-transparent md:block"
          />
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {method.steps.map((step, i) => (
              <AnimatedReveal key={step.title} delay={i * 120}>
                <div className="relative">
                  <span
                    aria-hidden
                    className="mb-6 block h-px w-10 bg-gold/60 md:hidden"
                  />
                  <span
                    aria-hidden
                    className="absolute -top-0.5 left-0 hidden h-2.5 w-2.5 rounded-full bg-gold md:block"
                  />
                  <h3 className="font-display text-3xl text-gold sm:text-4xl md:mt-8">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-base leading-relaxed text-ivory/70">
                    {step.description}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
