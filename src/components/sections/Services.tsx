import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
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
      className={`mt-6 grid gap-x-8 gap-y-2.5 border-l border-gold/20 pl-5 ${
        columns ? "sm:grid-cols-2" : ""
      }`}
    >
      {topics.map((topic) => (
        <li
          key={topic}
          className="text-[0.95rem] leading-snug text-ivory/75"
        >
          {topic}
        </li>
      ))}
    </ul>
  );
}

export function Services() {
  const { services } = site;
  const featured = services.groups[1];
  const grupal = services.groups[0];
  const empresarial = services.groups[2];

  return (
    <section id="servicios" className="zs-surface scroll-mt-24 py-24 sm:py-32 lg:py-40">
      <Container>
        <AnimatedReveal className="max-w-2xl">
          <h2 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-gold sm:text-5xl">
            {services.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ivory/70 sm:text-lg">
            {services.intro}
          </p>
        </AnimatedReveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <AnimatedReveal className="lg:col-span-2">
            <GlassCard className="zs-glass--gold p-8 sm:p-12">
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
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
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
            </GlassCard>
          </AnimatedReveal>

          <AnimatedReveal>
            <GlassCard className="zs-glass--gold h-full p-8 sm:p-10">
              <h3 className="font-display text-2xl text-ivory sm:text-3xl">
                {grupal.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                {grupal.description}
              </p>
              <TopicList topics={grupal.topics} />
              <div className="mt-auto pt-8">
                <Button
                  href={whatsappUrl(grupal.cta.message)}
                  external
                  variant="secondary"
                >
                  {grupal.cta.label}
                </Button>
              </div>
            </GlassCard>
          </AnimatedReveal>

          <AnimatedReveal>
            <GlassCard className="h-full p-8 sm:p-10">
              <h3 className="font-display text-2xl text-ivory sm:text-3xl">
                {empresarial.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                {empresarial.description}
              </p>
              <TopicList topics={empresarial.topics} />
              <div className="mt-auto pt-8">
                <Button href={mailtoUrl(empresarial.cta.subject)} variant="ghost">
                  {empresarial.cta.label}
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </Button>
              </div>
            </GlassCard>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
