"use client";

import { LayoutGroup } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <LayoutGroup>
      <ScrollToTop />
      {children}
    </LayoutGroup>
  );
}
