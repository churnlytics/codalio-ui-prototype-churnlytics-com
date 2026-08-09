import { Fragment } from "react";
import { Badge } from "./ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

type BreadcrumbLink = { label: string; href: string };

type PageHeaderBarProps = {
  title: string;
  description?: string;
  badge?: string;
  actionLabel?: string;
  onAction?: () => void;
  breadcrumbs?: BreadcrumbLink[];
};

export default function PageHeaderBar({ title, description, badge, actionLabel, onAction, breadcrumbs }: PageHeaderBarProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="min-w-0 space-y-1">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <Fragment key={crumb.href}>
                  <BreadcrumbItem>
                    {index === breadcrumbs.length - 1 ? (
                      <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                    ) : (
                      <Link to={crumb.href} className="text-muted-foreground hover:text-foreground">
                        {crumb.label}
                      </Link>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )}

        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-foreground">{title}</h1>
          {badge && <Badge variant="secondary">{badge}</Badge>}
        </div>

        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>

      {actionLabel && (
        <>
          <Separator orientation="vertical" className="hidden h-8 md:block" />
          <Button onClick={onAction}>{actionLabel}</Button>
        </>
      )}
    </div>
  );
}