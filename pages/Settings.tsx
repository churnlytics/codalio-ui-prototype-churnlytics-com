import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

import SettingsSubnavTabs from "../components/SettingsSubnavTabs";

import { Link } from "react-router-dom";

export default function Settings() {
    const items = [
      { title: "Team roles", status: "Needs review" },
      { title: "Workspace profile", status: "Configured" },
      { title: "Security baseline", status: "2 pending items" },
    ];
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
          <section className="space-y-4">
      <Card>
      <CardHeader><CardTitle>Settings Center</CardTitle></CardHeader>
      <CardContent className="space-y-4">
      <SettingsSubnavTabs />
      <p className="text-sm text-muted-foreground">Manage workspace users, account profile, and API security from dedicated settings modules.</p>
      <Button asChild>
      <Link to="/settings/user-management">Open User Management</Link>
      </Button>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
      <h2 className="text-lg font-semibold">Quick Configuration</h2>
      <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
      <Card key={item.title}>
      <CardHeader><CardTitle className="text-base">{item.title}</CardTitle></CardHeader>
      <CardContent className="space-y-3">
      <Badge variant="outline">{item.status}</Badge>
      <Button variant="ghost" size="sm">Review</Button>
      </CardContent>
      </Card>
      ))}
      </div>
      </section>
      </div>
    </div>
  );
}