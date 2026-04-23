import { useEffect, useState } from "react";
import HappenLogo from "./HappenLogo";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#que-hacemos", label: "Qué hacemos" },
  { href: "#como", label: "Cómo trabajamos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const servicesSection = document.getElementById("que-hacemos");
      if (!servicesSection) {
        setScrolled(window.scrollY > 30);
        return;
      }

      const triggerPoint = servicesSection.offsetTop - 96;
      setScrolled(window.scrollY >= triggerPoint);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-foreground/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <a href="#inicio" className="text-foreground">
          <HappenLogo variant={scrolled ? "dark" : "light"} />
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/80">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center rounded-full border border-foreground/30 px-5 py-2 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          Tomemos un café
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-foreground/10">
          <ul className="container py-4 flex flex-col gap-3 text-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full border border-foreground/30 px-5 py-2"
            >
              Tomemos un café
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
