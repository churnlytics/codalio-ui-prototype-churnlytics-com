import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

import PageHeaderBar from "../components/PageHeaderBar";

import { ArrowRight, BrainCircuit, LineChart, MessageSquareWarning, Users2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ChurnAnalytics() {
    const modules = [
      { title: "Overview", route: "/churn-analytics/overview", icon: LineChart },
      { title: "Segmentation", route: "/churn-analytics/segmentation", icon: Users2 },
      { title: "Predictive Churn", route: "/churn-analytics/predictive-churn", icon: BrainCircuit },
      { title: "Churn Reasons", route: "/churn-analytics/churn-reasons", icon: MessageSquareWarning },
    ];
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
          <section className="space-y-4">
      <PageHeaderBar title="Churn Analytics" description="Explore churn performance by overview, segmentation, predictive risk, and root-cause analysis." badge="Workspace" breadcrumbs={[{ label: "Dashboard", href: "/" }, { label: "Churn Analytics", href: "/churn-analytics" }]} />
      <Card>
      <CardHeader>
      <CardTitle>Coverage snapshot</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
      <Badge variant="secondary">Overview KPIs</Badge>
      <Badge variant="secondary">Segmentation</Badge>
      <Badge variant="secondary">Predictive scoring</Badge>
      <Badge variant="secondary">Churn reason analysis</Badge>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
      <h2 className="text-lg font-semibold text-foreground">Analysis Modules</h2>
      <div className="grid gap-4 md:grid-cols-2">
      {modules.map((module) => (
      <Card key={module.route} className="transition-colors hover:border-primary/40">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
      <CardTitle className="text-base">{module.title}</CardTitle>
      <module.icon className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
      <Button asChild variant="outline" className="w-full justify-between">
      <Link to={module.route}>
      Open module
      <ArrowRight className="h-4 w-4" />
      </Link>
      </Button>
      </CardContent>
      </Card>
      ))}
      </div>
      </section>
      </div>
    </div>
  );
}