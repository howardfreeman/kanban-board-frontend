"use client";

import { useIsMobile } from "../hooks/use-mobile";

export function MobileOnly({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const isMobile = useIsMobile();

  return isMobile ? children : <></>;
}
