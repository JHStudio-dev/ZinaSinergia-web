import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { isExternalHref, site } from "@/data/site";

export function Community() {
  const { community } = site;
  const instagramHref = site.contact.instagram || "#contacto";

  return (
    <section id="comunidad" className="scroll-mt-24 bg-carbon py-24 sm:py-32">
      <Container>
        <AnimatedReveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <SectionLabel>Comunidad</SectionLabel>
          </div>
          <h2 className="mt-7 font-display text-4xl font-medium leading-[1.1] tracking-tight text-gold sm:text-5xl">
            {community.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">
            {community.intro}
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={140}>
          <div className="mt-16 grid divide-y divide-ivory/10 border-y border-ivory/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {community.items.map((item) => (
              <div key={item.title} className="px-6 py-8 text-center sm:px-8">
                <h3 className="font-display text-2xl text-gold">{item.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ivory/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedReveal>

        <div className="mt-12 flex justify-center">
          <Button
            href={instagramHref}
            variant="secondary"
            external={isExternalHref(instagramHref)}
          >
            {community.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
