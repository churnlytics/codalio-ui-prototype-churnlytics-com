import { useState } from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { Bell, CircleHelp, Search } from "lucide-react";

export default function GlobalHeader() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur">
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <Badge variant="secondary" className="hidden sm:inline-flex">
            Churn Intelligence
          </Badge>
          <p className="truncate text-sm font-medium text-foreground">Churnlytics.com</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative hidden md:block">
            <Search className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Search churn insights"
              className="w-64 pl-8"
            />
          </div>

          <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-destructive" />
          </Button>

          <Button variant="ghost" size="icon" aria-label="Help">
            <CircleHelp className="h-4 w-4" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-9 rounded-full px-1">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44 bg-popover text-popover-foreground">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Workspace</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}