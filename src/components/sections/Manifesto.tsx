import { Fragment } from "react";
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
        <AnimatedReveal>
          <h2 className="max-w-4xl font-display text-[2.4rem] font-medium leading-[1.12] tracking-tight text-ivory sm:text-5xl lg:text-[3.4rem]">
            {manifesto.phrase}{" "}
            <span className="italic text-gold">{manifesto.accent}</span>
          </h2>
        </AnimatedReveal>

        <AnimatedReveal delay={140}>
          <p className="mt-9 max-w-xl text-base leading-relaxed text-ivory/65 sm:text-lg lg:ml-auto">
            {manifesto.text}
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={220}>
          <div className="zs-flow mt-16 sm:mt-20">
            {manifesto.sequence.map((step, index) => (
              <Fragment key={step}>
                {index > 0 ? (
                  <span className="zs-flow__line" aria-hidden="true" />
                ) : null}
                <span className="zs-flow__step">
                  <span className="zs-flow__node" aria-hidden="true" />
                  {step}
                </span>
              </Fragment>
            ))}
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
