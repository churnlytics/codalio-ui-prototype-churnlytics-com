import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import MetricCard from "../components/MetricCard";

import { useState } from "react";

export default function ChurnAnalyticsPredictiveChurn() {
    const [view, setView] = useState("plan");
    const [threshold, setThreshold] = useState("70");
    const rows = [
      { customer: "Nordic Freight", risk: 91, confidence: 88, drivers: "Usage decline, ticket escalation" },
      { customer: "Pioneer Health", risk: 84, confidence: 81, drivers: "Seat contraction, renewal delay" },
      { customer: "Orbit Travel", risk: 67, confidence: 73, drivers: "Feature adoption drop" },
    ];
    const filtered = rows.filter((row) => row.risk >= Number(threshold));
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
          <section className="space-y-4">
  <h2 className="text-lg font-semibold text-foreground">Model Performance Snapshot</h2>
  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
  <MetricCard label="AUC" value="0.91" subtitle="Validation set" delta="+0.02" trend="up" />
  <MetricCard label="Precision" value="81%" subtitle="High-risk class" delta="+3%" trend="up" />
  <MetricCard label="Recall" value="76%" subtitle="High-risk class" delta="+1%" trend="up" />
  <MetricCard label="Model Refreshed" value="2h ago" subtitle="Automated pipeline" />
  </div>
  </section>
  <section className="space-y-4">
      <Card>
      <CardHeader><CardTitle>Risk Distribution</CardTitle></CardHeader>
      <CardContent>
      <Tabs value={view} onValueChange={setView}>
      <TabsList>
      <TabsTrigger value="plan">By Plan</TabsTrigger>
      <TabsTrigger value="tenure">By Tenure</TabsTrigger>
      <TabsTrigger value="region">By Region</TabsTrigger>
      </TabsList>
      <TabsContent value="plan" className="mt-4 text-sm text-muted-foreground">Monthly plans carry 2.3x higher high-risk density than annual plans.</TabsContent>
      <TabsContent value="tenure" className="mt-4 text-sm text-muted-foreground">Risk peaks between day 30 and day 75 for first-time subscribers.</TabsContent>
      <TabsContent value="region" className="mt-4 text-sm text-muted-foreground">APAC mid-market and LATAM startup cohorts contribute most rising risk.</TabsContent>
      </Tabs>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
      <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
      <CardTitle>High-Risk Customers</CardTitle>
      <Select value={threshold} onValueChange={setThreshold}>
      <SelectTrigger className="w-[140px]"><SelectValue /></SelectTrigger>
      <SelectContent className="bg-popover text-popover-foreground">
      <SelectItem value="60">Risk 60+</SelectItem>
      <SelectItem value="70">Risk 70+</SelectItem>
      <SelectItem value="80">Risk 80+</SelectItem>
      </SelectContent>
      </Select>
      </CardHeader>
      <CardContent className="space-y-3 overflow-x-auto">
      <Table>
      <TableHeader><TableRow><TableHead>Customer</TableHead><TableHead>Risk</TableHead><TableHead>Confidence</TableHead><TableHead>Top Drivers</TableHead><TableHead>Action</TableHead></TableRow></TableHeader>
      <TableBody>
      {filtered.map((row) => (
      <TableRow key={row.customer}>
      <TableCell>{row.customer}</TableCell>
      <TableCell><Badge variant="destructive">{row.risk}%</Badge></TableCell>
      <TableCell>{row.confidence}%</TableCell>
      <TableCell className="max-w-[220px] truncate">{row.drivers}</TableCell>
      <TableCell><Button size="sm">Create Play</Button></TableCell>
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