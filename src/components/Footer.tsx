import HappenLogo from "./HappenLogo";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-6">
      <div className="container flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <HappenLogo variant="light" />
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
