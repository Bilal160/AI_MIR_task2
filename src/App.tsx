
import React, { useState } from 'react';
import Layout from './components/Layout';
import FilterBar from './components/FilterBar';
import { ViewType, type FilterState } from './types';
import CommentsView from './views/CommentsView';
import HeatmapView from './views/HeatmapView';
import PriorityMatrixView from './views/PriorityMatrixView';
import './App.css';
const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.COMMENTS_REPORT);
  const [filters, setFilters] = useState<FilterState>({
    location: 'All Locations',
    department: 'All Departments',
    gender: 'All Genders',
    tenure: 'All Tenures',
    age: 'All Ages',
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleApplyFilters = () => {
    console.log('Applying filters:', filters);
    // In a real app, this would trigger a data refetch
  };

  const handleExport = () => {
    console.log('Exporting data for:', currentView);
  };

  const renderContent = () => {
    switch (currentView) {
      case ViewType.COMMENTS_REPORT:
        return <CommentsView />;
      case ViewType.HEATMAP_VIEW:
        return <HeatmapView />;
      case ViewType.PRIORITY_MATRIX_VIEW:
        return <PriorityMatrixView />;
      case ViewType.EXECUTIVE_SUMMARY:
        return (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-gray-400 bg-white rounded-3xl border border-dashed border-gray-200">
            <h2 className="text-xl font-bold">Executive Summary View</h2>
            <p className="text-sm">This view provides high-level organizational insights. Currently in production.</p>
          </div>
        );
      case ViewType.STATEMENT_LEVEL_VIEW:
        return (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-gray-400 bg-white rounded-3xl border border-dashed border-gray-200">
            <h2 className="text-xl font-bold">Statement Level View</h2>
            <p className="text-sm">Deep dive into specific survey questions. Currently in production.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
      <FilterBar 
        filters={filters} 
        onFilterChange={handleFilterChange}
        onApply={handleApplyFilters}
        onExport={handleExport}
      />
      {renderContent()}
    </Layout>
  );
};

export default App;
