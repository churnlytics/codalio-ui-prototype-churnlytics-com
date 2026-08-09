import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        <Link to="/" className="font-semibold text-foreground">
          Churnlytics.com
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/help-support">Support</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}