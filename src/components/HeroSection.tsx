import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const useTypewriter = (text: string, speed = 40, startDelay = 0) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timeout = setTimeout(() => {
      if (cancelled) return;
      setStarted(true);
      let i = 0;
      const type = () => {
        if (cancelled) return;
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          setDone(true);
        } else {
          requestAnimationFrame(() => setTimeout(type, speed));
        }
      };
      type();
    }, startDelay);
    return () => { cancelled = true; clearTimeout(timeout); };
  }, [text, speed, startDelay]);

  return { displayed, done, started };
};

const HeroSection = () => {
  const [line1Done, setLine1Done] = useState(false);
  const line1 = useTypewriter("Designer & Developer", 70, 500);
  
  useEffect(() => {
    if (line1.done) {
      const t = setTimeout(() => setLine1Done(true), 400);
      return () => clearTimeout(t);
    }
  }, [line1.done]);

  const line2 = useTypewriter(
    "Crafting digital experiences that blend aesthetics with functionality.",
    25,
    line1Done ? 0 : 99999
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src="/videos/coding-bg.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-6 min-h-[1.5em]"
        >
          {line1.displayed}
          {!line1.done && <span className="animate-pulse">|</span>}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Jhantu <span className="text-primary">Samui</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 font-body min-h-[1.75em]"
        >
          {line2.displayed}
          {line1.done && !line2.done && <span className="animate-pulse">|</span>}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-display font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-border text-foreground font-display font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-2.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 bg-primary rounded-full"
          />
        </div>
      </motion.div>

      {/* Animated Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[200%] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,40 C150,80 350,0 500,40 C650,80 850,0 1000,40 C1050,55 1150,20 1200,40 L1200,120 L0,120 Z"
            fill="hsl(var(--background))"
            animate={{ x: [0, -600] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />
          <motion.path
            d="M0,60 C150,20 350,100 500,60 C650,20 850,100 1000,60 C1050,45 1150,80 1200,60 L1200,120 L0,120 Z"
            fill="hsl(var(--background))"
            opacity={0.5}
            animate={{ x: [0, -600] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
