"use client";

import type { FormEvent } from "react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";

const inputClass =
  "mt-3 w-full border-b border-ivory/20 bg-transparent pb-2 text-ivory placeholder-ivory/30 outline-none transition-colors duration-300 focus:border-gold";

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  textarea?: boolean;
};

function Field({
  id,
  label,
  type = "text",
  autoComplete,
  required = false,
  textarea = false,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-xs uppercase tracking-[0.2em] text-ivory/60"
      >
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          required={required}
          className={`${inputClass} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          autoComplete={autoComplete}
          required={required}
          className={inputClass}
        />
      )}
    </div>
  );
}

export function Contact() {
  const { contactSection, contact } = site;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nombre = String(data.get("nombre") ?? "");
    const empresa = String(data.get("empresa") ?? "");
    const correo = String(data.get("correo") ?? "");
    const mensaje = String(data.get("mensaje") ?? "");
    const body = `Nombre: ${nombre}\nEmpresa o cargo: ${empresa}\nCorreo: ${correo}\n\n${mensaje}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      "Nuevo mensaje desde el sitio",
    )}&body=${encodeURIComponent(body)}`;
  }

  const details = [
    { label: "Correo", value: contact.email, href: `mailto:${contact.email}` },
    { label: "Tiempo de respuesta", value: contactSection.responseTime },
    { label: "Modalidad", value: contactSection.modality },
  ];

  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden bg-night py-24 sm:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[-20%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(194,161,92,0.12),transparent_62%)] blur-2xl" />
      </div>

      <Container className="relative grid gap-14 lg:grid-cols-2 lg:gap-20">
        <AnimatedReveal>
          <SectionLabel>{contactSection.eyebrow}</SectionLabel>
          <h2 className="mt-7 font-display text-4xl font-medium leading-[1.06] tracking-tight text-gold sm:text-5xl">
            {contactSection.heading}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/70 sm:text-lg">
            {contactSection.text}
          </p>

          <dl className="mt-12 border-b border-ivory/10">
            {details.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-6 border-t border-ivory/10 py-5"
              >
                <dt className="text-xs uppercase tracking-[0.2em] text-ivory/50">
                  {item.label}
                </dt>
                <dd>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-ivory transition-colors duration-300 hover:text-gold"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-ivory">{item.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </AnimatedReveal>

        <AnimatedReveal delay={140}>
          <form
            onSubmit={handleSubmit}
            className="space-y-8 rounded-3xl border border-ivory/10 bg-carbon p-8 sm:p-10"
          >
            <Field id="nombre" label="Nombre completo" autoComplete="name" required />
            <Field
              id="empresa"
              label="Empresa o cargo"
              autoComplete="organization"
            />
            <Field
              id="correo"
              label="Correo electrónico"
              type="email"
              autoComplete="email"
              required
            />
            <Field id="mensaje" label="Mensaje" textarea required />

            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium tracking-wide text-night transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/90 sm:w-auto"
            >
              {contactSection.submitLabel}
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </button>
          </form>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
