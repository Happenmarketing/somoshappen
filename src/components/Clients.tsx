import zurichSantander from "@/assets/clients/zurich-santander.png";
import elpais from "@/assets/clients/elpais.png";
import plusultraRicoh from "@/assets/clients/plusultra-ricoh.png";
import unicomer from "@/assets/clients/unicomer.png";
import pronto from "@/assets/clients/pronto.png";
import dlocal from "@/assets/clients/dlocal.png";
import benoit from "@/assets/clients/benoit.png";
import denucio from "@/assets/clients/denucio.png";
import paymentsed from "@/assets/clients/paymentsed.png";
import buemes from "@/assets/clients/buemes.png";
import uruguay365 from "@/assets/clients/uruguay365.png";
import latu from "@/assets/clients/latu.png";
import devoto from "@/assets/clients/devoto.png";
import cocemi from "@/assets/clients/cocemi.png";
import gdu from "@/assets/clients/gdu.png";
import puntacarretas from "@/assets/clients/puntacarretas.png";
import gama from "@/assets/clients/gama.png";

const logos = [
  { src: zurichSantander, alt: "Zurich y Santander" },
  { src: elpais, alt: "El País" },
  { src: plusultraRicoh, alt: "Plus Ultra y Ricoh" },
  { src: unicomer, alt: "Grupo Unicomer" },
  { src: pronto, alt: "Pronto!" },
  { src: dlocal, alt: "dLocal" },
  { src: benoit, alt: "Benoit Audífonos" },
  { src: denucio, alt: "Denucio" },
  { src: paymentsed, alt: "PaymentsEd" },
  { src: buemes, alt: "Buemes" },
  { src: uruguay365, alt: "Uruguay 365" },
  { src: latu, alt: "Revista LATU" },
  { src: devoto, alt: "Devoto" },
  { src: cocemi, alt: "COCEMI" },
  { src: gdu, alt: "GDU" },
  { src: puntacarretas, alt: "Punta Carretas Shopping" },
  { src: gama, alt: "GAMA Italy" },
];

const Row = ({ items, reverse = false }: { items: typeof logos; reverse?: boolean }) => (
  <div className="overflow-hidden group">
    <div
      className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]"
      style={{ animationDirection: reverse ? "reverse" : "normal" }}
    >
      {[...items, ...items].map((logo, i) => (
        <div
          key={`${logo.alt}-${i}`}
          className="shrink-0 h-24 w-44 flex items-center justify-center"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className="h-full w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  </div>
);

const Clients = () => {
  const half = Math.ceil(logos.length / 2);
  const row1 = logos.slice(0, half);
  const row2 = logos.slice(half);

  return (
    <section
      id="clientes"
      className="bg-[hsl(var(--surface-light))] text-[hsl(var(--surface-light-foreground))] py-20"
    >
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            CONFÍAN EN NOSOTROS
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-semibold">
            Marcas y organizaciones que ya viven la experiencia happen.
          </h2>
        </div>
      </div>

      <div className="mt-14 space-y-8 relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[hsl(var(--surface-light))] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[hsl(var(--surface-light))] to-transparent" />

        <Row items={row1} />
        <Row items={row2} reverse />
      </div>
    </section>
  );
};

export default Clients;
