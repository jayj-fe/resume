"use client";

import { usePathname } from "next/navigation";

export function useIsCvPage() {
  const pathname = usePathname();

  if (!pathname) {
    return false;
  }

  return pathname === "/cv" || pathname.startsWith("/cv/");
}
