import { Logo } from "../Logo";

export const Footer = () => (
  <footer className="border-t border-border">
    <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <Logo />
      <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} John Loise Lara. Crafted with care.</p>
    </div>
  </footer>
);
