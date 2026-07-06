import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const services = [
  {
    title: "Comunicación interna",
    desc: "Diagnosticamos cómo te estás comunicando en la interna y definimos una estrategia y plan de acción. Nos ocupamos desde la planificación estratégica hasta la ejecución de cada campaña.",
  },
  {
    title: "Diseño gráfico",
    desc: "Somos el diseñador de tu empresa. Desde una identidad hasta un mailing, cubrimos cualquier necesidad de diseño.",
  },
  {
    title: "Comunicación digital",
    desc: "Comunicamos tu marca de forma coherente en todos los puntos de contacto: contenido para redes, influencers, pauta digital.",
  },
];

export default defineTool({
  name: "list_services",
  title: "List services",
  description: "List the communication and design services offered by Happen.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
