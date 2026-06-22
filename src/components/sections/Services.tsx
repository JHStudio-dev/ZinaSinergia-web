import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { mailtoUrl, site, whatsappUrl } from "@/data/site";

function TopicList({
  topics,
  columns = false,
}: {
  topics: readonly string[];
  columns?: boolean;
}) {
  return (
    <ul
      className={`mt-6 grid gap-x-8 gap-y-3 ${columns ? "sm:grid-cols-2" : ""}`}
    >
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
    <section id="servicios" className="zs-surface scroll-mt-24 py-24 sm:py-32">
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
            <article className="overflow-hidden rounded-2xl border border-gold/30 bg-night/40 p-8 sm:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
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
                  <TopicList topics={featured.topics} columns />
                  <div className="mt-9">
                    <Button href={whatsappUrl(featured.cta.message)} external>
                      {featured.cta.label}
                    </Button>
                  </div>
                </div>

                <div className="flex">
                  <div className="self-center border-l border-gold/25 pl-7">
                    <p className="font-display text-xl italic leading-snug text-ivory">
                      {featured.note.question}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                      {featured.note.answer}
                    </p>
                  </div>
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
                  <article className="flex h-full flex-col rounded-2xl border border-ivory/10 bg-carbon/40 p-8 transition-colors duration-300 hover:border-gold/40">
                    <span className="text-xs uppercase tracking-[0.24em] text-gold">
                      {group.kind}
                    </span>
                    <h3 className="mt-4 font-display text-2xl text-ivory sm:text-3xl">
                      {group.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                      {group.description}
                    </p>
                    <TopicList topics={group.topics} />
                    <div className="mt-auto pt-9">
                      <Button
                        href={href}
                        external={isWhatsapp}
                        variant={isWhatsapp ? "secondary" : "ghost"}
                      >
                        {group.cta.label}
                        {!isWhatsapp ? (
                          <span
                            aria-hidden
                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                          >
                            →
                          </span>
                        ) : null}
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
