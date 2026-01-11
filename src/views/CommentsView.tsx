
import React from 'react';
import { mockComments } from '../data/mockData';
import { MessageSquare, ThumbsUp, ThumbsDown, MoreHorizontal } from 'lucide-react';

const CommentsView: React.FC = () => {
  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-500">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Comments Report</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {[
          { label: 'Total Comments', value: '1,248', change: '12%', up: true, icon: <MessageSquare size={20} />, color: 'bg-indigo-50 text-indigo-500' },
          { label: 'Positive Sentiment', value: '64%', change: '5%', up: true, icon: <ThumbsUp size={20} />, color: 'bg-green-50 text-green-500' },
          { label: 'Negative Sentiment', value: '14%', change: '2%', up: false, icon: <ThumbsDown size={20} />, color: 'bg-red-50 text-red-500' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-medium text-gray-500">{stat.label}</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">{stat.value}</h3>
              <p className={`text-xs font-semibold ${stat.up ? 'text-green-500' : 'text-red-500'}`}>
                {stat.up ? '↑' : '↓'} {stat.change} <span className="text-gray-400 font-normal">vs last cycle</span>
              </p>
            </div>
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Visualizations Left */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          {/* Word Cloud Placeholder */}
          <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-sm border border-gray-100 min-h-[300px] sm:min-h-[400px]">
            <h4 className="text-base sm:text-lg font-bold text-gray-700 mb-4 sm:mb-8">Sentiment Word Cloud</h4>
            <div className="relative h-[200px] sm:h-[300px] flex items-center justify-center overflow-hidden">
              <span className="text-3xl sm:text-6xl font-bold text-indigo-500/80 absolute -top-4 left-1/4">Flexibility</span>
              <span className="text-2xl sm:text-4xl font-bold text-gray-600 absolute top-10 right-10">Communication</span>
              <span className="text-2xl sm:text-5xl font-bold text-indigo-400/70 absolute bottom-1/3 left-10">Management</span>
              <span className="text-3xl sm:text-6xl font-bold text-red-400/60 absolute bottom-4 right-8">Salary</span>
              <span className="text-xl sm:text-3xl font-bold text-red-400 absolute bottom-1/2 right-1/4">Workload</span>
              <span className="text-lg sm:text-2xl font-bold text-blue-400 absolute top-2 right-1/2">Culture</span>
              <span className="text-xl sm:text-3xl font-bold text-indigo-400 absolute bottom-2 left-1/3">Transparency</span>
              <span className="text-lg sm:text-2xl font-bold text-gray-500 absolute top-1/4 right-1/3">Recognition</span>
              <span className="text-lg sm:text-2xl font-bold text-red-400 absolute bottom-1/4 left-4">Rewards</span>
              <span className="text-xl sm:text-3xl font-bold text-indigo-300 absolute top-1/2 left-1/2">Growth</span>
            </div>
          </div>

          {/* Theme Overview Placeholder */}
          <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="text-base sm:text-lg font-bold text-gray-700 mb-2">Theme Overview</h4>
            <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-8">Visualizing the relationship and volume of top discussion themes.</p>
            <div className="flex items-center justify-center h-48 sm:h-64 gap-4 sm:gap-8 overflow-x-auto">
               <div className="relative w-full h-full flex items-center justify-around min-w-[400px] sm:min-w-0">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-red-200 bg-red-50 flex items-center justify-center text-[10px] sm:text-xs font-bold text-gray-700 text-center p-2">WorkLoad</div>
                  <div className="w-18 h-18 sm:w-24 sm:h-24 rounded-full border-2 border-indigo-200 bg-indigo-50 flex items-center justify-center text-[10px] sm:text-xs font-bold text-gray-700 text-center p-2">Leadership</div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-red-200 bg-red-50 flex items-center justify-center text-[10px] sm:text-xs font-bold text-gray-700 text-center p-2">Rewards</div>
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-red-200 bg-red-50 flex items-center justify-center text-[10px] sm:text-xs font-bold text-gray-700 text-center p-2">Compensation</div>
               </div>
            </div>
          </div>
        </div>

        {/* Recent Comments Right */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <h4 className="text-base sm:text-lg font-bold text-gray-800">Recent Comments</h4>
            <div className="flex bg-gray-100 p-1 rounded-lg w-full sm:w-auto">
              {['all', 'positive', 'negative'].map(f => (
                <button key={f} className={`flex-1 sm:flex-none px-3 py-1 text-xs font-bold rounded-md capitalize ${f === 'all' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-400 hover:text-gray-600'}`}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 h-[400px] sm:h-[750px] overflow-y-auto pr-2 custom-scrollbar">
            {mockComments.map(comment => (
              <div key={comment.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4 hover:border-indigo-200 transition-colors group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      comment.sentiment === 'positive' ? 'bg-green-100 text-green-600' :
                      comment.sentiment === 'negative' ? 'bg-red-100 text-red-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {comment.sentiment}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <span className="inline-block w-1 h-1 bg-gray-300 rounded-full"></span>
                      {comment.timestamp}
                    </span>
                  </div>
                  <button className="text-gray-300 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
                
                <p className="text-sm leading-relaxed text-gray-700 italic">"{comment.text}"</p>
                
                <div className="pt-4 border-t border-gray-50 space-y-2">
                  <div className="flex items-center gap-2 text-indigo-600">
                    <MessageSquare size={12} />
                    <span className="text-xs font-bold">{comment.driver}</span>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-tight">Ref: {comment.referenceStatement}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-3 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors">View More</button>
        </div>
      </div>
    </div>
  );
};

export default CommentsView;
