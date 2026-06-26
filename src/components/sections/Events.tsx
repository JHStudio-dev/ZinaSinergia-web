import Image from "next/image";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function Events() {
  const { events } = site;

  return (
    <section id="eventos" className="zs-events scroll-mt-24">
      <div className="zs-events__backdrop" aria-hidden="true">
        <Image
          src="/images/zina-confe.jpg"
          alt="Zina en conferencia"
          fill
          sizes="100vw"
          className="zs-events__image"
          priority={false}
        />
        <div className="zs-events__overlay" />
      </div>

      <Container className="zs-events__content relative z-10">
        <div className="max-w-xl lg:max-w-2xl">
          <AnimatedReveal>
            <span className="zs-events__eyebrow">
              <span className="zs-events__eyebrow-line" aria-hidden="true" />
              Conferencista
            </span>

            <h2 className="zs-events__heading">{events.heading}</h2>

            <p className="zs-events__intro">{events.intro}</p>
          </AnimatedReveal>

          <AnimatedReveal delay={120}>
            <div className="zs-events__topics">
              <p className="zs-events__topics-label">Temas que aborda</p>
              <ul className="zs-events__topics-list">
                {events.topics.map((topic) => (
                  <li key={topic} className="zs-events__topic">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={200}>
            <div className="zs-events__meta">
              <div className="zs-events__meta-block">
                <span className="zs-events__meta-label">Formatos</span>
                <span className="zs-events__meta-value">
                  {events.formats.join(", ")}
                </span>
              </div>
              <div className="zs-events__meta-divider" aria-hidden="true" />
              <div className="zs-events__meta-block">
                <span className="zs-events__meta-label">Modalidad</span>
                <span className="zs-events__meta-value">{events.reach}</span>
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={280}>
            <div className="mt-10 sm:mt-12">
              <Button href={events.cta.href}>{events.cta.label}</Button>
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
