import { Container } from "@/shared/ui/container";
import { AvatarDropdown } from "./avatar-dropdown";
import { Logo } from "./logo";
import { ModeToggle } from "@/features/dark-mode";
import { MenuToggle } from "@/features/side-menu";
import { MobileOnly } from "@/shared/ui/mobile-only";
import { MobileHidden } from "@/shared/ui/mobile-hidden";

export function Header() {
  return (
    <header className="flex items-center h-14 text-gray-800 border-b-2  dark:bg-gray-800 dark:text-gray-200">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MobileOnly>
              <MenuToggle />
            </MobileOnly>
            <Logo />
          </div>
          <div className="flex items-center gap-3">
            <MobileHidden>
              <ModeToggle />
            </MobileHidden>
            {/* <MobileHiddenModeToggle /> */}
            <AvatarDropdown />
          </div>
        </div>
      </Container>
    </header>
  );
}
