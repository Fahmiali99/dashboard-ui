import { lineChart } from '@/common/dashboard';
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const DARK_BLUE = '#1767B2'; 
const LIGHT_BLUE = '#DBE8F4';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
        <div className="bg-white border border-gray-300 p-2.5 rounded-md shadow-md">
            <p className="label" style={{ fontWeight: 'bold' }}>{`${label}`}</p>
            {payload.map((p, index) => (
                <p key={index} style={{ color: p.stroke }}>
                    {`${p.dataKey}: ${p.value}`}
                </p>
            ))}
        </div>
    );
  }
  return null;
};

export default function CustomLineChart() {
    const ChartContent = ({ width, height }) => (
        <LineChart
            width={width}
            height={height}
            data={lineChart}
            margin={{ top: 20, right: 30, left: 10, bottom: 0 }}
        >
            <CartesianGrid 
                horizontal={true} 
                vertical={true} 
                stroke="#f0f0f0"
            />
        
            <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                style={{ fontSize: '12px', color: '#666' }}
            />
            
            <YAxis 
                axisLine={false} 
                tickLine={false} 
                domain={[0, 1250]} 
                ticks={[0, 250, 500, 750, 1000, 1250]}
                style={{ fontSize: '12px', color: '#666' }}
                tickFormatter={(value) => (value === 0 ? '0' : value)} 
            />
            
            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3', stroke: '#ddd' }} />
            
            <Line 
                type="monotone" 
                dataKey="value2" 
                stroke={LIGHT_BLUE} 
                strokeWidth={2}
                dot={{ r: 5, fill: LIGHT_BLUE, stroke: '#fff', strokeWidth: 2 }} 
                activeDot={{ r: 8, fill: LIGHT_BLUE, stroke: '#fff', strokeWidth: 3 }}
            />
        
            <Line 
                type="monotone" 
                dataKey="value1" 
                stroke={DARK_BLUE} 
                strokeWidth={2}
                dot={{ r: 5, fill: DARK_BLUE, stroke: '#fff', strokeWidth: 2 }} 
                activeDot={{ r: 8, fill: DARK_BLUE, stroke: '#fff', strokeWidth: 3 }}
            />
        </LineChart>
    );

    return (
        <div className="w-full !h-auto md:!h-[400px] bg-white">
            <div className="h-full overflow-x-auto md:hidden">
                <div className="h-full min-w-[700px]">
                    <ChartContent width={700} height={300} />
                </div>
            </div>

            <div className="hidden md:block h-full">
                <ResponsiveContainer width="100%" height="100%">
                    <ChartContent width="100%" height="100%" />
                </ResponsiveContainer>
            </div>
        </div>
    );
}