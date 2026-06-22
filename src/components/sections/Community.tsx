import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { isExternalHref, site } from "@/data/site";

export function Community() {
  const { community } = site;
  const instagramHref =
    site.contact.instagram || "https://www.instagram.com/zina.sinergia/";

  return (
    <section id="comunidad" className="zs-surface scroll-mt-24 py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <AnimatedReveal>
            <span className="zs-rule-left block h-px w-16" aria-hidden />
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ivory sm:text-5xl">
              {community.heading}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/65 sm:text-lg">
              {community.intro}
            </p>
            <div className="mt-8">
              <Button
                href={instagramHref}
                variant="ghost"
                external={isExternalHref(instagramHref)}
              >
                {community.cta.label}
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Button>
            </div>
          </AnimatedReveal>
        </div>

        <div className="lg:col-span-7">
          <div className="border-t border-ivory/10">
            {community.items.map((item, i) => (
              <AnimatedReveal key={item.title} delay={i * 90}>
                <article className="group flex flex-col gap-2 border-b border-ivory/10 py-7 transition-colors duration-300 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
                  <h3 className="font-display text-2xl text-gold transition-transform duration-300 group-hover:translate-x-1 sm:text-[1.6rem]">
                    {item.title}
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-ivory/60 sm:text-right">
                    {item.description}
                  </p>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
