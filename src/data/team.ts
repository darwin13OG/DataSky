import { Engineer } from '../types.ts';

export const ENGINEERS_DATA: Engineer[] = [
  {
    id: 'darwin-alzate',
    number: '01',
    name: 'Darwin Alzate',
    role: 'Full-Stack & Lead',
    specialty: 'Arquitectura de Software & Frontend Core',
    bio: 'Lidera la dirección técnica de DataSky. Especialista en arquitecturas React de alto rendimiento, micro-frontends y experiencias interactivas limpias con TypeScript.',
    skills: ['React / Vite', 'TypeScript', 'Node.js', 'System Architecture', 'UI Engineering'],
    githubUser: 'darwin-alzate'
  },
  {
    id: 'jose-posada',
    number: '02',
    name: 'Jose Manuel Posada Muñoz',
    role: 'Full-Stack & Systems',
    specialty: 'Sistemas Distribuidos & Integración de APIs',
    bio: 'Especializado en la lógica de negocio sólida, pipelines de sincronización de datos, integraciones bancarias/POS y robustez operativa para aplicaciones críticas.',
    skills: ['Distributed Systems', 'API Integration', 'Data Modeling', 'State Engines', 'Performance'],
    githubUser: 'jose-posada'
  },
  {
    id: 'matyas-garcia',
    number: '03',
    name: 'Matyas García',
    role: 'Full-Stack & Cloud',
    specialty: 'Infraestructura Serverless & Despliegues',
    bio: 'Focalizado en pipelines serverless en Cloudflare, edge computing, seguridad de endpoints, automatizaciones continuas y despliegues con latencia ultra baja.',
    skills: ['Cloudflare Edge', 'DevOps / CI/CD', 'Security & Auth', 'Serverless APIs', 'Cloud Ops'],
    githubUser: 'matyas-garcia'
  }
];

export const GITHUB_ORG_URL = 'https://github.com/DataSky-Studio';
export const WHATSAPP_URL = 'https://wa.me/573124093345';
export const CONTACT_EMAIL = 'dataskystudio@gmail.com';
export const ALT_CONTACT_EMAIL = 'contacto.dataskystudio@gmail.com';
