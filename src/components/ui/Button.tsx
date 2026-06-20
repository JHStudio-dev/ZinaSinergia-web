import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300 will-change-transform";

const variants = {
  primary:
    "bg-gold text-night hover:-translate-y-0.5 hover:bg-gold/90 hover:shadow-[0_16px_40px_-16px_rgba(191,157,87,0.55)]",
  secondary:
    "border border-ivory/25 text-ivory hover:-translate-y-0.5 hover:border-gold/70 hover:text-gold",
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
