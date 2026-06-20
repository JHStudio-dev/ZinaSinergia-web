type SectionLabelProps = {
  index?: string;
  children: string;
  tone?: "onDark" | "onLight";
  className?: string;
};

export function SectionLabel({
  index,
  children,
  tone = "onDark",
  className = "",
}: SectionLabelProps) {
  const textColor = tone === "onLight" ? "text-carbon/60" : "text-ivory/65";

  return (
    <span
      className={`inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] ${textColor} ${className}`}
    >
      {index ? <span className="text-gold">{index}</span> : null}
      <span className="h-px w-8 bg-gold/50" aria-hidden="true" />
      {children}
    </span>
  );
}
