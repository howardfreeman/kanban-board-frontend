"use client";

import { useIsMobile } from "../hooks/use-mobile";

export function MobileHidden({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const isMobile = useIsMobile();

  return !isMobile ? children : <></>;
}
