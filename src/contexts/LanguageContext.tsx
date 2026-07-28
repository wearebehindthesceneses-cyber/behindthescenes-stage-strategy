import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.team': 'Equipo',
    'nav.blog': 'Blog',
    'nav.podcast': 'Podcast',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Where show meets business',
    'hero.subtitle': 'Partner estratégico para eventos y espectáculos',
    'hero.cta': 'Impulsemos tu proyecto',
    
    // About
    'about.title': 'Sobre nosotros',
    'about.text': 'En Behind the Scenes creemos que detrás de cada espectáculo hay un gran equipo. Somos una agencia estratégica especializada en cultura y entretenimiento, comprometida en ayudar a los proyectos a crecer, llegar a nuevos públicos y consolidarse en el mercado.',
    
    // Services
    'services.title': 'Nuestros servicios',
    'services.production.title': 'Producción & Operaciones',
    'services.production.desc': 'Venue scouting, importación y exportación de espectáculos, gestión integral de eventos.',
    'services.ticketing.title': 'Ticketing & Distribución',
    'services.ticketing.desc': 'Optimización de plataformas, estrategias de venta, pricing y revenue management.',
    'services.marketing.title': 'Marketing & Estrategia digital',
    'services.marketing.desc': 'Estrategias de crecimiento, campañas digitales (Meta, Google, TikTok), analítica y creación de landings.',
    'services.communication.title': 'Comunicación & PR',
    'services.communication.desc': 'Prensa, relaciones públicas, comunicación institucional.',
    'services.social.title': 'Social Media & Influencers',
    'services.social.desc': 'Gestión de redes sociales, creación de contenido, marketing de influencers.',
    'services.consulting.title': 'Consultoría & Subvenciones',
    'services.consulting.desc': 'Asesoría estratégica, búsqueda de financiación, acceso a ayudas culturales.',
    
    // Clients
    'clients.title': 'Nuestros clientes',
    
    // Team
    'team.title': 'Nosotros',
    'team.subtitle': 'Nuestro equipo combina experiencia en estrategia, marketing y operaciones con una pasión común: hacer crecer proyectos culturales y de entretenimiento.',
    'team.andrea.role': 'Estrategia y desarrollo de negocio',
    'team.alexia.role': 'Marketing y comunicación',
    'team.albert.role': 'Relaciones institucionales',
    
    // CTA
    'cta.title': 'Hagamos que tu proyecto brille en el escenario que merece',
    'cta.button': 'Envíanos un mensaje',
    
    // Footer
    'footer.quicklinks': 'Enlaces rápidos',
    'footer.copyright': '© 2024 Behind the Scenes. Todos los derechos reservados.',
    'footer.support': 'Con el apoyo de:',
    
    // Contact Form
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.company': 'Empresa/Proyecto',
    'contact.form.message': 'Cuéntanos sobre tu proyecto...',
    'contact.form.send': 'Enviar Mensaje',
    'contact.info.title': 'Información de Contacto',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Teléfono',
    'contact.info.location': 'Ubicación',
    'contact.ready.title': '¿Listo para hacer crecer tu proyecto?',
    'contact.ready.text': 'Charlemos sobre cómo podemos ayudarte a llevar tu espectáculo al siguiente nivel.',
    
    // Blog & Podcast
    'blog.subtitle': 'Insights y estrategias',
    'blog.description': 'Artículos estratégicos y divulgativos sobre la industria cultural y del entretenimiento. Descubre las últimas tendencias, casos de éxito y mejores prácticas.',
    'blog.button': 'Leer artículos',
    'podcast.title': 'El Negocio del Ocio',
    'podcast.subtitle': 'Nuestro podcast',
    'podcast.description': 'Conversaciones profundas sobre el mundo del entretenimiento y la cultura. Entrevistas con profesionales del sector y análisis de tendencias.',
    'podcast.button': 'Escuchar podcast',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.team': 'Team',
    'nav.blog': 'Blog',
    'nav.podcast': 'Podcast',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Where show meets business',
    'hero.subtitle': '🚀 We propel your project to success. Strategic partner for cultural shows and events with impact and sustainability.',
    'hero.cta': "Let's boost your project",
    
    // About
    'about.title': 'About us',
    'about.text': 'At Behind the Scenes, we believe that behind every show there\'s a great team. We are a strategic agency specialized in the cultural and entertainment industry. We work with producers, festivals, and companies to design strategies that help projects scale, enter new markets, and achieve sustainable impact.',
    
    // Services
    'services.title': 'Our services',
    'services.production.title': 'Production & Operations',
    'services.production.desc': 'Venue scouting, show import/export, full event management.',
    'services.ticketing.title': 'Ticketing & Distribution',
    'services.ticketing.desc': 'Ticketing optimization, sales strategies, pricing & revenue management.',
    'services.marketing.title': 'Marketing & Digital Strategy',
    'services.marketing.desc': 'Growth strategies, digital campaigns (Meta, Google, TikTok), analytics & landing pages.',
    'services.communication.title': 'Communication & PR',
    'services.communication.desc': 'Press, public relations, institutional communication.',
    'services.social.title': 'Social Media & Influencers',
    'services.social.desc': 'Social media management, content creation, influencer marketing.',
    'services.consulting.title': 'Consulting & Grants',
    'services.consulting.desc': 'Strategic consultancy, funding advisory, cultural grants support.',
    
    // Clients
    'clients.title': 'Our clients',
    
    // Team
    'team.title': 'Who we are',
    'team.subtitle': 'Our team blends expertise in strategy, marketing, and operations with a shared passion: growing cultural and entertainment projects.',
    'team.andrea.role': 'Strategy and business development',
    'team.alexia.role': 'Marketing and communication',
    'team.albert.role': 'Institutional relations',
    
    // CTA
    'cta.title': "Let's make your project shine on the stage it deserves",
    'cta.button': 'Send us a message',
    
    // Footer
    'footer.quicklinks': 'Quick Links',
    'footer.copyright': '© 2024 Behind the Scenes. All rights reserved.',
    'footer.support': 'With the support of:',
    
    // Contact Form
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company/Project',
    'contact.form.message': 'Tell us about your project...',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    'contact.ready.title': 'Ready to grow your project?',
    'contact.ready.text': "Let's talk about how we can help take your show to the next level.",
    
    // Blog & Podcast
    'blog.subtitle': 'Insights & strategies',
    'blog.description': 'Strategic and informative articles about the cultural and entertainment industry. Discover the latest trends, success stories and best practices.',
    'blog.button': 'Read articles',
    'podcast.title': 'El Negocio del Ocio',
    'podcast.subtitle': 'Our podcast',
    'podcast.description': 'Deep conversations about the world of entertainment and culture. Interviews with industry professionals and trend analysis.',
    'podcast.button': 'Listen to podcast',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};