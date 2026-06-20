export const site = {
  brand: {
    name: "Zina Sinergia",
    tagline: "Conecta. Inspira. Transforma.",
    description:
      "Acompañamiento humano para procesos reales de cambio: coaching, conferencias y experiencias para reconectar con tu propósito y avanzar con intención.",
  },
  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre Zina", href: "#sobre-zina" },
    { label: "Método", href: "#metodo" },
    { label: "Eventos", href: "#eventos" },
    { label: "Contacto", href: "#contacto" },
  ],
  cta: {
    label: "Conectar",
    href: "#contacto",
  },
  method: [
    {
      key: "conecta",
      title: "Conecta",
      description:
        "Volver a ti, escuchar tu historia y reconocer desde dónde partes.",
    },
    {
      key: "inspira",
      title: "Inspira",
      description:
        "Despertar claridad, propósito y una nueva dirección para avanzar.",
    },
    {
      key: "transforma",
      title: "Transforma",
      description:
        "Tomar acción, cambiar patrones y construir una nueva versión de ti.",
    },
  ],
  contact: {
    whatsapp: "",
    instagram: "",
    email: "",
  },
} as const;

export type Site = typeof site;
