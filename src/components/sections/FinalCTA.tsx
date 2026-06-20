import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";

export function FinalCTA() {
  const { finalCta } = site;

  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden bg-night py-28 sm:py-36"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-28%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(191,157,87,0.2),transparent_60%)] blur-2xl" />
      </div>

      <Container className="relative">
        <AnimatedReveal className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <SectionLabel>{finalCta.overline}</SectionLabel>
          </div>
          <h2 className="mt-8 font-display text-4xl font-medium leading-[1.06] tracking-tight text-ivory sm:text-6xl">
            {finalCta.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">
            {finalCta.subtitle}
          </p>
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={finalCta.primary.href} external>
              {finalCta.primary.label}
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Button>
            <Button href={finalCta.secondary.href} variant="secondary">
              {finalCta.secondary.label}
            </Button>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
