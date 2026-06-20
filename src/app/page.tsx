import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ivory py-24">
      <Container className="flex max-w-3xl flex-col items-center text-center">
        <SectionLabel index="00">{site.brand.name}</SectionLabel>

        <h1 className="mt-10 font-display text-5xl font-medium leading-[1.04] tracking-tight text-carbon sm:text-7xl">
          {site.brand.tagline}
        </h1>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-carbon/70 sm:text-lg">
          {site.brand.description}
        </p>

        <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
          <Button href={site.cta.href}>{site.cta.label}</Button>
          <Button href="#metodo" variant="secondary">
            Conocer el método
          </Button>
        </div>
      </Container>
    </main>
  );
}
