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
  hero: {
    overline: "Coaching · Conferencias · Transformación",
    title: {
      lead: "Reconecta con tu",
      accent: "esencia",
      tail: "y avanza con intención.",
    },
    subtitle:
      "Acompañamiento humano para procesos reales de cambio: un espacio para mirar hacia adentro, encontrar claridad y moverte hacia adelante.",
    primaryCta: { label: "Agenda una conversación", href: "#contacto" },
    secondaryCta: { label: "Conocer el método", href: "#metodo" },
    pillars: ["Conecta", "Inspira", "Transforma"],
    portrait: { caption: "Zina Sinergia", note: "Coach · Conferencista" },
  },
  about: {
    heading:
      "Acompaño a personas que están listas para reencontrarse consigo mismas.",
    lead: "Mi trabajo nace de una convicción simple: cuando una persona se escucha de verdad, encuentra la claridad para avanzar.",
    body: "Desde el coaching, las conferencias y las experiencias que diseño, creo espacios donde la conexión humana se vuelve el punto de partida del cambio. No hay fórmulas ni discursos vacíos: hay presencia, escucha y un acompañamiento honesto para que cada quien reconozca su historia y dé el siguiente paso con propósito.",
    manifesto:
      "Creo en los procesos que se sienten. En volver a lo esencial para construir, desde ahí, una nueva versión de ti.",
    signature: "Zina",
  },
  impactAreas: {
    heading: "En qué puedo acompañarte.",
    intro:
      "Cada espacio está pensado para encontrarte donde estás y moverte hacia donde quieres llegar.",
    items: [
      {
        title: "Coaching personal",
        description:
          "Procesos uno a uno para ganar claridad, ordenar tu historia y avanzar con decisiones que te representan.",
      },
      {
        title: "Conferencias",
        description:
          "Charlas que conectan con la audiencia desde lo humano y dejan una idea que permanece.",
      },
      {
        title: "Talleres y experiencias",
        description:
          "Encuentros grupales para reconectar, reflexionar y llevarte herramientas que se aplican a la vida real.",
      },
      {
        title: "Acompañamiento para transformación",
        description:
          "Un proceso sostenido para cambiar patrones y consolidar, paso a paso, la versión de ti que estás construyendo.",
      },
    ],
  },
  method: {
    title: "Conecta. Inspira. Transforma.",
    intro:
      "Un camino en tres movimientos. No es una fórmula: es una forma de acompañar lo que ya vive en ti.",
    steps: [
      {
        title: "Conecta",
        description:
          "Volver a ti. Escuchar tu historia y reconocer, sin prisa, desde dónde partes.",
      },
      {
        title: "Inspira",
        description:
          "Despertar claridad. Encontrar el propósito y la dirección que le dan sentido a tu siguiente paso.",
      },
      {
        title: "Transforma",
        description:
          "Tomar acción. Cambiar patrones y construir, con intención, una nueva versión de ti.",
      },
    ],
  },
  events: {
    heading: "Lleva a Zina a tu escenario.",
    intro:
      "Conferencias y experiencias diseñadas para conectar con la audiencia, abrir conversaciones y dejar algo que perdure más allá del evento.",
    topics: [
      "Reconexión y propósito",
      "Liderazgo desde la autenticidad",
      "Comunicación que conecta",
      "Resiliencia y cambio",
      "Bienestar y equilibrio",
      "Crecimiento con intención",
    ],
    formats: ["Conferencias", "Talleres", "Paneles"],
    reach: "Presencial y en línea",
    cta: { label: "Invitar a Zina a un evento", href: "#contacto" },
    speaker: { caption: "Zina en escena", note: "Conferencista" },
  },
  testimonials: {
    heading: "Lo que queda después del encuentro.",
    intro:
      "Historias de quienes han caminado parte de su proceso en estos espacios.",
    items: [
      {
        quote:
          "Salí con una claridad que llevaba tiempo buscando. No fueron respuestas: fueron las preguntas correctas en el momento justo.",
        role: "Participante de proceso de coaching",
      },
      {
        quote:
          "Su conferencia movió algo en toda la sala. Se notaba que hablaba desde la experiencia, no desde un guion.",
        role: "Asistente a conferencia",
      },
      {
        quote:
          "El taller fue un espacio seguro para mirar hacia adentro. Me llevé herramientas que sigo usando.",
        role: "Participante de taller",
      },
    ],
  },
  community: {
    heading: "Un espacio para reconectar.",
    intro:
      "Reflexiones, encuentros y herramientas para seguir creciendo, también fuera de cada sesión.",
    items: [
      {
        title: "Reflexiones",
        description: "Ideas breves para volver a lo esencial en medio del día.",
      },
      {
        title: "Encuentros",
        description:
          "Espacios en vivo para compartir, preguntar y avanzar en comunidad.",
      },
      {
        title: "Herramientas",
        description:
          "Recursos prácticos para sostener tu proceso entre una etapa y la siguiente.",
      },
    ],
    cta: { label: "Seguir en Instagram", href: "#" },
  },
  finalCta: {
    overline: "Da el primer paso",
    heading: "Tu próximo capítulo empieza por una conversación.",
    subtitle:
      "Cuéntame dónde estás y hacia dónde quieres ir. Desde ahí construimos el camino, a tu ritmo.",
    primary: { label: "Escríbeme por WhatsApp", href: "#" },
    secondary: { label: "Invitar a un evento", href: "#eventos" },
  },
  footer: {
    tagline: "Conecta. Inspira. Transforma.",
    credit: "Diseño y desarrollo por Darkward Studio",
    links: [
      { label: "Instagram", href: "#" },
      { label: "WhatsApp", href: "#" },
      { label: "Correo", href: "#" },
    ],
  },
  contact: {
    whatsapp: "",
    instagram: "",
    email: "",
  },
} as const;

export type Site = typeof site;
