import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Switch } from "../components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import SettingsSubnavTabs from "../components/SettingsSubnavTabs";

import { useState } from "react";

export default function SettingsUserManagement() {
    const [query, setQuery] = useState("");
    const users = [
      { name: "Avery Lee", email: "avery@churnlytics.com", role: "Admin", status: "Active", lastLogin: "2h ago" },
      { name: "Noah Patel", email: "noah@churnlytics.com", role: "Analyst", status: "Active", lastLogin: "1d ago" },
      { name: "Maya Chen", email: "maya@churnlytics.com", role: "Manager", status: "Invited", lastLogin: "Never" },
    ];
    const filtered = users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()) || user.email.toLowerCase().includes(query.toLowerCase()));
    const [permissions, setPermissions] = useState([
      { key: "view_dashboard", label: "View Dashboard", admin: true, manager: true, analyst: true },
      { key: "manage_segments", label: "Manage Segments", admin: true, manager: true, analyst: false },
      { key: "run_reports", label: "Run Reports", admin: true, manager: true, analyst: true },
      { key: "manage_integrations", label: "Manage Integrations", admin: true, manager: false, analyst: false },
    ]);
    const toggle = (key, role) => {
      setPermissions((prev) => prev.map((item) => item.key === key ? { ...item, [role]: !item[role] } : item));
    };
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
          <section className="space-y-4">
      <SettingsSubnavTabs />
      <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
      <CardTitle>Team Members & Roles</CardTitle>
      <Button size="sm">Invite User</Button>
      </CardHeader>
      <CardContent className="space-y-3 overflow-x-auto">
      <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search user" className="max-w-sm" />
      <Table>
      <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Email</TableHead><TableHead>Role</TableHead><TableHead>Status</TableHead><TableHead>Last Login</TableHead></TableRow></TableHeader>
      <TableBody>
      {filtered.map((user) => (
      <TableRow key={user.email}><TableCell>{user.name}</TableCell><TableCell>{user.email}</TableCell><TableCell>{user.role}</TableCell><TableCell><Badge variant="secondary">{user.status}</Badge></TableCell><TableCell>{user.lastLogin}</TableCell></TableRow>
      ))}
      </TableBody>
      </Table>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
      <Card>
      <CardHeader><CardTitle>Role Permissions</CardTitle></CardHeader>
      <CardContent className="overflow-x-auto">
      <Table>
      <TableHeader><TableRow><TableHead>Permission</TableHead><TableHead>Admin</TableHead><TableHead>Manager</TableHead><TableHead>Analyst</TableHead></TableRow></TableHeader>
      <TableBody>
      {permissions.map((permission) => (
      <TableRow key={permission.key}>
      <TableCell>{permission.label}</TableCell>
      <TableCell><Switch checked={permission.admin} onCheckedChange={() => toggle(permission.key, "admin")} /></TableCell>
      <TableCell><Switch checked={permission.manager} onCheckedChange={() => toggle(permission.key, "manager")} /></TableCell>
      <TableCell><Switch checked={permission.analyst} onCheckedChange={() => toggle(permission.key, "analyst")} /></TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}