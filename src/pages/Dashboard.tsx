import { Car, AlertTriangle, Calendar, CheckCircle } from 'lucide-react';
import { KPICard } from '@/components/dashboard/KPICard';
import { HealthTrendsChart } from '@/components/dashboard/HealthTrendsChart';
import { VehicleStatusTable } from '@/components/dashboard/VehicleStatusTable';
import { kpiData } from '@/data/mockData';

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-slide-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Vehicle Health Dashboard</h1>
        <p className="text-muted-foreground mt-1">Real-time monitoring and predictive analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Active Vehicles"
          value={kpiData.activeVehicles.toLocaleString()}
          subtitle={kpiData.activeVehiclesChange}
          icon={<Car className="h-5 w-5" />}
        />
        <KPICard
          title="Predicted Failures"
          value={kpiData.predictedFailures}
          subtitle={kpiData.predictedFailuresNote}
          icon={<AlertTriangle className="h-5 w-5" />}
        />
        <KPICard
          title="Scheduled Services"
          value={kpiData.scheduledServices}
          subtitle={kpiData.scheduledServicesNote}
          icon={<Calendar className="h-5 w-5" />}
        />
        <KPICard
          title="System Health"
          value={`${kpiData.systemHealth}%`}
          subtitle={kpiData.systemHealthStatus}
          icon={<CheckCircle className="h-5 w-5" />}
        />
      </div>

      <HealthTrendsChart />

      <VehicleStatusTable />
    </div>
  );
}
