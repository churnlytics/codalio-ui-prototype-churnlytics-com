import { useState } from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { Bell, CircleHelp, LogOut, Settings, User } from "lucide-react";

export default function AppHeaderBar({ projectName = "Churnlytics.com" }: { projectName?: string }) {
  const [notificationCount, setNotificationCount] = useState(3);

  const handleNotificationClick = () => {
    setNotificationCount((current) => (current > 0 ? current - 1 : 0));
  };

  return (
    <header className="h-16 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/75 lg:px-6">
      <div className="flex h-full items-center gap-3">
        <div className="hidden min-w-0 flex-col md:flex">
          <p className="text-sm text-muted-foreground">Workspace</p>
          <p className="truncate text-sm font-medium text-foreground">{projectName}</p>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative" onClick={handleNotificationClick}>
            <Bell className="h-4 w-4 text-foreground" />
            {notificationCount > 0 ? (
              <Badge className="absolute -right-1 -top-1 h-5 min-w-5 px-1 text-[10px]">{notificationCount}</Badge>
            ) : null}
          </Button>

          <Button asChild variant="ghost" size="icon">
            <Link to="/help-support" aria-label="Help and support">
              <CircleHelp className="h-4 w-4 text-foreground" />
            </Link>
          </Button>

          <Separator orientation="vertical" className="h-6" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2 px-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>CL</AvatarFallback>
                </Avatar>
                <span className="hidden text-sm text-foreground sm:inline">Customer Lead</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Preferences
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}