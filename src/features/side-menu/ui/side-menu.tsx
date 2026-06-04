"use client";

import Link from "next/link";
import { useSideMenu } from "../context";
import { useLockScroll } from "@/shared/hooks/use-lock-scroll";
import { useRef } from "react";

export function SideMenu({
  links,
  darkMode,
}: {
  links: Array<{ label: string; href: string }>;
  darkMode?: React.JSX.Element;
}) {
  const { isOpen, toggle } = useSideMenu();
  const menuRef = useRef<HTMLDivElement>(null);

  useLockScroll(isOpen);

  const handleClick = (e: React.MouseEvent) => {
    if (menuRef.current == e.target) {
      return;
    }

    toggle();
  };

  return isOpen ? (
    <div
      className="w-dvw h-dvh bg-black/50 absolute z-10"
      onClick={handleClick}
    >
      <div
        className="w-64 h-screen bg-gray-100 p-4 dark:bg-gray-900"
        ref={menuRef}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block py-2 px-4 rounded hover:bg-gray-200"
          >
            {link.label}
          </Link>
        ))}

        {darkMode ? (
          <div className="flex justify-center items-center mt-4">
            {darkMode}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
}
