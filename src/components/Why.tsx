import womanOk from "@/assets/woman-ok.jpg";

const Why = () => {
  return (
    <section id="por-que" className="bg-background text-foreground py-24 lg:py-32">
      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative max-w-sm mx-auto">
            <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2rem] border-2 border-primary" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <div className="absolute inset-0 bg-secondary/30 mix-blend-multiply z-10" />
              <img src={womanOk} alt="Por qué Happen" className="h-full w-full object-cover duotone" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Por qué Happen
          </span>
          <h2 className="mt-4 text-balance text-4xl lg:text-6xl font-semibold leading-tight">
            La IA puede producir contenido. Lo que no puede{" "}
            <span className="italic font-light text-primary">
              es entender tu organización.
            </span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-foreground/70 leading-relaxed">
            Lejos de desaparecer, la comunicación va a necesitar ser más humana
            que nunca. Nosotros traemos criterio, estrategia y oficio a cada
            mensaje que tu marca emite.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { n: "08", t: "Años de experiencia" },
              { n: "60+", t: "Marcas acompañadas" },
              { n: "100%", t: "Hecho con sentido" },
            ].map((s) => (
              <div key={s.n} className="border-l-2 border-primary pl-4">
                <div className="text-4xl font-semibold">{s.n}</div>
                <div className="mt-1 text-sm text-foreground/60">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
