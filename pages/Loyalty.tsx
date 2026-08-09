import { useState } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

export default function Loyalty() {
  const [earnRate, setEarnRate] = useState("1");
  const [redemptionRule, setRedemptionRule] = useState("500 points = $5 off");
  const [expiryMonths, setExpiryMonths] = useState("12");
  const [welcomeBonus, setWelcomeBonus] = useState("250");
  const [partnerMode, setPartnerMode] = useState(true);

  const playbooks = [
    { industry: "Pizza shop", offer: "2x points on weekday lunch", goal: "Increase midweek repeat visits" },
    { industry: "Dental clinic", offer: "300 points after hygiene recall", goal: "Reduce overdue recall churn" },
    { industry: "Mechanic", offer: "Double points on oil change", goal: "Bring back lapsed service customers" },
  ];

  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
        <section className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Aeroplan-Style Loyalty Program</CardTitle>
              <CardDescription>Reward repeat visits with points, discounts, and practical local business incentives.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-2">
              <Badge>Points Issued (30d): 18,450</Badge>
              <Badge variant="secondary">Redemption Rate: 27%</Badge>
              <Badge variant="outline">Repeat Visit Lift: +8.4%</Badge>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <CardHeader>
              <CardTitle>Program Rules</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="earn-rate">Earn rate (points per $1)</Label>
                <Input id="earn-rate" value={earnRate} onChange={(event) => setEarnRate(event.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="welcome-bonus">Welcome bonus</Label>
                <Input id="welcome-bonus" value={welcomeBonus} onChange={(event) => setWelcomeBonus(event.target.value)} />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="redemption">Redemption rule</Label>
                <Input id="redemption" value={redemptionRule} onChange={(event) => setRedemptionRule(event.target.value)} />
              </div>

              <div className="space-y-2">
                <Label>Point expiry window</Label>
                <Select value={expiryMonths} onValueChange={setExpiryMonths}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select expiry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6">6 months</SelectItem>
                    <SelectItem value="12">12 months</SelectItem>
                    <SelectItem value="18">18 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end justify-between rounded-lg border bg-muted/40 p-3 sm:col-span-2">
                <div>
                  <p className="text-sm font-medium text-foreground">Aeroplan partner mode (beta)</p>
                  <p className="text-xs text-muted-foreground">Enable partner-style bonus campaigns across locations.</p>
                </div>
                <Switch checked={partnerMode} onCheckedChange={setPartnerMode} />
              </div>

              <Button className="sm:col-span-2">Save Rules</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full">Issue Points</Button>
              <Button variant="outline" className="w-full">Create Discount Reward</Button>
              <Button variant="outline" className="w-full">Launch Win-Back Campaign</Button>
            </CardContent>
          </Card>
        </section>

        <section className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Industry Playbooks</CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Industry</TableHead>
                    <TableHead>Offer</TableHead>
                    <TableHead>Goal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {playbooks.map((row) => (
                    <TableRow key={row.industry}>
                      <TableCell className="font-medium">{row.industry}</TableCell>
                      <TableCell>{row.offer}</TableCell>
                      <TableCell>{row.goal}</TableCell>
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