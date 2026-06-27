"use client";

import React, { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type WarningType = "screenshot" | "recording" | "contextmenu" | null;

const SecurityEnforcer = () => {
  const [warning, setWarning] = useState<WarningType>(null);
  const [visible, setVisible] = useState(false);

  const showWarning = useCallback((type: WarningType) => {
    setWarning(type);
    setVisible(true);
    setTimeout(() => setVisible(false), 3500);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen") {
        showWarning("screenshot");
      }
      if (
        (e.ctrlKey && e.shiftKey && (e.key === "S" || e.key === "s")) ||
        (e.metaKey && e.shiftKey && (e.key === "S" || e.key === "s"))
      ) {
        showWarning("screenshot");
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      showWarning("contextmenu");
    };

    let visibilityTimer: ReturnType<typeof setTimeout> | null = null;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        visibilityTimer = setTimeout(() => {
          if (!document.hidden) {
            showWarning("recording");
          }
          visibilityTimer = null;
        }, 100);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // document.body.style.userSelect = "none";
    // document.body.style.webkitUserSelect = "none";

    const style = document.createElement("style");
    style.textContent = `
      img, video {
        pointer-events: none;
        -webkit-touch-callout: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (visibilityTimer) clearTimeout(visibilityTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.body.style.userSelect = "";
      document.body.style.webkitUserSelect = "";
      document.head.removeChild(style);
    };
  }, [showWarning]);

  const isBanned = warning === "screenshot" || warning === "recording";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-5 left-1/2 -translate-x-1/2 z-[99999] w-[90vw] max-w-md"
        >
          <div
            className={`relative overflow-hidden rounded-2xl border shadow-2xl ${
              isBanned
                ? "bg-red-950/95 border-red-500/50 backdrop-blur-xl"
                : "bg-gray-950/95 border-yellow-500/50 backdrop-blur-xl"
            }`}
          >
            <div
              className={`absolute inset-0 opacity-10 ${
                isBanned
                  ? "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-500 via-red-900/50 to-transparent"
                  : "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-500 via-yellow-900/50 to-transparent"
              }`}
            />
            <div className="relative p-4">
              <div className="flex items-start gap-3">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                    isBanned
                      ? "bg-red-500/20 text-red-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  <i className={`bi ${isBanned ? "bi-shield-exclamation" : "bi-shield"}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`font-semibold text-sm ${
                      isBanned ? "text-red-200" : "text-yellow-200"
                    }`}
                  >
                    Nirmaan Academy
                  </p>
                  <p
                    className={`text-xs mt-0.5 leading-relaxed ${
                      isBanned ? "text-red-300/80" : "text-yellow-300/80"
                    }`}
                  >
                    {warning === "screenshot" &&
                      "Screenshot and screen recording are not allowed on this website. All content is protected by Nirmaan Academy."}
                    {warning === "contextmenu" &&
                      "Right-click is disabled. Content is protected by Nirmaan Academy."}
                    {warning === "recording" &&
                      "Screen recording detected! This activity is strictly prohibited by Nirmaan Academy."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SecurityEnforcer;
