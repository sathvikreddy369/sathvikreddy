import { portfolioData } from "../../data/portfolio";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import { Badge } from "../ui/Badge";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
            <div className="h-px bg-zinc-800 flex-1"></div>
          </div>
          
          <div className="space-y-32">
            {portfolioData.projects.map((project, index) => (
              <div key={project.title} className={`flex flex-col gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
                
                <div className="w-full md:w-1/2 group relative">
                  <div className="relative aspect-video flex flex-col items-center justify-center overflow-hidden rounded-md border border-zinc-800 bg-zinc-950 transition-colors duration-500 group-hover:border-zinc-700">
                    <span className="text-zinc-500 font-medium tracking-wide">Project Preview</span>
                    <span className="text-zinc-600 text-sm mt-2">(Image Coming Soon)</span>
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{project.title}</h3>
                  {project.subtitle && (
                    <p className="text-zinc-400 font-medium mb-4">{project.subtitle}</p>
                  )}
                  
                  <div className="bg-zinc-950 border border-zinc-900 rounded-md p-6 mb-6 shadow-xl relative z-10">
                    <p className="text-zinc-300 text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map(feature => (
                        <li key={feature} className="flex items-center text-sm text-zinc-400">
                          <span className="w-1 h-1 bg-zinc-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map(tech => (
                      <Badge key={tech} variant="outline" className="px-2 py-0.5 text-xs border-zinc-800 bg-black text-zinc-400">
                        {tech}
                      </Badge>
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
                      <GithubIcon width={18} height={18} />
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
