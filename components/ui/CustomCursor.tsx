"use client";

import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for clickable elements
      const isClickable = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsHovering(isClickable);

      // Check for input/text areas
      const isText = 
        target.tagName === "INPUT" || 
        target.tagName === "TEXTAREA" ||
        target.isContentEditable ||
        window.getComputedStyle(target).cursor === "text";
      
      setIsInput(isText);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        className={`fixed top-0 left-0 bg-orange-500 pointer-events-none z-[9999] transition-all duration-100 ease-out ${
          isInput ? "w-0.5 h-4 rounded-none" : "w-2 h-2 rounded-full"
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 border-2 border-blue-500/50 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isHovering ? "w-10 h-10 bg-blue-500/10 border-blue-500" : 
          isInput ? "w-4 h-6 border-blue-500/20" : "w-8 h-8"
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
