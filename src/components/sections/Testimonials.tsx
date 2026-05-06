import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { quote: "John has the rare blend of speed and care. He shipped our auth flow ahead of schedule and it just worked — no flaky bugs, clean code.", name: "Project Lead", role: "Vima Club" },
  { quote: "One of the most reliable interns we've had. Took ownership of the API layer and delivered a production-ready job portal end-to-end.", name: "Engineering Manager", role: "FilDEV Cloud" },
  { quote: "Great communicator, even better engineer. Whatever the brief looked like, the result was always clean and responsive.", name: "Workshop Mentee", role: "ACM" },
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
