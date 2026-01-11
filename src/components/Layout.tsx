
import React from 'react';
import { NAVIGATION } from '../constants';
import { ViewType } from '../types';
import { HelpCircle } from 'lucide-react';
import icon from '../assets/icon.png';
interface LayoutProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentView, onViewChange, children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header */}
      <header className="bg-white shadow-sm px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img src={icon} alt="" className="h-8 sm:h-12" />
          <h1
            className="text-lg sm:text-2xl font-semibold uppercase inline
            bg-linear-to-b from-purple-600 to-indigo-600
            bg-clip-text text-transparent"
          >
            <span className="font-normal text-gray-800">Culture</span>telligence
          </h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-6">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
            <HelpCircle size={16} />
            <span>Innovate Co</span>
          </div>
          <img 
            src="https://picsum.photos/seed/user1/40/40" 
            alt="Profile" 
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full ring-2 ring-gray-50 object-cover"
          />
        </div>
      </header>

      {/* Sub-navigation */}
      <nav className="bg-white px-4 sm:px-6 sticky top-[57px] sm:top-[73px] z-40 overflow-x-auto mt-2 sm:mt-4 mb-2 sm:mb-4">
        <div className="flex items-center justify-start sm:justify-center gap-4 sm:gap-8 max-w-6xl mx-auto">
          {NAVIGATION.map((item) => (
            <button
              key={item.name}
              onClick={() => onViewChange(item.name)}
              className={`flex items-center gap-1 sm:gap-2 py-2 px-3 sm:px-5 transition-all text-xs sm:text-sm font-medium whitespace-nowrap rounded-lg ${
                currentView === item.name
                  ? 'bg-gray-200'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {item.icon}
              <span className="hidden sm:inline">{item.name}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1400px] mx-auto w-full px-4 sm:px-6 py-4 sm:py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
