export const SectionHeader = ({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description?: string }) => (
  <div className="max-w-2xl mb-12 lg:mb-16">
    <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">— {eyebrow}</div>
    <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">{title}</h2>
    {description && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{description}</p>}
  </div>
);
