import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { cn } from "../../lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pointer-events-none transition-all duration-300">
      <div 
        className={cn(
          "pointer-events-auto flex items-center justify-between md:justify-center transition-all duration-500 rounded-full",
          isScrolled 
            ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-lg border border-zinc-200 dark:border-zinc-800 py-3 px-6 md:gap-8" 
            : "bg-white/40 dark:bg-black/40 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-800/50 py-3 px-6 md:gap-8"
        )}
      >
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm transition-colors link-underline",
                activeSection === link.href.substring(1) 
                  ? "text-zinc-900 dark:text-white font-medium" 
                  : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:border-l md:border-zinc-200 md:dark:border-zinc-800 md:pl-8">
          <ThemeToggle />
          <a
            href="/sathvikreddyResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors"
          >
            Resume
          </a>
          
          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors ml-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden pointer-events-auto absolute top-20 left-4 right-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-6 animate-fade-in shadow-xl">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
               <a
                 key={link.name}
                 href={link.href}
                 className={cn(
                   "text-base transition-colors",
                   activeSection === link.href.substring(1)
                     ? "text-zinc-900 dark:text-white font-medium"
                     : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                 )}
                 onClick={() => setIsMobileMenuOpen(false)}
               >
                 {link.name}
               </a>
            ))}
            <a
              href="/sathvikreddyResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 w-full text-center text-sm font-medium rounded-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
