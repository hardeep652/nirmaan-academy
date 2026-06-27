"use client";

export default function SideBranding() {
  return (
    <>
      <div className="hidden xl:block fixed left-0 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none">
        <div className="flex items-center text-center opacity-10">
          <div
            className="font-sora font-extrabold text-2xl tracking-widest"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              letterSpacing: "0.45em",
            }}
          >
            <span className="text-[#0a4d9d]">NIRMAAN</span>{" "}
            <span className="text-[#ff7a00]">ACADEMY</span>
          </div>
        </div>
      </div>

      <div className="hidden xl:block fixed right-0 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none">
        <div className="flex items-center text-center opacity-10">
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
    </>
  );
}
