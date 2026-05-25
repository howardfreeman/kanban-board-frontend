"use client";

import { useState, useEffect, useRef } from "react";
import { debounce } from "../lib/debounce";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
  });

  const lastWidth = useRef(windowSize.width);

  useEffect(() => {
    const handleResize = debounce(() => {
      const currentWidth = window.innerWidth;

      if (currentWidth !== lastWidth.current) {
        lastWidth.current = currentWidth;
        setWindowSize({
          width: currentWidth,
        });
      }
    });

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}
