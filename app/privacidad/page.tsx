import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad | Vive Sano — Gloria Molina',
  description: 'Aviso de Privacidad oficial de Vive Sano y el Método SANA por Gloria Molina.',
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F1] text-[#123C32] font-sans antialiased">
      <Header />

      <main className="flex-1 pt-28 pb-16 sm:pt-36 sm:pb-24">
        <Section className="py-8">
          <Container size="md">
            
            {/* BACK TO HOME NAVIGATION BUTTON */}
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-extrabold text-[#4DA92C] bg-white hover:bg-[#4DA92C] hover:text-white px-4 py-2.5 rounded-2xl border border-[#B8D8C2] shadow-2xs transition-all"
              >
                <span>← Volver al Inicio (Método SANA)</span>
              </Link>
            </div>

            <div className="bg-white rounded-3xl border border-[#D5E8DC] p-6 sm:p-12 shadow-sm space-y-8 text-left">
              
              {/* HEADER */}
              <div className="border-b border-[#D5E8DC] pb-6 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0078BF] bg-[#EBF5FC] px-3.5 py-1 rounded-full border border-[#B3DAF2]">
                  DOCUMENTO LEGAL
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#123C32]">
                  Aviso de Privacidad
                </h1>
                <p className="text-xs text-[#4A6B60]">
                  Vive Sano — Gloria Molina • Última actualización: Octubre 2026
                </p>
              </div>

              {/* CONTENT BODY */}
              <div className="space-y-6 text-xs sm:text-sm text-[#4A6B60] leading-relaxed">
                
                {/* 1. RESPONSABLE */}
                <section className="space-y-2">
                  <h2 className="font-serif font-bold text-lg text-[#123C32]">
                    1. Responsable del Tratamiento de Datos Personales
                  </h2>
                  <p>
                    <strong>Gloria Molina</strong>, operando bajo la marca comercial <strong>Vive Sano</strong> (en adelante "El Responsable"), con correo electrónico de contacto <a href="mailto:gloria@vive-sano.mx" className="text-[#0078BF] underline">gloria@vive-sano.mx</a>, es la responsable del tratamiento, uso y protección de sus datos personales.
                  </p>
                  <p className="text-[11px] italic text-[#4A6B60]/80">
                    [Nota legal: Domicilio físico exacto pendiente de confirmación formal previo a auditoría formal de protección de datos].
                  </p>
                </section>

                {/* 2. DATOS RECOPILADOS */}
                <section className="space-y-2">
                  <h2 className="font-serif font-bold text-lg text-[#123C32]">
                    2. Datos Personales que Recopilamos
                  </h2>
                  <p>
                    Para proporcionar acceso al curso digital <em>Método SANA</em> y sus materiales complementarios, recopilamos únicamente los siguientes datos personales de identificación y contacto:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Nombre completo</li>
                    <li>Correo electrónico</li>
                    <li>Información técnica de acceso (dirección IP, tipo de navegador y dispositivo)</li>
                  </ul>
                </section>

                {/* 3. DATOS SENSIBLES */}
                <section className="space-y-2">
                  <h2 className="font-serif font-bold text-lg text-[#123C32]">
                    3. Tratamiento de Datos Personales Sensibles
                  </h2>
                  <p>
                    El Responsable <strong>NO recopila ni solicita datos personales sensibles</strong> (como datos genéticos, historial clínico médico detallado, datos biométricos, religión ni origen étnico). El <em>Método SANA</em> es un programa estrictamente educativo de bienestar general.
                  </p>
                </section>

                {/* 4. FINALIDADES */}
                <section className="space-y-2">
                  <h2 className="font-serif font-bold text-lg text-[#123C32]">
                    4. Finalidades del Tratamiento
                  </h2>
                  <p><strong>Finalidades Principales:</strong></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Procesar su inscripción y brindar acceso digital e inmediato al contenido del <em>Método SANA</em>.</li>
                    <li>Enviar los enlaces de descarga de los materiales PDF (Semáforos Digestivos, Diario Digestivo y Guía FODMAP).</li>
                    <li>Brindar atención a dudas relacionadas con el acceso a la plataforma vía Hotmart o correo electrónico.</li>
                  </ul>
                  <p className="pt-2"><strong>Finalidades Secundarias:</strong></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Enviar boletines informativos o novedades sobre bienestar digestivo (de los cuales puede solicitar su baja en cualquier momento).</li>
                  </ul>
                </section>

                {/* 5. TRANSFERENCIA */}
                <section className="space-y-2">
                  <h2 className="font-serif font-bold text-lg text-[#123C32]">
                    5. Transferencia y Compartición de Datos
                  </h2>
                  <p>
                    Sus datos personales no son vendidos, alquilados ni comercializados con terceros. Únicamente se comparten con proveedores de servicios tecnológicos necesarios para la operación del sitio:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Hotmart B.V.:</strong> Procesamiento seguro de pagos encriptados con certificación SSL y gestión de la plataforma digital.</li>
                    <li><strong>Proveedores de Hosting e Infraestructura:</strong> Vercel Inc. para el hospedaje seguro de la plataforma web.</li>
                  </ul>
                </section>

                {/* 6. DERECHOS ARCO */}
                <section className="space-y-2">
                  <h2 className="font-serif font-bold text-lg text-[#123C32]">
                    6. Derechos ARCO y Revocación del Consentimiento
                  </h2>
                  <p>
                    Usted tiene derecho a conocer qué datos personales tenemos (Acceso), solicitar su corrección (Rectificación), cancelación (Cancelación) u oponerse al uso de los mismos (Oposición).
                  </p>
                  <p>
                    Para ejercer sus derechos ARCO o revocar su consentimiento, envíe una solicitud por escrito a: <a href="mailto:gloria@vive-sano.mx" className="text-[#0078BF] underline font-bold">gloria@vive-sano.mx</a>.
                  </p>
                </section>

                {/* 7. COOKIES */}
                <section className="space-y-2">
                  <h2 className="font-serif font-bold text-lg text-[#123C32]">
                    7. Uso de Cookies y Tecnologías de Rastreo
                  </h2>
                  <p>
                    Nuestro sitio web utiliza cookies técnicas indispensables para habilitar la navegación segura y optimizar la experiencia en dispositivos móviles y de escritorio. Puede deshabilitar las cookies directamente desde la configuración de su navegador.
                  </p>
                </section>

                {/* 8. CAMBIOS */}
                <section className="space-y-2">
                  <h2 className="font-serif font-bold text-lg text-[#123C32]">
                    8. Cambios al Aviso de Privacidad
                  </h2>
                  <p>
                    El presente Aviso de Privacidad puede sufrir modificaciones o actualizaciones derivadas de nuevos requerimientos legales o de nuestras propias prácticas de privacidad. Dichas modificaciones estarán siempre disponibles en esta misma página web.
                  </p>
                </section>

                {/* 9. CONTACTO & REGRESO */}
                <div className="pt-6 border-t border-[#D5E8DC] text-center space-y-4">
                  <p className="font-bold text-[#123C32]">¿Tiene dudas sobre este Aviso de Privacidad?</p>
                  <p>Escríbanos a <a href="mailto:gloria@vive-sano.mx" className="text-[#4DA92C] font-bold">gloria@vive-sano.mx</a></p>
                  <div className="pt-2">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 py-3 px-8 rounded-2xl bg-[#E76100] hover:bg-[#cf5600] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
                    >
                      <span>← Volver al Inicio (Método SANA)</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
