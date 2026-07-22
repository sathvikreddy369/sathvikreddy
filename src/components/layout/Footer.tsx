import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black py-12">
      <div className="container mx-auto px-6 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <p className="text-zinc-400 text-sm">
            Designed & Developed by
          </p>
          <p className="text-white font-medium">
            {portfolioData.personal.name}
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
