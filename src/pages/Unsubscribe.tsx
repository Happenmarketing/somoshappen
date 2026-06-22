import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Status = "loading" | "ready" | "already" | "invalid" | "success" | "error" | "submitting";

const FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe`;
const ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    fetch(`${FUNCTION_URL}?token=${encodeURIComponent(token)}`, {
      headers: { apikey: ANON_KEY },
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok) return setStatus("invalid");
        if (data.valid === false && data.reason === "already_unsubscribed") {
          setStatus("already");
        } else if (data.valid) {
          setStatus("ready");
        } else {
          setStatus("invalid");
        }
      })
      .catch(() => setStatus("error"));
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setStatus("submitting");
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) return setStatus("error");
      if (data?.success) setStatus("success");
      else if (data?.reason === "already_unsubscribed") setStatus("already");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-[2rem] bg-foreground/5 border border-foreground/10 p-10 text-center shadow-soft">
        {status === "loading" && (
          <>
            <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto" />
            <h1 className="mt-6 text-2xl font-semibold">Verificando...</h1>
          </>
        )}

        {status === "ready" && (
          <>
            <h1 className="text-3xl font-semibold">Cancelar suscripción</h1>
            <p className="mt-4 text-foreground/70">
              ¿Querés dejar de recibir emails de Happen? Confirmá abajo.
            </p>
            <button
              onClick={confirm}
              className="mt-8 w-full rounded-xl bg-primary text-primary-foreground font-semibold px-6 py-3.5 hover:bg-primary/90 transition"
            >
              Confirmar cancelación
            </button>
          </>
        )}

        {status === "submitting" && (
          <>
            <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto" />
            <h1 className="mt-6 text-2xl font-semibold">Procesando...</h1>
          </>
        )}

        {status === "success" && (
          <>
            <CheckCircle className="h-12 w-12 text-primary mx-auto" />
            <h1 className="mt-6 text-2xl font-semibold">Listo</h1>
            <p className="mt-3 text-foreground/70">
              Cancelaste tu suscripción. No vas a recibir más emails nuestros.
            </p>
            <Link to="/" className="inline-block mt-8 text-primary hover:underline">
              Volver al inicio
            </Link>
          </>
        )}

        {status === "already" && (
          <>
            <CheckCircle className="h-12 w-12 text-primary mx-auto" />
            <h1 className="mt-6 text-2xl font-semibold">Ya estás dado de baja</h1>
            <p className="mt-3 text-foreground/70">Este email ya no recibe mensajes nuestros.</p>
            <Link to="/" className="inline-block mt-8 text-primary hover:underline">
              Volver al inicio
            </Link>
          </>
        )}

        {(status === "invalid" || status === "error") && (
          <>
            <AlertCircle className="h-12 w-12 text-destructive mx-auto" />
            <h1 className="mt-6 text-2xl font-semibold">
              {status === "invalid" ? "Enlace inválido" : "Algo salió mal"}
            </h1>
            <p className="mt-3 text-foreground/70">
              {status === "invalid"
                ? "Este enlace de cancelación no es válido o ya expiró."
                : "No pudimos procesar tu pedido. Intentá de nuevo más tarde."}
            </p>
            <Link to="/" className="inline-block mt-8 text-primary hover:underline">
              Volver al inicio
            </Link>
          </>
        )}
      </div>
    </main>
  );
};

export default Unsubscribe;
