export interface Project {
  id: number;
  title: string;
  description: string;
  team: string;
  onePagerUrl: string;
  mvpUrl: string;
  imageUrl?: string;
  youtubeUrl?: string; 
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ContratBot",
    description: "Plataforma para el estudio automatizado de contratos utilizando IA",
    team: "ContratBot Team",
    onePagerUrl: "/one-pagers/Contratbot.pdf",
    mvpUrl: "https://github.com/jeronimov10/Landing-Page_PMC",
  imageUrl: "https://placehold.co/600x400/10b981/white?text=EcoTrack",
  youtubeUrl: "",
    tags: ["Contratos", "IA"]
  },
  {
    id: 2,
    title: "ScoreUp",
    description: "Plataforma para la evaluación de capacidad de pago de usuarios sin historial crediticio",
    team: "ScoreUp Team",
    onePagerUrl: "/one-pagers/ScoreUp.pdf",
    mvpUrl: "https://studybuddy-demo.vercel.app",
  imageUrl: "https://placehold.co/600x400/3b82f6/white?text=StudyBuddy",
  youtubeUrl: "https://www.youtube.com/watch?v=KZOlDs6ykMM",
    tags: ["Finanzas", "IA", "Crédito"]
  },
  {
    id: 3,
    title: "Vitalia",
    description: "App de bienestar para adultos mayores",
    team: "Vitalia Team",
    onePagerUrl: "/one-pagers/Vitalia.pdf",
    mvpUrl: "https://saint-wick-74223908.figma.site/",
  imageUrl: "https://placehold.co/600x400/f59e0b/white?text=Vitalia",
  youtubeUrl: "https://www.youtube.com/watch?v=fYCtXbL-_1g",
    tags: ["Salud", "Bienestar", "Adultos Mayores"]
  },
  {
    id: 4,
    title: "Agora",
    description: "Plataforma para conectar estudiantes universitarios con diferentes habilidades para proyectos colaborativos",
    team: "Agora Team",
    onePagerUrl: "/one-pagers/Agora.pdf",
    mvpUrl: "https://agora-gamma-six.vercel.app/",
  imageUrl: "https://placehold.co/600x400/ef4444/white?text=Agora",
  youtubeUrl: "https://www.youtube.com/watch?v=mjajTK0h9Jo",
    tags: ["Colaboración", "Estudiantes", "Habilidades"]
  },
  {
    id: 5,
    title: "ZenMind",
    description: "Aplicación para el cuidado de la salud mental",
    team: "ZenMind Team",
    onePagerUrl: "/one-pagers/ZenMind.pdf",
    mvpUrl: "https://zenmind-demo.vercel.app",
  imageUrl: "https://placehold.co/600x400/8b5cf6/white?text=ZenMind",
  youtubeUrl: "https://www.youtube.com/shorts/3l98zuECx1s",
    tags: ["Salud Mental", "Bienestar", "App"]
  },
  {
    id: 6,
    title: "HabitTracker",
    description: "App para el seguimiento y formación de hábitos saludables",
    team: "HabitTracker Team",
    onePagerUrl: "/one-pagers/HabitTracker.pdf",
    mvpUrl: "https://floral-sling-36598209.figma.site/",
  imageUrl: "https://placehold.co/600x400/06b6d4/white?text=HabitTracker",
  youtubeUrl: "https://www.youtube.com/watch?v=-2eoDfyWNTc",
    tags: ["Salud Mental", "Bienestar", "Mobile"]
  },
  {
    id: 8,
    title: "Pacta",
    description: "Aplicación CRM de bolsillo para inmobiliarias",
    team: "Pacta Team",
    onePagerUrl: "/one-pagers/Pacta.pdf",
    mvpUrl: "https://github.com/Rodri45/PMCPROYECTO.git",
  imageUrl: "https://placehold.co/600x400/f97316/white?text=FoodShare",
  youtubeUrl: "https://youtube.com/shorts/WZ_CaKtOWRU?si=rQvjE1ytuwHi4N8M",
    tags: ["CRM", "Inmobiliaria", "App"]
  }
  ,
  {
    id: 9,
    title: "MiPlata",
    description: "Aplicación de gestión financiera personal",
    team: "MiPlata Team",
    onePagerUrl: "/one-pagers/MiPlata.pdf",
    mvpUrl: "https://miplata-demo.vercel.app",
  imageUrl: "https://placehold.co/600x400/6366f1/white?text=MiPlata",
  youtubeUrl: "https://www.youtube.com/watch?v=w8eceNqckpw",
    tags: ["Finanzas", "Gestión", "App"]
  },
  {
    id: 10,
    title: "MetaTrust",
    description: "Plataforma de detección de imágenes generadas por IA",
    team: "Metatrust Team",
    onePagerUrl: "/one-pagers/MetaTrust.pdf",
    mvpUrl: "https://github.com/VegaCaroMiguel/PMC.git",
  imageUrl: "https://placehold.co/600x400/10b981/white?text=MetaTrust",
  youtubeUrl: "https://www.youtube.com/watch?v=lmNN0buqKbg",
    tags: ["Verificación", "IA", "Metadatos"]
  }
];
