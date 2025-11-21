import Image from 'next/image';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
      {/* Imagen del proyecto */}
      <div className="relative h-48 w-full bg-gradient-to-br from-blue-400 to-purple-500">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
        />
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
              className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full"
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
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-2 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium"
          >
            📄 One-Pager
          </a>
          <a
            href={project.mvpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-2 px-4 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 font-medium"
          >
            🚀 Ver MVP
          </a>
        </div>
      </div>
    </div>
  );
}
