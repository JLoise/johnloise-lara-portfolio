const items = ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "Supabase", "Tailwind CSS", "JWT", "Playwright", "Selenium"];
export const Marquee = () => (
  <div className="border-y border-border bg-secondary/40 overflow-hidden py-6">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...items, ...items].map((it, i) => (
        <span key={i} className="mx-8 font-display font-semibold text-2xl text-muted-foreground hover:text-foreground transition-smooth">
          {it} <span className="text-accent">✦</span>
        </span>
      ))}
    </div>
  </div>
);
