import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { isExternalHref, site } from "@/data/site";

export function Community() {
  const { community } = site;
  const instagramHref =
    site.contact.instagram || "https://www.instagram.com/zina.sinergia/";

  return (
    <section id="comunidad" className="zs-surface scroll-mt-24 py-24 sm:py-32 lg:py-40">
      <Container>
        <AnimatedReveal className="max-w-2xl">
          <span className="zs-rule-left block h-px w-16" aria-hidden />
          <h2 className="mt-6 font-display text-3xl font-medium leading-[1.12] tracking-tight text-ivory sm:text-4xl lg:text-5xl">
            {community.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/65 sm:text-lg">
            {community.intro}
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={140}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-ivory/10 bg-night/40">
            <div className="grid divide-y divide-ivory/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {community.items.map((item) => (
                <div key={item.title} className="p-8 sm:p-10">
                  <h3 className="font-display text-2xl text-gold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 border-t border-ivory/10 px-8 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
              <p className="max-w-md text-sm leading-relaxed text-ivory/55">
                Comparto reflexiones y encuentros en Instagram.
              </p>
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
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
