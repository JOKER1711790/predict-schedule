import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { securityAnomalies } from '@/data/mockData';
import { KPICard } from '@/components/dashboard/KPICard';
import { StatusBadge } from '@/components/ui/StatusBadge';

export default function Security() {
  const anomalyCount = securityAnomalies.length;
  const riskScore = 72;
  const complianceStatus = 'Compliant';

  return (
    <div className="space-y-6 animate-slide-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Security & UEBA</h1>
        <p className="text-muted-foreground mt-1">User and Entity Behavior Analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KPICard
          title="Anomalies Detected"
          value={anomalyCount}
          subtitle="Last 7 days"
          icon={<AlertTriangle className="h-5 w-5" />}
        />
        <KPICard
          title="Risk Score"
          value={`${riskScore}/100`}
          subtitle="Moderate risk level"
          icon={<Shield className="h-5 w-5" />}
        />
        <KPICard
          title="Compliance Status"
          value={complianceStatus}
          subtitle="All checks passed"
          icon={<CheckCircle className="h-5 w-5" />}
        />
      </div>

      <div className="rounded-lg border bg-card">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-foreground">Recent Anomalies</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">USER/SYSTEM</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">BEHAVIOR</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">SEVERITY</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">ACTION TAKEN</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">TIMESTAMP</th>
              </tr>
            </thead>
            <tbody>
              {securityAnomalies.map((anomaly) => (
                <tr key={anomaly.id} className="border-b last:border-b-0 hover:bg-muted/30 transition-colors">
                  <td className="p-4 text-sm font-medium text-foreground">{anomaly.userSystem}</td>
                  <td className="p-4 text-sm text-foreground">{anomaly.behavior}</td>
                  <td className="p-4">
                    <StatusBadge level={anomaly.severity} />
                  </td>
                  <td className="p-4 text-sm text-foreground">{anomaly.actionTaken}</td>
                  <td className="p-4 text-sm text-muted-foreground">{anomaly.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
