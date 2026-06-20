import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  tone?: "light" | "dark";
  external?: boolean;
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300 will-change-transform";

const styles = {
  light: {
    primary:
      "bg-carbon text-ivory hover:-translate-y-0.5 hover:bg-carbon/90 hover:shadow-[0_12px_30px_-12px_rgba(28,26,22,0.45)]",
    secondary:
      "border border-carbon/15 text-carbon hover:-translate-y-0.5 hover:border-gold/60",
  },
  dark: {
    primary:
      "bg-ivory text-carbon hover:-translate-y-0.5 hover:bg-ivory/90 hover:shadow-[0_14px_34px_-14px_rgba(0,0,0,0.6)]",
    secondary:
      "border border-ivory/25 text-ivory hover:-translate-y-0.5 hover:border-gold/70",
  },
};

export function Button({
  href,
  children,
  variant = "primary",
  tone = "light",
  external = false,
  className = "",
}: ButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      className={`${base} ${styles[tone][variant]} ${className}`}
      {...externalProps}
    >
      {children}
    </a>
  );
}
