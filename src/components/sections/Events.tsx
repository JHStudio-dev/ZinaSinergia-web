import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";

export function Events() {
  const { events } = site;

  return (
    <section
      id="eventos"
      className="scroll-mt-24 overflow-hidden bg-carbon py-24 sm:py-32"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <AnimatedReveal className="lg:col-span-5">
          <SectionLabel>Conferencias</SectionLabel>
          <h2 className="mt-7 font-display text-4xl font-medium leading-[1.08] tracking-tight text-gold sm:text-5xl">
            {events.heading}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/70 sm:text-lg">
            {events.intro}
          </p>

          <dl className="mt-9 flex flex-wrap gap-x-12 gap-y-5">
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-ivory/50">
                Formatos
              </dt>
              <dd className="mt-1 font-display text-lg text-ivory">
                {events.formats.join(" · ")}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-ivory/50">
                Modalidad
              </dt>
              <dd className="mt-1 font-display text-lg text-ivory">
                {events.reach}
              </dd>
            </div>
          </dl>

          <div className="mt-9">
            <Button href={events.cta.href}>{events.cta.label}</Button>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={140} className="lg:col-span-7">
          <div className="rounded-3xl border border-ivory/10 bg-carbon p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-ivory/50">
              Temas que aborda
            </p>
            <ul className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {events.topics.map((topic) => (
                <li
                  key={topic}
                  className="flex items-center gap-3 border-t border-ivory/10 pt-4 text-ivory/85"
                >
                  <span
                    className="h-1 w-1 shrink-0 rounded-full bg-gold"
                    aria-hidden
                  />
                  <span className="text-base leading-snug">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
