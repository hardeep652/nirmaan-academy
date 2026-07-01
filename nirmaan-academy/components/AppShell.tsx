"use client";

import { LayoutGroup } from "framer-motion";
import Preloader from "@/components/Preloader";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <LayoutGroup>
      <Preloader />
      {children}
    </LayoutGroup>
  );
}
