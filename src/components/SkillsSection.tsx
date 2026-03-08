import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  FileCode2,
  Layers,
  GitBranch,
  Globe,
  Plug,
  Radio,
  Box,
  Triangle,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const skillIcons: Record<string, LucideIcon> = {
  React: Code2,
  "Next.js": Layers,
  TypeScript: FileCode2,
  JavaScript: FileCode2,
  Python: Terminal,
  "Tailwind CSS": Box,
  "GSAP": Triangle,
  "GSAP/React": Triangle,
  "Framer Motion": Layers,
  "Node.js": Server,
  "Express.js": Globe,
  "Express JS": Globe,
  "Socket.io": Radio,
  "REST APIs": Plug,
  PostgreSQL: Database,
  MongoDB: Database,
  "Mongo Atlas": Database,
  MySQL: Database,
  Git: GitBranch,
  GitHub: GitBranch,
  Postman: Plug,
  "CI/CD": Radio,
  "GitHub Actions": GitBranch,
  "AWS EC2": Server,
  Cloudinary: Globe,
};

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python","C Programing"],
  },
  {
   title: "Frontend / Library",
    skills: ["React", "Next.js","Tailwind CSS", "Framer Motion", "GSAP", "GSAP/React"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express JS", "Socket.io", "REST APIs", "Cloudinary"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Mongo Atlas", "MySQL"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "GitHub Actions", "CI/CD", "AWS EC2", "Postman"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Skills
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            My Tech Stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIdx) => {
                  const Icon = skillIcons[skill] || Code2;
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: catIdx * 0.15 + skillIdx * 0.05,
                      }}
                      className="flex flex-col items-center gap-2 p-6 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors group"
                    >
                      <Icon className="w-12 h-6 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium text-center">
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
