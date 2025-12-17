import { Vehicle, Alert, ScheduledService, ChatMessage, HealthDataPoint, ManufacturingIssue, SecurityAnomaly } from './types';

export const vehicles: Vehicle[] = [
  { id: 'VH-2847', riskLevel: 'Critical', status: 'Active', healthScore: 67, lastService: 'Jan 15, 2025', recommendedAction: 'Schedule Service' },
  { id: 'VH-1923', riskLevel: 'High', status: 'Active', healthScore: 74, lastService: 'Feb 3, 2025', recommendedAction: 'View Details' },
  { id: 'VH-5621', riskLevel: 'Medium', status: 'Active', healthScore: 82, lastService: 'Jan 28, 2025', recommendedAction: 'Monitor' },
  { id: 'VH-8934', riskLevel: 'Low', status: 'Active', healthScore: 95, lastService: 'Feb 10, 2025', recommendedAction: 'View Details' },
  { id: 'VH-4512', riskLevel: 'High', status: 'In Service', healthScore: 71, lastService: 'Dec 22, 2024', recommendedAction: 'Track Service' },
  { id: 'VH-7821', riskLevel: 'Medium', status: 'Active', healthScore: 85, lastService: 'Feb 5, 2025', recommendedAction: 'Monitor' },
  { id: 'VH-3156', riskLevel: 'Low', status: 'Active', healthScore: 92, lastService: 'Feb 12, 2025', recommendedAction: 'View Details' },
  { id: 'VH-9473', riskLevel: 'Critical', status: 'Maintenance', healthScore: 58, lastService: 'Jan 8, 2025', recommendedAction: 'Schedule Service' },
];

export const alerts: Alert[] = [
  { id: 'ALT-001', vehicleId: 'VH-2847', failureType: 'Brake System Failure', riskLevel: 'Critical', failureProbability: 94, estimatedTimeToFailure: '2-3 days', component: 'Brake Pads', detectedAt: '2 hours ago' },
  { id: 'ALT-002', vehicleId: 'VH-1923', failureType: 'Engine Oil Degradation', riskLevel: 'High', failureProbability: 87, estimatedTimeToFailure: '5-7 days', component: 'Engine Oil', detectedAt: '5 hours ago' },
  { id: 'ALT-003', vehicleId: 'VH-9473', failureType: 'Battery Performance Drop', riskLevel: 'Critical', failureProbability: 91, estimatedTimeToFailure: '1-2 days', component: 'Battery', detectedAt: '1 hour ago' },
  { id: 'ALT-004', vehicleId: 'VH-4512', failureType: 'Transmission Warning', riskLevel: 'High', failureProbability: 78, estimatedTimeToFailure: '7-10 days', component: 'Transmission Fluid', detectedAt: '8 hours ago' },
  { id: 'ALT-005', vehicleId: 'VH-5621', failureType: 'Tire Wear Detection', riskLevel: 'Medium', failureProbability: 65, estimatedTimeToFailure: '14-21 days', component: 'Front Tires', detectedAt: '12 hours ago' },
  { id: 'ALT-006', vehicleId: 'VH-7821', failureType: 'Coolant Level Low', riskLevel: 'Medium', failureProbability: 58, estimatedTimeToFailure: '10-14 days', component: 'Coolant System', detectedAt: '1 day ago' },
  { id: 'ALT-007', vehicleId: 'VH-2847', failureType: 'Air Filter Clogging', riskLevel: 'High', failureProbability: 82, estimatedTimeToFailure: '3-5 days', component: 'Air Filter', detectedAt: '6 hours ago' },
  { id: 'ALT-008', vehicleId: 'VH-3156', failureType: 'Spark Plug Wear', riskLevel: 'Medium', failureProbability: 55, estimatedTimeToFailure: '21-30 days', component: 'Spark Plugs', detectedAt: '2 days ago' },
];

export const scheduledServices: ScheduledService[] = [
  { id: 'SVC-001', vehicleId: 'VH-2847', date: '2025-02-03', time: '09:00', issue: 'Brake System', priority: 'Critical', duration: '2 hours', serviceCenter: 'Downtown Service Center' },
  { id: 'SVC-002', vehicleId: 'VH-1923', date: '2025-02-05', time: '14:00', issue: 'Engine Oil Change', priority: 'High', duration: '1.5 hours', serviceCenter: 'Downtown Service Center' },
  { id: 'SVC-003', vehicleId: 'VH-4512', date: '2025-02-07', time: '10:00', issue: 'Transmission Service', priority: 'High', duration: '3 hours', serviceCenter: 'North Branch' },
  { id: 'SVC-004', vehicleId: 'VH-7821', date: '2025-02-12', time: '11:00', issue: 'Coolant Flush', priority: 'Medium', duration: '1 hour', serviceCenter: 'Downtown Service Center' },
];

export const chatMessages: ChatMessage[] = [
  { id: 'MSG-001', sender: 'ai', message: 'Hello John! Our AI system has detected a critical issue with your vehicle VH-2847. Your brake system requires immediate attention.', timestamp: '2:34 PM' },
  { id: 'MSG-002', sender: 'ai', message: 'Based on our analysis, we predict a 94% probability of brake failure within 2-3 days. We recommend scheduling service immediately.', timestamp: '2:34 PM' },
  { id: 'MSG-003', sender: 'customer', message: 'That sounds serious. What are my options?', timestamp: '2:36 PM' },
  { id: 'MSG-004', sender: 'ai', message: "I've found several available slots at our Downtown Service Center:", timestamp: '2:37 PM', slots: ['Tomorrow, Feb 18 at 9:00 AM', 'Tomorrow, Feb 18 at 2:00 PM', 'Friday, Feb 19 at 10:00 AM', 'Friday, Feb 19 at 3:00 PM'] },
];

export const healthTrendData: HealthDataPoint[] = [
  { date: 'Jan 1', score: 92, predicted: 91 },
  { date: 'Jan 8', score: 90, predicted: 89 },
  { date: 'Jan 15', score: 88, predicted: 87 },
  { date: 'Jan 22', score: 85, predicted: 84 },
  { date: 'Jan 29', score: 83, predicted: 81 },
  { date: 'Feb 5', score: 80, predicted: 78 },
  { date: 'Feb 12', score: 78, predicted: 75 },
  { date: 'Feb 19', score: 0, predicted: 72 },
  { date: 'Feb 26', score: 0, predicted: 68 },
  { date: 'Mar 5', score: 0, predicted: 65 },
];

export const manufacturingIssues: ManufacturingIssue[] = [
  { id: 'MFG-001', category: 'Brake Assembly', frequency: 23, rootCause: 'Supplier quality variance', recommendation: 'Implement incoming inspection protocol for brake components' },
  { id: 'MFG-002', category: 'Engine Sensors', frequency: 18, rootCause: 'Calibration drift', recommendation: 'Increase calibration frequency and add automated checks' },
  { id: 'MFG-003', category: 'Battery Cells', frequency: 12, rootCause: 'Temperature exposure during shipping', recommendation: 'Upgrade shipping containers with temperature monitoring' },
  { id: 'MFG-004', category: 'Transmission', frequency: 8, rootCause: 'Assembly torque variance', recommendation: 'Implement torque verification at assembly stations' },
];

export const securityAnomalies: SecurityAnomaly[] = [
  { id: 'SEC-001', userSystem: 'Admin Portal', behavior: 'Multiple failed login attempts', severity: 'High', actionTaken: 'Account temporarily locked', timestamp: '2 hours ago' },
  { id: 'SEC-002', userSystem: 'API Gateway', behavior: 'Unusual request pattern', severity: 'Medium', actionTaken: 'Rate limiting applied', timestamp: '5 hours ago' },
  { id: 'SEC-003', userSystem: 'Data Export', behavior: 'Large data extraction', severity: 'High', actionTaken: 'Flagged for review', timestamp: '1 day ago' },
  { id: 'SEC-004', userSystem: 'Service Portal', behavior: 'Access from new location', severity: 'Low', actionTaken: 'Logged and monitored', timestamp: '2 days ago' },
];

export const kpiData = {
  activeVehicles: 1247,
  activeVehiclesChange: '+12% vs last month',
  predictedFailures: 23,
  predictedFailuresNote: '+5 in next 7 days',
  scheduledServices: 87,
  scheduledServicesNote: '34 this week',
  systemHealth: 98.7,
  systemHealthStatus: 'Optimal',
};

export const serviceCenters = [
  'Downtown Service Center',
  'North Branch',
  'East Side Facility',
  'Airport Location',
];

export const availableSlots = [
  'Feb 18, 2025 - 9:00 AM',
  'Feb 18, 2025 - 2:00 PM',
  'Feb 19, 2025 - 10:00 AM',
  'Feb 19, 2025 - 3:00 PM',
];
