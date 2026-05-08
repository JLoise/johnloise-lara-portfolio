import { Code2, Database, Layout, ShieldCheck, TestTube, Zap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { motion } from "framer-motion";

const services = [
  { icon: Layout, title: "Frontend Development", desc: "Creates websites that look perfect on all screens using React, Next.js, and Tailwind. They are smooth, easy to use, and fast." },
  { icon: Database, title: "Backend & APIs", desc: "Builds APIs with Node.js, Express, MongoDB, and PostgreSQL. Makes sure the data is organized and the services can grow." },
  { icon: Code2, title: "Full Stack Apps", desc: "Develops complete apps with MERN and Next.js. Starts from your idea and builds it into a working product on Vercel." },
  { icon: ShieldCheck, title: "Auth & Security", desc: "Handles login with JWT, OAuth 2.0, Magic Links, and OTP. Protects your app and controls who can access what." },
  { icon: TestTube, title: "QA & Testing", desc: "Tests apps with Playwright and Selenium to make sure everything works before you launch." },
  { icon: Zap, title: "Performance & UX", desc: "Checks and improves apps to make them faster and better for users. This helps keep visitors coming back." },
];

export const Services = () => (
  <section id="services" className="py-24 lg:py-32 container">
    <SectionHeader eyebrow="Services" title={<>What I can <span className="text-gradient">build for you</span>.</>} description="A focused set of services I love and ship constantly. Every engagement is hands-on, transparent, and obsessively detail-oriented." />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.map((s, i) => (
        <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.05 }}
          className="group relative p-7 rounded-3xl border border-border bg-card hover:bg-card hover:border-primary/40 transition-smooth shadow-card hover:shadow-elegant hover:-translate-y-1">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-elegant mb-5 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
            <s.icon className="h-5 w-5" />
          </div>
          <h3 className="font-display font-semibold text-xl mb-2">{s.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          <div className="absolute top-7 right-7 font-mono text-xs text-muted-foreground/50">0{i + 1}</div>
        </motion.div>
      ))}
    </div>
  </section>
);
