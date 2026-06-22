import womanPhone from "@/assets/woman-phone.webp.asset.json";

const services = [
  {
    title: "Comunicación interna",
    desc: "Diagnosticamos cómo te estás comunicando en la interna y definimos una estrategia y plan de acción que haga sentido. Nos ocupamos de todo: desde la planificación estratégica hasta la ejecución de cada campaña, para que todos tus colaboradores estén motivados e informados.",
  },
  {
    title: "Diseño gráfico",
    desc: "Somos el diseñador de tu empresa. También diseñamos piezas específicas para tus necesidades puntuales. Desde un diseño de identidad hasta un mailing, ¡si tenés una necesidad de diseño lo hacemos posible!",
  },
  {
    title: "Comunicación digital",
    desc: "Comunicamos tu marca de forma coherente con tu público objetivo en todos los puntos de contacto. Armamos tu plan estratégico y lo ejecutamos: contenido para redes y canales digitales, gestión de influencers, ejecución y optimización de pauta digital.",
  },
];

const Services = () => {
  return (
    <section id="que-hacemos" className="bg-[hsl(var(--surface-light))] text-[hsl(var(--surface-light-foreground))] py-24 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Qué hacemos
            </span>
            <h2 className="mt-4 text-balance text-4xl lg:text-6xl font-semibold leading-[1.05]">
              Somos expertos en comunicación y diseño{" "}
              <span className="italic font-light text-primary">con sentido,</span>{" "}
              en todos los frentes.
            </h2>

            <div className="relative mt-10 max-w-xs">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
                <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply z-10 rounded-[2rem]" />
                <img src={womanPhone.url} alt="Servicios" className="h-full w-full object-cover duotone" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-5">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="group relative rounded-3xl bg-card text-card-foreground p-8 shadow-card hover:shadow-soft transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <span className="text-5xl font-light text-primary/40 leading-none w-16">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold">{s.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-card-foreground/70">
                      {s.desc}
                    </p>
                  </div>
                  <svg
                    className="h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
