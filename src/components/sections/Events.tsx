import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DecorativeFrame } from "@/components/ui/DecorativeFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";

export function Events() {
  const { events } = site;

  return (
    <section id="eventos" className="scroll-mt-24 bg-champagne py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <AnimatedReveal>
          <DecorativeFrame
            caption={events.speaker.caption}
            note={events.speaker.note}
          />
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-carbon/50">
                Formatos
              </dt>
              <dd className="mt-1 font-display text-lg text-carbon">
                {events.formats.join(" · ")}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-carbon/50">
                Modalidad
              </dt>
              <dd className="mt-1 font-display text-lg text-carbon">
                {events.reach}
              </dd>
            </div>
          </dl>
        </AnimatedReveal>

        <AnimatedReveal delay={140}>
          <SectionLabel index="04">Eventos y conferencias</SectionLabel>
          <h2 className="mt-7 font-display text-4xl font-medium leading-[1.08] tracking-tight text-carbon sm:text-5xl">
            {events.heading}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-carbon/70 sm:text-lg">
            {events.intro}
          </p>

          <p className="mt-10 text-xs uppercase tracking-[0.24em] text-carbon/50">
            Temas que aborda
          </p>
          <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {events.topics.map((topic) => (
              <li
                key={topic}
                className="flex items-center gap-3 text-base text-carbon/80"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden />
                {topic}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button href={events.cta.href}>{events.cta.label}</Button>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
