import LogoMarquee from "@/components/LogoMarquee";

const Clients = () => {
  return (
    <section
      id="clientes"
      className="bg-[hsl(var(--surface-light))] text-[hsl(var(--surface-light-foreground))] py-14 md:py-20"
    >
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            CONFÍAN EN NOSOTROS
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-semibold">
            Empresas que nos eligen.&nbsp;
          </h2>
        </div>
      </div>

      <div className="mt-10">
        <LogoMarquee />
      </div>
    </section>
  );
};

export default Clients;
