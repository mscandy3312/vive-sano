/**
 * VIVE SANO — Centralized Data & Visual Content Store
 * 
 * BRAND: Vive Sano
 * FOUNDER & RESPONSIBLE: Gloria Molina
 * CONTACT EMAIL: gloria@vive-sano.mx
 * PRODUCT: Método SANA (Curso práctico de bienestar digestivo)
 * OFFICIAL PALETTE:
 * - Verde (#4DA92C): Marca, Salud, Bienestar, Estados positivos
 * - Naranja (#E76100): Atención, CTA principal ("QUIERO EMPEZAR"), énfasis, señales, energía
 * - Azul (#0078BF): Educación, información, materiales, herramientas, análisis
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
  colorAccent?: string;
}

export interface ProblemCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  colorAccent: string;
  badgeLabel?: string;
}

export interface CourseModuleItem {
  id: string;
  badgeLabel: string;
  title: string;
  description: string;
  colorAccent: string;
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

export interface TransformationItem {
  before: string;
  after: string;
}

export interface BenefitCardItem {
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

export interface MaterialSupportItem {
  id: string;
  title: string;
  description: string;
  primaryColor: string;
  accentColor?: string;
  badgeLabel: string;
  imageSrc: string;
  imageAlt: string;
  isSemaforoMulti?: boolean;
  pdfUrl?: string;
  downloadFilename?: string;
  isAvailable?: boolean;
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

export const contentData = {
  // Brand details
  brand: {
    name: 'Vive Sano',
    tagline: 'Bienestar Digestivo y Nutrición Consciente',
    ownerName: 'Gloria Molina',
    ownerRole: 'Fundadora de Vive Sano',
    contactEmail: 'gloria@vive-sano.mx',
    productName: 'Método SANA',
    priceText: '497 MXN',
    ctaText: 'QUIERO EMPEZAR',
    copyright: '© 2026 Vive Sano — Gloria Molina. Todos los derechos reservados.',
    disclaimer: 'Este material tiene fines educativos y de bienestar general. No sustituye la valoración, diagnóstico ni tratamiento de un profesional de la salud.',
  },

  // Official Palette Colors
  colors: {
    green: '#4DA92C',
    orange: '#E76100',
    blue: '#0078BF',
    deepForest: '#123C32',
    cream: '#FAF8F1',
    softBg: '#F0F9ED',
  },

  // Centralized Images
  images: {
    logo: '/images/logo.png',
    logoAlt: 'Logo oficial de Vive Sano por Gloria Molina',
    hero: '/images/hero-lifestyle.jpg',
    heroAlt: 'Fotografía de bienestar y nutrición consciente Vive Sano',
    gloria: '/images/gloria/gloria-molina.jpg',
    gloriaAlt: 'Gloria Molina — Fundadora de Vive Sano',
  },

  // Navigation Links
  navigation: {
    logoText: 'VIVE SANO',
    items: [
      { label: 'Inicio', href: '/#inicio' },
      { label: '¿Te ha pasado?', href: '/#problema' },
      { label: 'Contenido', href: '/#contenido' },
      { label: 'Lo que incluye', href: '/#incluye' },
      { label: 'Material de Apoyo', href: '/#materiales' },
      { label: 'Conoce a Gloria', href: '/#conoce-vive-sano' },
      { label: 'Preguntas Frecuentes', href: '/#faq' },
    ] as NavItem[],
    ctaText: 'QUIERO EMPEZAR',
    ctaHref: '/#oferta',
  },

  // Hero Principal (Método SANA)
  hero: {
    eyebrow: '🌿 MÉTODO SANA POR GLORIA MOLINA',
    title: 'Empieza hoy tu\nMétodo SANA',
    headline: 'Empieza hoy tu\nMétodo SANA',
    promise: 'Desinflama tu cuerpo y recupera tu energía paso a paso, sin dietas extremas ni rutinas imposibles.',
    subheadline: 'Un curso práctico para entender las señales de tu digestión, saber qué alimentos te inflaman y cuáles te ayudan, y aprender a escuchar a tu cuerpo con los Semáforos Digestivos.',
    priceText: '497 MXN',
    primaryCtaText: 'QUIERO EMPEZAR',
    primaryCtaHref: '#oferta',
    secondaryCtaText: 'CONOCER EL MÉTODO',
    secondaryCtaHref: '#problema',
    imageSrc: '/materiales/dieta.jpeg',
    imageAlt: 'Fotografía de dieta y bienestar Vive Sano',
    highlights: [
      '✓ Acceso digital e inmediato al curso',
      '✓ Incluye los Semáforos Digestivos y material de apoyo',
      '✓ Aprendizaje a tu propio ritmo sin presiones',
    ],
  },

  // Sección de Identificación ("¿TE SUENA FAMILIAR?")
  identification: {
    eyebrow: '¿TE SUENA FAMILIAR?',
    title: '¿Te ha pasado?',
    headline: '¿Te ha pasado?',
    subtitle: 'Comes bien, pero tu digestión no responde igual y no sabes qué lo está provocando.',
    subheadline: 'Comes bien, pero tu digestión no responde igual y no sabes qué lo está provocando.',
    content: ['El bienestar también puede construirse con pequeñas decisiones conscientes.'],
    quote: 'El bienestar se construye un pequeño paso a la vez.',
    imageSrc: '/images/hero-lifestyle.jpg',
    imageAlt: 'Momento de calma y bienestar',
    cards: [
      {
        id: 'c1',
        title: 'Te inflamas después de comer',
        description: 'Amaneces con el abdomen plano y en la tarde ya te sientes hinchada.',
        icon: '🔥',
        colorAccent: '#4DA92C',
        badgeLabel: 'Inflamación',
      },
      {
        id: 'c2',
        title: 'Tienes gases o ruidos que te incomodan',
        description: 'Aparecen después de comer o durante el día, sin saber qué los provoca.',
        icon: '💨',
        colorAccent: '#0078BF',
        badgeLabel: 'Gases',
      },
      {
        id: 'c3',
        title: 'Te da sueño después de comer',
        description: 'Terminas de comer y, en lugar de energía, sientes pesadez y cansancio.',
        icon: '😴',
        colorAccent: '#E76100',
        badgeLabel: 'Energía',
      },
      {
        id: 'c4',
        title: 'Tu digestión no fluye',
        description: 'Estreñimiento, reflujo o ardor que ya se volvieron parte de tu día.',
        icon: '🔄',
        colorAccent: '#4DA92C',
        badgeLabel: 'Digestión',
      },
    ] as ProblemCard[],
  },

  // Legacy problem compatibility
  problem: {
    eyebrow: '¿TE SUENA FAMILIAR?',
    headline: '¿Te ha pasado?',
    title: '¿Te ha pasado?',
    subheadline: 'Comes bien, pero tu digestión no responde igual y no sabes qué lo está provocando.',
    subtitle: 'Comes bien, pero tu digestión no responde igual y no sabes qué lo está provocando.',
    imageSrc: '/images/hero-lifestyle.jpg',
    imageAlt: 'Fotografía lifestyle Vive Sano',
    items: [] as ProblemItem[],
    cards: [] as ProblemCard[],
  },

  // Sección "No necesitas cambiarlo todo"
  noNeedToChange: {
    eyebrow: 'PASO A PASO',
    title: 'No necesitas cambiarlo todo de un día para otro.',
    text: 'Con el Método SANA aprendes a reconocer lo que le pasa a tu digestión y qué alimentos te ayudan, para que hagas cambios pequeños que sí puedas sostener.',
    ctaText: 'QUIERO EMPEZAR →',
    ctaHref: '#oferta',
  },

  // Sección "¿Qué encontrarás en el Método SANA?" (Contenido del Curso)
  courseModules: {
    eyebrow: 'CONTENIDO DEL CURSO',
    title: '¿Qué encontrarás en el Método SANA?',
    subtitle: 'Todo lo que necesitas para entender tu digestión y empezar a sentirte mejor.',
    modules: [
      {
        id: 'mod-1',
        badgeLabel: 'MÓDULO 1',
        title: 'Bienvenida',
        description: 'Conoce mi historia y cómo aprovechar el curso desde el primer día.',
        colorAccent: '#4DA92C',
      },
      {
        id: 'mod-2',
        badgeLabel: 'MÓDULO 2',
        title: 'Salud Digestiva',
        description: 'Entiende qué pasa en tu cuerpo cuando comes y aprende a reconocer las 8 señales de una digestión lenta.',
        colorAccent: '#0078BF',
      },
      {
        id: 'mod-3',
        badgeLabel: 'MÓDULO 3',
        title: 'Alimentación',
        description: 'Descubre qué alimentos te están inflamando, cuáles te ayudan y cómo influyen en tus gases, reflujo, estreñimiento y somnolencia.',
        colorAccent: '#E76100',
      },
    ] as CourseModuleItem[],
  },

  // Sección "Lo que incluye"
  includes: {
    imageBadge: 'Curso en video',
    eyebrow: 'LO QUE INCLUYE',
    title: 'Todo lo que recibes con\nel Método SANA',
    subtitle: 'Un curso para entender tu digestión y empezar a sentirte mejor, paso a paso.',
    imageSrc: '/images/hero-lifestyle.jpg',
    imageAlt: 'Presentación del Método SANA en dispositivos digitales',
    list: [
      '3 módulos con más de 60 videos.',
      'Bono incluido: audio de relajación y respiración digestiva.',
      'Diario Digestivo.',
      '8 Semáforos Digestivos, uno para cada señal.',
      '1 Semáforo FODMAP.',
      'Guía FODMAP Descubre por qué te inflamas.',
      'Acceso inmediato desde tu celular o computadora.',
      'Todo por 497 MXN.',
    ],
    priceText: '497 MXN',
    ctaText: 'QUIERO EMPEZAR →',
    ctaHref: '#oferta',
  },

  // Sección "Una mirada al interior" (Material de Apoyo)
  materialSupport: {
    eyebrow: 'MATERIAL DE APOYO',
    title: 'Una mirada al interior',
    subtitle: 'Herramientas para que observes cómo reacciona tu digestión día a día.',
    materials: [
      {
        id: 'm1',
        title: 'Diario Digestivo',
        description: 'Registra lo que comes y cómo te sientes para entender tu propio patrón.',
        primaryColor: '#4DA92C',
        badgeLabel: 'Registro Diario',
        imageSrc: '/images/materiales/diario-digestivo-cover.jpg',
        imageAlt: 'Mockup del Diario Digestivo Vive Sano',
        isAvailable: true,
        pdfUrl: '/materiales/diario digestivo.pdf',
        downloadFilename: 'diario-digestivo.pdf',
      },
      {
        id: 'm2',
        title: '8 Semáforos Digestivos',
        description: 'Uno para cada señal, para que identifiques en qué color está tu cuerpo.',
        primaryColor: '#4DA92C',
        accentColor: '#E76100',
        badgeLabel: 'Semáforos Digestivos',
        imageSrc: '/images/materiales/semaforos-de-tu-cuerpo-cover.jpg',
        imageAlt: 'Portada real de Semáforos de tu cuerpo — Señales digestivas',
        isSemaforoMulti: true,
        pdfUrl: '/materiales/semaforos-de-tu-cuerpo.pdf',
        downloadFilename: 'semaforos-de-tu-cuerpo.pdf',
        isAvailable: true,
      },
      {
        id: 'm3',
        title: 'Semáforo FODMAP',
        description: 'Identifica qué alimentos pueden estar provocando tus gases.',
        primaryColor: '#0078BF',
        accentColor: '#E76100',
        badgeLabel: 'Análisis FODMAP',
        imageSrc: '/images/materiales/guia-fodmap-cover.jpg',
        imageAlt: 'Portada real de Semáforo FODMAP',
        pdfUrl: '/materiales/guia-fodmap-descubre-por-que-te-inflamas.pdf',
        downloadFilename: 'guia-fodmap-descubre-por-que-te-inflamas.pdf',
        isAvailable: true,
      },
      {
        id: 'm4',
        title: 'Guía FODMAP: Descubre por qué te inflamas',
        description: 'Conoce qué alimentos le dan descanso a tu digestión, cuáles conviene limitar y un ejercicio para revisar tus combinaciones.',
        primaryColor: '#0078BF',
        accentColor: '#E76100',
        badgeLabel: 'Guía Práctica FODMAP',
        imageSrc: '/images/materiales/guia-fodmap-cover.jpg',
        imageAlt: 'Portada real de Guía FODMAP',
        isAvailable: true,
      },
    ] as MaterialSupportItem[],
  },

  // Sección "Este curso es para ti si..."
  audience: {
    eyebrow: '¿PARA QUIÉN ES?',
    title: 'Este curso es para ti si...',
    subtitle: 'Diseñado para mujeres que quieren entender su cuerpo y dejar de vivir inflamadas.',
    items: [
      { id: 'a1', text: 'Te inflamas, tienes gases o te sientes pesada después de comer y no sabes por qué.' },
      { id: 'a2', text: 'Comes sano, pero sigues sintiéndote pesada o inflamada.' },
      { id: 'a3', text: 'Quieres saber qué alimentos te inflaman y cuáles te ayudan.' },
      { id: 'a4', text: 'Buscas mejorar tu digestión sin dietas extremas ni rutinas imposibles.' },
      { id: 'a5', text: 'Quieres aprender a reconocer las señales de tu cuerpo.' },
    ] as AudienceItem[],
  },

  // Sección "Conoce a la fundadora"
  aboutGloria: {
    eyebrow: 'CONOCE A LA FUNDADORA',
    title: 'Sé lo que se siente vivir con pesadez, inflamación y sin energía.',
    headline: 'Sé lo que se siente vivir con pesadez, inflamación y sin energía.',
    name: 'Gloria Molina',
    role: 'Fundadora de Vive Sano',
    subheadline: 'Fundadora de Vive Sano',
    copy: 'Soy Gloria, y Vive Sano no nació de una teoría, sino de la necesidad de encontrar una solución real, simple y sostenible para sentirme bien desde adentro. Mi misión es enseñarte a desinflamar tu cuerpo y recuperar tu bienestar diario sin dietas extremas, sin culpa y sin rutinas imposibles de sostener.',
    quote: 'El bienestar no se logra con restricciones severas, sino aprendiendo a escuchar con empatía las señales de tu cuerpo.',
    signatureText: 'Gloria Molina — Fundadora de Vive Sano',
    imageSrc: '/images/gloria/gloria-molina.jpg',
    imageAlt: 'Fotografía oficial de Gloria Molina — Fundadora de Vive Sano',
  },

  // Oferta Principal
  offer: {
    eyebrow: 'OFERTA PRINCIPAL',
    headline: 'Método SANA',
    promise: 'Desinflama tu cuerpo y recupera tu energía paso a paso, sin dietas extremas ni rutinas imposibles.',
    priceText: '497 MXN',
    ctaText: 'QUIERO EMPEZAR',
    includedItems: [
      'Acceso completo al curso práctico Método SANA',
      '3 módulos con más de 60 videos',
      'Bono incluido: audio de relajación y respiración digestiva',
      'Diario Digestivo',
      '8 Semáforos Digestivos, uno para cada señal',
      '1 Semáforo FODMAP',
      'Guía FODMAP Descubre por qué te inflamas',
      'Acceso inmediato desde tu celular o computadora',
    ],
    guaranteeText: 'Acceso seguro e inmediato tras completar tu inscripción.',
  },

  finalCta: {
    title: 'Empieza hoy a cuidar tu digestión sin presiones',
    copy: 'Desinflama tu cuerpo y recupera tu energía paso a paso, sin dietas extremas ni rutinas imposibles.',
    buttonText: 'QUIERO EMPEZAR (497 MXN)',
    bgImageSrc: '/images/hero-lifestyle.jpg',
  },

  // Preguntas Frecuentes (FAQ)
  faq: {
    eyebrow: 'PREGUNTAS FRECUENTES',
    title: 'Preguntas frecuentes',
    headline: 'Preguntas frecuentes',
    subtitle: 'Resolvemos tus dudas sobre el acceso y el contenido del curso.',
    subheadline: 'Resolvemos tus dudas sobre el acceso y el contenido del curso.',
    items: [
      {
        id: 'faq1',
        question: '¿Cómo accedo al curso?',
        answer: 'Después de tu pago recibirás un correo de Hotmart con tu acceso al curso. Puedes empezar en ese mismo momento.',
      },
      {
        id: 'faq2',
        question: '¿Puedo verlo desde mi celular?',
        answer: 'Sí. Puedes ver los videos y el material de apoyo desde tu celular, tablet o computadora.',
      },
      {
        id: 'faq3',
        question: '¿Necesito conocimientos previos?',
        answer: 'Para nada. Todo está explicado en un lenguaje claro y sencillo, pensado para cualquier persona.',
      },
      {
        id: 'faq4',
        question: '¿Es una dieta?',
        answer: 'No. El Método SANA no es una dieta ni una lista de prohibiciones. Aprendes a entender cómo reacciona tu cuerpo y qué alimentos te ayudan, sin extremos.',
      },
      {
        id: 'faq5',
        question: '¿Cuánto tiempo tengo acceso?',
        answer: 'Tienes acceso a todo el curso para avanzar a tu propio ritmo, sin presiones.',
      },
      {
        id: 'faq6',
        question: '¿El curso sustituye una consulta médica?',
        answer: 'No. El contenido es educativo y de bienestar general, y no sustituye la valoración, diagnóstico ni tratamiento de un profesional de la salud.',
      },
    ] as FAQItem[],
  },

  // Fallbacks for unused components
  guide: {
    eyebrow: 'MATERIAL DE APOYO',
    headline: 'Una mirada al interior',
    subheadline: 'Herramientas descargables.',
    subtitle: 'Herramientas descargables.',
    description: 'Herramientas descargables.',
    title: 'Una mirada al interior',
    mockupImageSrc: '/images/lead-magnet-mockup.jpg',
    mockupImageAlt: 'Mockup 3D',
    features: [] as string[],
  },

  guidePreview: {
    title: 'Una mirada al interior',
    subtitle: 'Herramientas descargables.',
    items: [] as any[],
  },

  metodoSana: {
    eyebrow: 'MÉTODO SANA',
    title: 'Método SANA',
    subtitle: 'Bienestar digestivo',
    copy: 'Educación digestiva',
    pillars: [] as any[],
  },

  method: {
    eyebrow: 'METODOLOGÍA',
    headline: 'Método SANA',
    subheadline: 'Pilares',
    title: 'Método SANA',
    subtitle: 'Pilares',
    steps: [] as MethodStep[],
  },

  program: {
    eyebrow: 'MÉTODO SANA',
    headline: 'Módulos',
    subheadline: 'Aprende a tu ritmo',
    title: 'Módulos',
    subtitle: 'Aprende a tu ritmo',
    modules: [] as ModuleItem[],
  },

  roadmap: {
    eyebrow: 'HOJA DE RUTA',
    headline: 'Tu camino',
    subheadline: 'Fases',
    title: 'Tu camino',
    subtitle: 'Fases',
    steps: [] as RoadmapStep[],
  },

  transformation: {
    eyebrow: 'TRANSFORMACIÓN',
    headline: 'El cambio',
    subheadline: 'Antes y Después',
    title: 'El cambio',
    subtitle: 'Antes y Después',
    items: [] as TransformationItem[],
  },

  benefits: {
    eyebrow: 'MATERIALES',
    headline: 'Materiales Incluidos',
    subheadline: 'Recursos',
    title: 'Materiales Incluidos',
    subtitle: 'Recursos',
    items: [] as BenefitCardItem[],
    cards: [] as BenefitCardItem[],
  },

  bonuses: {
    enabled: false,
    showSection: false,
    eyebrow: 'BONOS',
    headline: 'Bonos',
    subheadline: 'Recursos',
    title: 'Bonos',
    items: [] as BonusItem[],
  },

  community: {
    enabled: false,
    eyebrow: 'COMUNIDAD',
    headline: 'Comunidad',
    subheadline: 'Acompañamiento',
    statsText: 'Comunidad',
    imageSrc: '/images/hero-lifestyle.jpg',
    imageAlt: 'Comunidad',
    highlights: [] as string[],
    title: 'Comunidad',
    subtitle: 'Acompañamiento',
    description: 'Espacio seguro',
    items: [] as any[],
  },

  accompaniment: {
    enabled: false,
    eyebrow: 'ACOMPAÑAMIENTO',
    headline: 'Acompañamiento',
    subheadline: 'Cercanía',
    title: 'Acompañamiento',
    subtitle: 'Cercanía',
    features: [] as string[],
  },

  whatsapp: {
    enabled: true,
    number: '+5215580462787',
    message: 'Hola Gloria, me gustaría recibir más información sobre el Método SANA.',
    ariaLabel: 'Contactar a Vive Sano por WhatsApp',
  },

  ctaSection: {
    headline: 'Empieza hoy tu\nMétodo SANA',
    subheadline: 'Desinflama tu cuerpo y recupera tu energía paso a paso.',
    title: 'Empieza hoy tu\nMétodo SANA',
    subtitle: 'Desinflama tu cuerpo y recupera tu energía paso a paso.',
    buttonText: 'QUIERO EMPEZAR',
    buttonHref: '#oferta',
  },

  pricing: {
    enabled: true,
    eyebrow: 'OFERTA',
    headline: 'Método SANA',
    subheadline: 'Acceso completo al curso práctico',
    title: 'Método SANA',
    subtitle: 'Acceso completo al curso práctico',
    cardTitle: 'Método SANA',
    originalPrice: '$1,200 MXN',
    currentPrice: '497 MXN',
    installments: 'Pago único • Sin mensualidades',
    offerText: 'Precio especial de lanzamiento',
    includedList: ['Curso Práctico', '4 Materiales PDF', 'Acceso Inmediato'],
    ctaText: 'QUIERO EMPEZAR',
    guaranteeNotice: 'Acceso inmediato y seguro',
    guarantee: 'Acceso inmediato y seguro',
  },

  guarantee: {
    enabled: true,
    eyebrow: 'GARANTÍA DE SATISFACCIÓN',
    headline: 'Acceso Seguro',
    description: 'Acceso inmediato a la plataforma y materiales.',
    badgeText: '100% Digital',
    title: 'Garantía Vive Sano',
    subtitle: 'Tranquilidad en tu elección',
    text: 'Tu tranquilidad es nuestra prioridad.',
  },

  trustBar: {
    enabled: true,
    title: 'Confianza y Educación',
    items: [
      { icon: '🌿', text: 'Método SANA' },
      { icon: '📄', text: 'PDF Descargable' },
    ] as TrustItem[],
  },

  testimonials: {
    enabled: false,
    eyebrow: 'PRUEBA SOCIAL',
    headline: 'Testimonios',
    subheadline: 'Historias',
    title: 'Testimonios',
    items: [] as TestimonialItem[],
  },

  // Gracias Page Config
  graciasPage: {
    title: '¡Inscripción Exitosa! | Método SANA',
    headline: '¡Bienvenida al Método SANA!',
    subheadline: 'Hemos enviado el acceso directo a tu correo electrónico.',
    ctaButtonText: 'INGRESAR A MI CURSO',
    whatsappSupportText: '¿Necesitas ayuda o tienes alguna pregunta?',
    steps: [
      {
        number: '01',
        title: 'Revisa tu Correo',
        description: 'Busca el mensaje de confirmación enviado por Vive Sano / Hotmart.',
      },
      {
        number: '02',
        title: 'Descarga los Materiales',
        description: 'Accede a tus materiales PDF.',
      },
    ],
  },

  // Pago Page Config
  pagoPage: {
    title: 'Inscripción al Método SANA | Vive Sano',
    headline: 'Completa tu inscripción al Método SANA',
    subheadline: 'Acceso inmediato al curso práctico por Gloria Molina.',
    productName: 'Método SANA',
    originalPriceText: '$1,200 MXN',
    currentPriceText: '497 MXN',
    installmentsNote: 'Pago único de 497 MXN',
    ctaButtonText: 'QUIERO EMPEZAR EN HOTMART',
    items: ['Curso Práctico Método SANA', 'Materiales PDF Descargables', 'Acceso Digital Inmediato'],
    securityItems: [
      'Acceso inmediato a la plataforma digital',
      'Materiales descargables en formato PDF',
      'Pago encriptado con certificado SSL vía Hotmart',
    ],
  },

  // Footer Config
  footer: {
    brandName: 'VIVE SANO',
    tagline: 'Educación y conciencia para tu bienestar digestivo cotidiano.',
    copyright: '© 2026 Vive Sano — Gloria Molina. Todos los derechos reservados.',
    disclaimer: 'Este material tiene fines educativos y de bienestar general. No sustituye la valoración, diagnóstico ni tratamiento de un profesional de la salud.',
    contactEmail: 'gloria@vive-sano.mx',
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: '¿Te ha pasado?', href: '#problema' },
      { label: 'Contenido', href: '#contenido' },
      { label: 'Lo que incluye', href: '#incluye' },
      { label: 'Material de Apoyo', href: '#materiales' },
      { label: 'Conoce a Gloria', href: '#conoce-vive-sano' },
      { label: 'Preguntas Frecuentes', href: '#faq' },
    ],
    legalLinks: [
      { label: 'Aviso de Privacidad', href: '/privacidad' },
    ],
    socialLinks: [
      { platform: 'Facebook', url: 'https://www.facebook.com/ViveSanom/' },
      { platform: 'Instagram', url: 'https://www.instagram.com/vivesanom/' },
    ],
  },
};

export default contentData;
