import { portfolioData } from "../../data/portfolio";
import { Badge } from "../ui/Badge";

export function Skills() {
  const skillCategories = [
    { title: "Languages", skills: portfolioData.skills.languages },
    { title: "Frontend", skills: portfolioData.skills.frontend },
    { title: "Backend", skills: portfolioData.skills.backend },
    { title: "Databases", skills: portfolioData.skills.databases },
    { title: "Tools", skills: portfolioData.skills.tools },
    { title: "Other", skills: portfolioData.skills.other },
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">Skills</h2>
            <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-4 tracking-wide">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1 text-sm border-zinc-800 bg-zinc-950 text-zinc-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
