import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import MetricCard from "../components/MetricCard";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
    const [activeTab, setActiveTab] = useState("trend");
    const [dateRange, setDateRange] = useState("90d");
    const dateRangeLabel = dateRange === "30d" ? "the last 30 days" : dateRange === "90d" ? "the last 90 days" : "the last 12 months";
    const [actions, setActions] = useState([
      { id: "a1", label: "Launch save-offer to high-risk annual users", priority: "High" },
      { id: "a2", label: "Review onboarding drop-off for first 14 days", priority: "Medium" },
      { id: "a3", label: "Trigger CS outreach for enterprise accounts", priority: "High" },
    ]);
    const applyAction = (id) => {
      setActions((prev) => prev.filter((action) => action.id !== id));
    };
    const dismissAction = (id) => {
      setActions((prev) => prev.filter((action) => action.id !== id));
    };
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
          <section className="w-full">
      <Card className="border-0 bg-gradient-dashboardHero text-primary-foreground shadow-md">
      <CardContent className="space-y-4 p-6 md:p-8">
      <Badge variant="secondary" className="bg-white/20 text-white">Live Churn Intelligence</Badge>
      <div className="space-y-2">
      <h1 className="text-3xl font-semibold md:text-4xl">Reduce churn with clear, actionable insight</h1>
      <p className="max-w-2xl text-base opacity-90 md:text-lg">Track risk signals, segment customer behavior, and launch retention actions from one workspace.</p>
      </div>
      <div className="flex flex-wrap gap-3">
      <Button asChild className="bg-white text-slate-900 hover:bg-white/90">
      <Link to="/churn-analytics/predictive-churn">View Predictive Churn</Link>
      </Button>
      <Button variant="outline" asChild className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
      <Link to="/reports">Open Reports</Link>
      </Button>
      </div>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
  <h2 className="text-lg font-semibold text-foreground">Key Churn KPIs</h2>
  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
  <MetricCard label="Overall Churn Rate" value="4.9%" subtitle="vs 5.5% last month" delta="-0.6%" trend="up" />
  <MetricCard label="At-Risk Customers" value="326" subtitle="Scored above 75 risk" delta="+22" trend="down" />
  <MetricCard label="Retention Win Rate" value="38%" subtitle="Completed save plays" delta="+5.2%" trend="up" />
  <MetricCard label="MRR at Risk" value="$184K" subtitle="Potential next-30-day exposure" delta="-8.1%" trend="up" />
  </div>
  </section>
  <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
      <h2 className="text-lg font-semibold text-foreground">Trend & Segment Snapshot</h2>
      <Select value={dateRange} onValueChange={setDateRange}>
      <SelectTrigger className="w-[180px]">
      <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-popover text-popover-foreground">
      <SelectItem value="30d">Last 30 days</SelectItem>
      <SelectItem value="90d">Last 90 days</SelectItem>
      <SelectItem value="12m">Last 12 months</SelectItem>
      </SelectContent>
      </Select>
      </div>
      <Card>
      <CardHeader>
      <CardTitle>Segment detail</CardTitle>
      </CardHeader>
      <CardContent>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
      <TabsTrigger value="trend">Churn Trend</TabsTrigger>
      <TabsTrigger value="plan">Plan Segment</TabsTrigger>
      <TabsTrigger value="region">Region Segment</TabsTrigger>
      </TabsList>
      <TabsContent value="trend" className="mt-4 text-sm text-muted-foreground">Churn trend is down 0.6 points in {dateRangeLabel} with strongest recovery in annual plans.</TabsContent>
      <TabsContent value="plan" className="mt-4 text-sm text-muted-foreground">Annual plan churn: 2.7%, Monthly plan churn: 7.8%. Expansion accounts show highest retention.</TabsContent>
      <TabsContent value="region" className="mt-4 text-sm text-muted-foreground">Top risk regions: LATAM and APAC mid-market. North America enterprise remains stable.</TabsContent>
      </Tabs>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
      <h2 className="text-lg font-semibold text-foreground">Recommended Actions</h2>
      <Card>
      <CardHeader>
      <CardTitle>Retention action queue</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
      {actions.map((action) => (
      <div key={action.id} className="flex flex-col gap-3 rounded-lg border border-border p-3 md:flex-row md:items-center md:justify-between">
      <div className="space-y-1">
      <p className="text-sm font-medium text-foreground">{action.label}</p>
      <Badge variant="outline">{action.priority} priority</Badge>
      </div>
      <div className="flex gap-2">
      <Button size="sm" onClick={() => applyAction(action.id)}>Apply</Button>
      <Button size="sm" variant="ghost" onClick={() => dismissAction(action.id)}>Dismiss</Button>
      </div>
      </div>
      ))}
      {actions.length === 0 && <p className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">All actions reviewed. Great work!</p>}
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}