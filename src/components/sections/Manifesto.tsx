import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function Manifesto() {
  const { manifesto } = site;

  return (
    <section
      id="manifiesto"
      className="scroll-mt-24 bg-night py-28 sm:py-36 lg:py-44"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-20">
          <div className="lg:col-span-6">
            <AnimatedReveal>
              <h2 className="font-display text-[2.4rem] font-medium leading-[1.12] tracking-tight text-ivory sm:text-5xl lg:text-[3.3rem]">
                {manifesto.phrase}{" "}
                <span className="italic text-gold">{manifesto.accent}</span>
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={140}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-ivory/65 sm:text-lg">
                {manifesto.text}
              </p>
            </AnimatedReveal>
          </div>

          <div className="lg:col-span-6">
            <AnimatedReveal delay={200}>
              <ul className="zs-flow">
                {manifesto.sequence.map((step) => (
                  <li key={step.word} className="zs-flow__item">
                    <span className="zs-flow__node" aria-hidden="true" />
                    <div className="zs-flow__body">
                      <span className="zs-flow__word">{step.word}</span>
                      <span className="zs-flow__meaning">{step.meaning}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </AnimatedReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
