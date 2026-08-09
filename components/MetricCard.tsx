import { TrendingDown, TrendingUp } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type MetricCardProps = {
  label: string;
  value: string;
  subtitle?: string;
  delta?: string;
  trend?: "up" | "down";
};

export default function MetricCard({ label, value, subtitle, delta, trend }: MetricCardProps) {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
        {trend && delta && (
          <Badge variant={trend === "up" ? "secondary" : "destructive"} className="gap-1">
            {trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {delta}
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold text-foreground">{value}</div>
        {subtitle && <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>}
      </CardContent>
    </Card>
  );
}