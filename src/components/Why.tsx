import womanOk from "@/assets/woman-ok.webp";

const Why = () => {
  return (
    <section id="por-que" className="bg-background text-foreground py-14 md:py-24 lg:py-32">
      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative max-w-sm mx-auto">
            <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2rem] border-2 border-primary" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <div className="absolute inset-0 bg-secondary/30 mix-blend-multiply z-10" />
              <img src={womanOk} alt="Por qué Happen" loading="lazy" decoding="async" className="h-full w-full object-cover duotone" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Porqué happen
          </span>
          <p className="mt-4 max-w-xl text-base lg:text-lg text-foreground/60 leading-relaxed">
            En un contexto donde la IA cobra protagonismo, la comunicación va a
            necesitar ser más humana que nunca, y eso es lo que mejor hacemos.{"\u00a0"}
          </p>
          <div className="mt-4 max-w-xl border-l-2 border-primary pl-5 py-1">
            <p className="text-base lg:text-lg font-medium text-foreground/90 leading-relaxed">
              Usamos la IA para ser más eficientes y enfocarnos en lo que ninguna herramienta reemplaza: entender tu organización y hacer que la comunicación funcione.
            </p>
          </div>
          <h2 className="mt-6 text-balance text-4xl lg:text-6xl font-semibold leading-tight">
            Entramos, vemos lo que pasa y{" "}
            <span className="italic font-light text-primary">
              lo resolvemos con vos.
            </span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-foreground/70 leading-relaxed">
            Visitamos, observamos y escuchamos a clientes y
            colaboradores. Entendemos la cultura, las tensiones y lo que no se
            dice en las reuniones. Pensamos la estrategia y la llevamos a la
            acción, sin intermediarios y sin pérdida de sentido.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { n: "+15", t: "Años de experiencia" },
              { n: "Boutique", t: "Equipo comprometido y cercano" },
              { n: "In-house", t: "Equipo multidisciplinario para brindar un servicio integral" },
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
