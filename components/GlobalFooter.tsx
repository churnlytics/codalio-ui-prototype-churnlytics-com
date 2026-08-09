import { Button } from "./ui/button";
import { Separator } from "./ui/separator";



export default function GlobalFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-muted-foreground">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="space-y-2">
            <p className="font-medium text-foreground">Product</p>
            <div className="flex flex-col items-start gap-1">
              <Button variant="link" className="h-auto p-0 text-muted-foreground">Dashboard</Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground">Analytics</Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground">Reports</Button>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-foreground">Resources</p>
            <div className="flex flex-col items-start gap-1">
              <Button variant="link" className="h-auto p-0 text-muted-foreground">Docs</Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground">API Reference</Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground">Status</Button>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-foreground">Company</p>
            <div className="flex flex-col items-start gap-1">
              <Button variant="link" className="h-auto p-0 text-muted-foreground">Privacy</Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground">Terms</Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground">Contact</Button>
            </div>
          </div>
        </div>

        <Separator />
        <p>© Churnlytics.com</p>
      </div>
    </footer>
  );
}