import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import vima from "@/assets/vima.png";
import jobportal from "@/assets/loyseconnect.png";
import portfolio from "@/assets/portfolio.png";

const works = [
  {
    title: "Vima Club",
    tag: "Fitness Platform",
    year: "2025",
    desc: "A fitness clubs & events management platform with passwordless auth, club directory, and protected dashboards.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    img: vima,
    live: "https://vima.club",
    repo: null,
  },
  {
    title: "Job Portal",
    tag: "MERN App",
    year: "2025",
    desc: "Full-stack job portal with Google OAuth 2.0, role-based access control, and protected REST routes.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    img: jobportal,
    live: null,
    repo: "https://github.com/JLoise",
  },
  {
    title: "Portfolio v1",
    tag: "Personal Site",
    year: "2024",
    desc: "My first portfolio — built and shipped on Vercel. The starting point for everything you see today.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    img: portfolio,
    live: "https://portfolio-git-nu.vercel.app/",
    repo: "https://github.com/JLoise",
  },
];

export const Work = () => (
  <section id="work" className="py-24 lg:py-32 container">
    <SectionHeader eyebrow="Featured Work" title={<>Things I've <span className="text-gradient">shipped</span>.</>} description="A selection of recent builds. Click any card to visit the live project or peek at the source." />
    <div className="grid md:grid-cols-2 gap-6">
      {works.map((w, i) => (
        <motion.article key={w.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: i * 0.1 }}
          className={`group relative rounded-3xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1 ${i === 0 ? "md:col-span-2" : ""}`}>
          <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
            <img src={w.img} alt={w.title} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
          <div className="p-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{w.tag}</span>
              <span className="font-mono text-xs text-muted-foreground">{w.year}</span>
            </div>
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-display font-bold text-2xl">{w.title}</h3>
              <div className="flex gap-1.5 shrink-0">
                {w.repo && (
                  <a href={w.repo} target="_blank" rel="noreferrer" aria-label={`${w.title} repo`} className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-smooth">
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {w.live && (
                  <a href={w.live} target="_blank" rel="noreferrer" aria-label={`Visit ${w.title}`} className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground flex items-center justify-center shadow-elegant hover:scale-110 transition-smooth">
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{w.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {w.stack.map(s => (
                <span key={s} className="font-mono text-[11px] text-muted-foreground">#{s.toLowerCase().replace(/[^a-z0-9]/g, "")}</span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);
