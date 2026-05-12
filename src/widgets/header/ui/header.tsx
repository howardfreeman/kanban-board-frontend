import { AvatarDropdown } from "./avatar-dropdown";
import { Logo } from "./logo";
import { ModeToggle } from "@/features/dark-mode";

export function Header() {
  return (
    <header className="flex items-center justify-between h-14 px-10 py-2 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <Logo />
      <div className="flex items-center gap-3">
        <ModeToggle />
        <AvatarDropdown />
      </div>
    </header>
  );
}
