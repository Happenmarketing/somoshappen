import HappenLogo from "./HappenLogo";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-10">
      <div className="container flex items-center justify-between">
        <HappenLogo variant="light" />
        <span className="text-xs text-secondary-foreground/60">
          © {new Date().getFullYear()} happen.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
