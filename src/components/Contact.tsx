import { useState, FormEvent } from "react";
import { Linkedin, Instagram, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      nombre: String(data.get("nombre") || ""),
      email: String(data.get("email") || ""),
      mensaje: String(data.get("mensaje") || ""),
    };

    setEnviando(true);
    try {
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-form-notification",
          idempotencyKey: `contact-${Date.now()}-${payload.email}`,
          templateData: payload,
        },
      });
      if (error) throw error;
      setEnviado(true);
      toast.success("¡Mensaje enviado! Te responderemos pronto.");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("No pudimos enviar el mensaje. Probá de nuevo o escribinos a hola@happenmarketing.com");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contacto" className="bg-background text-foreground py-24 lg:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />

      <div className="container relative">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Hablemos
          </span>
          <h2 className="mt-4 text-balance text-5xl lg:text-7xl font-semibold leading-[1.05]">
            <span className="italic font-light text-primary">Tomemos un café.</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-lg text-foreground/70">
            Si tenés un desafío de comunicación o diseño, aunque no sepas
            exactamente cuál es, es una buena razón para tomar un café.
          </p>
        </div>

        {/* Formulario */}
        <div className="max-w-xl mx-auto">
          {enviado ? (
            <div className="relative rounded-[2rem] bg-primary/10 p-8 border border-primary/20 flex flex-col items-center text-center gap-4">
              <CheckCircle className="h-12 w-12 text-primary" />
              <h3 className="text-2xl font-semibold">¡Gracias por escribirnos!</h3>
              <p className="text-foreground/70">Recibimos tu mensaje y te responderemos lo antes posible.</p>
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
                    className="w-full rounded-xl bg-foreground/5/5 border border-foreground/20 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
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
                    className="w-full rounded-xl bg-foreground/5 border border-foreground/20 px-4 py-3 text-foreground placeholder text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition resize-none"
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
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
