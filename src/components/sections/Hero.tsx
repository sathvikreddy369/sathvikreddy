import { portfolioData } from "../../data/portfolio";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl animate-slide-up">
          <h2 className="text-zinc-400 text-lg md:text-xl mb-4 font-medium tracking-wide">
            Hi, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            {portfolioData.personal.name}.
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center text-xl md:text-2xl text-zinc-300 font-light mb-8">
            <span>{portfolioData.personal.role}</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
            <span className="text-zinc-500">{portfolioData.personal.subRoles.join(" & ")}</span>
          </div>

          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            I craft minimal, scalable, and high-performance software. Focused on backend systems and bringing artificial intelligence into practical applications.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={portfolioData.personal.resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
