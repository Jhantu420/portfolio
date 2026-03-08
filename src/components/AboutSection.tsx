import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import developerImg from "@/assets/developer-portrait.jpg";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Figma",
  "Tailwind CSS",
  "PostgreSQL",
];
// const myResimage ={
//   .myimage{
//     @media (max-width:765px){
//       width:400px
//     }
//   }
// }

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[400px_1fr] gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <img
                src={developerImg}
                alt="Alex Morgan - Developer"
                className="rounded-full w-full aspect-square object-cover border-2 border-border myimage "
              />
              <div className="absolute inset-0 rounded-full ring-2 ring-primary/20 ring-offset-4 ring-offset-background " />
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
                About
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
                Building the web,
                <br />
                one pixel at a time.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl">
                Hello, I'm a full-stack developer with a passion for creating
                beautiful, performant web applications. With 1+ years of
                experience, I specialize in turning complex problems into
                elegant, user-friendly solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8"
            >
              <Button asChild className="gap-2">
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
