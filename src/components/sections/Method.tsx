import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";

export function Method() {
  const { method } = site;

  return (
    <section id="metodo" className="scroll-mt-24 bg-carbon py-24 sm:py-32">
      <Container>
        <AnimatedReveal className="max-w-2xl">
          <SectionLabel>Método</SectionLabel>
          <h2 className="mt-7 font-display text-4xl font-medium leading-[1.05] tracking-tight text-gold sm:text-6xl">
            {method.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ivory/70 sm:text-lg">
            {method.intro}
          </p>
        </AnimatedReveal>

        <div className="relative mt-16 sm:mt-20">
          <span
            aria-hidden
            className="absolute bottom-6 left-6 top-6 w-px bg-gold/30 sm:left-7"
          />
          {method.steps.map((step, i) => (
            <AnimatedReveal key={step.title} delay={i * 110}>
              <div className="relative grid grid-cols-[auto_1fr] gap-6 pb-12 last:pb-0 sm:gap-10">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-carbon font-display text-lg text-gold sm:h-14 sm:w-14 sm:text-xl">
                  0{i + 1}
                </span>
                <div className="pt-1.5 sm:pt-2.5">
                  <h3 className="font-display text-3xl text-ivory sm:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
