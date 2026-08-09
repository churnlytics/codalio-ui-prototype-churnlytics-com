import { useState } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

export default function ChurnReasons() {
  const [timeframe, setTimeframe] = useState("90d");
  const [search, setSearch] = useState("");
  const [applied, setApplied] = useState("");

  const reasons = [
    { label: "Price sensitivity", share: 31 },
    { label: "Long wait times", share: 26 },
    { label: "Booking friction", share: 22 },
    { label: "Competitor offer nearby", share: 15 },
  ];

  const playbooks = [
    { title: "Aeroplan-style Points Booster", description: "Issue bonus points to lapsed customers after their next visit." },
    { title: "Comeback Discount", description: "Offer 10% off for customers inactive for 45+ days." },
    { title: "Reminder + Rebook Sequence", description: "Send SMS and email reminders for overdue checkups or services." },
  ];

  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
        <section className="grid grid-cols-1 gap-4 xl:grid-cols-[1.25fr_1fr]">
          <Card>
            <CardHeader><CardTitle>Reason Distribution</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {reasons.map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="flex items-center justify-between text-sm"><span>{item.label}</span><Badge variant="secondary">{item.share}%</Badge></div>
                  <Progress value={item.share} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-3 p-4">
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="30d">30 days</SelectItem>
                  <SelectItem value="90d">90 days</SelectItem>
                  <SelectItem value="180d">180 days</SelectItem>
                </SelectContent>
              </Select>
              <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search reason, location, or service" />
              <Button onClick={() => setApplied(`Filters applied: ${timeframe}, query '${search || "all"}'`)} className="w-full">Apply Filters</Button>
              {applied && <p className="text-xs text-muted-foreground">{applied}</p>}
            </CardContent>
          </Card>
        </section>

        <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>Reason Evidence Table</CardTitle></CardHeader>
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader><TableRow><TableHead>Reason</TableHead><TableHead>Customers</TableHead><TableHead>Visit Loss</TableHead><TableHead>Trend</TableHead></TableRow></TableHeader>
                <TableBody>
                  <TableRow><TableCell>Price sensitivity</TableCell><TableCell>214</TableCell><TableCell>428 visits</TableCell><TableCell>↑</TableCell></TableRow>
                  <TableRow><TableCell>Long wait times</TableCell><TableCell>176</TableCell><TableCell>301 visits</TableCell><TableCell>→</TableCell></TableRow>
                  <TableRow><TableCell>Booking friction</TableCell><TableCell>101</TableCell><TableCell>189 visits</TableCell><TableCell>↓</TableCell></TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-4">
            {playbooks.map((playbook) => (
              <Card key={playbook.title}>
                <CardHeader>
                  <CardTitle>{playbook.title}</CardTitle>
                  <CardDescription>{playbook.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">Launch Playbook</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}