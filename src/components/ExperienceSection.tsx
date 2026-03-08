import { motion } from "framer-motion";

// const experiences = [
//   {
//     company: "Nexora Technologies",
//     role: "Software Developer(Full Time)",
//     period: "Oct 2025 – Present",
//     // duration: "3+ years",
//     description: "Creating a dating web app with mern stack including video & audio call by using features like WebRTC & Socket.io.",
//   },
//   {
//     company: "Junior Software Developer",
//     role: "Full-Stack(MERN) Developer",
//     period: "July 2025 – Oct 2025",
//     duration: "3 months",
//     description: "Developed interactive admin dashboards with Role Based Access Control with multi layer access.",
//   },
//   {
//     company: "Full-Stack freelance",
//     role: "Full-Stack(MERN) Developer",
//     period: "Aug 2024 – Present",
//     // duration: "3 months",
//     description: "Till now I've been completed 2 project one is a computer center project with CRM dashboard with multiple branch another is a school management system",
//   },
//   {
//     company: "Centre for Development of Advanced Computing",
//     role: "Full-Stack Intern",
//     period: "July 2023 – Sept 2023",
//     duration: "2 months",
//     description: "Built responsive web apps named Auditory Database using Node.js, Express js, React.js & MySQL. ",
//   },
// ];
const experiences = [
  {
    company: "I-KRAB E-SOL PVT LTD ",
    role: "Full-Stack Developer",
    duration: "Oct 2025 – Present",
    description: "Architecting a high-performance dating platform using the MERN stack. Implementing real-time communication features, including end-to-end encrypted video and audio calling via WebRTC and Socket.io.",
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    duration: "Aug 2024 – Present",
    description: "Delivering end-to-end web solutions for diverse clients, including a comprehensive CRM for a multi-branch computer center and a robust School Management System featuring automated administrative workflows.",
  },
  {
    company: "PCS GLOBAL PVT LTD", // Replaced 'Junior Software Developer' with a professional placeholder
    role: "Junior Full-Stack Developer",
    period: "July 2025 – Oct 2025",
    duration: "4 months",
    description: "Engineered interactive admin dashboards featuring complex Role-Based Access Control (RBAC) with multi-layered permission systems to enhance data security.",
  },
  {
    company: "Centre for Development of Advanced Computing (C-DAC)",
    role: "Full-Stack Intern",
    period: "July 2023 – Sept 2023",
    duration: "2 months",
    description: "Developed 'Auditory Database,' a responsive web application designed for efficient data management, utilizing Node.js, Express, React, and MySQL.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Experience</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Where I've Worked</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[18px] md:left-[22px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-14 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-3.5 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                <div className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-semibold">{exp.role}</h3>
                      <p className="text-primary font-display text-sm">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground font-body">
                      <span>{exp.period}</span>
                      <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-display">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
