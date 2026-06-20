type DecorativeFrameProps = {
  caption?: string;
  note?: string;
  eyebrow?: string;
  surface?: "champagne" | "ivory";
};

const surfaces = {
  champagne: "bg-champagne",
  ivory: "bg-ivory",
};

export function DecorativeFrame({
  caption,
  note,
  eyebrow,
  surface = "champagne",
}: DecorativeFrameProps) {
  return (
    <div className="relative">
      <span
        aria-hidden
        className="absolute -inset-3 rounded-[2.25rem] border border-gold/30"
      />
      <span
        aria-hidden
        className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-full border border-gold/25 sm:block"
      />

      <div
        className={`relative aspect-[4/5] overflow-hidden rounded-[1.85rem] border border-sand/70 ${surfaces[surface]}`}
      >
        {eyebrow ? (
          <span className="absolute left-6 top-6 text-[0.65rem] uppercase tracking-[0.24em] text-carbon/55">
            {eyebrow}
          </span>
        ) : null}

        <span
          aria-hidden
          className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 font-display text-[7rem] leading-none text-carbon/10"
        >
          ZS
        </span>

        <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
          <div>
            <p className="font-display text-xl text-carbon">{caption}</p>
            {note ? (
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.22em] text-carbon/55">
                {note}
              </p>
            ) : null}
          </div>
          <span className="h-px w-10 bg-gold/60" aria-hidden />
        </div>
      </div>
    </div>
  );
}
