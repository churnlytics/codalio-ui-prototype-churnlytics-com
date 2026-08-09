import { useState } from "react";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";

export default function ChurnOverview() {
  const [granularity, setGranularity] = useState("monthly");

  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
        <section className="grid grid-cols-1 gap-4 xl:grid-cols-[1.1fr_1.9fr]">
          <Card>
            <CardHeader><CardTitle>Core KPIs</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between"><span className="text-sm text-muted-foreground">Repeat Visit Rate</span><Badge>42.8%</Badge></div>
              <div className="flex items-center justify-between"><span className="text-sm text-muted-foreground">60+ Day Lapse Rate</span><Badge>18.3%</Badge></div>
              <div className="flex items-center justify-between"><span className="text-sm text-muted-foreground">Average Days Between Visits</span><Badge>34 days</Badge></div>
              <div className="flex items-center justify-between"><span className="text-sm text-muted-foreground">No-show Rate</span><Badge variant="secondary">12.7%</Badge></div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Retention Trend</CardTitle>
              <CardDescription>Switch granularity to understand short-term vs long-term churn movement.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs value={granularity} onValueChange={setGranularity}>
                <TabsList>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="rounded-lg border border-border bg-muted/40 p-4">
                <p className="text-sm text-muted-foreground">Lapse trajectory ({granularity})</p>
                <p className="mt-2 text-xl font-semibold text-foreground">
                  {granularity === "weekly" ? "19.4% → 18.7%" : granularity === "monthly" ? "20.8% → 18.3%" : "22.1% → 18.9%"}
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>Cohort Retention Table</CardTitle></CardHeader>
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow><TableHead>First-Visit Cohort</TableHead><TableHead>M1</TableHead><TableHead>M2</TableHead><TableHead>M3</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow><TableCell>Jan</TableCell><TableCell>76%</TableCell><TableCell>61%</TableCell><TableCell>54%</TableCell></TableRow>
                  <TableRow><TableCell>Feb</TableCell><TableCell>79%</TableCell><TableCell>64%</TableCell><TableCell>57%</TableCell></TableRow>
                  <TableRow><TableCell>Mar</TableCell><TableCell>74%</TableCell><TableCell>59%</TableCell><TableCell>51%</TableCell></TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Business Type Breakdown</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div><div className="mb-1 flex justify-between text-sm"><span>Pizza / Restaurant</span><span>16.1%</span></div><Progress value={61} /></div>
              <div><div className="mb-1 flex justify-between text-sm"><span>Dental Clinic</span><span>13.5%</span></div><Progress value={48} /></div>
              <div><div className="mb-1 flex justify-between text-sm"><span>Auto Repair</span><span>19.2%</span></div><Progress value={69} /></div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}