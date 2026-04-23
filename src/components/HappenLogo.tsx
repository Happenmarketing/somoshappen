import logoDark from "@/assets/happen-logo-dark.png";
import logoLight from "@/assets/happen-logo.png";

interface Props {
  className?: string;
  variant?: "light" | "dark";
}

const HappenLogo = ({ className = "", variant = "dark" }: Props) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoDark}
        alt="Happen"
        className={`h-8 md:h-10 w-auto object-contain ${
          variant === "light" ? "brightness-0 invert" : ""
        }`}
      />
    </div>
  );
};

export default HappenLogo;
