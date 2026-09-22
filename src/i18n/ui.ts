export const languages = {
    es: 'ES',
    en: 'EN',
};

export const defaultLang = 'es';

export const ui = {
    es:{
        'meta.title':'Francisco Iván San Segundo | Ingeniero Informático y Desarrollador Web' ,
        'meta.description': 'Portfolio de Francisco Iván San Segundo, Ingeniero Informático y Desarrollador Web especializado en desarrollo de software, ciberseguridad e infraestructura de sistemas.',
        'role': 'Ingeniero Informático',
        'btn.cv': 'Descargar CV',
        'home': 'Inicio',
        'about': 'Sobre mí',
        'experience': 'Experiencia',
        'projects': 'Proyectos',
        'stack': 'Stack tecnológico',
        'contact': 'Contacto',
        'menu.toggle': 'Abrir o cerrar menú',
        'text.copyright': '© 2026 Francisco Iván San Segundo. Todos los derechos reservados.'
    },
    en:{
        'meta.title':'Francisco Iván San Segundo | Software Engineer & Web Developer' ,
        'meta.description': 'Portfolio of Francisco Iván San Segundo, Software Engineer and Web Developer focused on software development, cybersecurity, and systems infrastructure.',
        'role': 'Software Engineer',
        'btn.cv': 'Download CV',
        'home': 'Home',
        'about': 'About me',
        'experience': 'Experience',
        'projects': 'Projects',
        'stack': 'Tech Stack',
        'contact': 'Contact',
        'menu.toggle': 'Toggle navigation menu',
        'text.copyright': '© 2026 Francisco Iván San Segundo. All rights reserved.'
        
    
    }, 
} as const;

export function useTranslations (pathname: string){
    const lang = pathname.startsWith('/en') ? 'en': 'es';
    return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
