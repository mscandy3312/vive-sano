# VIVE SANO — Funnel Digital (Fase 1)

Landing Page premium desarrollada con Next.js (App Router), TypeScript y Tailwind CSS para la nueva estrategia digital de **Vive Sano** enfocada en Salud Digestiva y Bienestar.

---

## 📌 Descripción del Proyecto

Este proyecto constituye la Fase 1 del nuevo funnel digital de **Vive Sano**. Implementa una arquitectura moderna, limpia, escalable y accesible, orientada a ofrecer una experiencia editorial de alto nivel para marcas de bienestar y educación en salud.

### Objetivos de la Fase 1:
- Base tecnológica en **Next.js 15+ (App Router)** y **TypeScript**.
- Sistema visual **Premium, Natural, Elegante y Editorial** en **Tailwind CSS**.
- Componentes reutilizables primarios: `Button`, `Container`, `Section`, `Header` y `Hero`.
- Separación limpia de copy editable mediante `data/content.ts`.
- Configuración preparada para futuras integraciones en `lib/config.ts` y `.env.example`.
- Preparado para deployment directo en **Vercel** y control de versiones en **GitHub**.

---

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Fuentes**: [Google Fonts](https://fonts.google.com/) (`Playfair Display` + `Plus Jakarta Sans` mediante `next/font`)
- **Iconografía**: SVG Vectoriales optimizados e integrados en componentes
- **Calidad de Código**: ESLint 9+

---

## 📂 Estructura del Proyecto

```
vive-sano/
├── app/
│   ├── globals.css         # Sistema de variables de diseño y utilidades Tailwind
│   ├── layout.tsx          # Root Layout con fuentes y SEO base
│   └── page.tsx            # Página principal integrando Header y Hero
├── components/
│   ├── Button.tsx          # Componente reutilizable de botones (primary, secondary, outline)
│   ├── Container.tsx       # Contenedor responsivo con max-width y padding unificado
│   ├── Header.tsx          # Header sticky con menú móvil y navegación accesible
│   ├── Hero.tsx            # Hero con layout 50/50, placeholders de copy y badges de confianza
│   └── Section.tsx         # Sección semántica con variantes de fondo
├── data/
│   └── content.ts          # Almacén de contenido y textos editables
├── lib/
│   └── config.ts           # Configuración de variables de entorno futuras
├── public/
│   └── images/             # Imágenes estáticas y placeholder (hero-placeholder.webp)
├── .env.example            # Plantilla de variables de entorno
├── next.config.ts          # Configuración de Next.js
├── package.json            # Dependencias y scripts del proyecto
├── tsconfig.json           # Configuración de TypeScript
└── README.md               # Documentación del proyecto
```

---

## ⚙️ Requisitos Previos e Instalación

### Requisitos:
- Node.js v18.17+ o superior
- npm v9+

### Pasos de Instalación:

1. **Clonar o ingresar al directorio del proyecto**:
   ```bash
   cd vive-sano
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno** (opcional para Fase 1):
   Copiar `.env.example` a `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

4. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

---

## 📋 Variables de Entorno (.env.example)

Las siguientes variables están preparadas para las fases posteriores (Hotmart, WhatsApp, Meta Pixel, Google Analytics):

```env
NEXT_PUBLIC_HOTMART_CHECKOUT_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

---

## 🚀 Comandos Disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local en `http://localhost:3000` |
| `npm run build` | Compila la aplicación optimizada para producción |
| `npm run start` | Inicia el servidor de producción compilado |
| `npm run lint` | Ejecuta ESLint para verificar calidad y buenas prácticas |

---

## 🎨 Sistema Visual y Paleta de Colores

| Token | Propósito | Color Hex |
| :--- | :--- | :--- |
| `--color-primary` | Verde Natural | `#2D5A43` |
| `--color-primary-dark` | Verde Oscuro Editorial | `#1B3B2B` |
| `--color-primary-light` | Verde Suave Organico | `#E8F2EB` |
| `--color-background` | Crema Cálido | `#FAF7F2` |
| `--color-background-soft` | Crema Beige Suave | `#F4EFE6` |
| `--color-text` | Gris Oscuro Orgánico | `#1D2722` |
| `--color-text-muted` | Texto Secundario | `#596760` |
| `--color-border` | Bordes Sutiles | `#E0E7E2` |

---

## 🗺️ Roadmap de Fases Siguientes

- **FASE 2**:
  - `ProblemSection` (Abordaje del dolor / problema)
  - `BenefitsSection` (Beneficios clave del programa)
  - `MethodSection` (Explicación del método Vive Sano)
  - `ProgramSection` (Estructura y entregables del programa)
  - `GuideSection` (Perfil y autoridad del instructor / Mary Carmen)
- **FASE 3**:
  - `Testimonials` (Prueba social)
  - `FAQ` (Preguntas frecuentes desplegables)
  - `CTA Section` (Llamado final a la acción)
  - `Footer` & `WhatsAppButton`
- **FASE 4**: Integraciones de Checkout, Analytics, Pixel y Deployment Final en Vercel.
