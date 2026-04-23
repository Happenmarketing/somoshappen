import HappenLogo from "./HappenLogo";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <HappenLogo />
        <p className="text-sm text-secondary-foreground/60">
          © {new Date().getFullYear()} Happen · Comunicación con sentido. Hecho en Montevideo.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#inicio" className="hover:text-primary">Inicio</a>
          <a href="#que-hacemos" className="hover:text-primary">Qué hacemos</a>
          <a href="#contacto" className="hover:text-primary">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
