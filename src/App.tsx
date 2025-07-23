import React, { useState } from 'react';
import { Hotel, Users, Calendar, CreditCard, RectangleVertical as CleaningServices, BarChart3, Eye } from 'lucide-react';
import Dashboard from './components/Dashboard';
import GuestManagement from './components/GuestManagement';
import RoomManagement from './components/RoomManagement';
import Reservations from './components/Reservations';
import CheckInOut from './components/CheckInOut';
import Housekeeping from './components/Housekeeping';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'guests', label: 'Guests', icon: Users },
    { id: 'rooms', label: 'Rooms', icon: Hotel },
    { id: 'reservations', label: 'Reservations', icon: Calendar },
    { id: 'checkinout', label: 'Check In/Out', icon: CreditCard },
    { id: 'housekeeping', label: 'Housekeeping', icon: CleaningServices },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'guests':
        return <GuestManagement />;
      case 'rooms':
        return <RoomManagement />;
      case 'reservations':
        return <Reservations />;
      case 'checkinout':
        return <CheckInOut />;
      case 'housekeeping':
        return <Housekeeping />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Hotel className="h-8 w-8 text-amber-400" />
              <h1 className="text-2xl font-bold">Taj Palace Hotel - PMS</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-200">Ravi Kumar - Front Desk Manager</span>
              <div className="h-8 w-8 bg-amber-400 rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-semibold text-sm">RK</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-6">
          <div className="flex space-x-0">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 border-b-2 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-amber-400 text-blue-900 bg-amber-50'
                      : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;