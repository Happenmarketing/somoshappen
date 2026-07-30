import { useState, FormEvent, useEffect, useCallback } from "react";
import { CheckCircle, Loader2, ArrowRight, Sparkles, Palette, Package, Newspaper, Instagram as InstaIcon, Brush, Store, Megaphone, X, ChevronLeft, ChevronRight, Linkedin, MapPin, Instagram as InstagramIcon } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import HappenLogo from "@/components/HappenLogo";
import LogoMarquee from "@/components/LogoMarquee";
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
  placeholderBg: string;
  span: string;
  galeria: { src: string; alt: string; bg: string }[];
};

// Selección curada por categoría: imágenes fuertes y variadas
const galeriaPicks = (folder: string, alt: string, files: string[]) =>
  files.map((f, i) => ({
    src: `/portfolio/${folder}/${f}.webp`,
    alt: `${alt} — ${i + 1}`,
    bg: "bg-primary/20",
  }));

const proyectos: Proyecto[] = [
  {
    titulo: "Identidad de marca",
    categoria: "Branding",
    descripcion: "Logo, paleta, tipografía y sistema gráfico: el ADN visual de la empresa.",
    placeholderBg: "from-primary/40 to-primary/10",
    span: "",
    galeria: galeriaPicks("branding", "Identidad de marca", ["n03", "n01", "n02", "n04", "n05", "n06", "n07", "n08", "n09"]),
  },
  {
    titulo: "Piezas digitales & redes",
    categoria: "Digital",
    descripcion: "Posteos, reels, banners, mailings y presentaciones para todos tus canales.",
    placeholderBg: "from-primary/30 to-secondary/40",
    span: "",
    galeria: galeriaPicks("assets-digitales", "Pieza digital", ["n02", "n01", "n03"]),
  },
  {
    titulo: "Materiales corporativos & impresos",
    categoria: "Editorial",
    descripcion: "Catálogos, revistas, memorias, folletos y papelería listos para imprenta.",
    placeholderBg: "from-primary/40 to-primary/20",
    span: "",
    galeria: galeriaPicks("brochures-papeleria", "Material corporativo", ["n02", "n01", "n03", "n04", "n05"]),
  },
  {
    titulo: "Merchandising & branded items",
    categoria: "Branded items",
    descripcion: "Objetos, kits y regalos con identidad de marca para clientes, equipos y eventos.",
    placeholderBg: "from-secondary/40 to-primary/30",
    span: "",
    galeria: galeriaPicks("merchandising", "Merchandising", ["01", "02", "07", "08", "11", "13", "18", "24"]),
  },
  {
    titulo: "Punto de venta",
    categoria: "Retail",
    descripcion: "Banners, exhibidores, carteleras y vidrieras para el local.",
    placeholderBg: "from-primary/20 to-secondary/50",
    span: "",
    galeria: galeriaPicks("punto-de-venta", "Punto de venta", ["11", "01", "02", "05", "06", "08"]),
  },
  {
    titulo: "Campañas integrales",
    categoria: "Campañas",
    descripcion: "Vía pública, ruteros, mupis, ómnibus, digital y punto de venta. Todo alineado.",
    placeholderBg: "from-primary/50 to-primary/10",
    span: "",
    galeria: galeriaPicks("campanas-360", "Campaña", ["01", "02", "07", "09", "10", "11", "16", "25"]),
  },
];



const servicios = [
  {
    icon: Palette,
    titulo: "Identidad de marca",
    desc: "El sistema visual base de tu empresa. Diseñamos o renovamos tu marca con criterio: logo, paleta, tipografía y sistema gráfico para que todo comunique lo mismo.",
    tags: ["Logo", "Brandbook", "Paleta", "Tipografía", "Sistema gráfico"],
  },
  {
    icon: InstaIcon,
    titulo: "Piezas digitales & redes",
    desc: "Diseño y edición para tus canales digitales. Placas, banners y mailings, presentaciones corporativas. Edición de reels y videos cortos para redes sociales.",
    tags: ["Reels", "Posteos", "Presentaciones", "Banners web", "Mailings"],
  },
  {
    icon: Newspaper,
    titulo: "Materiales corporativos & impresos",
    desc: "Catálogos, revistas, memorias, folletos, tarjetas, carpetas, membretadas y plantillas. Todo estructurado, listo para imprenta o uso digital, alineado a tu identidad.",
    tags: ["Catálogos", "Revistas", "Memorias", "Folletos", "Reportes"],
  },
  {
    icon: Package,
    titulo: "Merchandising & branded items",
    desc: "Objetos y piezas físicas para acciones de comunicación, eventos y branding. Bolsas, unboxing, regalos corporativos y todo lo que materializa tu marca fuera de la pantalla.",
    tags: ["Cajas", "Etiquetas", "Fajas", "Bolsas", "Merchandising"],
  },
  {
    icon: Store,
    titulo: "Punto de venta",
    desc: "Banners, exhibidores, carteleras y vidrieras. Todo lo que representa tu marca en el local, coherente y bien resuelto.",
    tags: ["Banners", "Exhibidores", "Carteleras", "Vidrieras", "Promocionales"],
  },
  {
    icon: Megaphone,
    titulo: "Campañas integrales",
    desc: "Cuando el proyecto necesita más que una pieza. Diseñamos campañas completas: vía pública, ruteros, ómnibus, mupis, digital y punto de venta. Todo alineado, todo con sentido.",
    tags: ["Vía pública", "Ruteros", "Mupis", "Ómnibus", "Digital", "POP"],
  },
];

const razones = [
  {
    n: "01",
    titulo: "Enfoque en el receptor",
    desc: "Analizamos el canal de salida y qué necesita saber quien recibe la pieza para que el diseño responda a tus objetivos.",
  },
  {
    n: "02",
    titulo: "Nos adaptamos a tu forma\u00a0\nde trabajo",
    desc: "Si necesitás un equipo de diseño fijo, lo somos. Si preferís ir por proyecto o por horas, también.",
  },
  {
    n: "03",
    titulo: "Visión global",
    desc: "Diseñamos asegurando que cada entrega, por más puntual que sea, mantenga la solidez y coherencia de toda tu marca.",
  },
];

const DisenoGrafico = () => {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [lightbox, setLightbox] = useState<{ proyectoIndex: number; imagenIndex: number } | null>(null);

  const abrirLightbox = (proyectoIndex: number) => setLightbox({ proyectoIndex, imagenIndex: 0 });
  const cerrarLightbox = () => setLightbox(null);
  const siguienteImagen = useCallback(() => {
    if (!lightbox) return;
    const total = proyectos[lightbox.proyectoIndex].galeria.length;
    setLightbox({ ...lightbox, imagenIndex: (lightbox.imagenIndex + 1) % total });
  }, [lightbox]);
  const anteriorImagen = useCallback(() => {
    if (!lightbox) return;
    const total = proyectos[lightbox.proyectoIndex].galeria.length;
    setLightbox({ ...lightbox, imagenIndex: (lightbox.imagenIndex - 1 + total) % total });
  }, [lightbox]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") cerrarLightbox();
      if (e.key === "ArrowRight") siguienteImagen();
      if (e.key === "ArrowLeft") anteriorImagen();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, siguienteImagen, anteriorImagen]);

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
      <section className="relative min-h-[90vh] overflow-hidden bg-gradient-hero pt-24 pb-12 flex items-center">
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

        <div className="container relative grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-foreground/10 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground/90">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Estudio de diseño gráfico
            </span>

            <h1 className="mt-4 text-balance text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] text-foreground">
              Diseño para empresas que quieren que su{" "}
              <span className="italic font-light text-primary">marca</span> esté a
              la altura de su{" "}
              <span className="italic font-light text-primary">negocio</span>.
            </h1>

            <p className="mt-4 max-w-2xl text-base lg:text-lg text-foreground/75 leading-relaxed">
              Transformamos tus ideas en diseños con criterio que transmiten
              solidez y generan confianza. Soluciones ágiles, flexibles y a la medida de tu empresa.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
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
            <p className="mt-3 text-sm text-foreground/60">
              +15 años de trayectoria · Respuestas en menos de 24 hs
            </p>
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

      {/* SERVICIOS */}
      <section className="bg-[hsl(var(--surface-light))] text-[hsl(var(--surface-light-foreground))] py-14 md:py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              SOLUCIONES
            </span>
            <h2 className="mt-4 text-4xl lg:text-6xl font-semibold leading-tight">
              ¿Qué necesitás{" "}
              <span className="italic font-light text-primary">diseñar?</span>
            </h2>
            <p className="mt-6 text-lg opacity-75">
              Resolvemos tus necesidades para que cada pieza responda a los objetivos de tu marca.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicios.map(({ icon: Icon, titulo, desc, tags }) => (
              <div
                key={titulo}
                className="group flex flex-col h-full rounded-3xl bg-card text-card-foreground p-7 shadow-card hover:-translate-y-1 transition-all"
              >
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{titulo}</h3>
                <p className="mt-2 text-sm text-card-foreground/70 leading-relaxed">
                  {desc}
                </p>
                <div className="mt-auto pt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
              Algunos{" "}
              <span className="italic font-light text-primary">proyectos.</span>
            </h2>
            <p className="mt-6 text-foreground/70 text-lg">
              Una selección de trabajos reales pensados en quién y dónde va a verlos.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {proyectos.map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => abrirLightbox(i)}
                aria-label={`Ver galería de ${p.titulo}`}
                className={`group relative overflow-hidden rounded-2xl text-left aspect-[4/3] bg-gradient-to-br ${p.placeholderBg} focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
              >
                {p.galeria[0]?.src ? (
                  <img
                    src={p.galeria[0].src}
                    alt={p.galeria[0].alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-foreground/30 text-xs uppercase tracking-widest">
                      Imagen del proyecto
                    </span>
                  </div>
                )}

                {/* Hint de galería */}
                <div className="absolute top-4 right-4 rounded-full bg-black/40 backdrop-blur text-white px-3 py-1 text-[11px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver galería
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
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Galería de ${proyectos[lightbox.proyectoIndex].titulo}`}
          onClick={cerrarLightbox}
        >
          <button
            type="button"
            onClick={cerrarLightbox}
            aria-label="Cerrar galería"
            className="absolute top-5 right-5 z-10 rounded-full bg-white/10 text-white p-2 hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen principal */}
            <div className="relative flex-1 min-h-0 rounded-2xl overflow-hidden bg-foreground/10 flex items-center justify-center">
              {(() => {
                const img = proyectos[lightbox.proyectoIndex].galeria[lightbox.imagenIndex];
                return img.src ? (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="max-h-[70vh] w-auto max-w-full object-contain"
                  />
                ) : (

                  <div className={`h-full w-full ${img.bg} flex items-center justify-center`}>
                    <span className="text-foreground/30 text-xs uppercase tracking-widest">
                      {img.alt}
                    </span>
                  </div>
                );
              })()}

              {proyectos[lightbox.proyectoIndex].galeria.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={anteriorImagen}
                    aria-label="Imagen anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white p-2 hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={siguienteImagen}
                    aria-label="Imagen siguiente"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white p-2 hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>

            {/* Info + thumbnails */}
            <div className="mt-4 text-center text-white">
              <p className="text-[11px] uppercase tracking-widest text-primary/80">
                {proyectos[lightbox.proyectoIndex].categoria}
              </p>
              <h3 className="mt-1 text-xl font-semibold">
                {proyectos[lightbox.proyectoIndex].titulo}
              </h3>
              <p className="mt-1 text-sm text-white/70 max-w-2xl mx-auto">
                {proyectos[lightbox.proyectoIndex].descripcion}
              </p>

              {proyectos[lightbox.proyectoIndex].galeria.length > 1 && (
                <div className="mt-4 flex items-center justify-center gap-2">
                  {proyectos[lightbox.proyectoIndex].galeria.map((g, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setLightbox({ ...lightbox, imagenIndex: idx })}
                      aria-label={`Ver imagen ${idx + 1}`}
                      aria-current={idx === lightbox.imagenIndex ? "true" : undefined}
                      className={`h-2 rounded-full transition-all ${
                        idx === lightbox.imagenIndex ? "w-6 bg-primary" : "w-2 bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <section className="bg-background py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Porqué elegirnos
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1]">
              Diseño que piensa antes de{" "}
              <span className="italic font-light text-primary">diseñar</span>.
            </h2>
            <p className="mt-4 md:mt-5 text-lg md:text-xl lg:text-2xl leading-snug text-foreground/80 max-w-3xl">
              Entendemos rápido, pensamos en quién recibe cada pieza y nos aseguramos de que funcione donde va.{" "}
              <span className="italic font-light text-primary">
                Sin que tengas que explicarlo dos veces.
              </span>
            </p>
          </div>

          <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {razones.map((r) => (
              <div
                key={r.n}
                className="rounded-3xl bg-foreground/5 border border-foreground/10 p-6"
              >
                <span className="text-3xl md:text-4xl font-light text-primary/60">{r.n}</span>
                <h3 className="mt-3 text-lg md:text-xl font-semibold">{r.titulo}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* PRUEBA SOCIAL — slider de logos */}
      <section className="bg-[hsl(var(--surface-light))] text-[hsl(var(--surface-light-foreground))] py-14 md:py-24 lg:py-32">
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
        </div>

        <div className="mt-10">
          <LogoMarquee />
        </div>
      </section>

      {/* CTA / FORMULARIO */}
      <section id="hablemos" className="bg-gradient-hero text-foreground py-14 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

        <div className="container relative">
          {/* Encabezado */}
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Hablemos
            </span>
            <h2 className="mt-4 text-balance text-5xl lg:text-7xl font-semibold leading-[1.05]">
              <span className="italic font-light text-primary">Contanos tu proyecto.</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-lg text-foreground/70">
              Si tenés una necesidad de diseño escribimos y te armamos una propuesta a medida.
            </p>
          </div>

          {/* Formulario */}
          <div className="max-w-xl mx-auto">
            {enviado ? (
              <div className="relative rounded-[2rem] bg-primary/10 p-8 border border-primary/20 flex flex-col items-center text-center gap-4">
                <CheckCircle className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-semibold">¡Recibimos tu mensaje!</h3>
                <p className="text-foreground/70">Te respondemos en las próximas horas.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative rounded-[2rem] bg-foreground/5 p-8 shadow-soft border border-foreground/10"
              >
                <div className="space-y-5">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full rounded-xl bg-foreground/5 border border-foreground/20 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full rounded-xl bg-foreground/5 border border-foreground/20 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={4}
                      placeholder="Contanos sobre tu proyecto..."
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
                </div>
              </form>
            )}
          </div>

          {/* Barra de contacto tipo footer */}
          <div className="mt-16 pt-10 border-t border-foreground/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              {/* Email y WhatsApp */}
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="mailto:hola@happenmarketing.com"
                  className="flex items-center gap-3 group"
                >
                  <span className="h-10 w-10 rounded-full bg-foreground/10 flex items-center justify-center group-hover:bg-primary transition">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium group-hover:text-primary transition">
                    hola@happenmarketing.com
                  </span>
                </a>
                <a
                  href="https://wa.me/59897490180"
                  className="flex items-center gap-3 group"
                >
                  <span className="h-10 w-10 rounded-full bg-foreground/10 flex items-center justify-center group-hover:bg-primary transition">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75c.13.96.37 1.9.72 2.81a1 1 0 0 1-.23 1.05l-1.7 1.7a16 16 0 0 0 6.8 6.8l1.7-1.7a1 1 0 0 1 1.05-.23c.91.35 1.85.59 2.81.72a1 1 0 0 1 .76 1Z" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium group-hover:text-primary transition">
                    +59897490180
                  </span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-foreground/10 flex items-center justify-center">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">
                    Puntas de Santiago, 1694
                  </span>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/happen-marketing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="h-10 w-10 rounded-full border border-foreground/30 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/somoshappen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-10 w-10 rounded-full border border-foreground/30 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
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
