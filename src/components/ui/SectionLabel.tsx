type SectionLabelProps = {
  index?: string;
  children: string;
  className?: string;
};

export function SectionLabel({ index, children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-carbon/60 ${className}`}
    >
      {index ? <span className="text-gold">{index}</span> : null}
      <span className="h-px w-8 bg-gold/50" aria-hidden="true" />
      {children}
    </span>
  );
}
