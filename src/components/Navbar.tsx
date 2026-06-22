import { useEffect, useState } from "react";
import HappenLogo from "./HappenLogo";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#que-hacemos", label: "Qué hacemos" },
  { href: "#por-que", label: "Porqué happen" },
  { href: "#como", label: "Cómo trabajamos" },
  { href: "#casos", label: "Casos" },
  { href: "#clientes", label: "Confían" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Sample the background color of whatever element is right below the navbar
      const probeY = 80;
      const el = document.elementFromPoint(window.innerWidth / 2, probeY);
      if (!el) {
        setScrolled(window.scrollY > 30);
        return;
      }

      // Walk up to find an element with a non-transparent background
      let node: Element | null = el;
      let bg = "";
      while (node && node !== document.body) {
        const c = getComputedStyle(node).backgroundColor;
        if (c && c !== "rgba(0, 0, 0, 0)" && c !== "transparent") {
          bg = c;
          break;
        }
        node = node.parentElement;
      }
      if (!bg) bg = getComputedStyle(document.body).backgroundColor;

      // Parse rgb/rgba and compute luminance
      const m = bg.match(/\d+(\.\d+)?/g);
      if (!m) {
        setScrolled(window.scrollY > 30);
        return;
      }
      const [r, g, b] = m.map(Number);
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

      // Light background -> use dark logo (scrolled=true)
      setScrolled(luminance > 0.6);
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
