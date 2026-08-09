import { Fragment, useMemo } from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarSeparator, SidebarTrigger } from "./ui/sidebar";
import { Bell, CircleHelp, FileBarChart, LayoutDashboard, LifeBuoy, Plug, SettingsIcon, TrendingDown } from "lucide-react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", route: "/", icon: LayoutDashboard },
    { label: "Churn Analytics", route: "/churn-analytics", icon: TrendingDown },
    { label: "Reports", route: "/reports", icon: FileBarChart },
    { label: "Integrations", route: "/integrations", icon: Plug },
    { label: "Settings", route: "/settings", icon: SettingsIcon },
    { label: "Help & Support", route: "/help-support", icon: LifeBuoy },
  ];

  const crumbs = useMemo(() => {
    const segments = location.pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      return [{ href: "/", label: "Dashboard" }];
    }

    return segments.map((segment, index) => ({
      href: `/${segments.slice(0, index + 1).join("/")}`,
      label: segment
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" "),
    }));
  }, [location.pathname]);

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" variant="sidebar" className="border-r border-sidebar-border">
        <SidebarHeader>
          <Link
            to="/"
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-sidebar-primary font-semibold text-sidebar-primary-foreground">
              C
            </div>
            <div className="flex min-w-0 flex-col group-data-[collapsible=icon]:hidden">
              <span className="truncate text-sm font-semibold">Churnlytics.com</span>
              <span className="truncate text-xs text-sidebar-foreground/70">Retention Intelligence</span>
            </div>
          </Link>
        </SidebarHeader>

        <SidebarSeparator />

        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.route}>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === item.route || (item.route !== "/" && location.pathname.startsWith(item.route))}
                  tooltip={item.label}
                >
                  <NavLink to={item.route}>
                    <item.icon />
                    <span>{item.label}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter>
          <Badge variant="secondary" className="justify-center group-data-[collapsible=icon]:hidden">
            Live model health: Stable
          </Badge>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/80 md:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-6" />

            <div className="hidden min-w-0 md:block">
              <Breadcrumb>
                <BreadcrumbList>
                  {crumbs.map((crumb, index) => (
                    <Fragment key={crumb.href}>
                      <BreadcrumbItem>
                        {index === crumbs.length - 1 ? (
                          <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                        ) : (
                          <Link to={crumb.href} className="text-muted-foreground hover:text-foreground">
                            {crumb.label}
                          </Link>
                        )}
                      </BreadcrumbItem>
                      {index < crumbs.length - 1 && <BreadcrumbSeparator />}
                    </Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="h-4 w-4" />
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <Link to="/help-support" aria-label="Help">
                <CircleHelp className="h-4 w-4" />
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-9 gap-2 px-2">
                  <Avatar className="h-7 w-7">
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <span className="hidden text-sm md:inline">Avery Lee</span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="bg-popover text-popover-foreground">
                <DropdownMenuItem asChild>
                  <Link to="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/help-support">Support</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="w-full min-w-0 p-4 md:p-6">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}