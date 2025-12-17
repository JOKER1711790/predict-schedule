import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { scheduledServices, serviceCenters, availableSlots, alerts } from '@/data/mockData';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import type { RiskLevel } from '@/data/types';

const viewModes = ['Month', 'Week', 'Day'] as const;
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

interface SelectedVehicle {
  id: string;
  issue: string;
  priority: RiskLevel;
  duration: string;
}

export default function Scheduling() {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [viewMode, setViewMode] = useState<typeof viewModes[number]>('Month');
  const [currentDate, setCurrentDate] = useState(new Date(2025, 1, 1)); // Feb 2025
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedCenter, setSelectedCenter] = useState(serviceCenters[0]);
  const [notes, setNotes] = useState('');
  
  const vehicleIdFromUrl = searchParams.get('vehicle');
  const issueFromUrl = searchParams.get('issue');

  const [selectedVehicle, setSelectedVehicle] = useState<SelectedVehicle | null>(null);

  useEffect(() => {
    if (vehicleIdFromUrl) {
      const alert = alerts.find((a) => a.vehicleId === vehicleIdFromUrl);
      setSelectedVehicle({
        id: vehicleIdFromUrl,
        issue: issueFromUrl || alert?.failureType || 'General Service',
        priority: alert?.riskLevel || 'Medium',
        duration: '2 hours',
      });
    }
  }, [vehicleIdFromUrl, issueFromUrl]);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = (firstDay.getDay() + 6) % 7;

    const days: (number | null)[] = [];
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const days = getDaysInMonth(currentDate);
  const monthYear = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const getServicesForDay = (day: number) => {
    const dateStr = `2025-02-${day.toString().padStart(2, '0')}`;
    return scheduledServices.filter((s) => s.date === dateStr);
  };

  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  const handleBooking = () => {
    if (!selectedVehicle || !selectedSlot) return;
    toast({
      title: 'Service Scheduled',
      description: `Service for ${selectedVehicle.id} has been scheduled for ${selectedSlot} at ${selectedCenter}.`,
    });
    setSelectedVehicle(null);
    setSelectedSlot(null);
    setNotes('');
  };

  return (
    <div className="flex gap-6 animate-slide-in">
      <div className="flex-1">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-foreground">Service Scheduling</h1>
          <p className="text-muted-foreground mt-1">Manage and schedule vehicle maintenance appointments</p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-1">
              {viewModes.map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                    viewMode === mode
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  )}
                >
                  {mode}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => navigateMonth(-1)}
                className="p-2 hover:bg-muted rounded-md transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-lg font-medium text-foreground min-w-[150px] text-center">
                {monthYear}
              </span>
              <button
                onClick={() => navigateMonth(1)}
                className="p-2 hover:bg-muted rounded-md transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <Button variant="default" onClick={() => setCurrentDate(new Date(2025, 1, 17))}>
                Today
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-px bg-border rounded-lg overflow-hidden">
            {daysOfWeek.map((day) => (
              <div key={day} className="bg-muted/50 p-3 text-center text-sm font-medium text-muted-foreground">
                {day}
              </div>
            ))}
            {days.map((day, index) => {
              const services = day ? getServicesForDay(day) : [];
              const isToday = day === 17;
              return (
                <div
                  key={index}
                  className={cn(
                    'bg-card min-h-[100px] p-2',
                    !day && 'bg-muted/30'
                  )}
                >
                  {day && (
                    <>
                      <span className={cn(
                        'text-sm',
                        isToday ? 'bg-primary text-primary-foreground px-2 py-1 rounded' : 'text-foreground'
                      )}>
                        {day}
                      </span>
                      {isToday && <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded mt-1">Today</div>}
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => setSelectedVehicle({
                            id: service.vehicleId,
                            issue: service.issue,
                            priority: service.priority,
                            duration: service.duration,
                          })}
                          className="w-full bg-primary text-primary-foreground text-xs px-2 py-1 rounded mt-1 text-left truncate"
                        >
                          {service.vehicleId}
                        </button>
                      ))}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-[340px]">
        <div className="rounded-lg border bg-card p-6 sticky top-24">
          <h2 className="text-lg font-semibold text-foreground mb-4">Schedule Service</h2>

          {selectedVehicle ? (
            <>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-3">Vehicle Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Vehicle ID:</span>
                      <span className="font-medium text-foreground">{selectedVehicle.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Issue:</span>
                      <span className="font-medium text-foreground">{selectedVehicle.issue}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Priority:</span>
                      <StatusBadge level={selectedVehicle.priority} />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Est. Duration:</span>
                      <span className="font-medium text-foreground">{selectedVehicle.duration}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-foreground mb-2">Service Center</h3>
                  <Select value={selectedCenter} onValueChange={setSelectedCenter}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceCenters.map((center) => (
                        <SelectItem key={center} value={center}>
                          {center}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="font-medium text-foreground mb-2">Available Slots</h3>
                  <div className="space-y-2">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={cn(
                          'w-full p-3 text-sm rounded-md border text-left transition-colors',
                          selectedSlot === slot
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-card text-foreground hover:bg-muted'
                        )}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-foreground mb-2">Notes</h3>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add any special instructions..."
                    className="resize-none"
                    rows={3}
                  />
                </div>

                <Button
                  className="w-full"
                  onClick={handleBooking}
                  disabled={!selectedSlot}
                >
                  Confirm Booking
                </Button>
              </div>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              Select a vehicle from the calendar or alerts page to schedule a service.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
