"use client";

import { createContext, useContext, useState } from "react";

const sideMenuContextValue = {
  isOpen: false,
  toggle: () => {},
};

const SideMenuContext = createContext(sideMenuContextValue);

export function SideMenuProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(sideMenuContextValue.isOpen);

  return (
    <SideMenuContext.Provider
      value={{ isOpen, toggle: () => setIsOpen(!isOpen) }}
    >
      {children}
    </SideMenuContext.Provider>
  );
}

export function useSideMenu() {
  const context = useContext(SideMenuContext);
  if (!context) {
    throw new Error("useSideMenu must be used within a SideMenuProvider");
  }
  return context;
}
