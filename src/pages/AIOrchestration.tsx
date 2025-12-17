import { Database, Stethoscope, Bot, Calendar, Users, ArrowDown } from 'lucide-react';

const agents = [
  {
    id: 'data',
    name: 'Data Analysis Agent',
    description: 'Collects & processes vehicle sensor data',
    icon: Database,
    position: 'top-left',
  },
  {
    id: 'diagnosis',
    name: 'Diagnosis Agent',
    description: 'Identifies failure patterns & root causes',
    icon: Stethoscope,
    position: 'middle-left',
  },
  {
    id: 'master',
    name: 'Master Agent',
    description: 'Orchestrates all agents & makes decisions',
    icon: Bot,
    position: 'center',
    highlighted: true,
  },
  {
    id: 'scheduling',
    name: 'Scheduling Agent',
    description: 'Optimizes service appointments',
    icon: Calendar,
    position: 'middle-right',
  },
  {
    id: 'customer',
    name: 'Customer Engagement Agent',
    description: 'Communicates with vehicle owners',
    icon: Users,
    position: 'top-right',
  },
];

const flowDescriptions = [
  {
    title: 'Input',
    description: 'Real-time sensor data, historical maintenance records, environmental conditions',
  },
  {
    title: 'Processing',
    description: 'ML models analyze patterns, predict failures, optimize scheduling, generate recommendations',
  },
  {
    title: 'Output',
    description: 'Scheduled services, customer notifications, quality insights, compliance reports',
  },
];

export default function AIOrchestration() {
  return (
    <div className="space-y-6 animate-slide-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">AI Agent Orchestration</h1>
        <p className="text-muted-foreground mt-1">Multi-agent system workflow for predictive maintenance</p>
      </div>

      <div className="rounded-lg border bg-card p-8">
        {/* Agent Workflow Diagram */}
        <div className="relative min-h-[400px]">
          {/* Top Row */}
          <div className="flex justify-between mb-8">
            {/* Data Analysis Agent */}
            <div className="w-[200px] rounded-lg border bg-card p-4 text-center">
              <div className="mx-auto w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-3">
                <Database className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground">Data Analysis Agent</h3>
              <p className="text-sm text-muted-foreground mt-1">Collects & processes vehicle sensor data</p>
            </div>

            {/* Connection line */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full h-px bg-border" />
            </div>

            {/* Customer Engagement Agent */}
            <div className="w-[200px] rounded-lg border bg-card p-4 text-center">
              <div className="mx-auto w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground">Customer Engagement Agent</h3>
              <p className="text-sm text-muted-foreground mt-1">Communicates with vehicle owners</p>
            </div>
          </div>

          {/* Arrow down from Data Analysis */}
          <div className="absolute left-[100px] top-[140px]">
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </div>

          {/* Middle Row */}
          <div className="flex justify-between items-center mb-8">
            {/* Diagnosis Agent */}
            <div className="w-[200px] rounded-lg border bg-card p-4 text-center">
              <div className="mx-auto w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-3">
                <Stethoscope className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground">Diagnosis Agent</h3>
              <p className="text-sm text-muted-foreground mt-1">Identifies failure patterns & root causes</p>
            </div>

            {/* Scheduling Agent */}
            <div className="w-[200px] rounded-lg border bg-card p-4 text-center">
              <div className="mx-auto w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-3">
                <Calendar className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground">Scheduling Agent</h3>
              <p className="text-sm text-muted-foreground mt-1">Optimizes service appointments</p>
            </div>
          </div>

          {/* Arrows to Master */}
          <div className="absolute left-[100px] top-[300px]">
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="absolute right-[100px] top-[300px]">
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </div>

          {/* Master Agent - Center */}
          <div className="flex justify-center mb-8">
            <div className="w-[240px] rounded-lg bg-primary text-primary-foreground p-6 text-center">
              <div className="mx-auto w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-3">
                <Bot className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">Master Agent</h3>
              <p className="text-sm opacity-90 mt-1">Orchestrates all agents & makes decisions</p>
            </div>
          </div>

          {/* Arrow down from Master */}
          <div className="flex justify-center">
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        {/* Flow Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t">
          {flowDescriptions.map((item) => (
            <div key={item.title} className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
