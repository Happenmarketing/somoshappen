const cards = [
  {
    title: "Estamos adentro",
    desc: "Visitamos, entrevistamos, observamos. Entendemos la cultura, las tensiones y lo que no se dice en las reuniones.",
  },
  {
    title: "Estrategia + ejecución",
    desc: "Pensamos la estrategia y la llevamos a la acción. Sin intermediarios, sin pérdida de sentido.",
  },
  {
    title: "Con las herramientas que sirven",
    desc: "Usamos IA y todo lo que funcione, sin perder el criterio humano.",
  },
  {
    title: "Boutique",
    desc: "Un equipo chico y comprometido, con más de 15 años trabajando de cerca con cada cliente.",
  },
];

const Why = () => {
  return (
    <section id="por-que" className="bg-background text-foreground py-14 md:py-24 lg:py-32">
      <div className="container">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Porqué happen
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {cards.map((c) => (
            <div key={c.title} className="border-l-2 border-primary pl-5 py-1">
              <h3 className="text-xl lg:text-2xl font-semibold leading-snug">
                {c.title}
              </h3>
              <p className="mt-2 text-sm lg:text-base text-foreground/70 leading-relaxed text-pretty">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
