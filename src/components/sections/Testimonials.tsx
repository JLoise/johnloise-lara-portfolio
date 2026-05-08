import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { quote: "Loise is fast and careful. He finished our login system early and it worked perfectly. No bugs, and the code is clean.", name: "JB Samar", role: "Vima Club Founder" },
  { quote: "He was one of the best interns. He handled the API part and made a full job portal that was ready for production.", name: "Bernard Torres", role: "FilDEV Cloud Founder" },
];

export const Testimonials = () => (
  <section id="testimonials" className="py-24 lg:py-32 container">
    <SectionHeader eyebrow="Testimonials" title={<>Kind words from <span className="text-gradient">people I've worked with</span>.</>} />
    <div className="grid md:grid-cols-3 gap-5">
      {items.map((t, i) => (
        <motion.figure key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative p-7 rounded-3xl border border-border bg-card shadow-card hover:shadow-elegant transition-smooth">
          <Quote className="absolute -top-4 left-7 h-9 w-9 p-2 rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-elegant" />
          <blockquote className="text-foreground leading-relaxed mb-6 mt-2">"{t.quote}"</blockquote>
          <figcaption className="border-t border-border pt-4">
            <div className="font-display font-semibold">{t.name}</div>
            <div className="text-xs text-muted-foreground font-mono">{t.role}</div>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  </section>
);
