const clients = [
  "Zurich", "Santander", "El País", "Plus Ultra", "Ricoh",
  "Grupo Unicomer", "Pronto!", "dLocal", "Benoit", "Denucio",
  "Payments Ed", "Buemes", "Uruguay 365", "Innotec", "Revista LATU",
  "Devoto", "GDU", "Punta Carretas", "COCEMI", "GAMA Italy",
];

const Clients = () => {
  return (
    <section id="clientes" className="bg-[hsl(var(--surface-light))] text-[hsl(var(--surface-light-foreground))] py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Confían en nosotros
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-semibold">
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-foreground/10 rounded-3xl overflow-hidden border border-foreground/10">
          {clients.map((c) => (
            <div
              key={c}
              className="bg-[hsl(var(--surface-light))] flex items-center justify-center py-10 px-4 text-center text-lg font-medium opacity-70 hover:opacity-100 hover:text-primary transition"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
