export const languages = {
    es: 'ES',
    en: 'EN',
};

export const defaultLang = 'es';

export const ui = {
    es:{
        'meta.title':'Francisco Iván San Segundo | Ingeniero Informático y Desarrollador de Software' ,
        'meta.description': 'Portfolio de Francisco Iván San Segundo, Ingeniero Informático especializado en desarrollo de software, ciberseguridad e infraestructura de sistemas.',
        'role': 'Ingeniero Informático',
        'btn.cv': 'Descargar CV',
        'home': 'Inicio',
        'about': 'Sobre mí',
        'experience': 'Experiencia',
        'projects': 'Proyectos',
        'stack': 'Stack tecnológico',
        'contact': 'Contacto',
        'menu.toggle': 'Abrir o cerrar menú',
        'text.copyright': '© 2026 Francisco Iván San Segundo. Todos los derechos reservados.',
        'texto.sobremi.p1':'Soy graduado en Ingeniería Informática por la Universidad de Valladolid. Concibo el desarrollo de software estrechamente ligado a los entornos donde opera: no solo diseño aplicaciones robustas, sino que presto la misma atención a los sistemas, la infraestructura y la seguridad desde la primera línea de código.',
        'texto.sobremi.p2':'Mi paso por NTT Data en entornos de virtualización, TelcoCloud y observabilidad SRE reforzó mi visión hacia el paradigma NetDevOps. Fruto de este enfoque nace S2 Orchestrator, una plataforma Full-Stack de orquestación y monitorización de redes virtuales desarrollada como Trabajo Fin de Grado, cuyos detalles técnicos puedes consultar en la sección de proyectos.',
        'titulo.sobremi': 'SOBRE MÍ',
        'estado.disponible': 'Disponible',
        'estado.ocupado': 'Ocupado',

    },
    en:{
        'meta.title':'Francisco Iván San Segundo | Computer Engineer & Software Developer' ,
        'meta.description': 'Portfolio of Francisco Iván San Segundo, Computer Engineer focused on software development, cybersecurity, and systems infrastructure.',
        'role': 'Computer Engineer',
        'btn.cv': 'Download CV',
        'home': 'Home',
        'about': 'About me',
        'experience': 'Experience',
        'projects': 'Projects',
        'stack': 'Tech Stack',
        'contact': 'Contact',
        'menu.toggle': 'Toggle navigation menu',
        'text.copyright': '© 2026 Francisco Iván San Segundo. All rights reserved.',
        'texto.sobremi.p1':'I hold a degree in Computer Engineering from the University of Valladolid. I view software development as closely tied to the underlying infrastructure: I focus on building robust applications while giving equal importance to systems, runtime stability, and security by design.',
        'texto.sobremi.p2':'My experience at NTT Data within virtualization, TelcoCloud, and SRE observability solidified my commitment to NetDevOps principles. This background led to the creation of S2 Orchestrator, a Full-Stack virtual network orchestration and telemetry platform built as my final degree project, which is detailed further in the projects section.',
        'titulo.sobremi': 'ABOUT ME',
        'estado.disponible': 'Available',
        'estado.ocupado': 'Unavailable',

        
    
    }, 
} as const;

export function useTranslations (pathname: string){
    const lang = pathname.startsWith('/en') ? 'en': 'es';
    return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
