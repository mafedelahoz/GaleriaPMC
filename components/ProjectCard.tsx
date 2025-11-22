import { Project } from '@/app/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
      {/* Header con nombre del proyecto */}
      <div className="relative h-48 w-full bg-gradient-to-br from-yellow-400 to-red-500 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white text-center px-4 drop-shadow-lg">
          {project.title}
        </h2>
      </div>
      
      {/* Contenido de la tarjeta */}
      <div className="p-6">
        <div className="mb-2">
          <h3 className="text-2xl font-bold text-gray-800 mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 font-medium">
            {project.team}
          </p>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Botones */}
        <div className="flex gap-3">
          <a
            href={project.onePagerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-center py-2 px-4 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 font-medium"
          >
            One-Pager
          </a>
          <a
            href={project.mvpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-center py-2 px-4 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 font-medium"
          >
            Ver MVP
          </a>
        </div>
      </div>
    </div>
  );
}
