import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function KpiMetricCard({
  label,
  value,
  delta,
  trend = "down",
}: {
  label: string;
  value: string;
  delta: string;
  trend?: "up" | "down";
}) {
  return (
    <Card className="rounded-xl shadow-sm transition-colors duration-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold text-foreground">{value}</div>
        <div className="mt-2 flex items-center gap-2">
          <Badge variant={trend === "up" ? "destructive" : "secondary"}>
            {trend === "up" ? (
              <ArrowUpRight className="mr-1 h-3.5 w-3.5" />
            ) : (
              <ArrowDownRight className="mr-1 h-3.5 w-3.5" />
            )}
            {delta}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}