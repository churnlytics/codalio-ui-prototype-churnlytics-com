import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";



export default function KpiCard({
  title,
  value,
  delta,
  description,
}: {
  title: string;
  value: string;
  delta: string;
  description: string;
}) {
  return (
    <Card className="border border-border bg-card shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
          <Badge variant={delta.startsWith("+") ? "secondary" : "destructive"}>{delta}</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold text-foreground">{value}</p>
      </CardContent>
    </Card>
  );
}