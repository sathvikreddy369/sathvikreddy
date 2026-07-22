import { portfolioData } from "../../data/portfolio";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
            <div className="h-px bg-zinc-800 flex-1"></div>
          </div>
          
          <div className="space-y-24">
            {portfolioData.projects.map((project, index) => (
              <div key={project.title} className={`flex flex-col gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
                
                <div className="w-full md:w-1/2 group relative">
                  <div className="relative aspect-video overflow-hidden rounded-md border border-zinc-900 bg-zinc-950">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-black/10 rounded-md mix-blend-overlay pointer-events-none"></div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>
                  
                  <div className="bg-zinc-950 border border-zinc-900 rounded-md p-6 mb-6 shadow-xl relative z-10">
                    <p className="text-zinc-400 text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-sm font-mono text-zinc-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors link-underline"
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors link-underline"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
