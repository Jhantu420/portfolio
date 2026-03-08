import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Download, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-bold text-primary">
          JS
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 ">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-yellow-500 transition-colors font-body hover:text-yellow-300"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="gap-2">
            <a href="/resume.pdf" download>
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </Button>
          <button
            onClick={toggle}
            className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile sidebar trigger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggle}
            className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-foreground" aria-label="Open menu">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background border-l border-border flex flex-col pt-12">
              <nav className="flex flex-col gap-2">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 text-base text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors font-body"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto pb-8 px-4">
                <Button asChild size="default" className="w-full gap-2">
                  <a href="/resume.pdf" download onClick={() => setOpen(false)}>
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
