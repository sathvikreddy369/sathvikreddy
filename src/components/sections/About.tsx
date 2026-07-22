import { portfolioData } from "../../data/portfolio";

export function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About Me</h2>
            <div className="h-px bg-zinc-800 flex-1"></div>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
              {portfolioData.personal.about}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
