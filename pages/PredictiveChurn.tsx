import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Slider } from "../components/ui/slider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

export default function PredictiveChurn() {
  const [threshold, setThreshold] = useState(70);
  const [appliedThreshold, setAppliedThreshold] = useState(70);
  const [assigned, setAssigned] = useState("");

  const queue = [
    { customer: "Melissa R.", risk: 92, reason: "No visit in 78 days" },
    { customer: "Ravi P.", risk: 88, reason: "Canceled 2 bookings" },
    { customer: "Angela T.", risk: 83, reason: "Redeemed last offer but did not return" },
  ];

  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
        <section className="grid grid-cols-1 gap-4 xl:grid-cols-[1.25fr_1fr]">
          <Card>
            <CardHeader><CardTitle>Model Health</CardTitle><CardDescription>Latest churn model quality checks for customer revisit behavior.</CardDescription></CardHeader>
            <CardContent className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <div className="rounded-lg border border-border p-3"><p className="text-xs text-muted-foreground">Coverage</p><p className="text-lg font-semibold">93%</p></div>
              <div className="rounded-lg border border-border p-3"><p className="text-xs text-muted-foreground">Precision</p><p className="text-lg font-semibold">0.74</p></div>
              <div className="rounded-lg border border-border p-3"><p className="text-xs text-muted-foreground">Recall</p><p className="text-lg font-semibold">0.69</p></div>
              <div className="rounded-lg border border-border p-3"><p className="text-xs text-muted-foreground">Last Trained</p><p className="text-lg font-semibold">3h ago</p></div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Risk Threshold Controls</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <Slider value={[threshold]} onValueChange={(v) => setThreshold(v[0] ?? threshold)} min={20} max={95} step={1} />
              <Input value={String(threshold)} onChange={(e) => setThreshold(Number(e.target.value) || 0)} />
              <Button onClick={() => setAppliedThreshold(threshold)} className="w-full">Apply Threshold</Button>
              <Badge variant="secondary">Active threshold: {appliedThreshold}%</Badge>
            </CardContent>
          </Card>
        </section>

        <section className="grid grid-cols-1 gap-4 xl:grid-cols-[1.5fr_1fr]">
          <Card>
            <CardHeader><CardTitle>High-Risk Customer Queue</CardTitle></CardHeader>
            <CardContent className="space-y-3 overflow-x-auto">
              <Table>
                <TableHeader><TableRow><TableHead>Customer</TableHead><TableHead>Risk</TableHead><TableHead>Reason</TableHead><TableHead /></TableRow></TableHeader>
                <TableBody>
                  {queue.map((row) => (
                    <TableRow key={row.customer}>
                      <TableCell>{row.customer}</TableCell>
                      <TableCell><Badge variant="destructive">{row.risk}%</Badge></TableCell>
                      <TableCell>{row.reason}</TableCell>
                      <TableCell><Button size="sm" onClick={() => setAssigned(`${row.customer} assigned to a retention playbook`)}>Assign</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {assigned && <p className="text-xs text-muted-foreground">{assigned}</p>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Risk Reason Panel</CardTitle></CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="r1"><AccordionTrigger>Visit gap widening</AccordionTrigger><AccordionContent>Average days since last visit increased from 29 to 54 days.</AccordionContent></AccordionItem>
                <AccordionItem value="r2"><AccordionTrigger>No-shows increased</AccordionTrigger><AccordionContent>Two recent no-shows with no follow-up booking completed.</AccordionContent></AccordionItem>
                <AccordionItem value="r3"><AccordionTrigger>Offer fatigue</AccordionTrigger><AccordionContent>Past two campaigns had low open rate and no redemption.</AccordionContent></AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}