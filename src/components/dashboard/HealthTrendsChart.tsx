import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { healthTrendData } from '@/data/mockData';
import { cn } from '@/lib/utils';

const timeRanges = ['7D', '30D', '90D'] as const;

export function HealthTrendsChart() {
  const [selectedRange, setSelectedRange] = useState<typeof timeRanges[number]>('90D');

  const filteredData = healthTrendData.filter((_, index) => {
    if (selectedRange === '7D') return index >= healthTrendData.length - 3;
    if (selectedRange === '30D') return index >= healthTrendData.length - 5;
    return true;
  });

  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Vehicle Health Trends</h3>
        <div className="flex gap-1">
          {timeRanges.map((range) => (
            <button
              key={range}
              onClick={() => setSelectedRange(range)}
              className={cn(
                'px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
                selectedRange === range
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              )}
            >
              {range}
            </button>
          ))}
        </div>
      </div>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={filteredData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="date"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              domain={[50, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="score"
              name="Actual Health Score"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--chart-1))' }}
              connectNulls={false}
            />
            <Line
              type="monotone"
              dataKey="predicted"
              name="Predicted Score"
              stroke="hsl(var(--chart-3))"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: 'hsl(var(--chart-3))' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
