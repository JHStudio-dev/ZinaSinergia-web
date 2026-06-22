type WordmarkProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function Wordmark({ tone = "light", className = "" }: WordmarkProps) {
  const baseColor = tone === "dark" ? "text-ivory" : "text-carbon";

  return (
    <span
      className={`font-display text-[1.4rem] font-medium leading-none tracking-tight ${baseColor} ${className}`}
    >
      Zina <span className="font-normal italic text-gold">Sinergia</span>
    </span>
  );
}
