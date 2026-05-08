import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { SectionHeader } from "./SectionHeader";

export const Contact = () => (
  <section id="contact" className="py-24 lg:py-32 container">
    <div className="relative rounded-[2.5rem] overflow-hidden border border-border bg-card p-8 sm:p-12 lg:p-20 shadow-elegant">
      <div className="absolute inset-0 bg-hero opacity-60 -z-0" />
      <div className="relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
        <div>
          <SectionHeader eyebrow="Contact" title={<>Got an idea? <br /><span className="text-gradient">Let's build it.</span></>} description="I'm currently taking on freelance projects and full-time roles. I usually reply within 24 hours." />
          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild className="rounded-full h-12 px-7 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-elegant hover:opacity-90">
              <a href="mailto:johnloise.lara16@gmail.com"><Mail className="h-4 w-4" /> Send an email</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full h-12 px-7">
              <a href="tel:+639764694259"><Phone className="h-4 w-4" /> +63 976 469 4259</a>
            </Button>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { icon: Mail, label: "Email", value: "johnloise.lara16@gmail.com", href: "mailto:johnloise.lara16@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", value: "in/johnloiselara", href: "https://linkedin.com/in/johnloiselara" },
            { icon: Github, label: "GitHub", value: "@JLoise", href: "https://github.com/JLoise" },
            { icon: Phone, label: "Phone", value: "+63 976 469 4259", href: "tel:+639764694259" },
          ].map(c => (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl border border-border bg-background/60 backdrop-blur hover:border-primary/40 transition-smooth">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground flex items-center justify-center shadow-elegant group-hover:scale-110 transition-smooth">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs text-muted-foreground font-mono">{c.label}</div>
                <div className="font-medium truncate">{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);
