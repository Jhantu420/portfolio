import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSending(true);
    // Simulate sending
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Contact</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Let's work together</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center flex flex-col md:flex-row justify-centergap-16 items-start">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6 hidden"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="font-display">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-display">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                maxLength={200}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="font-display">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                maxLength={2000}
              />
            </div>
            <Button type="submit" disabled={sending} className="gap-2 w-full md:w-auto">
              <Send className="w-4 h-4" />
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center md:items-start gap-8"
          >
            <div className="space-y-4 w-full">
              <h3 className="font-display text-lg font-semibold text-foreground">Contact Info</h3>
              <a href="mailto:hello@alexmorgan.dev" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <span>jhantusamui97@gmail.com</span>
              </a>
              <a href="tel:+919681693120" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 (968) 169-3120</span>
              </a>
              <a href="tel:+919091861246" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 (909) 186-1246</span>
              </a>
            </div>

            <div className="flex gap-6">
  {[
    { icon: Github, label: "GitHub", href: "https://github.com/jhantu420" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jhantu-samui-0b1492268/" },
    { icon: Mail, label: "Email", href: "mailto:jhantusamui97@gmail.com" },
  ].map(({ icon: Icon, label, href }) => (
    <a
      key={label}
      href={href}
      target="_blank" // Opens in a new tab
      rel="noopener noreferrer" // Security best practice
      className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </a>
  ))}
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
