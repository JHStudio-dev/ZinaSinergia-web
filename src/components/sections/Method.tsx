import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function Method() {
  const { method } = site;

  return (
    <section id="metodo" className="zs-surface scroll-mt-24 py-24 sm:py-32 lg:py-40">
      <Container>
        <AnimatedReveal className="max-w-3xl">
          <h2 className="font-display text-3xl font-medium leading-[1.12] tracking-tight text-ivory sm:text-4xl lg:text-5xl">
            {method.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/65 sm:text-lg">
            {method.intro}
          </p>
        </AnimatedReveal>

        <div className="mt-16 flex flex-col gap-14 sm:mt-20 sm:gap-16">
          {method.steps.map((step, i) => (
            <AnimatedReveal key={step.title} delay={i * 110}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-10 lg:gap-16">
                <h3 className="shrink-0 font-display text-5xl leading-[0.95] text-gold sm:text-6xl lg:text-7xl">
                  {step.title}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">
                  {step.description}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
