import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';
import { mockDriverScores } from '../data/mockData';

const PriorityMatrixView: React.FC = () => {
  const chartData = mockDriverScores.map((d, idx) => ({
    name: d.name,
    x: d.correlation.advocacy, 
    y: 1 - (d.netScore + 100) / 200, 
    color: [
      '#EF4444', '#3B82F6', '#10B981', '#F59E0B', 
      '#7B61FF', '#06B6D4', '#F43F5E', '#8B5CF6', 
      '#EC4899', '#2DD4BF', '#6366F1', '#D946EF'
    ][idx % 12]
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-100 shadow-xl rounded-lg">
          <p className="text-sm font-bold text-gray-800">{data.name}</p>
          <div className="text-[10px] text-gray-500 space-y-1 mt-1">
            <p>Correlation: {data.x.toFixed(2)}</p>
            <p>Net Score: {((1 - data.y) * 200 - 100).toFixed(0)}%</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in zoom-in-95 duration-500">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Priority Matrix</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
        <div className="lg:col-span-3 order-2 lg:order-1">
          <div className="bg-white p-4 sm:p-8 lg:p-12 rounded-2xl shadow-sm border border-gray-100 relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            {/* Quadrant Labels */}
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 lg:top-16 lg:left-16 z-0 pointer-events-none">
              <h5 className="font-bold text-gray-800 text-xs sm:text-sm">Keep Strong</h5>
              <p className="text-[9px] sm:text-[10px] text-gray-400">High Score, High Correlation</p>
            </div>
            <div className="absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-16 lg:right-16 z-0 pointer-events-none text-right">
              <h5 className="font-bold text-gray-800 text-xs sm:text-sm">Low Impact</h5>
              <p className="text-[9px] sm:text-[10px] text-gray-400">High Score, Low Correlation</p>
            </div>
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 lg:bottom-16 lg:left-16 z-0 pointer-events-none">
              <h5 className="font-bold text-gray-800 text-xs sm:text-sm">Priority Action</h5>
              <p className="text-[9px] sm:text-[10px] text-gray-400">Low Score, High Correlation</p>
            </div>
            <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 lg:bottom-16 lg:right-16 z-0 pointer-events-none text-right">
              <h5 className="font-bold text-gray-800 text-xs sm:text-sm">Reassess or Monitor</h5>
              <p className="text-[9px] sm:text-[10px] text-gray-400">Low Score, Low Correlation</p>
            </div>

            <div className="h-[350px] sm:h-[450px] lg:h-[500px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
                  <XAxis 
                    type="number" 
                    dataKey="x" 
                    name="Correlation" 
                    domain={[-1, 1]} 
                    tick={{fontSize: 9, fill: '#94a3b8'}} 
                    label={{ value: 'Driver correlation with advocacy', position: 'bottom', offset: 15, style: {fontSize: '10px', fill: '#64748b'} }}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="y" 
                    name="Score" 
                    domain={[0, 1]} 
                    tick={{fontSize: 9, fill: '#94a3b8'}}
                    label={{ value: 'Reversed Netscores', angle: -90, position: 'left', style: {fontSize: '10px', fill: '#64748b'} }}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                  <ReferenceLine x={0} stroke="#94a3b8" strokeDasharray="5 5" />
                  <ReferenceLine y={0.5} stroke="#94a3b8" strokeDasharray="5 5" />
                  <Scatter name="Drivers" data={chartData} fill="#8884d8">
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 lg:sticky lg:top-48">
            <h5 className="text-sm font-bold text-gray-800 mb-4 sm:mb-6">Drivers</h5>
            <div className="space-y-3 sm:space-y-4 max-h-[300px] sm:max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {chartData.map((d, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }}></div>
                  <span className="text-xs text-gray-600 font-medium">{d.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriorityMatrixView;
