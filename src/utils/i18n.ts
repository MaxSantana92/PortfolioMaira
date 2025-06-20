export const languages = {
  es: 'Español',
  en: 'English',
}

export const defaultLang = 'es'

export const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    // Hero Section
    'hero.greeting': 'Hola, soy',
    'hero.name': 'Maira Mateo',
    'hero.title': 'Consultora en Agro-Negocios',
    'hero.subtitle': 'Profesional en la Gestión de Agro-Empresas',
    'hero.legend': 'Agricultura sostenible | Agricultra de Precisión',
    'hero.cta': 'Conocé mi trabajo',
    'hero.contact': 'Contactar',

    // About Section
    'about.title': 'Sobre mí',
    'about.subtitle': 'Pasión por la gestión sostenible y de precisión.',
    'about.description':
      'Soy consultora agro-industrial con experiencia en el desarrollo de soluciones sostenibles y de precisión. Mi especialidad incluye el manejo sostenible de cultivos, agricultura de precisión y implementación de tecnologías innovadoras para optimizar la producción agrícola.',
    'about.experience': 'Años de experiencia',
    'about.projects': 'Proyectos completados',
    'about.certifications': 'Certificaciones',

    // Services Section
    'services.title': 'Servicios',
    'services.subtitle': 'Soluciones integrales para el sector agrícola',
    'services.consulting.title': 'Consultoría Agrícola',
    'services.consulting.description':
      'Asesoramiento especializado en manejo de cultivos, suelos y sistemas de riego.',
    'services.precision.title': 'Agricultura de Precisión',
    'services.precision.description':
      'Implementación de tecnologías GPS, sensores y drones para optimizar recursos.',
    'services.sustainability.title': 'Agricultura Sostenible',
    'services.sustainability.description':
      'Desarrollo de prácticas agrícolas que respetan el medio ambiente.',
    'services.research.title': 'Investigación y Desarrollo',
    'services.research.description':
      'Proyectos de investigación aplicada para mejorar la productividad agrícola.',

    // Projects Section
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Algunos de mis trabajos más destacados',
    'projects.project1.title': 'Sistema de Riego Inteligente',
    'projects.project1.description':
      'Implementación de sistema automatizado de riego en 500 hectáreas de cultivo de maíz.',
    'projects.project2.title': 'Agricultura Orgánica Certificada',
    'projects.project2.description':
      'Transición completa a agricultura orgánica para finca de 200 hectáreas.',
    'projects.project3.title': 'Monitoreo con Drones',
    'projects.project3.description':
      'Sistema de monitoreo aéreo para detección temprana de plagas y enfermedades.',
    'projects.viewMore': 'Ver más detalles',

    // Contact Section
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tienes un proyecto en mente? ¡Hablemos!',
    'contact.name': 'Nombre completo',
    'contact.email': 'Correo electrónico',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar mensaje',
    'contact.info': 'Información de contacto',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.made': 'Hecho con pasión',
    'footer.by': 'por',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.greeting': "Hello, I'm",
    'hero.name': 'Maira Mateo',
    'hero.title': 'Agricultural Engineer',
    'hero.subtitle': 'Specialized in sustainable agriculture and modern agricultural technology',
    'hero.cta': 'View my work',
    'hero.contact': 'Contact me',

    // About Section
    'about.title': 'About me',
    'about.subtitle': 'Passion for sustainable agriculture',
    'about.description':
      'I am an agricultural engineer with over 8 years of experience in developing sustainable agricultural solutions. My expertise includes integrated crop management, precision agriculture, and implementation of innovative technologies to optimize agricultural production.',
    'about.experience': 'Years of experience',
    'about.projects': 'Completed projects',
    'about.certifications': 'Certifications',

    // Services Section
    'services.title': 'Services',
    'services.subtitle': 'Comprehensive solutions for the agricultural sector',
    'services.consulting.title': 'Agricultural Consulting',
    'services.consulting.description':
      'Specialized advice on crop management, soils, and irrigation systems.',
    'services.precision.title': 'Precision Agriculture',
    'services.precision.description':
      'Implementation of GPS technologies, sensors, and drones to optimize resources.',
    'services.sustainability.title': 'Sustainable Agriculture',
    'services.sustainability.description':
      'Development of agricultural practices that respect the environment.',
    'services.research.title': 'Research & Development',
    'services.research.description':
      'Applied research projects to improve agricultural productivity.',

    // Projects Section
    'projects.title': 'Projects',
    'projects.subtitle': 'Some of my most outstanding work',
    'projects.project1.title': 'Smart Irrigation System',
    'projects.project1.description':
      'Implementation of automated irrigation system in 500 hectares of corn cultivation.',
    'projects.project2.title': 'Certified Organic Agriculture',
    'projects.project2.description':
      'Complete transition to organic agriculture for 200-hectare farm.',
    'projects.project3.title': 'Drone Monitoring',
    'projects.project3.description':
      'Aerial monitoring system for early detection of pests and diseases.',
    'projects.viewMore': 'View more details',

    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': "Have a project in mind? Let's talk!",
    'contact.name': 'Full name',
    'contact.email': 'Email address',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.info': 'Contact information',
    'contact.phone': 'Phone',
    'contact.location': 'Location',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Made with passion',
    'footer.by': 'by',
  },
} as const

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in languages) return lang as keyof typeof languages
  return defaultLang
}

export function useTranslations(lang: keyof typeof translations) {
  return function t(key: keyof (typeof translations)[typeof defaultLang]) {
    return translations[lang][key] || translations[defaultLang][key]
  }
}
