import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { mailtoUrl, site, whatsappUrl } from "@/data/site";

function TopicList({ topics }: { topics: readonly string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {topics.map((topic) => (
        <li key={topic} className="flex items-baseline gap-3 text-ivory/80">
          <span
            className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold"
            aria-hidden
          />
          <span className="text-base leading-snug">{topic}</span>
        </li>
      ))}
    </ul>
  );
}

export function Services() {
  const { services } = site;
  const featured = services.groups[1];
  const secondary = [services.groups[0], services.groups[2]];

  return (
    <section id="servicios" className="scroll-mt-24 bg-night py-24 sm:py-32">
      <Container>
        <AnimatedReveal className="max-w-2xl">
          <SectionLabel>Servicios</SectionLabel>
          <h2 className="mt-7 font-display text-4xl font-medium leading-[1.1] tracking-tight text-gold sm:text-5xl">
            {services.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ivory/70 sm:text-lg">
            {services.intro}
          </p>
        </AnimatedReveal>

        <div className="mt-14 space-y-6">
          <AnimatedReveal>
            <article className="grid gap-10 rounded-3xl border border-gold/25 bg-carbon p-8 sm:p-12 lg:grid-cols-2">
              <div>
                <span className="text-xs uppercase tracking-[0.24em] text-gold">
                  {featured.kind}
                </span>
                <h3 className="mt-4 font-display text-3xl text-gold sm:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-ivory/70">
                  {featured.description}
                </p>
                <TopicList topics={featured.topics} />
                <div className="mt-8">
                  <Button href={whatsappUrl(featured.cta.message)} external>
                    {featured.cta.label}
                  </Button>
                </div>
              </div>

              <div className="flex">
                <div className="self-center rounded-2xl bg-champagne px-7 py-8 text-carbon">
                  <p className="font-display text-xl leading-snug">
                    {featured.note.question}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-carbon/75">
                    {featured.note.answer}
                  </p>
                </div>
              </div>
            </article>
          </AnimatedReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {secondary.map((group, i) => {
              const isWhatsapp = group.cta.type === "whatsapp";
              const href =
                group.cta.type === "whatsapp"
                  ? whatsappUrl(group.cta.message)
                  : mailtoUrl(group.cta.subject);

              return (
                <AnimatedReveal key={group.id} delay={i * 90} className="h-full">
                  <article className="flex h-full flex-col rounded-3xl border border-ivory/10 bg-carbon p-8 transition-colors duration-300 hover:border-gold/40">
                    <span className="text-xs uppercase tracking-[0.24em] text-gold">
                      {group.kind}
                    </span>
                    <h3 className="mt-4 font-display text-2xl text-gold sm:text-3xl">
                      {group.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                      {group.description}
                    </p>
                    <TopicList topics={group.topics} />
                    <div className="mt-8 pt-2">
                      <Button
                        href={href}
                        external={isWhatsapp}
                        variant={isWhatsapp ? "primary" : "secondary"}
                      >
                        {group.cta.label}
                      </Button>
                    </div>
                  </article>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
