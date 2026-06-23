"use client";

import Image from "next/image";
import { useState } from "react";

type PortraitImageProps = {
  src: string;
  alt: string;
};

export function PortraitImage({ src, alt }: PortraitImageProps) {
  const [shown, setShown] = useState(false);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 24rem, 100vw"
      className={`object-cover transition-opacity duration-700 ${
        shown ? "opacity-100" : "opacity-0"
      }`}
      onLoad={() => setShown(true)}
      onError={() => setShown(false)}
    />
  );
}
