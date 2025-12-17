import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, AlertCircle } from 'lucide-react';
import { alerts } from '@/data/mockData';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { RiskLevel } from '@/data/types';

const filterTabs = [
  { label: 'All Alerts', value: 'all', count: alerts.length },
  { label: 'Critical', value: 'Critical', count: alerts.filter((a) => a.riskLevel === 'Critical').length },
  { label: 'High', value: 'High', count: alerts.filter((a) => a.riskLevel === 'High').length },
  { label: 'Medium', value: 'Medium', count: alerts.filter((a) => a.riskLevel === 'Medium').length },
];

export default function Alerts() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredAlerts = activeFilter === 'all'
    ? alerts
    : alerts.filter((a) => a.riskLevel === activeFilter);

  const getAlertIcon = (level: RiskLevel) => {
    if (level === 'Critical') return <AlertTriangle className="h-5 w-5 text-status-critical" />;
    return <AlertCircle className="h-5 w-5 text-status-high" />;
  };

  return (
    <div className="space-y-6 animate-slide-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Predictive Failure Alerts</h1>
        <p className="text-muted-foreground mt-1">AI-detected potential failures requiring attention</p>
      </div>

      <div className="flex gap-2">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveFilter(tab.value)}
            className={cn(
              'px-4 py-2 text-sm font-medium rounded-md transition-colors',
              activeFilter === tab.value
                ? 'bg-primary text-primary-foreground'
                : 'bg-card border text-foreground hover:bg-muted'
            )}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredAlerts.map((alert) => (
          <div key={alert.id} className="rounded-lg border bg-card p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-muted">
                  {getAlertIcon(alert.riskLevel)}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{alert.failureType}</h3>
                  <p className="text-sm text-muted-foreground">Vehicle ID: {alert.vehicleId}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <StatusBadge level={alert.riskLevel} />
                    <span className="text-sm text-muted-foreground">Detected: {alert.detectedAt}</span>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => navigate(`/scheduling?vehicle=${alert.vehicleId}&issue=${encodeURIComponent(alert.failureType)}`)}
              >
                Schedule Service
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-6 pt-4 border-t">
              <div>
                <p className="text-sm text-muted-foreground">Failure Probability</p>
                <p className="text-xl font-semibold text-foreground mt-1">{alert.failureProbability}%</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Estimated Time to Failure</p>
                <p className="text-xl font-semibold text-foreground mt-1">{alert.estimatedTimeToFailure}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Component</p>
                <p className="text-xl font-semibold text-foreground mt-1">{alert.component}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
