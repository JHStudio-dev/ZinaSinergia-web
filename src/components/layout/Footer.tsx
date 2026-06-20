import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { isExternalHref, mailtoUrl, site, whatsappUrl } from "@/data/site";

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
    <footer className="bg-carbon text-ivory">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Wordmark tone="dark" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
              {site.footer.tagline}
            </p>
          </div>

          <nav aria-label="Navegación del pie" className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.24em] text-ivory/55">
              Navegación
            </p>
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="w-fit text-sm text-ivory/75 transition-colors duration-300 hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.24em] text-ivory/55">
              Conecta
            </p>
            {socials.map((link) => {
              const external = isExternalHref(link.href);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-ivory/75 transition-colors duration-300 hover:text-gold"
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
          <p className="text-xs text-ivory/60">
            © {year} {site.brand.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-ivory/55">{site.footer.credit}</p>
        </div>
      </Container>
    </footer>
  );
}
