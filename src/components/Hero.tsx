import womanSurprise from "@/assets/woman-surprise.webp";
import happenIconComplete from "@/assets/happen-icon-complete.png.asset.json";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-gradient-hero pt-32 pb-20"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

      <div className="container relative grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-foreground/10 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground/90">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Cuando la comunicación pierde sentido, ninguna herramienta lo resuelve
          </span>

          <h1 className="mt-6 text-balance text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] text-foreground">
            Lo que mejor hacemos es{" "}
            <span className="italic font-light text-primary">
              entenderte.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-foreground/75 leading-relaxed">
            Entendemos tu negocio, construimos la estrategia de comunicación
            <br />y la ejecutamos con diseño y contenido de impacto.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Tomemos un café
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#que-hacemos"
              className="inline-flex items-center rounded-full border border-foreground/30 px-7 py-3.5 text-sm font-medium text-foreground hover:bg-foreground/10 transition-colors"
            >
              Qué hacemos
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md">
            {/* Spinning badge */}
            <div className="absolute -top-12 -left-10 z-20 h-28 w-28 animate-spin-slow">
              <img
                src={happenIconComplete.url}
                alt="happen"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
              <img
                src={womanSurprise}
                alt="Comunicación con sentido"
                {...({ fetchpriority: "high" } as any)}
                decoding="async"
                loading="eager"
                className="h-full w-full object-cover duotone"
              />
            </div>

            {/* Floating chip */}
            <div className="absolute -bottom-6 -right-4 z-20 rounded-2xl bg-card text-card-foreground px-5 py-4 shadow-card animate-float max-w-[200px]">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                +15 años
              </p>
              <p className="mt-1 text-sm font-medium leading-snug">
                acompañando empresas en Uruguay y la región
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 overflow-hidden border-y border-foreground/10 py-4">
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] gap-12 text-foreground/40 text-2xl font-light">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              happen <span className="text-primary">·</span> comunicación con sentido <span className="text-primary">·</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  );
};

export default Hero;
