import womanPoint from "@/assets/woman-point.jpg";
import { Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="bg-background text-foreground py-24 lg:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Hablemos
            </span>
            <h2 className="mt-4 text-balance text-5xl lg:text-7xl font-semibold leading-[1.05]">
              <span className="italic font-light text-primary">Tomemos un café.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg text-foreground/70">
              Si tenés un desafío de comunicación o diseño, aunque no sepas
              exactamente cuál es, es una buena razón para tomar un café.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:hola@happenmarketing.com"
                className="flex items-center gap-4 group"
              >
                <span className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center group-hover:bg-primary transition">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <span className="text-xl font-medium group-hover:text-primary transition">
                  hola@happenmarketing.com
                </span>
              </a>
              <a
                href="https://wa.me/59897490180"
                className="flex items-center gap-4 group"
              >
                <span className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center group-hover:bg-primary transition">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75c.13.96.37 1.9.72 2.81a1 1 0 0 1-.23 1.05l-1.7 1.7a16 16 0 0 0 6.8 6.8l1.7-1.7a1 1 0 0 1 1.05-.23c.91.35 1.85.59 2.81.72a1 1 0 0 1 .76 1Z" />
                  </svg>
                </span>
                <span className="text-xl font-medium group-hover:text-primary transition">
                  +59897490180
                </span>
              </a>
            </div>

            <div className="mt-10 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="h-11 w-11 rounded-full border border-foreground/30 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="h-11 w-11 rounded-full border border-foreground/30 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -top-4 -right-4 z-20 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow-soft rotate-6">
                ¡Hablemos!
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
                <div className="absolute inset-0 bg-primary/15 mix-blend-multiply z-10 rounded-[2rem]" />
                <img src={womanPoint} alt="Contacto" className="h-full w-full object-cover duotone" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
