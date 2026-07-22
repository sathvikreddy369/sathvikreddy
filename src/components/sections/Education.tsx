import { portfolioData } from "../../data/portfolio";

export function Education() {
  return (
    <section id="education" className="py-24 bg-zinc-50 dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">Education</h2>
            <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1"></div>
          </div>
          
          <div className="space-y-12">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="md:hidden absolute left-0 top-1.5 w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                <div className="md:hidden absolute left-[3px] top-4 bottom-[-3rem] w-px bg-zinc-200 dark:bg-zinc-800"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">{edu.institution}</h3>
                  <span className="text-sm font-mono text-zinc-500 mt-1 md:mt-0">{edu.graduation}</span>
                </div>
                
                <div className="text-zinc-600 dark:text-zinc-400">
                  <p className="font-medium text-zinc-800 dark:text-zinc-300 mb-1">{edu.degree}</p>
                  <p className="mb-2">{edu.major}</p>
                  
                  {edu.score && edu.scoreLabel && (
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                      {edu.scoreLabel}: <span className="font-medium text-zinc-600 dark:text-zinc-400">{edu.score}</span>
                    </p>
                  )}
                  
                  {edu.coursework && (
                    <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-500">
                      <span className="font-medium text-zinc-700 dark:text-zinc-300">Relevant Coursework:</span> {edu.coursework}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
