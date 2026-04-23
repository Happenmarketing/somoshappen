import logoDark from "@/assets/happen-logo-dark.png";
import logoLight from "@/assets/happen-logo.png";

interface Props {
  className?: string;
  variant?: "light" | "dark";
}

const HappenLogo = ({ className = "", variant = "dark" }: Props) => {
  const src = variant === "light" ? logoLight : logoDark;
  return (
    <div className={`flex items-center ${className}`}>
      <img src={src} alt="Happen" className="h-20 md:h-24 w-auto object-contain" />
    </div>
  );
};

export default HappenLogo;
