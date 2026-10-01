# VIVE SANO — Landing Page de Captación (Guía Gratuita)

Landing Page premium de captación de leads desarrollada con Next.js (App Router), TypeScript y Tailwind CSS para la marca **Vive Sano** creada por **Gloria Molina**.

---

## 📌 Descripción del Proyecto

Este proyecto constituye la primera etapa del embudo de ventas digital de **Vive Sano**. Su único objetivo es captar prospectos interesados en mejorar sus hábitos y su bienestar digestivo a cambio de una **Guía Gratuita en PDF**.

### Flujo del Embudo:
$$\text{Visita} \longrightarrow \text{Identificación} \longrightarrow \text{Interés} \longrightarrow \text{Valor} \longrightarrow \text{Confianza} \longrightarrow \text{Guía Gratuita} \longrightarrow \text{Registro}$$

---

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Fuentes**: `Playfair Display` (serif editorial) + `Plus Jakarta Sans` (sans-serif moderna) mediante `next/font`
- **Iconografía**: SVG Vectoriales optimizados integrados
- **Calidad de Código**: ESLint 9+

---

## 📂 Estructura de Rutas y Arquitectura

- `/` — Landing Page Principal de Captación de Leads (Guía Gratuita).
- `/registro` — Página directa del formulario de registro.
- `/gracias` — Página de confirmación y entrega inmediata de la Guía PDF.
- `/programa` — *(Preparado para el embudo futuro)* Página de venta del programa completo de Gloria Molina.
- `/pago` — *(Preparado para el embudo futuro)* Checkout en Hotmart.
- `/gracias-compra` — *(Preparado para el embudo futuro)* Confirmación de compra del programa.

---

## ⚙️ Requisitos Previos e Instalación

### Requisitos:
- Node.js v18.17+
- npm v9+

### Instalación:

1. **Clonar e ingresar al directorio**:
   ```bash
   cd vive-sano
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   Copiar `.env.example` a `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

4. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000).

---

## 📋 Variables de Entorno (`.env.example`)

```env
NEXT_PUBLIC_SITE_URL=https://www.vive-sano.mx
NEXT_PUBLIC_SYSTEME_FORM_ACTION=
NEXT_PUBLIC_LEAD_MAGNET_PDF_URL=
NEXT_PUBLIC_HOTMART_CHECKOUT_URL=
NEXT_PUBLIC_PRODUCT_ACCESS_URL=
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
| `npm run lint` | Ejecuta ESLint para verificar calidad de código |

---

## 🎨 Paleta de Colores de Marca

| Token | Tono Hex | Aplicación |
| :--- | :--- | :--- |
| **Verde Profundo** | `#123C32` | Titulares principales, hero bar, CTA final y elementos de prestigio |
| **Verde Bosque** | `#1F6B50` | Botones de conversión principales, badges y acentos primarios |
| **Verde Natural** | `#5E9F78` | Detalles secundarios y numeración |
| **Verde Salvia** | `#B8D8C2` | Fondos suaves, bordes y popups |
| **Verde Muy Claro** | `#EEF7F0` | Fondos alternativos de sección |
| **Crema Orgánico** | `#FAF8F1` | Fondo general de la aplicación |
| **Blanco Nieve** | `#FFFFFF` | Contraste en tarjetas elevadas |

---

## 👤 Créditos y Derechos

- **Propietaria & Fundadora**: Gloria Molina
- **Marca**: Vive Sano
- **Derechos**: © 2026 Vive Sano — Todos los derechos reservados.
