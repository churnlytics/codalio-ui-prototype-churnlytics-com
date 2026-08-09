import { Separator } from "./ui/separator";



export default function Footer() {
  return (
    <footer className="mt-8 text-sm text-muted-foreground">
      <Separator className="mb-4" />
      <p>© {new Date().getFullYear()} Churnlytics.com. All rights reserved.</p>
    </footer>
  );
}