"use client";

import { useEffect } from "react";
import { LayoutGroup } from "framer-motion";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrollToTop";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  useEffect(() => {
    document.body.style.overflow = "";
    document.body.dataset.preloader = "done";
  }, []);

  return (
    <LayoutGroup>
      <ScrollToTop />
      <Preloader />
      {children}
    </LayoutGroup>
  );
}
