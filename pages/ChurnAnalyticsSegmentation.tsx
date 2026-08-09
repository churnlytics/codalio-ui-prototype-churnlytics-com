import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { ArrowUpDown } from "lucide-react";
import { useState } from "react";

export default function ChurnAnalyticsSegmentation() {
    const [field, setField] = useState("plan");
    const [value, setValue] = useState("");
    const [filters, setFilters] = useState(["Plan = Pro", "Region = North America"]);
    const addFilter = () => {
      if (!value.trim()) {
        return;
      }
      setFilters((prev) => [...prev, `${field} = ${value.trim()}`]);
      setValue("");
    };
    const segments = [
      { name: "Monthly SMB", risk: 78, members: 420, delta: "+6% MoM" },
      { name: "Enterprise Annual", risk: 29, members: 112, delta: "-2% MoM" },
      { name: "Mid-Market EMEA", risk: 61, members: 233, delta: "+3% MoM" },
    ];
    const [desc, setDesc] = useState(true);
    const rows = [
      { customer: "Northstar Labs", plan: "Monthly", engagement: 48, risk: 86, lastActive: "2 days ago" },
      { customer: "Aster Retail", plan: "Quarterly", engagement: 61, risk: 69, lastActive: "1 day ago" },
      { customer: "Delta Bio", plan: "Annual", engagement: 77, risk: 34, lastActive: "5 hours ago" },
    ];
    const toggleSort = () => {
      setDesc((prev) => !prev);
    };
    const sortedRows = [...rows].sort((a, b) => (desc ? b.risk - a.risk : a.risk - b.risk));
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
          <section className="space-y-4">
      <Card>
      <CardHeader><CardTitle>Segment Builder</CardTitle></CardHeader>
      <CardContent className="space-y-3">
      <div className="grid gap-3 md:grid-cols-3">
      <Select value={field} onValueChange={setField}>
      <SelectTrigger><SelectValue placeholder="Field" /></SelectTrigger>
      <SelectContent className="bg-popover text-popover-foreground">
      <SelectItem value="plan">Plan</SelectItem><SelectItem value="region">Region</SelectItem><SelectItem value="tenure">Tenure</SelectItem><SelectItem value="usage">Product Usage</SelectItem><SelectItem value="industry">Industry</SelectItem>
      </SelectContent>
      </Select>
      <Input value={value} onChange={(event) => setValue(event.target.value)} placeholder="Value" />
      <Button onClick={addFilter}>Add Filter</Button>
      </div>
      <div className="flex flex-wrap gap-2">
      {filters.map((filter) => <Badge key={filter}>{filter}</Badge>)}
      </div>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
      <h2 className="text-lg font-semibold text-foreground">Segment Performance</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {segments.map((segment) => (
      <Card key={segment.name}>
      <CardHeader><CardTitle className="text-base">{segment.name}</CardTitle></CardHeader>
      <CardContent className="space-y-3">
      <div className="flex items-center justify-between text-sm"><span>Churn Risk</span><Badge variant={segment.risk > 70 ? "destructive" : "secondary"}>{segment.risk}%</Badge></div>
      <Progress value={segment.risk} />
      <p className="text-xs text-muted-foreground">{segment.members} members • {segment.delta}</p>
      </CardContent>
      </Card>
      ))}
      </div>
      </section>
      );
          )
  <section className="space-y-4">
      <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
      <CardTitle>Segment Member Preview</CardTitle>
      <Button variant="outline" size="sm">Export Segment</Button>
      </CardHeader>
      <CardContent className="overflow-x-auto">
      <Button variant="ghost" size="sm" onClick={toggleSort} className="mb-2 gap-2 text-muted-foreground">
      Sort by risk <ArrowUpDown className="h-4 w-4" />
      </Button>
      <Table>
      <TableHeader><TableRow><TableHead>Customer</TableHead><TableHead>Plan</TableHead><TableHead>Engagement</TableHead><TableHead>Churn Risk</TableHead><TableHead>Last Active</TableHead></TableRow></TableHeader>
      <TableBody>
      {sortedRows.map((row) => (
      <TableRow key={row.customer}>
      <TableCell>{row.customer}</TableCell><TableCell>{row.plan}</TableCell><TableCell>{row.engagement}</TableCell><TableCell>{row.risk}%</TableCell><TableCell>{row.lastActive}</TableCell>
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