"use client";

import { useEffect } from "react";

export function ThemedIcon({
  Icon,
  ...props
}: { Icon: React.ComponentType<any> } & React.SVGProps<SVGSVGElement>) {
  let color = "currentColor";

  useEffect(() => {
    const colorScheme =
      document.documentElement.style.getPropertyValue("--color-scheme");

    if (colorScheme === "dark") {
      color = "#fff";
    } else {
      color = "#000";
    }
  }, []);

  return <Icon color={color} {...props} />;
}
