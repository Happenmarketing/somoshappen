interface Props {
  className?: string;
  variant?: "light" | "dark";
}

const HappenLogo = ({ className = "", variant = "light" }: Props) => {
  const color = variant === "light" ? "currentColor" : "currentColor";
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 32V12c0-1.1.9-2 2-2s2 .9 2 2v8c0-3.3 2.7-6 6-6s6 2.7 6 6v12"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M26 32V20c0-3.3 2.7-6 6-6"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-xl font-semibold tracking-tight">
        <span className="opacity-60">hn ·</span> happen
      </span>
    </div>
  );
};

export default HappenLogo;
