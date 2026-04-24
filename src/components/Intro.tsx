import womanPoint from "@/assets/woman-point.jpg";

const Intro = () => {
  return (
    <section
      id="intro"
      className="relative overflow-hidden bg-gradient-hero text-foreground py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

      <div className="container relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Qué hacemos
          </span>
          <h2 className="mt-4 text-balance text-5xl lg:text-7xl font-semibold leading-[1.05]">
            Lo mejor que hacemos es{" "}
            <span className="italic font-light text-primary">entenderte.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg lg:text-xl text-foreground/75 leading-relaxed">
            Entendemos tu negocio, construimos la estrategia y la ejecutamos
            con diseño y contenido de{" "}
            <span className="font-semibold text-foreground">impacto.</span>
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative max-w-sm mx-auto">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-primary" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
              <div className="absolute inset-0 bg-primary/15 mix-blend-multiply z-10" />
              <img
                src={womanPoint}
                alt="Lo mejor que hacemos es entenderte"
                className="h-full w-full object-cover duotone"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
