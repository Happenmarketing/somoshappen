import logo from "@/assets/happen-logo.png";

interface Props {
  className?: string;
}

const HappenLogo = ({ className = "" }: Props) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={logo} alt="Happen" className="h-8 w-auto object-contain" />
    </div>
  );
};

export default HappenLogo;
