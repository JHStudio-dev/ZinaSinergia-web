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
  const labelColor = tone === "onLight" ? "text-carbon/55" : "text-ivory/55";

  return (
    <span
      className={`inline-flex items-baseline gap-2.5 text-[0.7rem] font-medium uppercase tracking-[0.32em] ${labelColor} ${className}`}
    >
      {index ? (
        <span className="font-display text-base italic normal-case tracking-normal text-gold">
          {index}
        </span>
      ) : null}
      {children}
    </span>
  );
}
