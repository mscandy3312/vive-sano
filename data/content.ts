/**
 * VIVE SANO — Centralized Data & Visual Content Store
 * 
 * BRAND: Vive Sano
 * FOUNDER & RESPONSIBLE: Gloria Molina
 * PRODUCT: Método SANA (Curso práctico de bienestar digestivo)
 * OFFICIAL PALETTE:
 * - Verde (#4DA92C): Marca, CTA principal ("QUIERO EMPEZAR"), Salud, Bienestar, Estados positivos
 * - Naranja (#E76100): Atención, énfasis, señales, energía
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
    productName: 'Método SANA',
    priceText: '497,00 MXN',
    ctaText: 'QUIERO EMPEZAR',
    communityStats: 'Comunidad de bienestar',
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
      { label: 'Inicio', href: '#inicio' },
      { label: '¿Te ha pasado?', href: '#problema' },
      { label: 'Método SANA', href: '#metodo-sana' },
      { label: 'Material de Apoyo', href: '#materiales' },
      { label: 'Oferta', href: '#oferta' },
      { label: 'Conoce a Gloria', href: '#conoce-vive-sano' },
      { label: 'Preguntas Frecuentes', href: '#faq' },
    ] as NavItem[],
    ctaText: 'QUIERO EMPEZAR',
    ctaHref: '#oferta',
  },

  // Hero Principal (Método SANA)
  hero: {
    eyebrow: '🌿 MÉTODO SANA POR GLORIA MOLINA',
    title: 'Empieza hoy tu Método SANA',
    headline: 'Empieza hoy tu Método SANA',
    promise: 'Desinflama tu cuerpo y recupera tu energía paso a paso, sin dietas extremas ni rutinas imposibles.',
    subheadline: 'Un curso práctico para entender las señales de tu digestión, saber qué alimentos te inflaman y cuáles te ayudan, y aprender a escuchar a tu cuerpo con los Semáforos Digestivos.',
    priceText: '497,00 MXN',
    primaryCtaText: 'QUIERO EMPEZAR',
    primaryCtaHref: '#oferta',
    secondaryCtaText: 'CONOCER EL MÉTODO',
    secondaryCtaHref: '#metodo-sana',
    imageSrc: '/images/hero-lifestyle.jpg',
    imageAlt: 'Fotografía de bienestar Vive Sano',
    highlights: [
      '✓ Acceso digital e inmediato al curso',
      '✓ Incluye las 4 Herramientas de Apoyo descargables',
      '✓ Aprendizaje a tu propio ritmo sin presiones',
    ],
  },

  // Sección de Identificación ("¿TE SUENA FAMILIAR?")
  identification: {
    eyebrow: '¿TE SUENA FAMILIAR?',
    title: '¿Te ha pasado?',
    headline: '¿Te ha pasado?',
    subtitle: 'Sientes que comes bien, pero tu digestión no se siente bien y no sabes qué lo está provocando.',
    subheadline: 'Sientes que comes bien, pero tu digestión no se siente bien y no sabes qué lo está provocando.',
    copy: 'El bienestar también puede construirse con pequeñas decisiones conscientes e información clara.',
    content: ['El bienestar también puede construirse con pequeñas decisiones conscientes.'],
    quote: 'El bienestar se construye un pequeño paso a la vez.',
    imageSrc: '/images/hero-lifestyle.jpg',
    imageAlt: 'Momento de calma y bienestar',
    cards: [
      {
        id: 'c1',
        title: 'Te inflamas después de comer',
        description: 'Amaneces con el abdomen plano y en la tarde ya te sientes hinchada.',
        icon: '🫄',
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
        description: 'Terminas de comer y en lugar de energía sientes pesadez y cansancio.',
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

  problem: {
    eyebrow: '¿TE SUENA FAMILIAR?',
    headline: '¿Te ha pasado?',
    title: '¿Te ha pasado?',
    subheadline: 'Sientes que comes bien, pero tu digestión no se siente bien y no sabes qué lo está provocando.',
    subtitle: 'Sientes que comes bien, pero tu digestión no se siente bien y no sabes qué lo está provocando.',
    imageSrc: '/images/hero-lifestyle.jpg',
    imageAlt: 'Fotografía lifestyle Vive Sano',
    items: [
      {
        id: 'c1',
        title: 'Te inflamas después de comer',
        description: 'Amaneces con el abdomen plano y en la tarde ya te sientes hinchada.',
        icon: '🫄',
        colorAccent: '#4DA92C',
      },
      {
        id: 'c2',
        title: 'Tienes gases o ruidos que te incomodan',
        description: 'Aparecen después de comer o durante el día, sin saber qué los provoca.',
        icon: '💨',
        colorAccent: '#0078BF',
      },
      {
        id: 'c3',
        title: 'Te da sueño después de comer',
        description: 'Terminas de comer y en lugar de energía sientes pesadez y cansancio.',
        icon: '😴',
        colorAccent: '#E76100',
      },
      {
        id: 'c4',
        title: 'Tu digestión no fluye',
        description: 'Estreñimiento, reflujo o ardor que ya se volvieron parte de tu día.',
        icon: '🔄',
        colorAccent: '#4DA92C',
      },
    ] as ProblemItem[],
    cards: [
      {
        id: 'c1',
        title: 'Te inflamas después de comer',
        description: 'Amaneces con el abdomen plano y en la tarde ya te sientes hinchada.',
        icon: '🫄',
        colorAccent: '#4DA92C',
      },
      {
        id: 'c2',
        title: 'Tienes gases o ruidos que te incomodan',
        description: 'Aparecen después de comer o durante el día, sin saber qué los provoca.',
        icon: '💨',
        colorAccent: '#0078BF',
      },
      {
        id: 'c3',
        title: 'Te da sueño después de comer',
        description: 'Terminas de comer y en lugar de energía sientes pesadez y cansancio.',
        icon: '😴',
        colorAccent: '#E76100',
      },
      {
        id: 'c4',
        title: 'Tu digestión no fluye',
        description: 'Estreñimiento, reflujo o ardor que ya se volvieron parte de tu día.',
        icon: '🔄',
        colorAccent: '#4DA92C',
      },
    ] as ProblemCard[],
  },

  // Sección Método SANA (La Solución)
  metodoSana: {
    eyebrow: 'EL CAMINO PASO A PASO',
    title: '¿Qué es el Método SANA?',
    subtitle: 'Una metodología amable y consciente diseñada para que aprendas a observar cómo responde tu digestión sin caer en dietas drásticas.',
    copy: 'El Método SANA te enseña a clasificar las respuestas de tu cuerpo mediante Semáforos Digestivos, identificar detonantes y construir hábitos duraderos que le devuelvan el descanso y la energía a tu organismo.',
    pillars: [
      {
        number: '01',
        title: 'Observación Consciente',
        description: 'Aprende a registrar lo que comes y a identificar las señales físicas que tu cuerpo emite durante el día.',
        color: '#4DA92C',
      },
      {
        number: '02',
        title: 'Semáforos Digestivos',
        description: 'Clasifica tus síntomas y alimentos en Verde (bienestar), Naranja (precaución) y Azul (análisis FODMAP).',
        color: '#0078BF',
      },
      {
        number: '03',
        title: 'Nutrición Amable',
        description: 'Sustituye detonantes por ingredientes que le den descanso a tu sistema digestivo sin pasar hambre.',
        color: '#E76100',
      },
    ],
  },

  method: {
    eyebrow: 'NUESTRA METODOLOGÍA',
    headline: 'El Método SANA',
    subheadline: 'Pilares para transformar tus hábitos',
    title: 'El Método SANA',
    subtitle: 'Pilares para transformar tus hábitos',
    steps: [
      {
        number: '01',
        title: 'Observación Consciente',
        description: 'Identifica los detonantes de tu digestión.',
        highlight: 'Pilar 1',
      },
    ] as MethodStep[],
  },

  // Sección "Una mirada al interior" (Material de Apoyo)
  materialSupport: {
    eyebrow: 'MATERIAL DE APOYO',
    title: 'Una mirada al interior',
    subtitle: 'Herramientas descargables para que observes cómo reacciona tu digestión día a día.',
    materials: [
      {
        id: 'm1',
        title: 'Diario Digestivo',
        description: 'Registra lo que comes y cómo te sientes para entender tu propio patrón.',
        primaryColor: '#4DA92C',
        badgeLabel: 'Registro Diario',
        imageSrc: '/images/lead-magnet-mockup.jpg',
        imageAlt: 'Mockup del Diario Digestivo Vive Sano',
      },
      {
        id: 'm2',
        title: '8 Semáforos Digestivos',
        description: 'Uno para cada señal, para que identifiques en qué color está tu cuerpo.',
        primaryColor: '#4DA92C',
        accentColor: '#E76100',
        badgeLabel: 'Sistema de Semáforos',
        imageSrc: '/images/lead-magnet-mockup.jpg',
        imageAlt: 'Mockup de los 8 Semáforos Digestivos',
        isSemaforoMulti: true,
      },
      {
        id: 'm3',
        title: 'Semáforo FODMAP',
        description: 'Identifica qué alimentos pueden estar provocando tus gases.',
        primaryColor: '#0078BF',
        badgeLabel: 'Análisis FODMAP',
        imageSrc: '/images/lead-magnet-mockup.jpg',
        imageAlt: 'Mockup del Semáforo FODMAP',
      },
      {
        id: 'm4',
        title: 'Guía FODMAP: Descubre por qué te inflamas',
        description: 'Conoce qué alimentos le dan descanso a tu digestión, cuáles conviene limitar y un ejercicio para revisar tus combinaciones.',
        primaryColor: '#0078BF',
        accentColor: '#E76100',
        badgeLabel: 'Guía Práctica',
        imageSrc: '/images/lead-magnet-mockup.jpg',
        imageAlt: 'Mockup de la Guía FODMAP',
      },
    ] as MaterialSupportItem[],
  },

  guide: {
    eyebrow: 'MATERIAL DE APOYO',
    headline: 'Una mirada al interior',
    subheadline: 'Herramientas descargables para que observes cómo reacciona tu digestión día a día.',
    subtitle: 'Herramientas descargables para que observes cómo reacciona tu digestión día a día.',
    description: 'Herramientas descargables para que observes cómo reacciona tu digestión día a día.',
    title: 'Una mirada al interior',
    mockupImageSrc: '/images/lead-magnet-mockup.jpg',
    mockupImageAlt: 'Mockup 3D editorial de los Materiales Vive Sano',
    features: [
      '✓ Diario Digestivo interactivo',
      '✓ 8 Semáforos Digestivos visuales',
      '✓ Semáforo FODMAP',
      '✓ Guía FODMAP práctica',
    ],
  },

  guidePreview: {
    title: 'Una mirada al interior',
    subtitle: 'Herramientas descargables para que observes cómo reacciona tu digestión día a día.',
    items: [
      {
        id: 'gp1',
        title: 'Diario Digestivo',
        description: 'Registra lo que comes y cómo te sientes.',
        imageSrc: '/images/lead-magnet-mockup.jpg',
        imageAlt: 'Diario Digestivo',
      },
    ],
  },

  benefits: {
    eyebrow: 'MATERIAL DE APOYO',
    headline: 'Materiales Incluidos',
    subheadline: 'Recursos prácticos',
    title: 'Materiales Incluidos',
    subtitle: 'Recursos prácticos',
    items: [
      {
        id: 'b1',
        title: 'Diario Digestivo',
        description: 'Registra lo que comes.',
        icon: '📄',
        imageSrc: '/images/lead-magnet-mockup.jpg',
        imageAlt: 'Diario Digestivo',
      },
    ] as BenefitCardItem[],
    cards: [
      {
        id: 'b1',
        title: 'Diario Digestivo',
        description: 'Registra lo que comes.',
        icon: '📄',
        imageSrc: '/images/lead-magnet-mockup.jpg',
        imageAlt: 'Diario Digestivo',
      },
    ] as BenefitCardItem[],
  },

  audience: {
    title: 'El Método SANA es para ti si...',
    subtitle: 'Diseñado para acompañarte con respeto y claridad en tu proceso.',
    items: [
      { id: 'a1', text: 'Te inflamas con frecuencia después de comer.' },
      { id: 'a2', text: 'Sientes pesadez o cansancio tras tus alimentos.' },
      { id: 'a3', text: 'Quieres identificar los detonantes sin dietas extremas.' },
    ] as AudienceItem[],
  },

  aboutGloria: {
    eyebrow: 'CONOCE A TU GUÍA',
    title: 'Hola, soy Gloria Molina',
    headline: 'Hola, soy Gloria Molina',
    name: 'Gloria Molina',
    role: 'Fundadora de Vive Sano',
    subheadline: 'Fundadora de Vive Sano',
    copy: 'Vive Sano y el Método SANA nacieron de la necesidad de acercar información clara, práctica y libre de extremos a quienes sufren de incomodidad digestiva recurrente.',
    quote: 'El bienestar no se logra con restricciones severas, sino aprendiendo a escuchar con empatía las señales de tu cuerpo.',
    signatureText: 'Gloria Molina — Fundadora de Vive Sano',
    imageSrc: '/images/gloria/gloria-molina.jpg',
    imageAlt: 'Fotografía oficial de Gloria Molina',
    bioParagraphs: [
      'Vive Sano y el Método SANA nacieron de la necesidad de acercar información clara y práctica.',
    ],
  },

  offer: {
    eyebrow: 'OFERTA PRINCIPAL',
    headline: 'Método SANA',
    promise: 'Desinflama tu cuerpo y recupera tu energía paso a paso, sin dietas extremas ni rutinas imposibles.',
    priceText: '497,00 MXN',
    ctaText: 'QUIERO EMPEZAR',
    includedItems: [
      'Acceso completo al Curso Práctico Método SANA',
      'Diario Digestivo en formato PDF descargable',
      '8 Semáforos Digestivos en alta definición',
      'Semáforo FODMAP para control de gases e inflamación',
      'Guía FODMAP: Descubre por qué te inflamas',
      'Acceso inmediato desde cualquier dispositivo',
    ],
    guaranteeText: 'Acceso seguro e inmediato tras completar tu inscripción.',
  },

  finalCta: {
    title: 'Empieza hoy a cuidar tu digestión sin presiones',
    copy: 'Desinflama tu cuerpo y recupera tu energía paso a paso, sin dietas extremas ni rutinas imposibles.',
    buttonText: 'QUIERO EMPEZAR (497,00 MXN)',
    bgImageSrc: '/images/hero-lifestyle.jpg',
  },

  ctaSection: {
    headline: 'Empieza hoy tu Método SANA',
    subheadline: 'Desinflama tu cuerpo y recupera tu energía paso a paso.',
    title: 'Empieza hoy tu Método SANA',
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
    currentPrice: '497,00 MXN',
    installments: 'Pago único',
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
    headline: 'Lo que dicen quienes han comenzado',
    subheadline: 'Historias de transformación',
    title: 'Lo que dicen quienes han comenzado',
    items: [] as TestimonialItem[],
  },

  bonuses: {
    enabled: false,
    showSection: false,
    eyebrow: 'BONOS',
    headline: 'Recursos Complementarios',
    subheadline: 'Herramientas de apoyo',
    title: 'Recursos Complementarios',
    items: [] as BonusItem[],
  },

  community: {
    enabled: false,
    eyebrow: 'COMUNIDAD VIVE SANO',
    headline: 'Comunidad Vive Sano',
    subheadline: 'Educación y acompañamiento',
    statsText: 'Comunidad de bienestar',
    imageSrc: '/images/hero-lifestyle.jpg',
    imageAlt: 'Comunidad Vive Sano',
    highlights: ['Acompañamiento diario'],
    title: 'Comunidad Vive Sano',
    subtitle: 'Acompañamiento y educación',
    description: 'Un espacio seguro',
    items: [],
  },

  accompaniment: {
    enabled: false,
    eyebrow: 'ACOMPAÑAMIENTO EN VIVO',
    headline: 'Acompañamiento por Gloria Molina',
    subheadline: 'Educación y cercanía',
    title: 'Acompañamiento por Gloria Molina',
    subtitle: 'Educación y cercanía',
    features: ['Atención cercana'],
  },

  whatsapp: {
    enabled: true,
    number: '+5215580462787',
    message: 'Hola Gloria, me gustaría recibir más información sobre el Método SANA.',
    ariaLabel: 'Contactar a Vive Sano por WhatsApp',
  },

  program: {
    eyebrow: 'MÉTODO SANA',
    headline: 'Módulos del Curso',
    subheadline: 'Aprende a tu ritmo',
    title: 'El Método SANA',
    subtitle: 'Aprende a tu ritmo',
    modules: [] as ModuleItem[],
  },

  roadmap: {
    eyebrow: 'HOJA DE RUTA',
    headline: 'Tu camino con el Método SANA',
    subheadline: 'Fases amables',
    title: 'Tu camino con el Método SANA',
    subtitle: 'Fases amables',
    steps: [] as RoadmapStep[],
  },

  transformation: {
    eyebrow: 'TRANSFORMACIÓN',
    headline: 'El cambio que experimentarás',
    subheadline: 'Antes y Después',
    title: 'El cambio que experimentarás',
    subtitle: 'Antes y Después',
    items: [] as TransformationItem[],
  },

  // Preguntas Frecuentes (FAQ)
  faq: {
    eyebrow: 'PREGUNTAS FRECUENTES',
    title: 'Preguntas Frecuentes sobre el Método SANA',
    headline: 'Preguntas Frecuentes sobre el Método SANA',
    subtitle: 'Resolvemos tus dudas sobre el contenido, acceso y materiales incluidos.',
    subheadline: 'Resolvemos tus dudas sobre el contenido, acceso y materiales incluidos.',
    items: [
      {
        id: 'faq1',
        question: '¿Qué es el Método SANA?',
        answer: 'Es un curso práctico en formato digital que te enseña a observar las respuestas de tu cuerpo, identificar los alimentos que te generan inflamación o gases, y utilizar los Semáforos Digestivos para recuperar tu energía diaria.',
      },
      {
        id: 'faq2',
        question: '¿Qué precio tiene y cómo lo recibo?',
        answer: 'El Método SANA tiene un costo único de 497,00 MXN. Al inscribirte recibes acceso digital e inmediato al curso y a las 4 Herramientas de Apoyo en PDF.',
      },
      {
        id: 'faq3',
        question: '¿Necesito seguir una dieta estricta?',
        answer: 'No. El Método SANA NO promueve dietas extremas ni rutinas imposibles. Su objetivo es enseñarte a escuchar a tu propio cuerpo y tomar decisiones amables y sostenibles.',
      },
      {
        id: 'faq4',
        question: '¿El Método SANA reemplaza una consulta médica?',
        answer: 'No. El Método SANA es un recurso práctico educativo de bienestar general. Si tienes una condición médica grave o crónica, siempre debes consultar con un profesional de la salud.',
      },
      {
        id: 'faq5',
        question: '¿Puedo consultarlo desde mi celular?',
        answer: 'Sí. Tanto la plataforma del curso como las guías y semáforos en PDF están optimizados para celular, tablet o computadora.',
      },
    ] as FAQItem[],
  },

  // Form (for lead magnet compatibility)
  form: {
    title: 'Empieza hoy tu Método SANA',
    subtitle: 'Ingresa tus datos para continuar con tu inscripción.',
    nameLabel: 'Nombre completo',
    namePlaceholder: 'Ej. María García',
    nameError: 'Ingresa tu nombre.',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'tu@email.com',
    emailError: 'Ingresa un correo electrónico válido.',
    checkboxText: 'Acepto el Aviso de Privacidad de Vive Sano.',
    checkboxError: 'Debes aceptar el Aviso de Privacidad.',
    buttonText: 'QUIERO EMPEZAR (497,00 MXN)',
    loadingText: 'Procesando...',
    successTitle: '¡Bienvenida al Método SANA! 🌿',
    successMessage1: 'Tu registro ha sido completado.',
    successMessage2: 'En breve serás redirigida al acceso de tus materiales.',
    successButtonText: 'CONTINUAR AL PAGO',
    errorMessage: 'Ocurrió un problema temporal. Por favor intenta nuevamente.',
    microcopy: 'Tu información está 100% protegida. Respetamos tu privacidad.',
    privacyLinkText: 'Aviso de Privacidad',
  },

  // Pago Page Config
  pagoPage: {
    title: 'Inscripción al Método SANA | Vive Sano',
    headline: 'Completa tu inscripción al Método SANA',
    subheadline: 'Acceso inmediato al curso práctico por Gloria Molina.',
    productName: 'Método SANA',
    originalPriceText: '$1,200 MXN',
    currentPriceText: '497,00 MXN',
    installmentsNote: 'Pago único de 497,00 MXN',
    ctaButtonText: 'QUIERO EMPEZAR EN HOTMART',
    items: ['Curso Práctico Método SANA', '4 Materiales PDF', 'Acceso Ilimitado'],
    securityItems: [
      'Acceso inmediato a la plataforma digital',
      'Materiales descargables en formato PDF',
      'Pago encriptado con certificado SSL vía Hotmart',
    ],
  },

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
        description: 'Accede a tu Diario Digestivo y Semáforos en PDF.',
      },
    ],
  },

  // Footer
  footer: {
    brandName: 'VIVE SANO',
    tagline: 'Educación y conciencia para tu bienestar digestivo cotidiano.',
    copyright: '© 2026 Vive Sano — Gloria Molina. Todos los derechos reservados.',
    disclaimer: 'Este material tiene fines educativos y de bienestar general. No sustituye la valoración, diagnóstico ni tratamiento de un profesional de la salud.',
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: '¿Te ha pasado?', href: '#problema' },
      { label: 'Método SANA', href: '#metodo-sana' },
      { label: 'Material de Apoyo', href: '#materiales' },
      { label: 'Oferta', href: '#oferta' },
      { label: 'Conoce a Gloria', href: '#conoce-vive-sano' },
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
