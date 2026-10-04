/**
 * VIVE SANO — Centralized Data & Visual Content Store
 * 
 * BRAND: Vive Sano
 * FOUNDER & RESPONSIBLE: Gloria Molina
 * 
 * Single Source of Truth for editable copy, visual assets, FAQs,
 * lead magnet features, and section flags across all components.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface TrustItem {
  icon: string;
  text: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProblemCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TransformationItem {
  before: string;
  after: string;
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
  highlight: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface RoadmapStep {
  phase: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface ModuleItem {
  id: string;
  number: string;
  title: string;
  description: string;
  lessonsCount?: string;
  badge?: string;
  imageSrc?: string;
}

export interface BenefitCardItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageSrc: string;
  imageAlt: string;
}

export interface BenefitCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageSrc: string;
  imageAlt: string;
}

export interface BonusItem {
  id: string;
  title: string;
  description: string;
  estimatedValue?: string;
  imageSrc: string;
  imageAlt: string;
  enabled: boolean;
  coverColor?: 'emerald' | 'amber' | 'slate';
}

export interface GuidePreviewItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface AudienceItem {
  id: string;
  text: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role?: string;
  comment: string;
  avatar?: string;
  rating?: number;
  enabled: boolean;
  isPlaceholder?: boolean;
}

export const contentData = {
  // Brand details
  brand: {
    name: 'Vive Sano',
    tagline: 'Bienestar Digestivo y Nutrición Consciente',
    ownerName: 'Gloria Molina',
    ownerRole: 'Fundadora de Vive Sano',
    programReferenceTitle: 'Vive Sano',
    communityStats: 'Comunidad de bienestar',
    copyright: '© 2026 Vive Sano — Gloria Molina. Todos los derechos reservados.',
    disclaimer: 'Este material tiene fines educativos y de bienestar general. No sustituye la valoración, diagnóstico ni tratamiento de un profesional de la salud.',
  },

  // Centralized Images
  images: {
    hero: '/images/hero-lifestyle.jpg',
    heroAlt: 'Fotografía lifestyle de bienestar y alimentación saludable para Vive Sano',
    problem: '/images/problem/problem-lifestyle.jpg',
    problemAlt: 'Fotografía de estilo de vida consciente y reflexión',
    identification: '/images/problem/problem-lifestyle.jpg',
    identificationAlt: 'Momento de calma con té orgánico y ambiente natural',
    guide: '/images/lead-magnet-mockup.jpg',
    guideAlt: 'Mockup 3D editorial de la Guía Digital Vive Sano',
    gloria: '/images/gloria/gloria-molina.jpg',
    gloriaAlt: 'Vive Sano — Hábitos de bienestar digestivo',
    community: '/images/hero-lifestyle.jpg',
    communityAlt: 'Comunidad Vive Sano',
  },

  // Navigation Links
  navigation: {
    logoText: 'VIVE SANO',
    items: [
      { label: 'Inicio', href: '#inicio' },
      { label: '¿Te ha pasado?', href: '#problema' },
      { label: 'Beneficios', href: '#beneficios' },
      { label: 'Dentro de la guía', href: '#guia' },
      { label: 'Conoce Vive Sano', href: '#conoce-vive-sano' },
      { label: 'Preguntas frecuentes', href: '#faq' },
    ] as NavItem[],
    ctaText: 'QUIERO MI GUÍA GRATIS',
    ctaHref: '#formulario',
  },

  // Hero Section
  hero: {
    eyebrow: '🌿 RECURSO GRATUITO',
    headline: 'Empieza a cuidar tu bienestar digestivo desde pequeños cambios.',
    subheadline: 'Descubre una guía práctica y gratuita para comprender mejor tus hábitos, alimentación y bienestar digestivo.',
    primaryCtaText: 'QUIERO RECIBIR MI GUÍA GRATIS',
    primaryCtaHref: '#formulario',
    secondaryCtaText: 'CONOCE LA GUÍA',
    secondaryCtaHref: '#guia',
    subtext: 'Descarga inmediata • 100% digital',
    imageSrc: '/images/hero-lifestyle.jpg',
    imageAlt: 'Fotografía lifestyle de bienestar, alimentación saludable y calma para Vive Sano',
  },

  // Section 1: "¿Te ha pasado?" (Problem Identification)
  problem: {
    eyebrow: 'EMPATÍA Y CONEXIÓN',
    headline: '¿Te ha pasado?',
    subheadline: 'Sabes que quieres cuidar más de ti, pero entre tanta información, consejos y recomendaciones, a veces es difícil saber por dónde empezar.',
    title: '¿Te ha pasado?',
    subtitle: 'Sabes que quieres cuidar más de ti, pero entre tanta información, consejos y recomendaciones, a veces es difícil saber por dónde empezar.',
    imageSrc: '/images/problem/problem-lifestyle.jpg',
    imageAlt: 'Fotografía lifestyle de momento de calma y reflexión',
    items: [
      {
        id: 'p1',
        title: 'No sabes qué hábitos priorizar',
        description: 'Sientes que hay demasiados aspectos por atender y te cuesta decidir cuál es el primer paso ideal.',
        icon: '🎯',
      },
      {
        id: 'p2',
        title: 'Encuentras demasiada información diferente',
        description: 'Cansancio ante consejos contradictorios y modas extremas que no se adaptan a tu vida real.',
        icon: '📚',
      },
      {
        id: 'p3',
        title: 'Empiezas cambios pero te cuesta mantenerlos',
        description: 'Inicias con entusiasmo pero la falta de estructura hace que vuelvas a las rutinas anteriores.',
        icon: '🔄',
      },
      {
        id: 'p4',
        title: 'Quieres cuidar tu bienestar sin complicarte',
        description: 'Buscas herramientas amables, realistas y sencillas de incorporar día con día.',
        icon: '🌿',
      },
    ] as ProblemItem[],
    cards: [
      {
        id: 'p1',
        title: 'No sabes qué hábitos priorizar',
        description: 'Sientes que hay demasiados aspectos por atender y te cuesta decidir cuál es el primer paso ideal.',
        icon: '🎯',
      },
      {
        id: 'p2',
        title: 'Encuentras demasiada información diferente',
        description: 'Cansancio ante consejos contradictorios y modas extremas que no se adaptan a tu vida real.',
        icon: '📚',
      },
      {
        id: 'p3',
        title: 'Empiezas cambios pero te cuesta mantenerlos',
        description: 'Inicias con entusiasmo pero la falta de estructura hace que vuelvas a las rutinas anteriores.',
        icon: '🔄',
      },
      {
        id: 'p4',
        title: 'Quieres cuidar tu bienestar sin complicarte',
        description: 'Buscas herramientas amables, realistas y sencillas de incorporar día con día.',
        icon: '🌿',
      },
    ],
  },

  // Section 2: Identification Banner
  identification: {
    eyebrow: 'UN CAMINO REALISTA',
    headline: 'No necesitas cambiarlo todo de un día para otro.',
    subheadline: 'El bienestar también puede construirse con pequeñas decisiones conscientes.',
    content: [
      'El bienestar también puede construirse con pequeñas decisiones conscientes, información clara y herramientas que puedas incorporar poco a poco.',
    ],
    quote: 'El bienestar se construye un pequeño paso a la vez.',
    title: 'No necesitas cambiarlo todo de un día para otro.',
    copy: 'El bienestar también puede construirse con pequeñas decisiones conscientes, información clara y herramientas que puedas incorporar poco a poco.',
    imageSrc: '/images/problem/problem-lifestyle.jpg',
    imageAlt: 'Momento de calma con una taza de té orgánico y ambiente natural',
  },

  // Section 3: Benefits ("¿Qué encontrarás en esta guía?")
  benefits: {
    eyebrow: 'BENEFICIOS PRINCIPALES',
    headline: '¿Qué encontrarás en esta guía?',
    subheadline: 'Un recurso visual y práctico diseñado para darte claridad desde la primera lectura.',
    title: '¿Qué encontrarás en esta guía?',
    subtitle: 'Un recurso visual y práctico diseñado para darte claridad desde la primera lectura.',
    items: [
      {
        id: 'b1',
        title: 'Hábitos conscientes',
        description: 'Ideas y ejercicios sencillos para observar tus rutinas cotidianas sin juzgarte.',
        icon: '🧠',
        imageSrc: '/images/hero-lifestyle.jpg',
        imageAlt: 'Hábitos saludables',
      },
      {
        id: 'b2',
        title: 'Alimentación',
        description: 'Conceptos prácticos e inspiradores relacionados con tus hábitos alimentarios.',
        icon: '🥑',
        imageSrc: '/images/hero-lifestyle.jpg',
        imageAlt: 'Alimentación saludable',
      },
      {
        id: 'b3',
        title: 'Bienestar digestivo',
        description: 'Información amigable para comprender mejor esta dimensión fundamental de tu salud.',
        icon: '🌿',
        imageSrc: '/images/hero-lifestyle.jpg',
        imageAlt: 'Bienestar digestivo',
      },
      {
        id: 'b4',
        title: 'Organización',
        description: 'Herramientas sencillas para comenzar a estructurar tu día con calma.',
        icon: '📋',
        imageSrc: '/images/hero-lifestyle.jpg',
        imageAlt: 'Organización diaria',
      },
      {
        id: 'b5',
        title: 'Reflexión',
        description: 'Preguntas guía para observar tus propios avances y necesidades personales.',
        icon: '💭',
        imageSrc: '/images/hero-lifestyle.jpg',
        imageAlt: 'Reflexión y conciencia',
      },
      {
        id: 'b6',
        title: 'Primeros pasos',
        description: 'Ideas realizables hoy mismo para avanzar sin abrumamiento.',
        icon: '✨',
        imageSrc: '/images/hero-lifestyle.jpg',
        imageAlt: 'Primeros pasos prácticos',
      },
    ] as BenefitCardItem[],
    cards: [
      {
        id: 'b1',
        title: 'Hábitos conscientes',
        description: 'Ideas y ejercicios sencillos para observar tus rutinas cotidianas sin juzgarte.',
        icon: '🧠',
        imageSrc: '/images/hero-lifestyle.jpg',
        imageAlt: 'Hábitos saludables',
      },
      {
        id: 'b2',
        title: 'Alimentación',
        description: 'Conceptos prácticos e inspiradores relacionados con tus hábitos alimentarios.',
        icon: '🥑',
        imageSrc: '/images/hero-lifestyle.jpg',
        imageAlt: 'Alimentación saludable',
      },
    ],
  },

  // Section 4: "Dentro de la Guía" (Protagonist Mockup + Contents)
  guide: {
    eyebrow: 'CONTENIDO DE LA GUÍA',
    headline: 'Un recurso para comenzar con claridad',
    subheadline: 'Diseñado especialmente para darte el primer impulso hacia un estilo de vida más equilibrado.',
    subtitle: 'Diseñado especialmente para darte el primer impulso hacia un estilo de vida más equilibrado.',
    description: 'Diseñado especialmente para darte el primer impulso hacia un estilo de vida más equilibrado.',
    title: 'Un recurso para comenzar con claridad',
    mockupImageSrc: '/images/lead-magnet-mockup.jpg',
    mockupImageAlt: 'Mockup 3D editorial de la Guía Digital Vive Sano',
    features: [
      '✓ Listas de verificación de hábitos cotidianos',
      '✓ Pautas amables de alimentación consciente',
      '✓ Recomendaciones prácticas para tu rutina diaria',
      '✓ Reflexiones simples para observar tu cuerpo',
      '✓ Guía visual en formato PDF de alta calidad',
      '✓ Acceso 100% digital e inmediato',
    ],
  },

  // Section 5: "Una mirada al interior" (Interactive Lightbox Gallery)
  guidePreview: {
    title: 'Una mirada al interior',
    subtitle: 'Explora el diseño editorial claro y amigable que encontrarás dentro de la guía.',
    items: [
      {
        id: 'gp1',
        title: 'Página 01: Hábitos Diarios de Bienestar',
        description: 'Lista de verificación semanal para dar seguimiento sencillo a tus avances.',
        imageSrc: '/images/guide/guide-page-preview.jpg',
        imageAlt: 'Previsualización de la página interna 01 de la guía',
      },
      {
        id: 'gp2',
        title: 'Página 02: Nutrición Consciente & Recetas',
        description: 'Ideas de ingredientes frescos y preparación fácil para incorporar hoy.',
        imageSrc: '/images/guide/guide-page-preview.jpg',
        imageAlt: 'Previsualización de la página interna 02 de la guía',
      },
      {
        id: 'gp3',
        title: 'Página 03: Reflexiones & Calma',
        description: 'Preguntas clave para reconectar con lo que tu cuerpo necesita.',
        imageSrc: '/images/guide/guide-page-preview.jpg',
        imageAlt: 'Previsualización de la página interna 03 de la guía',
      },
    ] as GuidePreviewItem[],
  },

  // Section 6: "¿Para quién es?"
  audience: {
    title: 'Esta guía puede ser para ti si...',
    subtitle: 'Diseñada para acompañarte con respeto y claridad en tu propio proceso.',
    items: [
      { id: 'a1', text: 'Quieres comenzar a cuidar más tus hábitos y bienestar.' },
      { id: 'a2', text: 'Buscas información organizada y libre de complicaciones.' },
      { id: 'a3', text: 'Quieres comprender mejor tu relación con la alimentación.' },
      { id: 'a4', text: 'Deseas comenzar poco a poco, sin presiones ni extremos.' },
      { id: 'a5', text: 'Prefieres herramientas prácticas que puedas consultar cuando quieras.' },
    ] as AudienceItem[],
  },

  // Section 7: About Gloria / About Vive Sano ("Conoce Vive Sano")
  aboutGloria: {
    eyebrow: 'CONOCE VIVE SANO',
    headline: 'Conoce Vive Sano',
    subheadline: 'Fundadora de Vive Sano',
    title: 'Conoce Vive Sano',
    name: 'Gloria Molina',
    role: 'Fundadora de Vive Sano',
    copy: 'Vive Sano nace con la intención de acercar información práctica y herramientas sencillas que ayuden a las personas a construir hábitos de bienestar de manera consciente y progresiva.',
    quote: 'El bienestar no se trata de dietas restrictivas ni soluciones mágicas, sino de aprender a escuchar las señales de tu cuerpo.',
    bioParagraphs: [
      'Vive Sano nace con la intención de acercar información práctica y herramientas sencillas que ayuden a las personas a construir hábitos de bienestar de manera consciente y progresiva.',
      'A través de recursos claros y prácticos, buscamos brindarte herramientas para que descubras tu propio camino hacia el equilibrio.',
    ],
    signatureText: 'Gloria Molina — Fundadora de Vive Sano',
    imagePlaceholderText: 'Fotografía oficial de Gloria Molina',
    imageSrc: '/images/gloria/gloria-molina.jpg',
    imageAlt: 'Fotografía para Vive Sano',
    isPlaceholder: true,
    knowMoreEnabled: false,
    knowMoreText: 'Conoce más sobre Vive Sano',
    knowMoreHref: '#conoce-vive-sano',
  },

  // Trust Bar
  trustBar: {
    enabled: false,
    title: 'Confianza y Educación',
    items: [] as TrustItem[],
  },

  // Section 8: Trust (Only real data, enabled = false until confirmed)
  trust: {
    enabled: false,
    stats: [],
  },

  // Section 9: Testimonials (Enabled = false until authorized real testimonials are provided)
  testimonials: {
    enabled: false,
    eyebrow: 'PRUEBA SOCIAL',
    headline: 'Lo que dicen quienes han comenzado',
    subheadline: 'Historias de transformación amigable',
    title: 'Lo que dicen quienes han comenzado',
    items: [] as TestimonialItem[],
  },

  // Bonuses (for compatibility)
  bonuses: {
    enabled: false,
    showSection: false,
    eyebrow: 'BONOS COMPLEMENTARIOS',
    headline: 'Recursos Complementarios',
    subheadline: 'Herramientas de apoyo',
    title: 'Recursos Complementarios',
    items: [] as BonusItem[],
  },

  // Community (for compatibility)
  community: {
    enabled: false,
    eyebrow: 'COMUNIDAD VIVE SANO',
    headline: 'Comunidad Vive Sano',
    subheadline: 'Educación y acompañamiento',
    statsText: 'Comunidad de bienestar',
    imageSrc: '/images/hero-lifestyle.jpg',
    imageAlt: 'Comunidad Vive Sano',
    highlights: ['Acompañamiento diario', 'Educación amigable'],
    title: 'Comunidad Vive Sano',
    subtitle: 'Acompañamiento y educación',
    description: 'Un espacio seguro de aprendizaje',
    items: [],
  },

  // Guarantee (for compatibility)
  guarantee: {
    enabled: false,
    eyebrow: 'GARANTÍA VIVE SANO',
    headline: 'Garantía de Satisfacción',
    description: 'Tu tranquilidad es nuestra prioridad.',
    badgeText: 'Garantía 100%',
    title: 'Garantía Vive Sano',
    subtitle: 'Tranquilidad en tu elección',
    text: 'Tu tranquilidad es nuestra prioridad.',
  },

  // Accompaniment (for compatibility)
  accompaniment: {
    enabled: false,
    eyebrow: 'ACOMPAÑAMIENTO EN VIVO',
    headline: 'Acompañamiento por Gloria Molina',
    subheadline: 'Educación y cercanía',
    title: 'Acompañamiento por Gloria Molina',
    subtitle: 'Educación y cercanía',
    features: ['Atención cercana', 'Materiales claros'],
  },

  // Method Section (for compatibility)
  method: {
    eyebrow: 'NUESTRA METODOLOGÍA',
    headline: 'El Método Vive Sano',
    subheadline: 'Pilares para transformar tus hábitos',
    title: 'El Método Vive Sano',
    subtitle: 'Pilares para transformar tus hábitos',
    steps: [
      {
        number: '01',
        title: 'Conciencia',
        description: 'Aprender a observar tus rutinas actuales sin juicio.',
        highlight: 'Pilar 1',
      },
    ] as MethodStep[],
  },

  // Program Section (for compatibility)
  program: {
    eyebrow: 'EL PROGRAMA',
    headline: 'Programa Vive Sano',
    subheadline: 'Un recorrido guiado',
    title: 'Programa Vive Sano',
    subtitle: 'Un recorrido guiado',
    modules: [
      {
        id: 'm1',
        number: '01',
        title: 'Fundamentos de Nutrición Consciente',
        description: 'Conceptos clave para comprender tu bienestar.',
      },
    ] as ModuleItem[],
  },

  // Roadmap Section (for compatibility)
  roadmap: {
    eyebrow: 'HOJA DE RUTA',
    headline: 'Tu camino de transformación',
    subheadline: 'Fases progresivas',
    title: 'Tu camino de transformación',
    subtitle: 'Fases progresivas',
    steps: [
      {
        phase: 'Fase 1',
        title: 'Inicio y Diagnóstico',
        description: 'Evaluación inicial.',
        deliverable: 'Checklist personal',
      },
    ] as RoadmapStep[],
  },

  // Transformation Section (for compatibility)
  transformation: {
    eyebrow: 'TRANSFORMACIÓN',
    headline: 'El cambio que experimentarás',
    subheadline: 'Antes y Después',
    title: 'El cambio que experimentarás',
    subtitle: 'Antes y Después',
    items: [
      {
        before: 'Confusión e incertidumbre sobre qué comer.',
        after: 'Claridad y tranquilidad con elecciones informadas.',
      },
    ] as TransformationItem[],
  },

  // Pricing / Offer (for compatibility)
  pricing: {
    enabled: false,
    eyebrow: 'OFERTA',
    headline: 'Tu inversión en bienestar',
    subheadline: 'Acceso al programa Vive Sano',
    title: 'Tu inversión en bienestar',
    subtitle: 'Acceso al programa Vive Sano',
    cardTitle: 'Programa Completo',
    originalPrice: '$5,600 MXN',
    currentPrice: '$3,797 MXN',
    installments: '3 pagos de $1,350 MXN',
    offerText: 'Precio especial de lanzamiento',
    includedList: ['Acceso completo', 'Guías PDF', 'Soporte'],
    ctaText: 'QUIERO EL PROGRAMA',
    guaranteeNotice: '7 días de garantía 100% de devolución',
    guarantee: '7 días de garantía 100% de devolución',
  },

  // Gracias Page Config (for compatibility)
  graciasPage: {
    title: '¡Registro Exitoso! | Vive Sano',
    headline: '¡Listo! Tu guía de Vive Sano está en camino',
    subheadline: 'Hemos enviado el enlace directo a tu correo electrónico. Sigue los pasos a continuación para comenzar.',
    ctaButtonText: 'DESCARGAR MI GUÍA AHORA',
    whatsappSupportText: '¿Necesitas ayuda o tienes alguna pregunta?',
    steps: [
      {
        number: '01',
        title: 'Revisa tu Correo',
        description: 'Abre tu bandeja de entrada y busca un mensaje enviado por Vive Sano.',
      },
      {
        number: '02',
        title: 'Verifica Promociones/Spam',
        description: 'Si no lo encuentras en 2 minutos, revisa tu carpeta de correo no deseado.',
      },
      {
        number: '03',
        title: 'Descarga tu Guía PDF',
        description: 'Haz clic en el botón del correo para guardarla en tu dispositivo.',
      },
      {
        number: '04',
        title: 'Empieza a Explorar',
        description: 'Aplica los primeros hábitos amables hoy mismo.',
      },
    ],
  },

  // Pago Page Config (for compatibility)
  pagoPage: {
    title: 'Inscripción al Programa | Vive Sano',
    headline: 'Completa tu registro a Vive Sano',
    subheadline: 'Acceso al programa de acompañamiento por Gloria Molina.',
    productName: 'Programa Vive Sano',
    originalPriceText: '$5,600 MXN',
    currentPriceText: '$3,797 MXN',
    installmentsNote: '3 pagos de $1,350 MXN',
    ctaButtonText: 'IR AL PAGO SEGURO EN HOTMART',
    items: ['Programa Completo', 'Guías PDF', 'Acceso a Comunidad'],
    securityItems: [
      'Acceso inmediato a la plataforma digital',
      '7 días de garantía 100% de devolución',
      'Pago encriptado con certificado SSL',
    ],
  },

  // CTA Section (for compatibility)
  ctaSection: {
    headline: 'Comienza tu camino con Vive Sano',
    subheadline: 'Descarga gratis la guía inicial.',
    title: 'Comienza tu camino con Vive Sano',
    subtitle: 'Descarga gratis la guía inicial.',
    buttonText: 'QUIERO MI GUÍA GRATIS',
    buttonHref: '#formulario',
  },

  // WhatsApp Integration Config
  whatsapp: {
    enabled: false,
    number: '+5215580462787',
    message: 'Hola Gloria, me gustaría recibir más información sobre Vive Sano.',
    ariaLabel: 'Contactar a Vive Sano por WhatsApp',
  },

  // Section 10: FAQ
  faq: {
    eyebrow: 'PREGUNTAS FRECUENTES',
    headline: 'Preguntas frecuentes',
    subheadline: 'Resolvemos tus dudas sobre el acceso y contenido de la guía.',
    title: 'Preguntas frecuentes',
    subtitle: 'Resolvemos tus dudas sobre el acceso y contenido de la guía.',
    items: [
      {
        id: 'faq1',
        question: '¿La guía realmente es gratuita?',
        answer: 'Sí. La guía se ofrece gratuitamente como recurso educativo de Vive Sano.',
      },
      {
        id: 'faq2',
        question: '¿Cómo recibiré la guía?',
        answer: 'Después de completar el registro podrás acceder a las indicaciones para obtenerla.',
      },
      {
        id: 'faq3',
        question: '¿Puedo verla desde mi celular?',
        answer: 'Sí. La guía está pensada para consultarse fácilmente desde computadora, tablet o teléfono.',
      },
      {
        id: 'faq4',
        question: '¿Necesito conocimientos previos?',
        answer: 'No. Está diseñada para comenzar desde conceptos sencillos y hábitos cotidianos.',
      },
      {
        id: 'faq5',
        question: '¿La guía sustituye una consulta médica?',
        answer: 'No. El contenido tiene fines educativos y de bienestar general y no sustituye la valoración, diagnóstico o tratamiento de un profesional de la salud.',
      },
    ] as FAQItem[],
  },

  // Section 11: Main Lead Form
  form: {
    title: 'Obtén tu guía GRATIS',
    subtitle: 'Ingresa tus datos para recibir tu acceso inmediato en formato PDF.',
    nameLabel: 'Nombre',
    namePlaceholder: 'Ej. María García',
    nameError: 'Ingresa tu nombre.',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'tu@email.com',
    emailError: 'Ingresa un correo electrónico válido.',
    checkboxText: 'Quiero recibir gratuitamente la guía de Vive Sano y acepto el Aviso de Privacidad.',
    checkboxError: 'Debes aceptar el Aviso de Privacidad.',
    buttonText: 'QUIERO RECIBIR MI GUÍA GRATIS',
    loadingText: 'Enviando...',
    successTitle: '¡Listo! 🌿',
    successMessage1: 'Tu registro fue recibido correctamente.',
    successMessage2: 'En breve podrás acceder a tu guía gratuita.',
    successButtonText: 'DESCARGAR GUÍA',
    errorMessage: 'Ocurrió un problema temporal al procesar tu solicitud. Por favor intenta nuevamente en unos momentos.',
    microcopy: 'Tu información será utilizada únicamente para enviarte la guía y comunicaciones relacionadas con Vive Sano.',
    privacyLinkText: 'Aviso de Privacidad',
  },

  // Section 12: Pre-Footer Call to Action
  cta: {
    title: 'Empieza hoy a cuidar tu bienestar digestivo.',
    copy: 'Descarga gratuitamente la guía y comienza con pequeños pasos hacia hábitos más conscientes.',
    buttonText: 'QUIERO MI GUÍA GRATIS',
    note: 'Sin costo • Formato digital',
  },

  // Section 13: Final Visual CTA Section
  finalCta: {
    title: 'Empieza hoy a cuidar tu bienestar digestivo.',
    copy: 'Descarga gratuitamente la guía y comienza con pequeños pasos hacia hábitos más conscientes.',
    buttonText: 'QUIERO MI GUÍA GRATIS',
    bgImageSrc: '/images/hero-lifestyle.jpg',
  },

  // Section 14: Footer
  footer: {
    brandName: 'VIVE SANO',
    tagline: 'Educación y conciencia para tu bienestar cotidiano.',
    copyright: '© 2026 Vive Sano — Gloria Molina. Todos los derechos reservados.',
    disclaimer: 'Este material tiene fines educativos y de bienestar general. No sustituye la valoración, diagnóstico ni tratamiento de un profesional de la salud.',
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: '¿Te ha pasado?', href: '#problema' },
      { label: 'Beneficios', href: '#beneficios' },
      { label: 'Dentro de la guía', href: '#guia' },
      { label: 'Conoce Vive Sano', href: '#conoce-vive-sano' },
      { label: 'Preguntas Frecuentes', href: '#faq' },
    ],
    legalLinks: [
      { label: 'Aviso de Privacidad', href: '#privacidad' },
      { label: 'Términos de Uso', href: '#terminos' },
    ],
    socialLinks: [
      { platform: 'Facebook', url: 'https://www.facebook.com/ViveSanom/' },
      { platform: 'Instagram', url: 'https://www.instagram.com/vivesanom/' },
    ],
  },
};

export default contentData;
