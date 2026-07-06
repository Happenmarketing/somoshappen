import womanBinocAsset from "@/assets/happen-metodologia-clara.png.asset.json";
const womanBinoc = womanBinocAsset.url;

const steps = [
  {
    n: "1",
    title: "Diagnóstico",
    desc: "Escuchamos, observamos y analizamos. Entrevistas, encuestas, análisis de públicos y canales. Entendemos lo que realmente está pasando.",
  },
  {
    n: "2",
    title: "Estrategia",
    desc: "Definimos lineamientos, prioridades y una hoja de ruta acorde a los objetivos del negocio y la cultura organizacional.",
  },
  {
    n: "3",
    title: "Implementación",
    desc: "Llevamos la estrategia a la acción. Planificamos, diseñamos y ejecutamos con foco en impacto, coherencia y calidad.",
  },
  {
    n: "4",
    title: "Evaluación",
    desc: "Medimos resultados, analizamos aprendizajes y proponemos mejoras continuas para optimizar la comunicación interna y externa.",
  },
];

const Process = () => {
  return (
    <section id="como" className="bg-background text-foreground pt-6 md:pt-8 lg:pt-12 pb-14 md:pb-24 lg:pb-32 relative overflow-hidden">
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Cómo trabajamos
            </span>
            <h2 className="mt-4 text-balance text-4xl lg:text-6xl font-semibold leading-tight">
              Una metodología{" "}
              <span className="italic font-light text-primary">clara,</span>{" "}
              colaborativa y adaptada a cada organización.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <div className="relative max-w-[260px] ml-auto">
              <div className="aspect-square overflow-hidden rounded-full border-4 border-primary/40">
                <img src={womanBinoc} alt="Proceso" loading="lazy" decoding="async" className="h-full w-full object-cover duotone" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-3xl bg-card text-card-foreground p-7 pt-12 shadow-card"
            >
              <div className="absolute -top-6 left-7 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-semibold shadow-soft">
                {s.n}
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-card-foreground/70 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
