import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { vehicles } from '@/data/mockData';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function VehicleStatusTable() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredVehicles = vehicles.filter((v) =>
    v.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);
  const paginatedVehicles = filteredVehicles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleAction = (action: string, vehicleId: string) => {
    if (action === 'Schedule Service') {
      navigate(`/scheduling?vehicle=${vehicleId}`);
    }
  };

  return (
    <div className="rounded-lg border bg-card">
      <div className="flex items-center justify-between p-6 border-b">
        <h3 className="text-lg font-semibold text-foreground">Vehicle Status Overview</h3>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search vehicles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 w-[200px]"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">VEHICLE ID</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">RISK LEVEL</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">STATUS</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">HEALTH SCORE</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">LAST SERVICE</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">RECOMMENDED ACTION</th>
            </tr>
          </thead>
          <tbody>
            {paginatedVehicles.map((vehicle) => (
              <tr key={vehicle.id} className="border-b last:border-b-0 hover:bg-muted/30 transition-colors">
                <td className="p-4 text-sm font-medium text-foreground">{vehicle.id}</td>
                <td className="p-4">
                  <StatusBadge level={vehicle.riskLevel} />
                </td>
                <td className="p-4 text-sm text-foreground">{vehicle.status}</td>
                <td className="p-4 text-sm text-foreground">{vehicle.healthScore}%</td>
                <td className="p-4 text-sm text-muted-foreground">{vehicle.lastService}</td>
                <td className="p-4">
                  <button
                    onClick={() => handleAction(vehicle.recommendedAction, vehicle.id)}
                    className="text-sm font-medium text-foreground hover:underline"
                  >
                    {vehicle.recommendedAction}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between p-4 border-t">
        <span className="text-sm text-muted-foreground">
          Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredVehicles.length)} of {filteredVehicles.length} vehicles
        </span>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentPage(page)}
              className="min-w-[36px]"
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
