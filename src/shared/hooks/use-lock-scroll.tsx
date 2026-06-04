"use client";

import { useEffect } from "react";

export function useLockScroll(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) {
      return;
    }

    const originalStyle = document.body.style.overflowY;

    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = originalStyle;
    };
  }, [isLocked]);
}
