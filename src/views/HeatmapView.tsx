
import React from 'react';
import { mockDriverScores } from '../data/mockData';
import { getCorrelationColor } from '../utils/scoring';
import { TrendingUp, UserCheck, Heart } from 'lucide-react';

const HeatmapView: React.FC = () => {
  const outcomes = ['Discretionary Effort', 'Intent to Stay', 'Advocacy'];
  
  // Example top correlations logic
  const topCorrelations = [
    { 
      title: 'Discretionary Effort', 
      icon: <TrendingUp size={16} />, 
      drivers: [
        { name: 'Leadership', score: '+0.82' },
        { name: 'Purpose & Meaning', score: '+0.75' },
        { name: 'Recognition', score: '+0.68' },
        { name: 'Growth Opportunities', score: '+0.62' },
      ]
    },
    { 
      title: 'Intent to Stay', 
      icon: <Heart size={16} />, 
      drivers: [
        { name: 'Work-Life Balance', score: '+0.85' },
        { name: 'Feedback & Development', score: '+0.79' },
        { name: 'Leadership', score: '+0.71' },
        { name: 'Teamwork', score: '+0.65' },
      ]
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Heatmap View</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
        <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
          <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Engagement Driver Correlations</h4>
            <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-8">Visualizing the strength and direction of relationships between engagement drivers and outcome drivers.</p>
            
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="min-w-[600px] sm:min-w-0 px-4 sm:px-0">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="pb-4 font-normal text-gray-400 text-xs w-1/4"></th>
                    {outcomes.map(o => (
                      <th key={o} className="pb-4 text-center font-bold text-gray-700 text-xs px-2">{o}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  {mockDriverScores.slice(0, 10).map((driver) => (
                    <tr key={driver.name} className="group">
                      <td className="py-3 text-sm font-bold text-gray-600 border-b border-gray-50">{driver.name}</td>
                      <td className="p-1 border-b border-gray-50">
                        <div className={`py-3 rounded-lg text-center text-xs font-bold transition-all ${getCorrelationColor(driver.correlation.discretionaryEffort)}`}>
                          {driver.correlation.discretionaryEffort.toFixed(2)}
                        </div>
                      </td>
                      <td className="p-1 border-b border-gray-50">
                        <div className={`py-3 rounded-lg text-center text-xs font-bold transition-all ${getCorrelationColor(driver.correlation.intentToStay)}`}>
                          {driver.correlation.intentToStay.toFixed(2)}
                        </div>
                      </td>
                      <td className="p-1 border-b border-gray-50">
                        <div className={`py-3 rounded-lg text-center text-xs font-bold transition-all ${getCorrelationColor(driver.correlation.advocacy)}`}>
                          {driver.correlation.advocacy.toFixed(2)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 sm:mt-12 pt-4 sm:pt-8 border-t border-gray-100">
              <h5 className="text-xs font-bold text-gray-500 mb-3 sm:mb-4 uppercase tracking-wider">Correlation Strength Legend</h5>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {[
                  { label: 'Strong Positive', color: 'bg-[#7B61FF]' },
                  { label: 'Moderate Positive', color: 'bg-[#9884FF]' },
                  { label: 'Weak Positive', color: 'bg-[#D6CFFF]' },
                  { label: 'Neutral', color: 'bg-[#F1F5F9]' },
                  { label: 'Weak Negative', color: 'bg-[#FEE2E2]' },
                  { label: 'Moderate Negative', color: 'bg-[#FCA5A5]' },
                  { label: 'Strong Negative', color: 'bg-[#EF4444]' },
                ].map(l => (
                  <div key={l.label} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-sm ${l.color}`}></div>
                    <span className="text-[10px] font-medium text-gray-500">{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
          <h4 className="text-base sm:text-lg font-bold text-gray-800">Top Correlated Drivers</h4>
          {topCorrelations.map((group, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <div className="flex items-center gap-2 text-indigo-600">
                {group.icon}
                <h5 className="font-bold text-sm text-gray-800">{group.title}</h5>
              </div>
              <p className="text-[10px] text-gray-400">Drivers with the strongest impact.</p>
              <div className="space-y-3 pt-2">
                {group.drivers.map((d, di) => (
                  <div key={di} className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 font-medium">{d.name}</span>
                    <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded">{d.score}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
             <div className="flex items-center gap-2 text-indigo-600">
                <UserCheck size={16} />
                <h5 className="font-bold text-sm text-gray-800">Advocacy</h5>
              </div>
              <p className="text-[10px] text-gray-400">Drivers with the strongest impact.</p>
              <div className="space-y-3 pt-2">
                {[
                  { name: 'Communication', score: '+0.73' },
                  { name: 'Innovation', score: '+0.69' },
                  { name: 'Purpose & Meaning', score: '+0.60' },
                  { name: 'Work-Life Balance', score: '+0.55' },
                ].map((d, di) => (
                  <div key={di} className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 font-medium">{d.name}</span>
                    <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded">{d.score}</span>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatmapView;
