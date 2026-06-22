import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 text-sm font-medium tracking-wide transition-all duration-300 will-change-transform";

const variants = {
  primary:
    "rounded-full bg-gold px-7 py-3 text-night hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--color-gold)_90%,white)] hover:shadow-[0_12px_30px_-20px_rgba(194,161,92,0.7)]",
  secondary:
    "rounded-full border border-ivory/20 px-7 py-3 text-ivory hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold",
  ghost:
    "border-b border-gold/30 pb-1 text-ivory hover:border-gold hover:text-gold",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...externalProps}
    >
      {children}
    </a>
  );
}
