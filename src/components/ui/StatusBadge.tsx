import { RiskLevel } from '@/data/types';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  level: RiskLevel;
  className?: string;
}

export function StatusBadge({ level, className }: StatusBadgeProps) {
  const styles = {
    Critical: 'bg-status-critical-bg text-status-critical border-status-critical/20',
    High: 'bg-status-high-bg text-status-high border-status-high/20',
    Medium: 'bg-status-medium-bg text-status-medium border-status-medium/20',
    Low: 'bg-status-low-bg text-status-low border-status-low/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium',
        styles[level],
        className
      )}
    >
      {level}
    </span>
  );
}
