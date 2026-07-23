import { useState, FormEvent, useEffect, useCallback } from "react";
import { CheckCircle, Loader2, ArrowRight, Sparkles, Layers, Palette, Package, Newspaper, Instagram as InstaIcon, Presentation, Brush, X, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import HappenLogo from "@/components/HappenLogo";
import happenIconComplete from "@/assets/happen-icon-complete.webp";

/**
 * Landing page independiente: /disenografico
 * Vende el servicio de diseño gráfico como estudio.
 * NO se enlaza desde la home — se accede directo por URL.
 * TODO (contenido a reemplazar cuando el cliente entregue material):
 *  - Portfolio (proyectos + imágenes reales)
 *  - Testimonios reales
 *  - Logos de clientes de diseño (por ahora se reusan los de la home)
 */

type Proyecto = {
  titulo: string;
  categoria: string;
  descripcion: string;
  // TODO: reemplazar por imagen real importada desde @/assets/portfolio/...
  placeholderBg: string;
  span: string;
};

// PLACEHOLDER portfolio — se reemplaza cuando el cliente pase el material real.
const proyectos: Proyecto[] = [
  {
    titulo: "Proyecto Uno",
    categoria: "Identidad de marca",
    descripcion: "Rebranding integral: logotipo, sistema visual y aplicaciones.",
    placeholderBg: "from-primary/40 to-primary/10",
    span: "md:col-span-8 md:row-span-2",
  },
  {
    titulo: "Proyecto Dos",
    categoria: "Packaging",
    descripcion: "Diseño de línea completa de packaging premium.",
    placeholderBg: "from-secondary/60 to-primary/20",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    titulo: "Proyecto Tres",
    categoria: "Editorial",
    descripcion: "Memoria anual: diagramación, portada y sistema de infografías.",
    placeholderBg: "from-primary/30 to-secondary/40",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    titulo: "Proyecto Cuatro",
    categoria: "Campaña gráfica",
    descripcion: "Concepto, arte y adaptaciones para vía pública, prensa y digital.",
    placeholderBg: "from-primary/50 to-primary/10",
    span: "md:col-span-6 md:row-span-1",
  },
  {
    titulo: "Proyecto Cinco",
    categoria: "Redes sociales",
    descripcion: "Sistema visual para contenido en redes con alta consistencia.",
    placeholderBg: "from-secondary/40 to-primary/30",
    span: "md:col-span-6 md:row-span-1",
  },
  {
    titulo: "Proyecto Seis",
    categoria: "Presentaciones",
    descripcion: "Presentación institucional de alto impacto para directorio.",
    placeholderBg: "from-primary/20 to-secondary/50",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    titulo: "Proyecto Siete",
    categoria: "Identidad aplicada",
    descripcion: "Papelería, señalética y kit de bienvenida para nuevos colaboradores.",
    placeholderBg: "from-primary/40 to-primary/20",
    span: "md:col-span-8 md:row-span-1",
  },
];

const servicios = [
  { icon: Sparkles, titulo: "Identidad de marca", desc: "Logotipo, sistema visual, guidelines y aplicaciones." },
  { icon: Package, titulo: "Packaging", desc: "Diseño estructural y gráfico de packaging para productos." },
  { icon: Newspaper, titulo: "Editorial", desc: "Memorias, catálogos, revistas y publicaciones institucionales." },
  { icon: Layers, titulo: "Campañas gráficas", desc: "Concepto creativo y adaptaciones para todos los formatos." },
  { icon: InstaIcon, titulo: "Contenido para redes", desc: "Sistemas visuales y piezas para redes con consistencia de marca." },
  { icon: Presentation, titulo: "Presentaciones", desc: "PPT y keynotes de alto impacto para directorios y ventas." },
  { icon: Palette, titulo: "Papelería e identidad aplicada", desc: "Tarjetas, firmas, señalética, kits de bienvenida." },
  { icon: Brush, titulo: "Ilustración y dirección de arte", desc: "Ilustración a medida y dirección de arte para campañas." },
];

const razones = [
  {
    n: "01",
    titulo: "Diseño con estrategia",
    desc: "No hacemos piezas lindas sueltas: cada decisión visual responde a un objetivo de negocio.",
  },
  {
    n: "02",
    titulo: "Equipo senior",
    desc: "Trabajás directamente con las directoras y un equipo de diseñadores con más de 15 años en el mercado.",
  },
  {
    n: "03",
    titulo: "Estudio boutique",
    desc: "Pocos clientes a la vez, atención personalizada y foco en calidad, no en volumen.",
  },
  {
    n: "04",
    titulo: "Sistema, no piezas",
    desc: "Construimos sistemas visuales escalables que ordenan la marca en el largo plazo.",
  },
];

const DisenoGrafico = () => {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      nombre: String(data.get("nombre") || ""),
      email: String(data.get("email") || ""),
      mensaje: `[Landing Diseño Gráfico] ${String(data.get("mensaje") || "")}`,
    };

    setEnviando(true);
    try {
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-form-notification",
          idempotencyKey: `dg-${Date.now()}-${payload.email}`,
          templateData: payload,
        },
      });
      if (error) throw error;
      setEnviado(true);
      toast.success("¡Recibimos tu mensaje! Te respondemos pronto.");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("No pudimos enviar el mensaje. Escribinos a hola@happenmarketing.com");
    } finally {
      setEnviando(false);
    }
  };

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Estudio de diseño gráfico | happen_";
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? "";
    meta?.setAttribute(
      "content",
      "Estudio de diseño gráfico en Uruguay. Identidad de marca, packaging, editorial, campañas y sistemas visuales con estrategia detrás."
    );
    return () => {
      document.title = prevTitle;
      if (meta && prevDesc) meta.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">


      {/* Barra superior mínima — no linkea a la home */}
      <header className="absolute top-0 inset-x-0 z-50">
        <div className="container flex items-center justify-between py-5">
          <HappenLogo variant="light" />
          <a
            href="#hablemos"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-foreground/30 px-5 py-2 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Empezar un proyecto
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-hero pt-32 pb-20 flex items-center">
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

        <div className="container relative grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-foreground/10 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground/90">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Estudio de diseño gráfico
            </span>

            <h1 className="mt-6 text-balance text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.02] text-foreground">
              Diseño que{" "}
              <span className="italic font-light text-primary">vende,</span>
              <br />
              ordena y{" "}
              <span className="italic font-light text-primary">construye</span> marca.
            </h1>

            <p className="mt-8 max-w-2xl text-lg lg:text-xl text-foreground/75 leading-relaxed">
              Somos un estudio boutique de diseño gráfico. Trabajamos con marcas
              que quieren dejar de improvisar su comunicación visual y empezar a
              construirla con estrategia, sistema y criterio.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#hablemos"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Empezar un proyecto
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center rounded-full border border-foreground/30 px-7 py-3.5 text-sm font-medium text-foreground hover:bg-foreground/10 transition-colors"
              >
                Ver portfolio
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="relative mx-auto max-w-sm aspect-square">
              <div className="absolute inset-0 animate-spin-slow">
                <img src={happenIconComplete} alt="" className="h-full w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO — bento grid */}
      <section id="portfolio" className="bg-background py-14 md:py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Portfolio
            </span>
            <h2 className="mt-4 text-4xl lg:text-6xl font-semibold leading-tight">
              Trabajos que{" "}
              <span className="italic font-light text-primary">hablan por sí solos.</span>
            </h2>
            <p className="mt-6 text-foreground/70 text-lg">
              Una selección de proyectos donde el diseño resolvió problemas reales de marca y negocio.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-12 md:auto-rows-[240px] gap-4">
            {proyectos.map((p, i) => (
              <article
                key={i}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] md:aspect-auto bg-gradient-to-br ${p.placeholderBg} ${p.span}`}
              >
                {/* Placeholder — reemplazar por <img /> cuando llegue el material */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-foreground/30 text-xs uppercase tracking-widest">
                    Imagen del proyecto
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white opacity-90 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <p className="text-[11px] uppercase tracking-widest text-primary-foreground/80">
                    {p.categoria}
                  </p>
                  <h3 className="mt-2 text-xl md:text-2xl font-semibold leading-tight">
                    {p.titulo}
                  </h3>
                  <p className="mt-2 text-sm text-white/80 max-w-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {p.descripcion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="bg-[hsl(var(--surface-light))] text-[hsl(var(--surface-light-foreground))] py-14 md:py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Qué diseñamos
            </span>
            <h2 className="mt-4 text-4xl lg:text-6xl font-semibold leading-tight">
              Un estudio completo,{" "}
              <span className="italic font-light text-primary">a tu medida.</span>
            </h2>
            <p className="mt-6 text-lg opacity-75">
              Desde una identidad de marca de cero hasta una pieza puntual: si tiene
              que estar bien diseñado, lo hacemos.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicios.map(({ icon: Icon, titulo, desc }) => (
              <div
                key={titulo}
                className="group rounded-3xl bg-card text-card-foreground p-7 shadow-card hover:-translate-y-1 transition-all"
              >
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{titulo}</h3>
                <p className="mt-2 text-sm text-card-foreground/70 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ HAPPEN */}
      <section className="bg-background py-14 md:py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Porqué elegirnos
            </span>
            <h2 className="mt-4 text-4xl lg:text-6xl font-semibold leading-tight">
              No somos una imprenta creativa.{" "}
              <span className="italic font-light text-primary">
                Somos tu estudio de diseño.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {razones.map((r) => (
              <div
                key={r.n}
                className="rounded-3xl bg-foreground/5 border border-foreground/10 p-7"
              >
                <span className="text-4xl font-light text-primary/60">{r.n}</span>
                <h3 className="mt-4 text-xl font-semibold">{r.titulo}</h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-[hsl(var(--surface-light))] text-[hsl(var(--surface-light-foreground))] py-14 md:py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Cómo trabajamos
            </span>
            <h2 className="mt-4 text-4xl lg:text-6xl font-semibold leading-tight">
              Un proceso{" "}
              <span className="italic font-light text-primary">claro,</span>{" "}
              de la idea a la pieza final.
            </h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "1", t: "Brief y diagnóstico", d: "Escuchamos, entendemos el negocio y definimos alcance, objetivos y criterios de éxito." },
              { n: "2", t: "Concepto", d: "Proponemos una dirección creativa con racional estratégico. No mostramos opciones sueltas: mostramos ideas." },
              { n: "3", t: "Diseño y producción", d: "Ejecutamos con obsesión por el detalle: tipografía, color, sistema, aplicaciones." },
              { n: "4", t: "Entrega e implementación", d: "Entregamos artes finales, guidelines y acompañamos la puesta en marcha." },
            ].map((s) => (
              <div key={s.n} className="relative rounded-3xl bg-card text-card-foreground p-7 pt-12 shadow-card">
                <div className="absolute -top-6 left-7 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-semibold shadow-soft">
                  {s.n}
                </div>
                <h3 className="text-xl font-semibold">{s.t}</h3>
                <p className="mt-3 text-sm text-card-foreground/70 leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRUEBA SOCIAL — placeholder testimonios */}
      <section className="bg-background py-14 md:py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Nos eligen
            </span>
            <h2 className="mt-4 text-4xl lg:text-6xl font-semibold leading-tight">
              Marcas que ya diseñan{" "}
              <span className="italic font-light text-primary">con nosotros.</span>
            </h2>
          </div>

          {/* TODO: reemplazar por testimonios reales (nombre, cargo, empresa, quote) */}
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <blockquote key={i} className="rounded-3xl bg-foreground/5 border border-foreground/10 p-8">
                <p className="text-lg leading-relaxed text-foreground/85">
                  "Placeholder de testimonio. Espacio reservado para una frase real de
                  un cliente sobre el trabajo de diseño."
                </p>
                <footer className="mt-6">
                  <p className="text-sm font-semibold">Nombre Apellido</p>
                  <p className="text-xs text-foreground/60">Cargo · Empresa</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / FORMULARIO */}
      <section id="hablemos" className="bg-gradient-hero text-foreground py-14 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

        <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Hablemos
            </span>
            <h2 className="mt-4 text-4xl lg:text-6xl font-semibold leading-[1.05]">
              ¿Tenés un proyecto de{" "}
              <span className="italic font-light text-primary">diseño</span> en mente?
            </h2>
            <p className="mt-6 text-lg text-foreground/80 max-w-lg">
              Contanos qué necesitás. Te respondemos con una propuesta concreta en las próximas horas.
            </p>

            <div className="mt-8 space-y-3 text-sm text-foreground/70">
              <p>
                <a href="mailto:hola@happenmarketing.com" className="hover:text-primary transition">
                  hola@happenmarketing.com
                </a>
              </p>
              <p>
                <a href="https://wa.me/59897490180" className="hover:text-primary transition">
                  WhatsApp · +598 97 490 180
                </a>
              </p>
              <p>Puntas de Santiago, 1694 · Montevideo</p>
            </div>
          </div>

          <div>
            {enviado ? (
              <div className="rounded-[2rem] bg-foreground/10 p-8 border border-foreground/20 flex flex-col items-center text-center gap-4">
                <CheckCircle className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-semibold">¡Recibimos tu mensaje!</h3>
                <p className="text-foreground/80">Te respondemos en las próximas horas.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-[2rem] bg-foreground/5 p-8 shadow-soft border border-foreground/10 space-y-5"
              >
                <div>
                  <label htmlFor="nombre-dg" className="block text-sm font-medium mb-2">Nombre</label>
                  <input
                    id="nombre-dg"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="w-full rounded-xl bg-foreground/5 border border-foreground/20 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                  />
                </div>
                <div>
                  <label htmlFor="email-dg" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    id="email-dg"
                    name="email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full rounded-xl bg-foreground/5 border border-foreground/20 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje-dg" className="block text-sm font-medium mb-2">Contanos tu proyecto</label>
                  <textarea
                    id="mensaje-dg"
                    name="mensaje"
                    required
                    rows={4}
                    placeholder="Qué necesitás, plazos, referencias..."
                    className="w-full rounded-xl bg-foreground/5 border border-foreground/20 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full rounded-xl bg-primary text-primary-foreground font-semibold px-6 py-3.5 hover:bg-primary/90 transition shadow-soft disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {enviando ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar mensaje"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer mínimo */}
      <footer className="bg-secondary text-secondary-foreground py-10">
        <div className="container flex items-center justify-between">
          <HappenLogo variant="light" />
          <span className="text-xs text-secondary-foreground/60">
            © {new Date().getFullYear()} happen_
          </span>
        </div>
      </footer>
    </main>
  );
};

export default DisenoGrafico;
