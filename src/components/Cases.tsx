import gama from "@/assets/cases/gama.webp";
import disco from "@/assets/cases/disco.webp";
import gasoducto from "@/assets/cases/gasoducto.webp";
import denucio from "@/assets/cases/denucio.webp";
import unicomer from "@/assets/cases/unicomer.webp";
import cocemi from "@/assets/cases/cocemi.webp";

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
      className="bg-background text-foreground py-14 md:py-20 lg:py-28"
    >
      {/* SVG duotone filter: maps blacks to brand navy, whites to brand light */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="duotone-happen">
            <feColorMatrix
              type="matrix"
              values="0.299 0.587 0.114 0 0
                      0.299 0.587 0.114 0 0
                      0.299 0.587 0.114 0 0
                      0     0     0     1 0"
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              {/* dark -> deep navy hsl(230 60% 18%) ≈ #131e4a, light -> soft lavender hsl(240 40% 95%) ≈ #ebebf5 */}
              <feFuncR tableValues="0.075 0.92" type="table" />
              <feFuncG tableValues="0.118 0.92" type="table" />
              <feFuncB tableValues="0.290 0.96" type="table" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            PROYECTOS
          </span>
          <h2 className="mt-4 text-3xl lg:text-5xl font-semibold leading-tight">
            Algunos de nuestros proyectos.
          </h2>
          <p className="mt-4 text-foreground/70 text-lg">
            
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 md:auto-rows-[220px] gap-4">
          {cases.map((c) => (
            <article
              key={c.client}
              className={`group relative overflow-hidden rounded-2xl bg-secondary cursor-pointer aspect-[4/3] md:aspect-auto ${c.span}`}
            >
              {/* Duotoned image (default state) */}
              <img
                src={c.image}
                alt={c.client}
                loading="lazy"
                style={{ filter: "url(#duotone-happen)" }}
                className="absolute inset-0 h-full w-full object-cover scale-105 group-hover:scale-100 group-hover:opacity-0 transition-all duration-700 ease-out"
              />
              {/* Real color image (hover state) */}
              <img
                src={c.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
              />

              {/* Always-visible bottom gradient + name */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white transition-opacity duration-500 group-hover:opacity-0 pointer-events-none">
                <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                  {c.client}
                </h3>
              </div>

              {/* Hover info overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-7 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                    {c.client}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm uppercase tracking-wider text-primary-foreground/80">
                    {c.category}
                  </p>
                  <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-white/90 line-clamp-5">
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
