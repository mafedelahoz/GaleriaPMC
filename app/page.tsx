import ProjectCard from '@/components/ProjectCard';
import { projects } from './data/projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-500 to-red-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Galería de Proyectos PMC
          </h1>
          <p className="text-xl text-center text-yellow-100 max-w-3xl mx-auto">
            Descubre los innovadores proyectos desarrollados por en la clase "Diseño de Productos e Innovación en TI" 202520.
          </p>
        </div>
      </header>

      {/* Proyectos Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Proyectos Destacados
          </h2>
          <p className="text-gray-600">
            {projects.length} proyectos increíbles para explorar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Galería de Proyectos Clase "Diseño de Productos e Innovación en TI" - 202520.
          </p>
          <p className="text-gray-400 mt-2 text-sm">
          </p>
        </div>
      </footer>
    </main>
  );
}
