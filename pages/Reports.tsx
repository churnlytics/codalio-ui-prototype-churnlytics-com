import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { useState } from "react";

export default function Reports() {
    const [type, setType] = useState("executive");
    const [lastRun, setLastRun] = useState("Today, 09:40");
    const reports = [
      { name: "Q2 Executive Churn", status: "Ready", updated: "2h ago" },
      { name: "Onboarding Cohort Decay", status: "Refreshing", updated: "30m ago" },
      { name: "SMB Retention Campaign", status: "Ready", updated: "Yesterday" },
    ];
    const rows = [
      { name: "Executive Summary", period: "Jun 2026", owner: "Avery Lee", created: "2026-06-30", status: "Ready" },
      { name: "CLTV vs Churn", period: "Q2 2026", owner: "Maya Chen", created: "2026-06-28", status: "Ready" },
      { name: "Cohort Decay", period: "May 2026", owner: "Noah Patel", created: "2026-06-24", status: "Archived" },
    ];
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
          <section className="space-y-4">
      <Card>
      <CardHeader><CardTitle>Actionable Reports</CardTitle></CardHeader>
      <CardContent className="flex flex-wrap items-center gap-3">
      <Select value={type} onValueChange={setType}>
      <SelectTrigger className="w-[260px]"><SelectValue /></SelectTrigger>
      <SelectContent className="bg-popover text-popover-foreground">
      <SelectItem value="executive">Executive Summary</SelectItem>
      <SelectItem value="campaign">Retention Campaign Effectiveness</SelectItem>
      <SelectItem value="cltv">CLTV vs Churn</SelectItem>
      <SelectItem value="cohort">Cohort Decay</SelectItem>
      </SelectContent>
      </Select>
      <Button onClick={() => setLastRun("Just now")}>Generate Report</Button>
      <p className="text-sm text-muted-foreground">Last generated: {lastRun}</p>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
      <h2 className="text-lg font-semibold">Saved Reports</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {reports.map((report) => (
      <Card key={report.name}>
      <CardHeader><CardTitle className="text-base">{report.name}</CardTitle></CardHeader>
      <CardContent className="space-y-3">
      <Badge variant="secondary">{report.status}</Badge>
      <p className="text-xs text-muted-foreground">Updated {report.updated}</p>
      <div className="flex gap-2">
      <Button size="sm" variant="outline">Open</Button>
      <Button size="sm" variant="ghost">Share</Button>
      </div>
      </CardContent>
      </Card>
      ))}
      </div>
      </section>
  <section className="space-y-4">
      <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
      <CardTitle>Report Data Table</CardTitle>
      <div className="flex gap-2">
      <Button size="sm" variant="outline">Export CSV</Button>
      <Button size="sm">Export PDF</Button>
      </div>
      </CardHeader>
      <CardContent className="overflow-x-auto">
      <Table>
      <TableHeader><TableRow><TableHead>Report</TableHead><TableHead>Period</TableHead><TableHead>Owner</TableHead><TableHead>Created</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
      <TableBody>
      {rows.map((row) => (
      <TableRow key={row.name}><TableCell>{row.name}</TableCell><TableCell>{row.period}</TableCell><TableCell>{row.owner}</TableCell><TableCell>{row.created}</TableCell><TableCell>{row.status}</TableCell></TableRow>
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