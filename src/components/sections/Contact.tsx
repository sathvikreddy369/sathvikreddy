import { portfolioData } from "../../data/portfolio";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "../ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Get In Touch</h2>
          
          <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
            I'm currently looking for software engineering internship and new-grad roles. 
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={`mailto:${portfolioData.personal.email}`}>
                <Mail className="mr-2" size={18} />
                Say Hello
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8">
            <a 
              href={portfolioData.personal.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors group flex flex-col items-center gap-2"
            >
              <div className="p-4 rounded-full bg-zinc-950 border border-zinc-900 group-hover:border-zinc-700 transition-colors">
                <Github size={24} />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            
            <a 
              href={portfolioData.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors group flex flex-col items-center gap-2"
            >
              <div className="p-4 rounded-full bg-zinc-950 border border-zinc-900 group-hover:border-zinc-700 transition-colors">
                <Linkedin size={24} />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
