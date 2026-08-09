import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { useState } from "react";

export default function ChurnAnalyticsChurnReasons() {
    const [windowValue, setWindowValue] = useState("90");
    const reasons = [
      { label: "Perceived low value", share: 32 },
      { label: "Missing integration", share: 24 },
      { label: "Pricing concern", share: 21 },
      { label: "Support experience", share: 13 },
    ];
    const segments = [
      { name: "SMB Monthly", driver: "Pricing concern", intensity: 79 },
      { name: "Mid-Market", driver: "Feature gaps", intensity: 64 },
      { name: "Enterprise", driver: "Support response", intensity: 48 },
    ];
    const rows = [
      { customer: "Bluepoint", reason: "Pricing", note: "Budget freeze for Q3", impact: "High", date: "2026-06-12" },
      { customer: "Pando Labs", reason: "Integration", note: "No ERP connector", impact: "Medium", date: "2026-06-10" },
      { customer: "Kappa Legal", reason: "Support", note: "Slow SLA response", impact: "Medium", date: "2026-06-06" },
    ];
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
          <section className="space-y-4">
      <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
      <CardTitle>Reason Breakdown</CardTitle>
      <Select value={windowValue} onValueChange={setWindowValue}>
      <SelectTrigger className="w-[180px]"><SelectValue /></SelectTrigger>
      <SelectContent className="bg-popover text-popover-foreground">
      <SelectItem value="30">Last 30 days</SelectItem>
      <SelectItem value="90">Last quarter</SelectItem>
      <SelectItem value="365">Last 12 months</SelectItem>
      </SelectContent>
      </Select>
      </CardHeader>
      <CardContent className="space-y-3">
      {reasons.map((reason) => (
      <div key={reason.label} className="flex items-center justify-between rounded-lg border border-border p-3">
      <p className="text-sm font-medium">{reason.label}</p>
      <Badge variant="secondary">{reason.share}%</Badge>
      </div>
      ))}
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
      <h2 className="text-lg font-semibold">Top Drivers by Segment</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {segments.map((segment) => (
      <Card key={segment.name}>
      <CardHeader><CardTitle className="text-base">{segment.name}</CardTitle></CardHeader>
      <CardContent className="space-y-2">
      <p className="text-sm text-muted-foreground">Top driver: {segment.driver}</p>
      <Progress value={segment.intensity} />
      <Badge variant="outline">Intensity {segment.intensity}%</Badge>
      </CardContent>
      </Card>
      ))}
      </div>
      </section>
  <section className="space-y-4">
      <Card>
      <CardHeader><CardTitle>Feedback Evidence</CardTitle></CardHeader>
      <CardContent className="overflow-x-auto">
      <Table>
      <TableHeader><TableRow><TableHead>Customer</TableHead><TableHead>Reason</TableHead><TableHead>Evidence</TableHead><TableHead>Impact</TableHead><TableHead>Date</TableHead><TableHead></TableHead></TableRow></TableHeader>
      <TableBody>
      {rows.map((row) => (
      <TableRow key={row.customer}>
      <TableCell>{row.customer}</TableCell><TableCell>{row.reason}</TableCell><TableCell>{row.note}</TableCell><TableCell>{row.impact}</TableCell><TableCell>{row.date}</TableCell>
      <TableCell><Button size="sm" variant="ghost">Open</Button></TableCell>
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