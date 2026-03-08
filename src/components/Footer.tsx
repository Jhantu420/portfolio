import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background px-6 py-5">
      <div className="container mx-auto">
        
        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm font-medium text-muted-foreground">
            © {currentYear} Jhantu. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for hire
            </p>
            <span className="hidden md:inline">•</span>
            <p>Built with React & Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  );
}