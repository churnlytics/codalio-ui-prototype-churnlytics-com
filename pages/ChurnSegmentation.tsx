import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

export default function ChurnSegmentation() {
  const [ruleType, setRuleType] = useState("visit");
  const [ruleValue, setRuleValue] = useState("");
  const [rules, setRules] = useState<string[]>(["visit: no visit in 45 days", "spend: under $25 average ticket"]);

  const addRule = () => {
    if (!ruleValue.trim()) return;
    setRules((current) => [...current, `${ruleType}: ${ruleValue.trim()}`]);
    setRuleValue("");
  };

  const removeRule = (target: string) => {
    setRules((current) => current.filter((rule) => rule !== target));
  };

  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
        <section className="grid grid-cols-1 gap-4 xl:grid-cols-[1.4fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Segment Rule Builder</CardTitle>
              <CardDescription>Create practical retention segments for frontline teams.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_220px_auto]">
                <Input value={ruleValue} onChange={(e) => setRuleValue(e.target.value)} placeholder="Value (e.g., overdue by 60 days)" />
                <Select value={ruleType} onValueChange={setRuleType}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visit">Visit behavior</SelectItem>
                    <SelectItem value="spend">Spend band</SelectItem>
                    <SelectItem value="service">Service category</SelectItem>
                    <SelectItem value="no-show">No-show history</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={addRule}>Add Rule</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {rules.map((rule) => (
                  <Badge key={rule} variant="secondary" className="cursor-pointer" onClick={() => removeRule(rule)}>
                    {rule} ×
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Segment Population</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <p className="text-3xl font-semibold text-foreground">{Math.max(42, 380 - rules.length * 28)}</p>
              <p className="text-sm text-muted-foreground">Estimated at-risk customers in this segment</p>
              <Progress value={Math.min(85, 20 + rules.length * 14)} />
            </CardContent>
          </Card>
        </section>

        <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>Segment Comparison</CardTitle></CardHeader>
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Segment</TableHead><TableHead>Customers</TableHead><TableHead>Lapse Rate</TableHead><TableHead>Avg Ticket</TableHead><TableHead>Offer Response</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow><TableCell>Weekend pizza regulars</TableCell><TableCell>842</TableCell><TableCell>14.2%</TableCell><TableCell>$32</TableCell><TableCell>29%</TableCell></TableRow>
                  <TableRow><TableCell>Overdue dental recall</TableCell><TableCell>296</TableCell><TableCell>19.3%</TableCell><TableCell>$188</TableCell><TableCell>24%</TableCell></TableRow>
                  <TableRow><TableCell>Deferred auto maintenance</TableCell><TableCell>514</TableCell><TableCell>22.1%</TableCell><TableCell>$241</TableCell><TableCell>18%</TableCell></TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Segment Insights Feed</CardTitle></CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="insight-1"><AccordionTrigger>Missed appointments are the strongest risk signal</AccordionTrigger><AccordionContent>Customers with 2+ no-shows are 2.4x more likely to lapse in the next 45 days.</AccordionContent></AccordionItem>
                <AccordionItem value="insight-2"><AccordionTrigger>Points campaigns work best for weekly regulars</AccordionTrigger><AccordionContent>Bonus points drove a 31% comeback rate for lapsed restaurant regulars.</AccordionContent></AccordionItem>
                <AccordionItem value="insight-3"><AccordionTrigger>Service reminders reduce churn for clinics</AccordionTrigger><AccordionContent>Automated recall reminders reduced overdue patient churn by 12%.</AccordionContent></AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}