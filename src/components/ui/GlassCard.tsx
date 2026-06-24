"use client";

import { useRef, type ReactNode } from "react";

type GlassCardProps = {
  className?: string;
  children: ReactNode;
};

export function GlassCard({ className = "", children }: GlassCardProps) {
  const ref = useRef<HTMLElement>(null);

  return (
    <article
      ref={ref}
      onMouseMove={(event) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--zs-x", `${event.clientX - rect.left}px`);
        el.style.setProperty("--zs-y", `${event.clientY - rect.top}px`);
      }}
      className={`zs-glass ${className}`}
    >
      <span className="zs-glass__spot" aria-hidden="true" />
      <div className="zs-glass__content">{children}</div>
    </article>
  );
}
