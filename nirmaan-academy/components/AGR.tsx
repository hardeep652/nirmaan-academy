"use client";

import { useState, useEffect, useRef } from "react";

export default function AGR({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  function handleClick() {
    setShow(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShow(false), 3000);
  }

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={handleClick}
        style={{ background: "none", border: "none", padding: 0, color: "inherit", font: "inherit" }}
        className="cursor-pointer hover:opacity-80"
      >
        {children}
      </button>
      {show && (
        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg shadow-lg whitespace-nowrap z-50 pointer-events-none">
          All Gujarat Rank
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900" />
        </span>
      )}
    </span>
  );
}
