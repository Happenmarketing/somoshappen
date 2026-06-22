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
                  className="w-full rounded-xl bg-primary text-primary-=
};

export default Contact;
