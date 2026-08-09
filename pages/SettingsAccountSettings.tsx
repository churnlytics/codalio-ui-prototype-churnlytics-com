import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Switch } from "../components/ui/switch";

import SettingsSubnavTabs from "../components/SettingsSubnavTabs";

import { useState } from "react";

export default function SettingsAccountSettings() {
    const [form, setForm] = useState({ name: "Churnlytics", industry: "SaaS", timezone: "utc", currency: "usd" });
    const [saved, setSaved] = useState("Last updated yesterday");
    const update = (key, value) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    };
    const [prefs, setPrefs] = useState([
      { key: "weekly", label: "Weekly churn digest", enabled: true },
      { key: "risk", label: "High-risk alerts", enabled: true },
      { key: "integration", label: "Integration failures", enabled: true },
      { key: "model", label: "Model refresh updates", enabled: false },
    ]);
    const [prefsSaved, setPrefsSaved] = useState("Unsaved changes");
    const toggle = (key) => {
      setPrefs((prev) => prev.map((pref) => pref.key === key ? { ...pref, enabled: !pref.enabled } : pref));
    };
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
          <section className="space-y-4">
      <SettingsSubnavTabs />
      <Card>
      <CardHeader><CardTitle>Organization Profile</CardTitle></CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
      <div className="space-y-2"><Label>Organization Name</Label><Input value={form.name} onChange={(event) => update("name", event.target.value)} /></div>
      <div className="space-y-2"><Label>Industry</Label><Input value={form.industry} onChange={(event) => update("industry", event.target.value)} /></div>
      <div className="space-y-2"><Label>Timezone</Label><Select value={form.timezone} onValueChange={(value) => update("timezone", value)}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent className="bg-popover text-popover-foreground"><SelectItem value="utc-8">UTC-8</SelectItem><SelectItem value="utc">UTC</SelectItem><SelectItem value="utc+1">UTC+1</SelectItem></SelectContent></Select></div>
      <div className="space-y-2"><Label>Default Currency</Label><Select value={form.currency} onValueChange={(value) => update("currency", value)}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent className="bg-popover text-popover-foreground"><SelectItem value="usd">USD</SelectItem><SelectItem value="eur">EUR</SelectItem><SelectItem value="gbp">GBP</SelectItem></SelectContent></Select></div>
      <Button className="md:col-span-2" onClick={() => setSaved("Saved just now")}>Save Changes</Button>
      <p className="text-sm text-muted-foreground md:col-span-2">{saved}</p>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
      <Card>
      <CardHeader><CardTitle>Notification Preferences</CardTitle></CardHeader>
      <CardContent className="space-y-3">
      {prefs.map((pref) => (
      <div key={pref.key} className="flex items-center justify-between rounded-lg border border-border p-3">
      <p className="text-sm font-medium">{pref.label}</p>
      <Switch checked={pref.enabled} onCheckedChange={() => toggle(pref.key)} />
      </div>
      ))}
      <Button onClick={() => setPrefsSaved("Preferences saved")}>Save Preferences</Button>
      <p className="text-sm text-muted-foreground">{prefsSaved}</p>
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}