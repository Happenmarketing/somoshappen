import HappenLogo from "./HappenLogo";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#que-hacemos", label: "Qué hacemos" },
  { href: "#por-que", label: "Porqué happen" },
  { href: "#como", label: "Cómo trabajamos" },
  { href: "#casos", label: "Casos" },
  { href: "#clientes", label: "Confían" },
  { href: "#contacto", label: "Contacto" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-10">
      <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <HappenLogo variant="light" />
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="container mt-8 pt-6 border-t border-foreground/10 text-xs text-secondary-foreground/60">
        © {new Date().getFullYear()} happen. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
