import { FaqItem } from '../types.ts';

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Quién atiende las reuniones y el avance del proyecto?',
    answer: 'Tienen un solo punto de contacto directo y transparente. Uno de nosotros lidera la comunicación para no hacer reuniones eternas ni burocracia de agencias, mientras los 3 desarrollamos, testeamos y auditamos en paralelo.'
  },
  {
    id: 'faq-2',
    question: '¿Qué tecnologías utilizan en el colectivo?',
    answer: 'Nuestro stack principal se basa en JavaScript / TypeScript moderno, React, Vite, Node.js, Tailwind CSS y despliegues serverless de alto rendimiento en Cloudflare o Vercel. Construimos código rápido, modular y sin dependencias pesadas innecesarias.'
  },
  {
    id: 'faq-3',
    question: '¿Tiempos de entrega habituales?',
    answer: 'Entregamos prototipos e interfaces funcionales desde la primera semana para validación rápida. Proyectos completos y modulares suelen tomar de 2 a 4 semanas según el alcance y las integraciones requeridas.'
  },
  {
    id: 'faq-4',
    question: '¿El código fuente y la infraestructura son de nuestra propiedad?',
    answer: 'Totalmente. Desde el primer commit el repositorio privado en GitHub y la infraestructura en la nube se configuran a tu nombre. Entregamos documentación técnica clara, variables de entorno y scripts de despliegue listos para producción.'
  },
  {
    id: 'faq-5',
    question: '¿Cómo iniciamos una propuesta o cotización?',
    answer: 'Escríbenos directamente a WhatsApp (+57 312 4093345) o a dataskystudio@gmail.com con un breve resumen de lo que necesitas. Agendamos una llamada de 20 minutos con uno de los ingenieros y te entregamos un estimado de tiempos y costos en menos de 24 horas.'
  }
];
