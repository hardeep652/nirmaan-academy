"use client";

import Image from "next/image";

const LOGO_SRC =
  "https://res.cloudinary.com/dkzmths4e/image/upload/v1781945973/lsqjzszlc5gwtbg7z4qg.png";

type BrandLogoProps = {
  sizeClassName: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

export default function BrandLogo({
  sizeClassName,
  priority = false,
  className = "",
  imageClassName = "",
}: BrandLogoProps) {
  return (
    <div
      className={`flex items-center justify-center ${sizeClassName} ${className}`.trim()}
    >
      <Image
        src={LOGO_SRC}
        alt="Nirmaan Academy Logo"
        width={160}
        height={160}
        priority={priority}
        className={`object-contain ${imageClassName}`.trim()}
        style={{ width: "auto", height: "auto" }}
        unoptimized
      />
    </div>
  );
}
