import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Switch } from "../components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import SettingsSubnavTabs from "../components/SettingsSubnavTabs";

import { useState } from "react";

export default function SettingsApiKeys() {
    const [newKeyName, setNewKeyName] = useState("");
    const [keys, setKeys] = useState([
      { name: "server-prod", by: "Avery", lastUsed: "10m ago", scopes: "read:risk", status: "Active" },
      { name: "reporting-job", by: "Noah", lastUsed: "2d ago", scopes: "read:reports", status: "Active" },
    ]);
    const createKey = () => {
      if (!newKeyName.trim()) {
        return;
      }
      setKeys((prev) => [{ name: newKeyName.trim(), by: "Current User", lastUsed: "Never", scopes: "read:risk", status: "Active" }, ...prev]);
      setNewKeyName("");
    };
    const [endpoint, setEndpoint] = useState("https://api.churnlytics.com/webhooks/churn");
    const [secret, setSecret] = useState("whsec_8429A0F3E");
    const [validation, setValidation] = useState(true);
    const regen = () => {
      setSecret(`whsec_${Math.random().toString(36).slice(2, 10).toUpperCase()}`);
    };
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
          <section className="space-y-4">
      <SettingsSubnavTabs />
      <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
      <CardTitle>API Key Management</CardTitle>
      <div className="flex gap-2"><Input value={newKeyName} onChange={(event) => setNewKeyName(event.target.value)} placeholder="New key name" className="w-[180px]" /><Button size="sm" onClick={createKey}>Create Key</Button></div>
      </CardHeader>
      <CardContent className="overflow-x-auto">
      <Table>
      <TableHeader><TableRow><TableHead>Key Name</TableHead><TableHead>Created By</TableHead><TableHead>Last Used</TableHead><TableHead>Scopes</TableHead><TableHead>Status</TableHead><TableHead></TableHead></TableRow></TableHeader>
      <TableBody>
      {keys.map((key) => (
      <TableRow key={key.name}>
      <TableCell>{key.name}</TableCell><TableCell>{key.by}</TableCell><TableCell>{key.lastUsed}</TableCell><TableCell>{key.scopes}</TableCell><TableCell><Badge variant={key.status === "Active" ? "secondary" : "outline"}>{key.status}</Badge></TableCell>
      <TableCell><Button size="sm" variant="ghost">Rotate</Button></TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
      <Card>
      <CardHeader><CardTitle>Webhook Security</CardTitle></CardHeader>
      <CardContent className="space-y-3">
      <Input value={endpoint} onChange={(event) => setEndpoint(event.target.value)} placeholder="Webhook endpoint" />
      <Input value={secret} readOnly />
      <div className="flex items-center justify-between rounded-lg border border-border p-3">
      <p className="text-sm">Signature validation</p>
      <Switch checked={validation} onCheckedChange={setValidation} />
      </div>
      <div className="flex gap-2">
      <Button variant="outline" onClick={regen}>Regenerate Secret</Button>
      <Button>Save</Button>
      </div>
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}