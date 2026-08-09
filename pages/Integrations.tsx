import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Switch } from "../components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { useState } from "react";

export default function Integrations() {
    const [connectors, setConnectors] = useState([
      { name: "Salesforce", enabled: true },
      { name: "Stripe", enabled: true },
      { name: "Segment", enabled: false },
      { name: "HubSpot", enabled: true },
    ]);
    const toggle = (name) => {
      setConnectors((prev) => prev.map((connector) => connector.name === name ? { ...connector, enabled: !connector.enabled } : connector));
    };
    const rows = [
      { source: "Salesforce", lastSync: "5 min ago", status: "Healthy", records: "12,443", errorRate: "0.2%" },
      { source: "Stripe", lastSync: "8 min ago", status: "Healthy", records: "4,902", errorRate: "0.1%" },
      { source: "Segment", lastSync: "1 hr ago", status: "Warning", records: "18,219", errorRate: "2.8%" },
    ];
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
          <section className="space-y-4">
      <Card>
      <CardHeader><CardTitle>Data Integrations</CardTitle></CardHeader>
      <CardContent className="space-y-3">
      <p className="text-sm text-muted-foreground">Connect CRM, billing, and product analytics sources for unified churn analysis.</p>
      <div className="flex items-center gap-3">
      <Badge variant="secondary">8 active connectors</Badge>
      <Button size="sm">Add Integration</Button>
      </div>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
      <h2 className="text-lg font-semibold">Connected Sources</h2>
      <div className="grid gap-4 md:grid-cols-2">
      {connectors.map((connector) => (
      <Card key={connector.name}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
      <CardTitle className="text-base">{connector.name}</CardTitle>
      <Switch checked={connector.enabled} onCheckedChange={() => toggle(connector.name)} />
      </CardHeader>
      <CardContent className="space-y-3">
      <Badge variant={connector.enabled ? "secondary" : "outline"}>{connector.enabled ? "Sync enabled" : "Paused"}</Badge>
      <div className="flex gap-2">
      <Button size="sm" variant="outline">Run Sync</Button>
      <Button size="sm" variant="ghost">Configure</Button>
      </div>
      </CardContent>
      </Card>
      ))}
      </div>
      </section>
  <section className="space-y-4">
      <Card>
      <CardHeader><CardTitle>Webhook & API Logs</CardTitle></CardHeader>
      <CardContent className="overflow-x-auto">
      <Table>
      <TableHeader><TableRow><TableHead>Source</TableHead><TableHead>Last Sync</TableHead><TableHead>Status</TableHead><TableHead>Records</TableHead><TableHead>Error Rate</TableHead><TableHead></TableHead></TableRow></TableHeader>
      <TableBody>
      {rows.map((row) => (
      <TableRow key={row.source}>
      <TableCell>{row.source}</TableCell><TableCell>{row.lastSync}</TableCell><TableCell><Badge variant={row.status === "Healthy" ? "secondary" : "destructive"}>{row.status}</Badge></TableCell><TableCell>{row.records}</TableCell><TableCell>{row.errorRate}</TableCell>
      <TableCell><Button size="sm" variant="ghost">Retry</Button></TableCell>
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