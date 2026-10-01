/**
 * VIVE SANO — Centralized Data & Visual Content Store (Phase 2)
 * 
 * BRAND: Vive Sano
 * FOUNDER & RESPONSIBLE: Gloria Molina
 * 
 * Centralized content structure supporting complete visual assets, editable copy,
 * roadmap steps, community highlights, and bonus toggles.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface TrustItem {
  icon: string;
  text: string;
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

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const contentData = {
  // Brand details
  brand: {
    name: 'Vive Sano',
    tagline: 'Bienestar, Salud Digestiva e Inmunidad',
    ownerName: 'Gloria Molina',
    ownerRole: 'Fundadora & Especialista de Vive Sano',
    programReferenceTitle: 'Construyendo tu Inmunidad',
    communityStats: 'Más de 100 mujeres acompañadas',
    copyright: '© 2026 Vive Sano — Gloria Molina. Todos los derechos reservados.',
    disclaimer: 'La información presentada en esta página y en el programa Vive Sano tiene un carácter estrictamente educativo y de divulgación sobre hábitos, nutrición consciente y bienestar. No sustituye el diagnóstico, tratamiento ni recomendación de un profesional médico.',
  },

  // Centralized Image System Configuration
  images: {
    hero: '/images/hero/hero-vive-sano.webp',
    heroAlt: 'Fotografía lifestyle de bienestar, salud digestiva y hábitos saludables para Vive Sano',
    problem: '/images/problem/problem-lifestyle.webp',
    problemAlt: 'Mujer en momento de reflexión y tranquilidad en su cocina con su diario de hábitos',
    identification: '/images/problem/problem-lifestyle.webp',
    identificationAlt: 'Momento de bienestar consciente y nutrición amigable',
    guide: '/images/guide/guide-mockup.webp',
    guideAlt: 'Mockup editorial 3D de la Guía Digital Vive Sano por Gloria Molina',
    gloria: '/images/gloria/gloria-molina-portrait.webp',
    gloriaAlt: 'Fotografía oficial de Gloria Molina, fundadora de Vive Sano',
    community: '/images/community/community-women.webp',
    communityAlt: 'Comunidad de mujeres compartiendo hábitos saludables y alimentos reales',
  },

  // Site Navigation
  navigation: {
    logoText: 'VIVE SANO',
    items: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Hoja de ruta', href: '#hoja-de-ruta' },
      { label: 'El programa', href: '#programa' },
      { label: 'Qué incluye', href: '#incluye' },
      { label: 'Sobre Gloria', href: '#sobre-gloria' },
      { label: 'Preguntas frecuentes', href: '#faq' },
    ] as NavItem[],
    ctaText: 'QUIERO COMENZAR',
    ctaHref: '#oferta',
  },

  // Hero Section
  hero: {
    eyebrow: 'VIVE SANO',
    headline: 'Empieza a escuchar lo que tu cuerpo lleva tiempo intentando decirte.',
    subheadline: 'Una experiencia educativa para comprender mejor tu bienestar, transformar tus hábitos y construir una relación más consciente con tu alimentación.',
    primaryCtaText: 'QUIERO COMENZAR',
    primaryCtaHref: '#oferta',
    secondaryCtaText: 'CONOCE EL PROGRAMA',
    secondaryCtaHref: '#programa',
    imageSrc: '/images/hero/hero-vive-sano.webp',
    imageAlt: 'Fotografía lifestyle de bienestar, salud digestiva y hábitos saludables para Vive Sano',
  },

  // Trust Bar Section
  trustBar: {
    title: 'Una experiencia creada por Gloria Molina para acompañarte paso a paso:',
    items: [
      { icon: 'book-open', text: 'Contenido digital en vivo & grabado' },
      { icon: 'file-text', text: 'Herramientas prácticas & Ebooks' },
      { icon: 'compass', text: 'Acompañamiento en comunidad' },
      { icon: 'heart-handshake', text: 'Acceso online desde cualquier lugar' },
    ] as TrustItem[],
  },

  // Problem Section (Emotional Identification)
  problem: {
    eyebrow: 'IDENTIFICACIÓN',
    headline: '¿Sientes que haces muchas cosas por tu bienestar, pero no sabes por dónde empezar?',
    subheadline: 'Muchas personas experimentan abrumamiento al intentar mejorar su alimentación sin una guía estructurada. [COPY PROPUESTO — EDICIÓN DISPONIBLE PARA GLORIA MOLINA]',
    imageSrc: '/images/problem/problem-lifestyle.webp',
    imageAlt: 'Mujer en momento de reflexión y tranquilidad en su cocina con su diario de hábitos',
    cards: [
      {
        id: 'p1',
        title: 'Exceso de información y consejos contradictorios',
        description: 'Ves sugerencias opuestas en redes e internet que te generan confusión en lugar de darte claridad.',
        icon: 'help-circle',
      },
      {
        id: 'p2',
        title: 'Tu alimentación cambia constantemente sin rumbo',
        description: 'Pruebas distintas pautas sin comprender qué le sienta verdaderamente bien a tu digestión.',
        icon: 'rotate-ccw',
      },
      {
        id: 'p3',
        title: 'Dificultad para mantener hábitos sostenibles',
        description: 'Sientes que los cambios requieren un esfuerzo insostenible y terminas volviendo a la rutina anterior.',
        icon: 'trending-down',
      },
      {
        id: 'p4',
        title: 'Falta de una estructura amigable para comenzar',
        description: 'Quieres organizar tu cocina y tu día a día, pero te abruma no saber cuál es el primer paso.',
        icon: 'heart',
      },
    ] as ProblemCard[],
  },

  // Emotional Identification Section
  identification: {
    eyebrow: 'NUEVA PERSPECTIVA',
    headline: 'Tu bienestar no tiene que convertirse en otra lista de cosas imposibles de cumplir.',
    content: [
      'Durante mucho tiempo nos han enseñado que cuidar de nuestra salud digestiva e inmunidad implica restricciones drásticas o reglas estrictas.',
      'En Vive Sano, Gloria Molina propone sustituir la culpa por conocimiento práctico. Entender cómo responde tu organismo te devuelve el control de tus elecciones.',
      'No necesitas cambios radicales de la noche a la mañana. Necesitas claridad, educación amigable y un método estructurado que se adapte a tu estilo de vida real.',
    ],
    quote: '"El autocuidado consciente no se trata de perfección, sino de constancia y respeto por los ritmos de tu propio cuerpo."',
    imageSrc: '/images/problem/problem-lifestyle.webp',
    imageAlt: 'Momento de nutrición y bienestar consciente con Vive Sano',
  },

  // Transformation Section
  transformation: {
    eyebrow: 'DE LA CONFUSIÓN A LA CLARIDAD',
    headline: 'De la confusión a la claridad',
    subheadline: 'Descubre cómo transforma tu día a día al contar con las herramientas y la guía adecuada de Gloria Molina.',
    items: [
      {
        before: 'Información dispersa y sin fundamento claro.',
        after: 'Conocimientos prácticos y estructurados paso a paso.',
      },
      {
        before: 'Hábitos difíciles de sostener a largo plazo.',
        after: 'Un plan de acción amigable y adaptable a tu ritmo.',
      },
      {
        before: 'Dudas constantes sobre qué alimentos elegir.',
        after: 'Herramientas simples para decidir con tranquilidad.',
      },
      {
        before: 'Falta de estructura en tu cocina y rutina.',
        after: 'Una guía clara para integrar el bienestar cotidiano.',
      },
    ] as TransformationItem[],
  },

  // Method Section (5 Steps)
  method: {
    eyebrow: 'METODOLOGÍA VIVE SANO',
    headline: 'Un camino claro de 5 pasos para tu bienestar',
    subheadline: 'Metodología educativa desarrollada por Gloria Molina.',
    steps: [
      {
        number: '01',
        title: 'CONOCE',
        description: 'Comprende tus hábitos actuales y aprende a escuchar las señales de tu cuerpo.',
        highlight: 'Autoconocimiento',
      },
      {
        number: '02',
        title: 'APRENDE',
        description: 'Obtén información práctica sobre nutrición consciente y salud digestiva.',
        highlight: 'Bases educativas',
      },
      {
        number: '03',
        title: 'APLICA',
        description: 'Lleva el aprendizaje a tu cocina y a tu día a día con pautas realizables.',
        highlight: 'Acción práctica',
      },
      {
        number: '04',
        title: 'OBSERVA',
        description: 'Identifica qué herramientas y hábitos funcionan mejor para ti y tu ritmo.',
        highlight: 'Evaluación consciente',
      },
      {
        number: '05',
        title: 'SOSTÉN',
        description: 'Construye cambios sólidos y graduales que puedas mantener en el tiempo.',
        highlight: 'Estilo de vida',
      },
    ] as MethodStep[],
  },

  // Roadmap Section ("Hoja de Ruta para tu Vitalidad y Bienestar")
  roadmap: {
    eyebrow: 'HOJA DE RUTA VIVE SANO',
    headline: 'Tu camino dentro de Vive Sano',
    subheadline: 'Una estructura progresiva diseñada para que avances con seguridad y sin abrumamiento.',
    steps: [
      {
        phase: '01',
        title: 'Fundamentos & Diagnóstico Inicial',
        description: 'Comprende la microbiota, evalúa tus hábitos actuales con el test y establece tus metas.',
        deliverable: 'Test Personalizado + Módulo 01',
      },
      {
        phase: '02',
        title: 'Alimentación Consciente en Cocina',
        description: 'Aprende a seleccionar insumos reales, organizar tu despensa y preparar recetas amables.',
        deliverable: 'Guía Digital PDF + Módulo 02',
      },
      {
        phase: '03',
        title: 'Acompañamiento & Ajuste en Vivo',
        description: 'Participa en las sesiones en directo con Gloria Molina y resuelve tus dudas específicas.',
        deliverable: '5 Sesiones en Vivo + Comunidad',
      },
      {
        phase: '04',
        title: 'Consolidación & Estilo de Vida',
        description: 'Integra los ebooks de Mindreset e Inmunidad para mantener tus avances a largo plazo.',
        deliverable: 'Ebooks Complementarios + Plan Continuo',
      },
    ] as RoadmapStep[],
  },

  // Program Section (Modules)
  program: {
    eyebrow: 'CONTENIDO DEL PROGRAMA',
    headline: 'Esto es lo que encontrarás dentro de Vive Sano',
    subheadline: 'Programa "Construyendo tu Inmunidad" y sus módulos educativos.',
    modules: [
      {
        id: 'm1',
        number: 'MÓDULO 01',
        title: 'Fundamentos de la Inmunidad & Digestión',
        description: 'Bases clave para entender la relación entre microbiota, digestión y sistema inmunológico.',
        lessonsCount: 'Lecciones fundamentales',
        badge: 'Bases',
      },
      {
        id: 'm2',
        number: 'MÓDULO 02',
        title: 'Selección de Alimentos & Hábitos Conscientes',
        description: 'Pautas para elegir insumos reales, interpretar etiquetas y planificar tu despensa.',
        lessonsCount: 'Pautas prácticas',
        badge: 'Alimentación',
      },
      {
        id: 'm3',
        number: 'MÓDULO 03',
        title: 'Organización en Cocina & Rutinas Diarias',
        description: 'Estrategias de Meal Prep amigable, combinación de alimentos y recetas reconfortantes.',
        lessonsCount: 'Cocina consciente',
        badge: 'Rutinas',
      },
      {
        id: 'm4',
        number: 'MÓDULO 04',
        title: 'Sostenibilidad & Plan a Largo Plazo',
        description: 'Herramientas para mantener tus avances, gestionar imprevistos y consolidar tu estilo de vida.',
        lessonsCount: 'Plan continuo',
        badge: 'Integración',
      },
    ] as ModuleItem[],
  },

  // Digital Guide Section
  guide: {
    eyebrow: 'MATERIAL DIGITAL EXCLUSIVO',
    headline: 'Además, tendrás una guía para llevar lo aprendido contigo',
    subheadline: 'Material descargable en formato PDF para consultar en tu celular, tablet o imprimir.',
    title: 'Guía Digital Vive Sano',
    description: 'Manual práctico diseñado por Gloria Molina con esquemas visuales, listas de compras y tablas de combinación de alimentos.',
    features: [
      'Pautas claras y listas de compras conscientes',
      'Tablas de combinación alimenticia y digestión amigable',
      'Recetas sencillas y nutritivas para el día a día',
      'Formato PDF optimizado para dispositivos móviles e impresión',
    ],
    mockupImage: '/images/guide/guide-mockup.webp',
    mockupAlt: 'Mockup editorial 3D de la Guía Digital Vive Sano por Gloria Molina',
  },

  // Accompaniment Section
  accompaniment: {
    enabled: true,
    eyebrow: 'ACOMPAÑAMIENTO EN VIVO',
    headline: 'Más que información: acompañamiento directo',
    subheadline: 'Espacios de asesoría y resolución de dudas en comunidad con Gloria Molina.',
    features: [
      '5 Sesiones grupales de asesoría en vivo con Gloria Molina',
      'Comunidad privada de acompañamiento (más de 100 mujeres)',
      'Resolución de dudas frecuentes sobre tu proceso',
      'Grabaciones disponibles si no puedes asistir en directo',
    ],
  },

  // Benefits Section (One Image & Icon Per Benefit)
  benefits: {
    eyebrow: 'HERRAMIENTAS INCLUIDAS',
    headline: 'Más que información: herramientas para tu día a día',
    subheadline: 'Cada beneficio cuenta con recursos visuales y prácticos para acompañarte.',
    cards: [
      {
        id: 'b1',
        title: 'Alimentación Consciente',
        description: 'Explicaciones sin tecnicismos para comprender verdaderamente tu digestión.',
        icon: 'utensils',
        imageSrc: '/images/problem/problem-lifestyle.webp',
        imageAlt: 'Plato balanceado y verduras frescas orgánicas',
      },
      {
        id: 'b2',
        title: 'Alimentos Naturales & Reales',
        description: 'Formatos para planificar tus compras y despensa sin abrumamiento.',
        icon: 'calendar',
        imageSrc: '/images/hero/hero-vive-sano.webp',
        imageAlt: 'Ingredientes frescos de origen natural',
      },
      {
        id: 'b3',
        title: 'Cambios Sostenibles',
        description: 'Pautas realizables para integrar en tu rutina sin restricciones extremas.',
        icon: 'trending-up',
        imageSrc: '/images/community/community-women.webp',
        imageAlt: 'Mujer en entorno natural disfrutando de su rutina',
      },
      {
        id: 'b4',
        title: 'Ebooks & Guías Descargables',
        description: 'Materiales en PDF para repasar en cualquier momento desde tus dispositivos.',
        icon: 'book-open',
        imageSrc: '/images/problem/problem-lifestyle.webp',
        imageAlt: 'Dispositivo mostrando la Guía Digital Vive Sano',
      },
      {
        id: 'b5',
        title: 'Test de Inmunidad',
        description: 'Evaluación de hábitos para identificar tus prioridades iniciales.',
        icon: 'check-square',
        imageSrc: '/images/hero/hero-vive-sano.webp',
        imageAlt: 'Evaluación y test de hábitos saludables',
      },
      {
        id: 'b6',
        title: 'Acompañamiento en Comunidad',
        description: 'Espacio de asesoría en vivo y red de apoyo con Gloria Molina.',
        icon: 'users',
        imageSrc: '/images/community/community-women.webp',
        imageAlt: 'Grupo de mujeres compartiendo en la comunidad Vive Sano',
      },
    ] as BenefitCard[],
  },

  // Bonus Section (Ebooks & Mockups)
  bonuses: {
    showSection: true,
    eyebrow: 'RECURSOS COMPLEMENTARIOS',
    headline: 'Y además recibirás estos recursos exclusivos',
    subheadline: 'Bonos de referencia incluidos en el programa de Gloria Molina. [CADA BONO ES ACTIVABLE O DESACTIVABLE EN CONTENT.TS]',
    items: [
      {
        id: 'bono1',
        title: 'Ebook "Hábitos Conscientes para tu Inmunidad"',
        description: 'Guía práctica descargable con estrategias cotidianas para fortalecer tu sistema inmunológico a través de la nutrición.',
        estimatedValue: 'Valorado en $990 MXN',
        imageSrc: '/images/problem/problem-lifestyle.webp',
        imageAlt: 'Portada del Ebook Hábitos Conscientes',
        coverColor: 'emerald',
        enabled: true,
      },
      {
        id: 'bono2',
        title: 'Ebook "Mindreset: Hackea tus Patrones Emocionales"',
        description: 'Manual de enfoque psico-emocional para comprender los disparadores del hambre emocional y la relación con tu cuerpo.',
        estimatedValue: 'Valorado en $1,200 MXN',
        imageSrc: '/images/hero/hero-vive-sano.webp',
        imageAlt: 'Portada del Ebook Mindreset',
        coverColor: 'amber',
        enabled: true,
      },
      {
        id: 'bono3',
        title: 'Test Personalizado del Sistema Inmunológico',
        description: 'Herramienta de autoevaluación inicial para identificar tus hábitos clave y definir tus prioridades de bienestar.',
        estimatedValue: 'Valorado en $650 MXN',
        imageSrc: '/images/problem/problem-lifestyle.webp',
        imageAlt: 'Test personalizado de inmunidad',
        coverColor: 'slate',
        enabled: true,
      },
      {
        id: 'bono4',
        title: 'Módulo de Fundamentos del Biohacking',
        description: 'Lecciones en video sobre optimización del descanso, ritmo circadiano y hábitos de energía diaria.',
        estimatedValue: 'Valorado en $1,500 MXN',
        imageSrc: '/images/community/community-women.webp',
        imageAlt: 'Módulo de biohacking y descanso',
        coverColor: 'emerald',
        enabled: true,
      },
      {
        id: 'bono5',
        title: '5 Sesiones de Acompañamiento y Asesoría Grupal en Vivo',
        description: 'Encuentros virtuales con Gloria Molina para resolver dudas, revisar avances y compartir experiencias en comunidad.',
        estimatedValue: 'Valorado en $2,500 MXN',
        imageSrc: '/images/gloria/gloria-molina-portrait.webp',
        imageAlt: 'Sesiones de asesoría en vivo con Gloria Molina',
        coverColor: 'amber',
        enabled: true,
      },
    ] as BonusItem[],
  },

  // Community Section ("Comunidad Privada Vive Sano")
  community: {
    enabled: true,
    eyebrow: 'COMUNIDAD VIVE SANO',
    headline: 'Una comunidad de más de 100 mujeres compartiendo el mismo camino',
    subheadline: 'Al unirte a Vive Sano no estarás sola. Formarás parte de un espacio seguro de motivación y hábitos positivos.',
    statsText: 'Más de 100 participantes en la comunidad',
    imageSrc: '/images/community/community-women.webp',
    imageAlt: 'Mujeres compartiendo hábitos saludables y alimentos reales en la comunidad Vive Sano',
    highlights: [
      'Espacio seguro para compartir avances y recetas',
      'Respuestas directas a dudas frecuentes en el grupo',
      'Motivación constante y acompañamiento empático de Gloria Molina',
    ],
  },

  // Testimonials Section
  testimonials: {
    enabled: true,
    eyebrow: 'TESTIMONIOS & COMUNIDAD',
    headline: 'Lo que opinan mujeres de nuestra comunidad',
    subheadline: 'Historias de participantes acompañadas por Gloria Molina en Vive Sano.',
    items: [
      {
        id: 't1',
        name: 'Mariana S.',
        role: 'Comunidad Vive Sano',
        comment: 'El programa con Gloria cambió por completo cómo elijo mis alimentos. Pasé de probar dietas abrumadoras a comprender verdaderamente qué le hace bien a mi cuerpo.',
        rating: 5,
        enabled: true,
        isPlaceholder: false,
      },
      {
        id: 't2',
        name: 'Claudia R.',
        role: 'Comunidad Vive Sano',
        comment: 'La Guía Digital y las sesiones de asesoría con Gloria me dieron la claridad que llevaba años buscando. Los cambios en mi rutina han sido amables y sostenibles.',
        rating: 5,
        enabled: true,
        isPlaceholder: false,
      },
      {
        id: 't3',
        name: 'Verónica M.',
        role: 'Comunidad Vive Sano',
        comment: 'Formar parte de esta comunidad de más de 100 mujeres fue lo mejor. Gloria explica todo con una calidez humana que te motiva día a día.',
        rating: 5,
        enabled: true,
        isPlaceholder: false,
      },
    ] as TestimonialItem[],
  },

  // About Gloria Section
  aboutGloria: {
    eyebrow: 'FUNDADORA DE VIVE SANO',
    headline: 'Detrás de Vive Sano está Gloria Molina',
    quote: '"Creo que cuidar de nosotros mismos comienza por comprender nuestros hábitos, escuchar las necesidades de nuestro cuerpo y construir cambios sostenibles que respeten tu propio ritmo."',
    bioParagraphs: [
      'Gloria Molina es la fundadora y responsable de Vive Sano. Su propósito es brindar educación clara, humana y práctica sobre nutrición consciente, salud digestiva e inmunidad.',
      'A través de su programa "Construyendo tu Inmunidad", ha acompañado a una comunidad de más de 100 mujeres en la transformación de sus rutinas sin caer en restricciones extremas ni culpabilidad.',
      'Su propuesta combina la solidez educativa con la calidez del acompañamiento cercano, guiando a cada participante para que construya un estilo de vida pleno y duradero.',
    ],
    imageSrc: '/images/gloria/gloria-molina-portrait.webp',
    imageAlt: 'Fotografía oficial de Gloria Molina, fundadora de Vive Sano',
    isCopyProposed: false,
  },

  // Offer & Pricing Section
  pricing: {
    enabled: true,
    eyebrow: 'OFERTA ESPECIAL VIVE SANO',
    headline: 'Todo lo que necesitas para comenzar tu proceso',
    subheadline: 'Acceso completo al programa de Gloria Molina, materiales descargables y bonos de acompañamiento.',
    cardTitle: 'Programa "Construyendo tu Inmunidad" + Guía Digital',
    originalPrice: '$5,600 MXN',
    currentPrice: '$3,797 MXN',
    installments: 'Hasta 3 pagos sin intereses disponibles en Hotmart',
    currency: 'MXN',
    offerText: 'Oferta de referencia actualmente vigente',
    includedList: [
      'Programa completo "Construyendo tu Inmunidad" en video',
      'Guía Digital Vive Sano descargable en formato PDF',
      'Ebook "Hábitos Conscientes para tu Inmunidad"',
      'Ebook "Mindreset: Hackea tus Patrones Emocionales"',
      'Test personalizado del sistema inmunológico',
      'Módulo exclusivo de fundamentos del biohacking',
      '5 Sesiones grupales de asesoría en vivo con Gloria Molina',
      'Acceso a la comunidad privada de más de 100 mujeres',
      'Prueba de satisfacción durante 7 días',
    ],
    ctaText: 'QUIERO COMENZAR MI PROCESO AHORA',
    guaranteeNotice: 'Inscripción procesada con pago 100% seguro a través de Hotmart.',
  },

  // Guarantee Section
  guarantee: {
    enabled: true,
    days: '7 días',
    headline: 'Prueba durante 7 días sin riesgo',
    description: 'Ingresa al programa Vive Sano, descarga tu Guía Digital y participa en los materiales. Si sientes que este programa no es para ti durante los primeros 7 días, puedes solicitar el reembolso a través de Hotmart.',
    badgeText: 'Garantía de 7 días',
  },

  // FAQ Section
  faq: {
    eyebrow: 'PREGUNTAS FRECUENTES',
    headline: 'Preguntas Frecuentes',
    subheadline: 'Resolvemos tus principales dudas sobre el programa de Gloria Molina.',
    items: [
      {
        id: 'faq1',
        question: '¿Qué incluye el programa Vive Sano?',
        answer: 'Incluye el contenido modular en video "Construyendo tu Inmunidad", la Guía Digital en PDF, los ebooks complementarios, el test de inmunidad y las 5 sesiones de acompañamiento en vivo con Gloria Molina.',
      },
      {
        id: 'faq2',
        question: '¿Cómo funcionan los pagos y la opción de 3 pagos?',
        answer: 'El pago se procesa de forma 100% segura mediante Hotmart, plataforma líder global. Puedes pagar en una sola exhibición ($3,797 MXN) o elegir la modalidad de 3 pagos con tarjeta de crédito.',
      },
      {
        id: 'faq3',
        question: '¿Cómo recibiré el acceso tras realizar la compra?',
        answer: 'Tras completar tu pago en Hotmart, recibirás un correo electrónico inmediato con tus datos personales de acceso a la plataforma digital y los enlaces para descargar tus materiales.',
      },
      {
        id: 'faq4',
        question: '¿Quién imparte las sesiones de acompañamiento?',
        answer: 'Todas las sesiones de asesoría en vivo son guiadas directamente por Gloria Molina, fundadora de Vive Sano.',
      },
      {
        id: 'faq5',
        question: '¿Cómo funciona la garantía de 7 días?',
        answer: 'Tienes 7 días a partir de tu compra para explorar el programa. Si decides que no es lo que esperabas, gestionas tu devolución de forma transparente directo en la plataforma de Hotmart.',
      },
      {
        id: 'faq6',
        question: '¿Necesito experiencia o conocimientos previos?',
        answer: 'No. El método de Gloria Molina está diseñado para explicarse de forma sencilla y progresiva, perfecto para cualquier persona que desee organizar sus hábitos.',
      },
      {
        id: 'faq7',
        question: '¿Puedo inscribirme desde cualquier país?',
        answer: 'Sí. Al ser un programa digital hospedado en Hotmart, puedes inscribirte desde cualquier parte del mundo utilizando tu moneda local.',
      },
      {
        id: 'faq8',
        question: '¿Dónde puedo solicitar ayuda si tengo alguna duda?',
        answer: 'Puedes escribir directamente al WhatsApp de soporte de Gloria Molina (+52 1 55 8046 2787) haciendo clic en el botón flotante.',
      },
    ] as FAQItem[],
  },

  // Final CTA Section
  ctaSection: {
    headline: 'Tu bienestar merece un espacio en tu agenda.',
    subheadline: 'Empieza con información, herramientas y un camino que puedas llevar a tu propio ritmo con el acompañamiento de Gloria Molina.',
    buttonText: 'QUIERO COMENZAR AHORA',
    buttonHref: '#oferta',
  },

  // WhatsApp Configuration Object
  whatsapp: {
    enabled: true,
    number: '+5215580462787',
    displayNumber: '+52 1 55 8046 2787',
    message: 'Hola Gloria, tengo una pregunta sobre el programa Vive Sano.',
  },

  // Footer Section
  footer: {
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Hoja de ruta', href: '#hoja-de-ruta' },
      { label: 'El programa', href: '#programa' },
      { label: 'Sobre Gloria Molina', href: '#sobre-gloria' },
      { label: 'Preguntas frecuentes', href: '#faq' },
      { label: 'Registro', href: '/registro' },
      { label: 'Pago', href: '/pago' },
    ],
    legalLinks: [
      { label: 'Aviso de Privacidad', href: '#' },
      { label: 'Términos y Condiciones', href: '#' },
    ],
  },

  // Subpages Content
  registroPage: {
    title: 'Registro al Programa — Vive Sano | Gloria Molina',
    headline: 'Estás a un paso de comenzar tu experiencia en Vive Sano',
    subheadline: 'Ingresa tu nombre y correo electrónico para recibir información detallada del programa "Construyendo tu Inmunidad" y la Guía Digital.',
    formNameLabel: 'Nombre completo',
    formNamePlaceholder: 'Ej. María González',
    formEmailLabel: 'Correo electrónico principal',
    formEmailPlaceholder: 'ejemplo@correo.com',
    ctaButtonText: 'QUIERO REGISTRARME',
    privacyNotice: 'Tus datos están protegidos. Respetamos tu privacidad y nunca compartiremos tu información.',
  },

  pagoPage: {
    title: 'Inscripción Segura — Vive Sano | Gloria Molina',
    headline: 'Estás a un paso de acceder a Vive Sano',
    subheadline: 'Serás redirigido a la pasarela oficial de Hotmart para completar tu inscripción.',
    productName: 'Programa "Construyendo tu Inmunidad" + Guía Digital',
    originalPriceText: '$5,600 MXN',
    currentPriceText: '$3,797 MXN',
    installmentsNote: 'Hasta 3 pagos sin intereses en Hotmart',
    ctaButtonText: 'QUIERO ACCEDER AL PROGRAMA EN HOTMART',
    securityItems: [
      'Pago 100% encriptado y seguro a través de Hotmart',
      'Acceso inmediato enviado a tu correo electrónico',
      'Prueba durante 7 días respaldada por Hotmart',
      'Soporte directo vía WhatsApp con Gloria Molina',
    ],
  },

  graciasPage: {
    title: '¡Bienvenida a Vive Sano! — Gloria Molina',
    headline: '¡Bienvenida a Vive Sano!',
    subheadline: 'Tu solicitud o inscripción ha sido procesada correctamente. Sigue estos pasos para ingresar:',
    steps: [
      {
        number: '01',
        title: 'Revisa tu correo electrónico',
        description: 'Te hemos enviado un correo de confirmación con la información de tu acceso.',
      },
      {
        number: '02',
        title: 'Busca los datos de acceso a Hotmart',
        description: 'Revisa tu bandeja de entrada o carpeta de spam/promociones.',
      },
      {
        number: '03',
        title: 'Ingresa a tu plataforma y Guía Digital',
        description: 'Haz clic en el enlace para entrar y descargar tus materiales.',
      },
      {
        number: '04',
        title: 'Comienza tu experiencia con Gloria Molina',
        description: 'Explora el primer módulo e intégrate a la comunidad.',
      },
    ],
    ctaButtonText: 'IR A MI ACCESO EN HOTMART',
    whatsappSupportText: '¿Tienes alguna duda con tu acceso? Escribe directamente a Gloria Molina por WhatsApp.',
  },
};
