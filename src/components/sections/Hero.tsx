import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import portrait from "@/assets/portrait.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-hero">
      {/* decorative grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="container grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for freelance — Q2 2026
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display font-bold tracking-tighter text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]">
            Full Stack Dev
            <br />
            {/*
            crafting <span className="text-gradient">delightful</span>
            <br />
            web experiences.
            */}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Hi, I'm <span className="text-foreground font-semibold">John Loise Lara</span> — a Manila-based developer
            shipping production-ready apps with the <span className="font-mono text-foreground">MERN stack</span>,
            Next.js & Supabase. I turn messy ideas into fast, accessible, beautifully engineered products.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild className="rounded-full h-12 px-7 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-elegant hover:opacity-90">
              <a href="#work"><Sparkles className="h-4 w-4" /> View my work</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full h-12 px-7">
              <a href="#contact"><Mail className="h-4 w-4" /> Get in touch</a>
            </Button>
            <div className="flex items-center gap-1 ml-2">
              <Button variant="ghost" size="icon" asChild className="rounded-full"><a href="https://github.com/JLoise" target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="h-5 w-5" /></a></Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full"><a href="https://linkedin.com/in/johnloiselara" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a></Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 grid grid-cols-3 max-w-md gap-6 border-t border-border pt-6">
            {[
              { k: "1+", v: "Years building" },
              { k: "2", v: "Projects shipped" },
              { k: "3.42", v: "GPA · Dean's List" },
            ].map(s => (
              <div key={s.v}>
                <div className="font-display font-bold text-2xl text-foreground">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block">
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-primary/20 via-primary-glow/10 to-accent/20 blur-3xl" />
          <div className="relative rounded-[2.5rem] overflow-hidden border border-border bg-card shadow-elegant animate-float">
            <img src={portrait} alt="John Loise Lara" width={768} height={896} className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-card font-mono text-xs">
            <div className="text-muted-foreground">// currently</div>
            <div className="text-foreground">building @ Vima Club</div>
          </div>
          <div className="absolute -top-4 -right-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-card">
            <div className="text-xs text-muted-foreground">Stack</div>
            <div className="font-mono text-sm text-foreground">React · Node · Mongo</div>
          </div>
        </motion.div>
      </div>

      <a href="#services" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-smooth animate-bounce">
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
};
