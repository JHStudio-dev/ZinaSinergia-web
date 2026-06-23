import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { isExternalHref, mailtoUrl, site, whatsappUrl } from "@/data/site";

const tagline = site.footer.tagline
  .split(".")
  .map((part) => part.trim())
  .filter(Boolean)
  .join(" · ");

export function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { label: "Instagram", href: site.contact.instagram || "#contacto" },
    {
      label: "WhatsApp",
      href: whatsappUrl("Hola Zina, me gustaría más información."),
    },
    { label: "Correo", href: mailtoUrl("Hola Zina") },
  ];

  return (
    <footer className="relative bg-night text-ivory">
      <span className="zs-rule absolute inset-x-0 top-0" aria-hidden />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-10">
          <div>
            <Wordmark tone="dark" />
            <p className="mt-5 font-display text-xl italic leading-snug text-ivory/85">
              {tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/55">
              Acompañamiento humano para mujeres que quieren crecer con
              propósito.
            </p>
          </div>

          <nav aria-label="Navegación del pie" className="flex flex-col gap-3">
            <p className="mb-1 text-[0.7rem] uppercase tracking-[0.28em] text-ivory/45">
              Navegación
            </p>
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="w-fit text-sm text-ivory/70 transition-colors duration-300 hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="mb-1 text-[0.7rem] uppercase tracking-[0.28em] text-ivory/45">
              Conecta
            </p>
            {socials.map((link) => {
              const external = isExternalHref(link.href);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-ivory/70 transition-colors duration-300 hover:text-gold"
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ivory/55">
            © {year} {site.brand.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-ivory/45">{site.footer.credit}</p>
        </div>
      </Container>
    </footer>
  );
}
