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
      <Container>
        <div className="lg:flex lg:gap-12 xl:gap-20">
          <div className="lg:w-[42%]">
            <div className="py-20 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-0">
              <AnimatedReveal>
                <h2 className="font-display text-3xl font-medium leading-[1.12] tracking-tight text-ivory sm:text-4xl lg:text-5xl">
                  {method.title}
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/65 sm:text-lg">
                  {method.intro}
                </p>
              </AnimatedReveal>

              <ul className="mt-12 hidden flex-col gap-5 lg:flex">
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

          <div ref={stepsRef} className="lg:w-[58%]">
            {method.steps.map((step, index) => (
              <div
                key={step.title}
                data-step={index}
                className="flex flex-col justify-center py-16 lg:min-h-screen lg:py-0"
              >
                <AnimatedReveal>
                  <h3 className="font-display text-[2.6rem] leading-[0.97] text-gold sm:text-6xl lg:text-7xl">
                    {step.title}
                  </h3>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/70 sm:text-lg">
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
