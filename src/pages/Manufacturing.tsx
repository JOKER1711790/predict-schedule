import { manufacturingIssues } from '@/data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Manufacturing() {
  return (
    <div className="space-y-6 animate-slide-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Manufacturing Quality</h1>
        <p className="text-muted-foreground mt-1">Root cause analysis and quality recommendations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Issue Frequency by Category</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={manufacturingIssues} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis
                  dataKey="category"
                  type="category"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  width={90}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="frequency" fill="hsl(var(--chart-1))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">RCA/CAPA Recommendations</h3>
          <div className="space-y-4">
            {manufacturingIssues.map((issue) => (
              <div key={issue.id} className="p-4 rounded-lg border bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-foreground">{issue.category}</h4>
                  <span className="text-sm px-2 py-1 rounded bg-status-high-bg text-status-high">
                    {issue.frequency} issues
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Root Cause: </span>
                    <span className="text-foreground">{issue.rootCause}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Recommendation: </span>
                    <span className="text-foreground">{issue.recommendation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
