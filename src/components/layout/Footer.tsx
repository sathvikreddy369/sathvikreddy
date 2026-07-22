import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { portfolioData } from "../../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black py-12">
      <div className="container mx-auto px-6 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <p className="text-zinc-900 dark:text-white font-medium">
            &copy; 2026 {portfolioData.personal.name}
          </p>
          <p className="text-zinc-500 dark:text-zinc-500 text-sm">
            Built with React, TypeScript and Tailwind CSS.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon width={20} height={20} />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon width={20} height={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
