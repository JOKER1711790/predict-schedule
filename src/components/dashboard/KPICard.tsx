import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: ReactNode;
  className?: string;
}

export function KPICard({ title, value, subtitle, icon, className }: KPICardProps) {
  return (
    <div className={cn('rounded-lg border bg-card p-6', className)}>
      <div className="flex items-start justify-between">
        <span className="text-sm text-muted-foreground">{title}</span>
        <span className="text-muted-foreground">{icon}</span>
      </div>
      <div className="mt-2">
        <span className="text-3xl font-semibold text-foreground">{value}</span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}
