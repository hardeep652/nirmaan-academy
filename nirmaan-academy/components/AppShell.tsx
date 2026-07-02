"use client";

import { useEffect } from "react";
import { LayoutGroup } from "framer-motion";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  useEffect(() => {
    document.body.style.overflow = "";
  }, []);

  return (
    <LayoutGroup>
      {children}
    </LayoutGroup>
  );
}
