import { portfolioData } from "../../data/portfolio";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl animate-slide-up">
          <h2 className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl mb-4 font-medium tracking-wide">
            Hi, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight leading-tight">
            {portfolioData.personal.name}.
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 font-light mb-8">
            <span>{portfolioData.personal.role}</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
            <span className="text-zinc-500">{portfolioData.personal.subRoles.join(" & ")}</span>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-6">
            Building scalable full-stack applications, AI-powered products, and backend systems with a focus on performance, reliability, and clean engineering.
          </p>

          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500 mb-10">
            Currently solving DSA, building full-stack applications, and exploring scalable backend systems.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-12">
            <a 
              href={portfolioData.personal.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon width={24} height={24} />
              <span className="font-medium">GitHub</span>
            </a>
            
            <a 
              href={portfolioData.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon width={24} height={24} />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button 
              size="lg" 
              className="group"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
