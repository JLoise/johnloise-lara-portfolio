import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Logo } from "./Logo";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";

const links = [
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""}`}>
      <nav className="container flex h-16 items-center justify-between">
        <Logo />
        <ul className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-full hover:bg-secondary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme" className="rounded-full">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden rounded-full" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="container py-4 flex flex-col gap-1">
            {links.map(l => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="block px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-smooth">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
