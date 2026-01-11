
import React from 'react';
import { FILTER_OPTIONS } from '../constants';
import { type FilterState } from '../types';
import { Download } from 'lucide-react';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
  onApply: () => void;
  onExport: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange, onApply, onExport }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-end gap-4 mb-6 sm:mb-8 bg-white/50 p-2 sm:p-1 rounded-xl">
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 flex-1">
        {(Object.entries(FILTER_OPTIONS) as [keyof FilterState, string[]][]).map(([key, options]) => (
          <div key={key} className="flex flex-col gap-1.5 sm:min-w-[160px]">
            <label className="text-xs font-semibold text-gray-500 capitalize px-1">{key}</label>
            <select
              value={filters[key]}
              onChange={(e) => onFilterChange(key, e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:min-w-[160px] shadow-sm"
            >
              {options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:ml-auto w-full sm:w-auto">
        <button
          onClick={onApply}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors shadow-md shadow-indigo-100 w-full sm:w-auto"
        >
          Apply Filters
        </button>
        <button
          onClick={onExport}
          className="flex items-center justify-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full sm:w-auto"
        >
          <Download size={16} />
          Export
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
