# ⚙️ Guía de Configuración e Integración con Systeme.io

Este documento contiene las instrucciones detalladas para integrar la **Landing Page de Salud Digestiva** con tu cuenta de **Systeme.io** una vez que tengas acceso a tu panel.

---

## 📋 Pasos de Configuración en Systeme.io

### 1. Conectar el Formulario
1. Entra a tu panel de **Systeme.io**.
2. Ve a **Funnels (Túneles)** -> Crea o selecciona tu túnel de captación.
3. Copia la `Action URL` de tu formulario en Systeme.io.
4. Pega dicha URL en tu archivo `.env.local` en la raíz del proyecto:
   ```env
   NEXT_PUBLIC_SYSTEME_FORM_ACTION=https://systeme.io/form/submit/TU_ID_DE_FORMULARIO
   ```

---

### 2. Crear la Etiqueta (Tag)
1. Ve a **Contactos** -> **Etiquetas (Tags)**.
2. Crea la etiqueta exactamente con el nombre:
   `Lead - Salud Digestiva`

---

### 3. Configurar la Regla de Automatización
1. Ve a **Automatizaciones** -> **Reglas de Automatización**.
2. Crea una nueva regla:
   - **Disparador (Trigger):** *Inscripción en el formulario de la página*.
   - **Acción 1:** *Añadir etiqueta* -> Selecciona `Lead - Salud Digestiva`.
   - **Acción 2:** *Enviar correo electrónico*.

---

### 4. Plantilla del Email Automatizado de Entrega

**Asunto del correo:**
`Aquí tienes tu guía de salud digestiva 🌿`

**Cuerpo del mensaje:**
```text
¡Hola [Nombre]!

Bienvenido/a a Vive Sano. Muchas gracias por dar este paso para cuidar tu bienestar digestivo.

Tal como prometimos, aquí tienes el enlace para descargar tu archivo en formato PDF:

👉 [URL_DEL_LEAD_MAGNET]

En esta guía encontrarás recomendaciones sencillas y hábitos prácticos que podrás incorporar progresivamente en tu rutina diaria.

Si tienes alguna duda o sugerencia, no dudes en responder a este correo.

Con cariño,
El equipo de Salud Digestiva & Bienestar — Vive Sano
```

---

### 5. URL del Lead Magnet (PDF)
1. Sube tu documento PDF a tu servidor, alojamiento de Systeme.io o Google Drive.
2. Agrega la URL final en tu `.env.local`:
   ```env
   NEXT_PUBLIC_LEAD_MAGNET_PDF_URL=https://tu-dominio.com/guia-salud-digestiva.pdf
   ```
