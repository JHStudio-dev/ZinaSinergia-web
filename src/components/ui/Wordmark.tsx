type WordmarkProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function Wordmark({ tone = "light", className = "" }: WordmarkProps) {
  return (
    <span
      className={`font-display text-xl tracking-tight ${
        tone === "dark" ? "text-ivory" : "text-carbon"
      } ${className}`}
    >
      Zina <span className="text-gold">Sinergia</span>
    </span>
  );
}
