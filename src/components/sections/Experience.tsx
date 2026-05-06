import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const jobs = [
  {
    role: "Full Stack Developer (Freelance)",
    company: "Vima Club",
    location: "BGC, Taguig City",
    period: "Sep 2025 — Present",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    bullets: [
      "Co-developed a fitness clubs and events management platform enabling managers to handle bookings and events.",
      "Implemented passwordless auth (Magic Links & OTP) and protected dashboards, reducing login friction.",
      "Built responsive components for events, club directory, and user dashboard across all devices.",
      "Contributed to schema design and Supabase backend integration for reliable data retrieval.",
    ],
  },
  {
    role: "Full Stack Developer Intern (MERN)",
    company: "FilDEV Cloud Business and Software",
    location: "BGC, Taguig City",
    period: "Sep 2024 — Jan 2025",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    bullets: [
      "Developed a full-stack Job Portal Web Application using the MERN stack.",
      "Built and integrated REST APIs for registration, login, posting, and application management.",
      "Designed MongoDB schemas and optimized backend logic for efficient data storage.",
      "Architected responsive React.js UIs to elevate usability and user experience.",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="py-24 lg:py-32 container">
    <SectionHeader eyebrow="Work Experience" title={<>Roles that <span className="text-gradient">shaped me</span>.</>} description="Real, shipped products with real users. Here's where I've been getting my hands dirty." />
    <div className="relative max-w-4xl">
      <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary-glow to-transparent" />
      <div className="space-y-12">
        {jobs.map((j, i) => (
          <motion.div key={j.company} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-12 md:pl-16">
            <div className="absolute left-0 top-1.5 h-7 w-7 rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-elegant flex items-center justify-center text-primary-foreground font-display font-bold text-xs">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-card hover:shadow-elegant transition-smooth">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display font-bold text-xl">{j.role}</h3>
                <span className="font-mono text-xs text-accent">{j.period}</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{j.company} · {j.location}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {j.stack.map(s => (
                  <span key={s} className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-mono text-[11px]">{s}</span>
                ))}
              </div>
              <ul className="space-y-2.5">
                {j.bullets.map(b => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-accent mt-1.5 shrink-0">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
