"use client";

export default function SideBranding() {
  return (
    <div className="hidden xl:block fixed left-0 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none">
      <div className="flex items-center gap-8 text-center opacity-10">
        {/* Left side - NIRMAAN / ACADEMY */}
        <div
          className="font-sora font-extrabold text-2xl tracking-widest text-blue-900"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            letterSpacing: "0.45em",
          }}
        >
          NIRMAAN ACADEMY
        </div>

        {/* Right side - DDCET / ENGINEERING / SUCCESS */}
        <div
          className="font-sora font-extrabold text-2xl tracking-widest text-blue-900"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            letterSpacing: "0.45em",
          }}
        >
          DDCET ENGINEERING SUCCESS
        </div>
      </div>
    </div>
  );
}
