export type RiskLevel = 'Critical' | 'High' | 'Medium' | 'Low';
export type VehicleStatus = 'Active' | 'In Service' | 'Maintenance' | 'Offline';

export interface Vehicle {
  id: string;
  riskLevel: RiskLevel;
  status: VehicleStatus;
  healthScore: number;
  lastService: string;
  recommendedAction: string;
}

export interface Alert {
  id: string;
  vehicleId: string;
  failureType: string;
  riskLevel: RiskLevel;
  failureProbability: number;
  estimatedTimeToFailure: string;
  component: string;
  detectedAt: string;
}

export interface ScheduledService {
  id: string;
  vehicleId: string;
  date: string;
  time: string;
  issue: string;
  priority: RiskLevel;
  duration: string;
  serviceCenter: string;
}

export interface ChatMessage {
  id: string;
  sender: 'ai' | 'customer';
  message: string;
  timestamp: string;
  slots?: string[];
}

export interface HealthDataPoint {
  date: string;
  score: number;
  predicted: number;
}

export interface ManufacturingIssue {
  id: string;
  category: string;
  frequency: number;
  rootCause: string;
  recommendation: string;
}

export interface SecurityAnomaly {
  id: string;
  userSystem: string;
  behavior: string;
  severity: RiskLevel;
  actionTaken: string;
  timestamp: string;
}
