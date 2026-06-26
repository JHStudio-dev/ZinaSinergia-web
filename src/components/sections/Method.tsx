"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function Method() {
  const { method } = site;
  const [active, setActive] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = stepsRef.current;
    if (!container) return;

    const steps = Array.from(
      container.querySelectorAll<HTMLElement>("[data-step]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.getAttribute("data-step")));
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="metodo" className="zs-surface scroll-mt-24">
      <Container className="py-24 sm:py-32 lg:hidden">
        <AnimatedReveal className="max-w-3xl">
          <h2 className="font-display text-3xl font-medium leading-[1.12] tracking-tight text-ivory sm:text-4xl">
            {method.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">
            {method.intro}
          </p>
        </AnimatedReveal>

        <div className="mt-16 flex flex-col gap-14 sm:mt-20 sm:gap-16">
          {method.steps.map((step, index) => (
            <AnimatedReveal key={step.title} delay={index * 110}>
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-[2.6rem] leading-[0.97] text-gold sm:text-6xl">
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

      <Container className="hidden lg:block">
        <div className="flex gap-12 xl:gap-20">
          <div className="w-[42%]">
            <div className="sticky top-0 flex h-screen flex-col justify-center">
              <AnimatedReveal>
                <h2 className="font-display text-5xl font-medium leading-[1.12] tracking-tight text-ivory">
                  {method.title}
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-ivory/65">
                  {method.intro}
                </p>
              </AnimatedReveal>

              <ul className="mt-12 flex flex-col gap-5">
                {method.steps.map((step, index) => (
                  <li
                    key={step.title}
                    className={`flex items-center gap-4 font-display text-2xl transition-colors duration-500 ${
                      active === index ? "text-gold" : "text-ivory/25"
                    }`}
                  >
                    <span
                      className={`h-px transition-all duration-500 ${
                        active === index ? "w-12 bg-gold" : "w-5 bg-ivory/20"
                      }`}
                    />
                    {step.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div ref={stepsRef} className="w-[58%]">
            {method.steps.map((step, index) => (
              <div
                key={step.title}
                data-step={index}
                className="flex min-h-[125vh] flex-col justify-center"
              >
                <AnimatedReveal>
                  <h3 className="font-display text-7xl leading-[0.97] text-gold">
                    {step.title}
                  </h3>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory/70">
                    {step.description}
                  </p>
                </AnimatedReveal>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
