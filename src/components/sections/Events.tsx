import Image from "next/image";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function Events() {
  const { events } = site;

  return (
    <section
      id="eventos"
      className="zs-events scroll-mt-24 overflow-hidden"
    >

      <div className="zs-events__backdrop" aria-hidden="true">
        <Image
          src="/images/zina-conferencia.png"
          alt="Zina en conferencia"s
          fill
          sizes="100vw"
          className="zs-events__image"
          priority={false}
        />
        <div className="zs-events__overlay" />
      </div>


      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-0">


          <div className="lg:col-span-6 xl:col-span-5">
            <AnimatedReveal>
              <span className="zs-events__eyebrow">
                <span className="zs-events__eyebrow-line" aria-hidden="true" />
                Speaker · Coach · Conferencista
              </span>

              <h2 className="zs-events__heading">
                {events.heading}
              </h2>

              <p className="zs-events__intro">
                {events.intro}
              </p>
            </AnimatedReveal>


            <AnimatedReveal delay={120}>
              <div className="zs-events__topics">
                <p className="zs-events__topics-label">Temas que aborda</p>
                <ul className="zs-events__topics-list">
                  {events.topics.map((topic) => (
                    <li key={topic} className="zs-events__topic">
                      <span className="zs-events__topic-dot" aria-hidden="true" />
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
                    {events.formats.join(" · ")}
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


          <div className="hidden lg:col-span-6 lg:block xl:col-span-7" />
        </div>
      </div>


      <AnimatedReveal delay={340}>
        <div className="zs-events__caption" aria-hidden="true">
          <span className="zs-events__caption-line" />
          <span className="zs-events__caption-text">
            {events.speaker.caption}
          </span>
        </div>
      </AnimatedReveal>
    </section>
  );
}
