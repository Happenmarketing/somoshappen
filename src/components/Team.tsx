import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Soledad Cibils",
    role: "Diseño & Estrategia",
    photo: "/team/soledad.jpg",
    linkedin: "https://uy.linkedin.com/in/soledadcibils",
    bio: "Con más de 15 años diseñando para marcas como Bosch&Cia, Groupon y Punta del Este Operadora, Soledad se especializa en crear identidades visuales que cuentan historias y generan conexión. Su trabajo combina sensibilidad estética con pensamiento estratégico, logrando que cada pieza de comunicación sea memorable y alineada con los objetivos del negocio. Curiosa por naturaleza y detallista por convicción, está convencida de que el buen diseño no solo se ve: se siente y funciona.",
  },
  {
    name: "Patricia Apoj",
    role: "Estrategia & Comunicación",
    photo: "/team/patricia.jpg",
    linkedin: "https://www.linkedin.com/in/patriciaapoj/?skipRedirect=true",
    bio: "Licenciada en Marketing por la Universidad de la República y Máster en Innovación en Negocios por la Universitat de Barcelona, Patricia cuenta con una sólida trayectoria liderando áreas de marketing en Groupon, Life Cinemas y Montecable. Su trabajo se centra en descubrir oportunidades estratégicas y construir mensajes claros que conecten de verdad con las personas. Madre de dos, viajera curiosa y analista de contextos, aplica esa misma capacidad de observación para potenciar la identidad de cada marca y priorizar lo que realmente impulsa su crecimiento.",
  },
];

const Team = () => {
  return (
    <section id="quienes-somos" className="bg-[hsl(var(--surface-light))] text-[hsl(var(--surface-light-foreground))] py-14 md:py-24 lg:py-32">
      <div className="container">
        {/* Encabezado */}
        <div className="text-center mb-14">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Quiénes somos
          </span>
          <h2 className="mt-4 text-balance text-4xl lg:text-6xl font-semibold leading-[1.05] max-w-3xl mx-auto">
            Somos Pata y Sole, directoras de Happen.
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-lg text-[hsl(var(--surface-light-foreground))]/70 leading-relaxed">
            Lideramos cada proyecto de principio a fin, con un equipo profesional que hace que las cosas sucedan.
          </p>
        </div>

        {/* Grid de equipo */}
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {team.map((member) => (
            <article
              key={member.name}
              className="relative rounded-[2rem] bg-card text-card-foreground p-8 shadow-card"
            >
              <div className="flex flex-col items-center text-center">
                {/* Foto */}
                <div className="relative w-40 h-40 mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-primary" />
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 right-0 translate-x-1 translate-y-1 inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground shadow-md hover:scale-110 transition-transform"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Nombre y rol */}
                <h3 className="text-2xl font-semibold leading-tight">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary uppercase tracking-wide">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="mt-4 text-sm text-card-foreground/70 leading-relaxed text-pretty">
                  {member.bio}
                </p>

                {/* LinkedIn */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
