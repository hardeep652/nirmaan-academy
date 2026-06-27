"use client";

interface SectionBadgeProps {
  text: string;
  variant?: "default" | "light";
  className?: string;
}

export default function SectionBadge({
  text,
  variant = "default",
  className = "",
}: SectionBadgeProps) {
  const baseStyles =
    "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider inline-block glass-effect";

  const variantStyles = {
    default: "text-orange-500 border border-white border-opacity-24",
    light: "text-white border border-white border-opacity-24",
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {text}
    </div>
  );
}
