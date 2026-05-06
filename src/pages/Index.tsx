import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { Experience } from "@/components/sections/Experience";
import { Work } from "@/components/sections/Work";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => (
  <ThemeProvider>
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Experience />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  </ThemeProvider>
);

export default Index;
