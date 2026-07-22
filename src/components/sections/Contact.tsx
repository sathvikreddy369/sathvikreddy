import { portfolioData } from "../../data/portfolio";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-16 tracking-tight">Get In Touch</h2>
          
          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="text-center">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{portfolioData.personal.name}</h3>
              <p className="text-zinc-500 font-mono text-sm">{portfolioData.personal.role}</p>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-sm">
              <a 
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-4 p-4 rounded-md bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all group"
              >
                <Mail className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" size={20} />
                <span className="text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{portfolioData.personal.email}</span>
              </a>



              <div className="flex items-center gap-4 p-4 rounded-md bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900">
                <MapPin className="text-zinc-500 dark:text-zinc-400" size={20} />
                <span className="text-zinc-600 dark:text-zinc-300">{portfolioData.personal.location}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a 
              href={portfolioData.personal.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors p-4 rounded-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700"
              aria-label="GitHub Profile"
            >
              <GithubIcon width={24} height={24} />
            </a>
            
            <a 
              href={portfolioData.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors p-4 rounded-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
