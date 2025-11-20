
export interface TechStackItem {
    name: string;
    icon: string;
}

export interface ProjectData {
    id: string;
    title: string;
    shortDesc: string;
    longDescription: string;
    icon: string; // para la card
    stack: TechStackItem[];
    features: string[];
    link?: string;
    status?: string;
}


//    <img src="https://skillicons.dev/icons?i=git,github,azure,vscode,aws,postman,postgres,express,mysql,figma,html,css,js,materialui,&perline=14" />
//    <img src="https://skillicons.dev/icons?i=react,redux,tailwind,ts,cpp,nodejs,cs,dotnet,&perline=14" />

export const projects: ProjectData[] = [
    {
        id: "odontoweb",
        title: "OdontoWeb",
        shortDesc: "Sistema de turnos + panel admin + calendario + recordatorios.",
        longDescription:
            "OdontoWeb es un sistema completo desarrollado en React y .NET Web API que permite la gestión integral de turnos odontológicos. Incluye un panel administrativo avanzado, calendario interactivo, recordatorios automáticos y un frontend moderno con animaciones.",
        icon: "/src/assets/iconoProyecto.png",
          stack: [
            { name: "React", icon: "https://skillicons.dev/icons?i=react" },
            { name: "C#", icon: "https://skillicons.dev/icons?i=cs" },
            { name: "PostgreSql", icon: "https://skillicons.dev/icons?i=postgres" },
            { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
            { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
            { name: "Material UI", icon: "https://skillicons.dev/icons?i=materialui" },
        ],

        features: [
            "Turnero con confirmación",
            "Panel admin con calendario",
            "JWT + roles de usuario",
            "Animaciones modernas"
        ],
        link: "https://odontojony.vercel.app/",
        status: "Proyecto real"
    },
    {
        id: "trivia",
        title: "Mini Trivia",
        shortDesc: "Juego con puntuación, backend y APIs.",
        longDescription:
            "Mini Trivia es un juego interactivo construido con React y C#. Incluye almacenamiento de puntajes, manejo de usuarios y preguntas proveniente de APIs externas.",
        icon: "/src/assets/trivia.png",
        stack: [
            { name: "React", icon: "https://skillicons.dev/icons?i=react" },
            { name: "C#", icon: "https://skillicons.dev/icons?i=cs" },
            { name: "POSTGRE Sql", icon: "https://skillicons.dev/icons?i=postgres" },
            { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
            { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
            { name: "Material UI", icon: "https://skillicons.dev/icons?i=materialui" },
        ],
        features: [
            "Puntaje dinámico",
            "Preguntas desde API",
            "Diseño simple y responsive"
        ],
        link: "https://tusitio.com/trivia"
    },
    {
        id: "portfolio",
        title: "Portfolio",
        shortDesc: "Portfolio con animaciones y efectos 3D.",
        longDescription:
            "Portfolio personal con animaciones suaves, transiciones y efectos 3D. Construido con React, framer-motion y estilos modernos.",
        icon: "/src/assets/portfolio.png",
        stack: [
            { name: "React", icon: "https://skillicons.dev/icons?i=react" },
            { name: "C#", icon: "https://skillicons.dev/icons?i=cs" },
            { name: "SQL Server", icon: "https://skillicons.dev/icons?i=sqlserver" },
        ],
        features: [
            "Animaciones fluidas",
            "Secciones limpias",
            "Vista 3D interactiva"
        ],
        link: "https://tusitio.com/portfolio"
    }
];
