import React from "react";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import MetricCard from "../components/MetricCard";

import { useState } from "react";

export default function ChurnAnalyticsOverview() {
    const [period, setPeriod] = useState("90d");
    const [metric, setMetric] = useState("churn");
    const periodLabel = period === "30d" ? "30 days" : period === "90d" ? "90 days" : "12 months";
    const rows = [
      { cohort: "2026-01", size: 524, m1: 88, m3: 71, risk: "Medium" },
      { cohort: "2026-02", size: 491, m1: 84, m3: 66, risk: "High" },
      { cohort: "2026-03", size: 558, m1: 90, m3: 75, risk: "Low" },
    ];
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
          <section className="space-y-4">
  <h2 className="text-lg font-semibold text-foreground">Overview KPIs</h2>
  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
  <MetricCard label="Churn Rate" value="4.9%" subtitle="Rolling 30-day" delta="-0.6%" trend="up" />
  <MetricCard label="New Churned Customers" value="142" subtitle="This month" delta="-11" trend="up" />
  <MetricCard label="Net Revenue Retention" value="104.2%" subtitle="Expansion included" delta="+1.8%" trend="up" />
  <MetricCard label="Avg Time to Churn" value="132 days" subtitle="From activation" delta="+9 days" trend="up" />
  </div>
  </section>
  <section className="space-y-4">
      <div className="flex flex-wrap gap-3">
      <Select value={period} onValueChange={setPeriod}>
      <SelectTrigger className="w-[160px]"><SelectValue /></SelectTrigger>
      <SelectContent className="bg-popover text-popover-foreground">
      <SelectItem value="30d">30 days</SelectItem>
      <SelectItem value="90d">90 days</SelectItem>
      <SelectItem value="12m">12 months</SelectItem>
      </SelectContent>
      </Select>
      </div>
      <Card>
      <CardHeader><CardTitle>Churn Trend Analysis</CardTitle></CardHeader>
      <CardContent>
      <Tabs value={metric} onValueChange={setMetric}>
      <TabsList>
      <TabsTrigger value="churn">Churn Rate</TabsTrigger>
      <TabsTrigger value="cltv">CLTV</TabsTrigger>
      <TabsTrigger value="retention">Retention</TabsTrigger>
      </TabsList>
      <TabsContent value="churn" className="mt-4 text-sm text-muted-foreground">Churn declines steadily over {periodLabel}; annual contracts lead improvement.</TabsContent>
      <TabsContent value="cltv" className="mt-4 text-sm text-muted-foreground">CLTV rises as high-risk interventions reduce early cancellation.</TabsContent>
      <TabsContent value="retention" className="mt-4 text-sm text-muted-foreground">Retention is strongest in enterprise and onboarding-complete cohorts.</TabsContent>
      </Tabs>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
      <Card>
      <CardHeader>
      <CardTitle>Cohort Retention Health</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
      <Table>
      <TableHeader>
      <TableRow>
      <TableHead>Cohort</TableHead>
      <TableHead>Size</TableHead>
      <TableHead>Month 1</TableHead>
      <TableHead>Month 3</TableHead>
      <TableHead>Risk</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {rows.map((row) => (
      <TableRow key={row.cohort}>
      <TableCell>{row.cohort}</TableCell>
      <TableCell>{row.size}</TableCell>
      <TableCell>
      <div className="space-y-1">
      <Progress value={row.m1} />
      <span className="text-xs text-muted-foreground">{row.m1}%</span>
      </div>
      </TableCell>
      <TableCell>
      <div className="space-y-1">
      <Progress value={row.m3} />
      <span className="text-xs text-muted-foreground">{row.m3}%</span>
      </div>
      </TableCell>
      <TableCell><Badge variant={row.risk === "High" ? "destructive" : "secondary"}>{row.risk}</Badge></TableCell>
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