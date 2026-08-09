import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { useState } from "react";

export default function HelpSupport() {
    const categories = ["Getting Started", "Analytics Interpretation", "Integrations Setup", "Security & API"];
    const [tickets, setTickets] = useState([
      { id: "#2489", subject: "Webhook validation error", priority: "High", status: "Open", updated: "15m ago" },
      { id: "#2487", subject: "Churn export mismatch", priority: "Medium", status: "Investigating", updated: "2h ago" },
      { id: "#2479", subject: "SSO setup guidance", priority: "Low", status: "Resolved", updated: "1d ago" },
    ]);
    const escalate = (id) => {
      setTickets((prev) => prev.map((ticket) => ticket.id === id ? { ...ticket, priority: "High", status: "Open" } : ticket));
    };
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
          <section className="space-y-4">
      <Card>
      <CardHeader><CardTitle>Support Hub</CardTitle></CardHeader>
      <CardContent className="space-y-3">
      <p className="text-sm text-muted-foreground">Get help with churn analysis workflows</p>
      <div className="flex flex-wrap gap-2">
      <Input placeholder="Search docs, troubleshooting, and guides" className="max-w-md" />
      <Button>Create Ticket</Button>
      </div>
      <Badge variant="secondary">Average response time: 43 minutes</Badge>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
      <h2 className="text-lg font-semibold">Knowledge Paths</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {categories.map((category) => (
      <Card key={category}>
      <CardHeader><CardTitle className="text-base">{category}</CardTitle></CardHeader>
      <CardContent><Button size="sm" variant="outline" className="w-full">Open</Button></CardContent>
      </Card>
      ))}
      </div>
      </section>
  <section className="space-y-4">
      <Card>
      <CardHeader><CardTitle>Contact & Ticket Status</CardTitle></CardHeader>
      <CardContent className="overflow-x-auto">
      <Table>
      <TableHeader><TableRow><TableHead>Ticket</TableHead><TableHead>Subject</TableHead><TableHead>Priority</TableHead><TableHead>Status</TableHead><TableHead>Updated</TableHead><TableHead></TableHead></TableRow></TableHeader>
      <TableBody>
      {tickets.map((ticket) => (
      <TableRow key={ticket.id}>
      <TableCell>{ticket.id}</TableCell><TableCell>{ticket.subject}</TableCell><TableCell>{ticket.priority}</TableCell><TableCell><Badge variant={ticket.status === "Open" ? "destructive" : "secondary"}>{ticket.status}</Badge></TableCell><TableCell>{ticket.updated}</TableCell>
      <TableCell><Button size="sm" variant="ghost" onClick={() => escalate(ticket.id)}>Escalate</Button></TableCell>
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