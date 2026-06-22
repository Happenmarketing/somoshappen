import { Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="bg-background text-foreground py-24 lg:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Hablemos
            </span>
            <h2 className="mt-4 text-balance text-5xl lg:text-7xl font-semibold leading-[1.05]">
              <span className="italic font-light text-primary">Tomemos un café.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg text-foreground/70">
              Si tenés un desafío de comunicación o diseño, aunque no sepas
              exactamente cuál es, es una buena razón para tomar un café.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:hola@happenmarketing.com"
                className="flex items-center gap-4 group"
              >
                <span className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center group-hover:bg-primary transition">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <span className="text-xl font-medium group-hover:text-primary transition">
                  hola@happenmarketing.com
                </span>
              </a>
              <a
                href="https://wa.me/59897490180"
                className="flex items-center gap-4 group"
              >
                <span className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center group-hover:bg-primary transition">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75c.13.96.37 1.9.72 2.81a1 1 0 0 1-.23 1.05l-1.7 1.7a16 16 0 0 0 6.8 6.8l1.7-1.7a1 1 0 0 1 1.05-.23c.91.35 1.85.59 2.81.72a1 1 0 0 1 .76 1Z" />
                  </svg>
                </span>
                <span className="text-xl font-medium group-hover:text-primary transition">
                  +59897490180
                </span>
              </a>
            </div>

            <div className="mt-10 flex gap-3">
              <a
                href="https://www.linkedin.com/company/happen-marketing/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-11 w-11 rounded-full border border-foreground/30 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/somoshappen/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-11 w-11 rounded-full border border-foreground/30 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <form
              action="https://formsubmit.co/hola@happenmarketing.com"
              method="POST"
              className="relative rounded-[2rem] bg-foreground/5 p-8 shadow-soft border border-foreground/10"
            >
              <input type="hidden" name="_subject" value="Nuevo mensaje desde Happen" />
              <input type="hidden" name="_next" value="https://www.somoshappen.com" />
              <input type="hidden" name="_captcha" value="false" />

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
                  className="w-full rounded-xl bg-primary text-primary-foreground font-semibold px-6 py-3.5 hover:bg-primary/90 transition shadow-soft"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
