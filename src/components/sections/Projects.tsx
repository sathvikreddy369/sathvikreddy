import { portfolioData } from "../../data/portfolio";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import { Badge } from "../ui/Badge";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">Featured Projects</h2>
            <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1"></div>
          </div>
          
          <div className="space-y-32">
            {portfolioData.projects.map((project, index) => (
              <div key={project.title} className={`flex flex-col gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
                
                <div className="w-full md:w-1/2 group relative">
                  <div className="relative aspect-video flex flex-col items-center justify-center overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 group-hover:border-zinc-300 dark:group-hover:border-zinc-700">
                    
                    {project.liveDemo !== "#" ? (
                      <>
                        {/* Scaled iframe for live preview */}
                        <iframe 
                          src={project.liveDemo} 
                          className="absolute top-0 left-0 border-0 pointer-events-none origin-top-left"
                          style={{ width: '250%', height: '250%', transform: 'scale(0.4)' }}
                          title={`${project.title} Preview`}
                          tabIndex={-1}
                          aria-hidden="true"
                        />

                        {/* Overlay on hover to click through to the actual site */}
                        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all duration-300 opacity-0 group-hover:opacity-100">
                          <a 
                            href={project.liveDemo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-md shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2"
                          >
                            <ExternalLink size={16} />
                            Visit Live Site
                          </a>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center p-6">
                        <span className="text-zinc-500 dark:text-zinc-500 font-medium tracking-wide">Project Preview</span>
                        <span className="text-zinc-400 dark:text-zinc-600 text-sm mt-2">(In Development - Image Coming Soon)</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 tracking-tight">{project.title}</h3>
                  {project.subtitle && (
                    <p className="text-zinc-600 dark:text-zinc-400 font-medium mb-4">{project.subtitle}</p>
                  )}
                  
                  <div className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-md p-6 mb-6 shadow-xl relative z-10">
                    <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3 uppercase tracking-wider">Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map(feature => (
                        <li key={feature} className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                          <span className="w-1 h-1 bg-zinc-300 dark:bg-zinc-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map(tech => (
                      <Badge key={tech} variant="outline" className="px-2 py-0.5 text-xs border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black text-zinc-600 dark:text-zinc-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6">
                    {project.github !== "#" && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors link-underline"
                        aria-label={`${project.title} GitHub Repository`}
                      >
                        <GithubIcon width={18} height={18} />
                        Code
                      </a>
                    )}
                    
                    {project.liveDemo !== "#" && (
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors link-underline"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
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
