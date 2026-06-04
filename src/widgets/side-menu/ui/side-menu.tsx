import { ModeToggle } from "@/features/dark-mode";
import { SideMenu as SideMenuLayout } from "@/features/side-menu";

export function SideMenu() {
  return <SideMenuLayout links={[]} darkMode={<ModeToggle />} />;
}
