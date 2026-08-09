import { Link, useLocation } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export default function SettingsSubnavTabs() {
  const location = useLocation();
  const tabs = [
    { label: "User Management", route: "/settings/user-management" },
    { label: "Account Settings", route: "/settings/account-settings" },
    { label: "API Keys", route: "/settings/api-keys" },
  ];

  const activeTab = tabs.find((tab) => location.pathname.startsWith(tab.route))?.route ?? "/settings/user-management";

  return (
    <Tabs value={activeTab} className="w-full">
      <TabsList className="w-full justify-start">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.route} value={tab.route} asChild>
            <Link to={tab.route}>{tab.label}</Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}