import { AvatarDropdown } from "./avatar-dropdown";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="flex items-center justify-between h-14 px-4 py-2 bg-gray-200 text-gray-800">
      <Logo />
      <AvatarDropdown />
    </header>
  );
}
