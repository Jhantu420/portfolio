import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CRM Platform",
    description: "Role based access control, Unified Login, Certificate generation, CURD operation.",
    tags: ["React", "Node.js","MERN Stack", "Tailwind CSS", "Cloudinary", "CD/CI" , "Github Action", "AWS EC2","Elastic IP"],
    link: "https://theryit.com/",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Food Delivery System",
    description: "Online Food Delivery System along with admin panel.",
    tags: [ "React JS", "Node JS", "CSS", "Mongo-atlas", "Express JS."],
    link: "https://github.com/Jhantu420/Food_delivery",
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "Data Security on Health Care Data",
    description: "Data Security on Health Care Data with end-to-end encryption. Main goal is to give secure storage and secure access to patient-sensitive data with Hasing and encryption.",
    tags: ["MERN Stack", "AES 256" , "SHA 512", "SHA 256"],
    link: "https://github.com/Jhantu420/Data-Security-on-health-care",
    color: "from-primary/15 to-primary/5",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Projects</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Selected Work</h2>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
    target="_blank" // Opens in a new tab
    rel="noopener noreferrer" // Security best practice
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: i * 0.15 }}
    className="group relative block bg-card border border-border rounded-xl p-8 md:p-10 hover:border-primary/50 transition-colors cursor-pointer"
  >
    {/* Background Gradient */}
    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
    
    <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h3 className="font-display text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 md:mb-0 max-w-md">{project.description}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-2 flex-wrap justify-start md:justify-end">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-display text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        {/* The icon now serves as a visual cue that the whole card is a link */}
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
      </div>
    </div>
  </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
