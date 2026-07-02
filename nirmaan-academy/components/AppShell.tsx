"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import Preloader from "./Preloader";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLoading]);

  return (
    <LayoutGroup>
      <AnimatePresence mode="wait">
        {isLoading ? <Preloader onComplete={() => setIsLoading(false)} /> : null}
      </AnimatePresence>
      {children}
    </LayoutGroup>
  );
}
