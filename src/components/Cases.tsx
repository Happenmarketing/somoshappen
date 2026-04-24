import gama from "@/assets/cases/gama.jpg";
import disco from "@/assets/cases/disco.jpg";
import gasoducto from "@/assets/cases/gasoducto.jpg";
import denucio from "@/assets/cases/denucio.jpg";
import unicomer from "@/assets/cases/unicomer.jpg";
import cocemi from "@/assets/cases/cocemi.jpg";

type Case = {
  client: string;
  category: string;
  description: string;
  image: string;
  /** bento span on desktop */
  span: string;
};

const cases: Case[] = [
  {
    client: "GAMA Italy",
    category: "Retail · Electrobeauty",
    description:
      "Estrategia y gestión digital integral: redes, influencers, pauta digital. Producción audiovisual, eventos, activaciones y diseño gráfico de campañas.",
    image: gama,
    span: "md:col-span-4 md:row-span-2",
  },
  {
    client: "Grupo Disco Uruguay",
    category: "Retail · +2000 colaboradores · 35 puntos de venta · 2 marcas",
    description:
      "Diagnóstico, planificación e implementación del plan anual de comunicación interna: análisis de canales, calendarización, diseño y redacción de piezas, gestión de proveedores y encuestas anuales.",
    image: disco,
    span: "md:col-span-4 md:row-span-1",
  },
  {
    client: "Gasoducto Cruz del Sur",
    category: "Energía · Infraestructura",
    description:
      "Comunicación integral del proyecto: estrategia, prensa, contenidos, comunicación interna y vínculo con stakeholders.",
    image: gasoducto,
    span: "md:col-span-4 md:row-span-1",
  },
  {
    client: "Denucio",
    category: "Consumo masivo non food",
    description:
      "Estrategia y gestión digital integral: redes, influencers, pauta, sitio web, mailing y WhatsApp. Planificación y producción audiovisual de contenidos.",
    image: denucio,
    span: "md:col-span-4 md:row-span-2",
  },
  {
    client: "Unicomer Costa Rica",
    category: "Retail · +2500 colaboradores · 190 puntos de venta · 6 marcas",
    description:
      "Diagnóstico, planificación e implementación del plan anual de comunicación interna para todo el grupo: análisis de canales, calendarización, diseño y redacción de piezas y encuestas anuales.",
    image: unicomer,
    span: "md:col-span-4 md:row-span-1",
  },
  {
    client: "COCEMI",
    category: "Cooperativa nacional de compra de medicamentos",
    description:
      "Comunicación interna y con instituciones, gestión de circuito de pantallas en 23 instituciones médicas del país y comunicación multicanal de Ronda Cocemi en Antel Arena.",
    image: cocemi,
    span: "md:col-span-4 md:row-span-1",
  },
];

const Cases = () => {
  return (
    <section
      id="casos"
      className="bg-background text-foreground py-20 lg:py-28"
    >
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            CASOS DE ÉXITO
          </span>
          <h2 className="mt-4 text-3xl lg:text-5xl font-semibold leading-tight">
            Proyectos que hicimos happen.
          </h2>
          <p className="mt-4 text-foreground/70 text-lg">
            Marcas y organizaciones que confiaron en nosotros para llevar su comunicación al siguiente nivel.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 md:auto-rows-[220px] gap-4">
          {cases.map((c) => (
            <article
              key={c.client}
              className={`group relative overflow-hidden rounded-2xl bg-foreground/5 cursor-pointer aspect-[4/3] md:aspect-auto ${c.span}`}
            >
              <img
                src={c.image}
                alt={c.client}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700 ease-out"
              />

              {/* Always-visible bottom gradient + name */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent text-white transition-opacity duration-500 group-hover:opacity-0">
                <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                  {c.client}
                </h3>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-7 bg-gradient-to-t from-primary/95 via-primary/85 to-primary/40 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                    {c.client}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm uppercase tracking-wider opacity-90">
                    {c.category}
                  </p>
                  <p className="mt-3 text-sm md:text-[15px] leading-relaxed opacity-95 line-clamp-5">
                    {c.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
