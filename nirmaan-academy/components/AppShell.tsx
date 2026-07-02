"use client";

import { LayoutGroup } from "framer-motion";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <LayoutGroup>
      {children}
    </LayoutGroup>
  );
}
