export interface Project {
  id: number;
  title: string;
  description: string;
  team: string;
  onePagerUrl: string;
  mvpUrl: string;
  imageUrl: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "EcoTrack",
    description: "Aplicación para rastrear y reducir la huella de carbono personal",
    team: "Equipo Verde",
    onePagerUrl: "/one-pagers/ecotrack.pdf",
    mvpUrl: "https://ecotrack-demo.vercel.app",
    imageUrl: "https://placehold.co/600x400/10b981/white?text=EcoTrack",
    tags: ["Sostenibilidad", "Mobile", "IoT"]
  },
  {
    id: 2,
    title: "StudyBuddy",
    description: "Plataforma de estudio colaborativo con IA para estudiantes",
    team: "Tech Learners",
    onePagerUrl: "/one-pagers/studybuddy.pdf",
    mvpUrl: "https://studybuddy-demo.vercel.app",
    imageUrl: "https://placehold.co/600x400/3b82f6/white?text=StudyBuddy",
    tags: ["Educación", "IA", "Colaboración"]
  },
  {
    id: 3,
    title: "FoodShare",
    description: "Red social para compartir comida y reducir el desperdicio alimentario",
    team: "Social Impact",
    onePagerUrl: "/one-pagers/foodshare.pdf",
    mvpUrl: "https://foodshare-demo.vercel.app",
    imageUrl: "https://placehold.co/600x400/f59e0b/white?text=FoodShare",
    tags: ["Social", "Sostenibilidad", "Comunidad"]
  },
  {
    id: 4,
    title: "FitQuest",
    description: "Gamificación del fitness con desafíos diarios y recompensas",
    team: "Health Heroes",
    onePagerUrl: "/one-pagers/fitquest.pdf",
    mvpUrl: "https://fitquest-demo.vercel.app",
    imageUrl: "https://placehold.co/600x400/ef4444/white?text=FitQuest",
    tags: ["Salud", "Gamificación", "Fitness"]
  },
  {
    id: 5,
    title: "LocalMarket",
    description: "Marketplace para apoyar a comercios locales y artesanos",
    team: "Commerce Innovators",
    onePagerUrl: "/one-pagers/localmarket.pdf",
    mvpUrl: "https://localmarket-demo.vercel.app",
    imageUrl: "https://placehold.co/600x400/8b5cf6/white?text=LocalMarket",
    tags: ["E-commerce", "Local", "Artesanía"]
  },
  {
    id: 6,
    title: "MindfulMe",
    description: "App de meditación y bienestar mental con seguimiento personalizado",
    team: "Wellness Warriors",
    onePagerUrl: "/one-pagers/mindfulme.pdf",
    mvpUrl: "https://mindfulme-demo.vercel.app",
    imageUrl: "https://placehold.co/600x400/06b6d4/white?text=MindfulMe",
    tags: ["Salud Mental", "Bienestar", "Mobile"]
  }
];
