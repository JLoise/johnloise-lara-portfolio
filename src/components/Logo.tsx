export const Logo = () => (
  <a href="#home" className="group flex items-center gap-2 font-display font-bold text-lg tracking-tight">
    <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-elegant transition-smooth group-hover:scale-110 group-hover:rotate-6">
      <span className="text-sm">JL</span>
    </span>
    <span className="hidden sm:flex flex-col leading-none">
      <span className="text-foreground">john<span className="text-gradient">loise</span></span>
      <span className="text-[10px] font-mono font-normal text-muted-foreground tracking-widest">.dev</span>
    </span>
  </a>
);
