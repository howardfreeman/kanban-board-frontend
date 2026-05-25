import { Container } from "@/shared/ui/container";
import { AvatarDropdown } from "./avatar-dropdown";
import { Logo } from "./logo";
import { ModeToggle } from "@/features/dark-mode";

export function Header() {
  return (
    <header className="flex items-center h-14 text-gray-800 border-b-2  dark:bg-gray-800 dark:text-gray-200">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-3">
            <ModeToggle />
            <AvatarDropdown />
          </div>
        </div>
      </Container>
    </header>
  );
}
