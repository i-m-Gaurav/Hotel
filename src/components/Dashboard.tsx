import React from 'react';
import { TrendingUp, TrendingDown, Users, Home, DollarSign, Calendar, Phone, MapPin, Star, Clock } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Occupancy Rate',
      value: '87%',
      change: '+2.1%',
      trend: 'up',
      icon: Home,
      color: 'bg-blue-500',
      description: 'Current room occupancy'
    },
    {
      title: 'Available Rooms',
      value: '23',
      change: '-5',
      trend: 'down',
      icon: Home,
      color: 'bg-green-500',
      description: 'Ready for check-in'
    },
    {
      title: 'Revenue Today',
      value: '₹8,47,250',
      change: '+8.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-amber-500',
      description: 'Including taxes & services'
    },
    {
      title: 'Guests In House',
      value: '156',
      change: '+12',
      trend: 'up',
      icon: Users,
      color: 'bg-purple-500',
      description: 'Currently staying'
    },
    {
      title: 'ADR (Avg Daily Rate)',
      value: '₹4,850',
      change: '+3.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-indigo-500',
      description: 'Average room rate'
    },
    {
      title: 'RevPAR',
      value: '₹4,220',
      change: '+5.8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-emerald-500',
      description: 'Revenue per available room'
    }
  ];

  const upcomingArrivals = [
    { 
      name: 'Priya Sharma', 
      room: '205', 
      time: '2:00 PM', 
      guests: 2, 
      nights: 3,
      phone: '+91 98765 43210',
      city: 'Mumbai',
      vip: true,
      specialRequests: 'High floor, city view'
    },
    { 
      name: 'Rajesh Kumar', 
      room: '312', 
      time: '3:30 PM', 
      guests: 1, 
      nights: 2,
      phone: '+91 87654 32109',
      city: 'Delhi',
      vip: false,
      specialRequests: 'Late check-in'
    },
    { 
      name: 'Anita Patel', 
      room: '408', 
      time: '4:15 PM', 
      guests: 4, 
      nights: 5,
      phone: '+91 76543 21098',
      city: 'Ahmedabad',
      vip: true,
      specialRequests: 'Connecting rooms, vegetarian meals'
    },
    { 
      name: 'Vikram Singh', 
      room: '156', 
      time: '5:00 PM', 
      guests: 2, 
      nights: 1,
      phone: '+91 65432 10987',
      city: 'Jaipur',
      vip: false,
      specialRequests: 'Airport pickup arranged'
    },
  ];

  const pendingDepartures = [
    { 
      name: 'Deepika Reddy', 
      room: '203', 
      time: '11:00 AM', 
      bill: '₹28,450',
      phone: '+91 54321 09876',
      city: 'Bangalore',
      paymentStatus: 'Pending',
      incidentals: '₹2,450'
    },
    { 
      name: 'Arjun Mehta', 
      room: '309', 
      time: '12:00 PM', 
      bill: '₹45,890',
      phone: '+91 43210 98765',
      city: 'Pune',
      paymentStatus: 'Paid',
      incidentals: '₹5,890'
    },
    { 
      name: 'Kavya Nair', 
      room: '405', 
      time: '12:30 PM', 
      bill: '₹15,670',
      phone: '+91 32109 87654',
      city: 'Kochi',
      paymentStatus: 'Paid',
      incidentals: '₹1,670'
    },
  ];

  const recentActivities = [
    { time: '10:45 AM', action: 'Room 205 checked out', user: 'Ravi Kumar', type: 'checkout' },
    { time: '10:30 AM', action: 'New reservation created', user: 'Priya Singh', type: 'reservation' },
    { time: '10:15 AM', action: 'Room 312 maintenance completed', user: 'Maintenance Team', type: 'maintenance' },
    { time: '10:00 AM', action: 'VIP guest checked in', user: 'Anjali Sharma', type: 'checkin' },
    { time: '9:45 AM', action: 'Housekeeping completed Room 408', user: 'Cleaning Staff', type: 'housekeeping' }
  ];

  const weeklyRevenue = [
    { day: 'Mon', revenue: 125000, occupancy: 85 },
    { day: 'Tue', revenue: 135000, occupancy: 88 },
    { day: 'Wed', revenue: 142000, occupancy: 92 },
    { day: 'Thu', revenue: 138000, occupancy: 89 },
    { day: 'Fri', revenue: 155000, occupancy: 95 },
    { day: 'Sat', revenue: 168000, occupancy: 98 },
    { day: 'Sun', revenue: 145000, occupancy: 87 }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
          
          return (
            <div key={stat.title} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
                  <div className="flex items-center mt-2">
                    <TrendIcon className={`h-4 w-4 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                    <span className={`text-sm font-medium ml-1 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change}
                    </span>
                    <span className="text-gray-500 text-xs ml-1">vs yesterday</span>
                  </div>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Upcoming Arrivals */}
        <div className="xl:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Today's Arrivals</h3>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {upcomingArrivals.length} guests
              </span>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {upcomingArrivals.map((arrival, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <p className="font-semibold text-gray-900">{arrival.name}</p>
                        {arrival.vip && (
                          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                            <Star className="h-3 w-3 mr-1" />
                            VIP
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Home className="h-4 w-4 mr-2 text-gray-400" />
                          Room {arrival.room} • {arrival.guests} guests • {arrival.nights} nights
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-gray-400" />
                          {arrival.phone}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                          {arrival.city}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-400" />
                          Expected: {arrival.time}
                        </div>
                      </div>
                      {arrival.specialRequests && (
                        <div className="mt-2 p-2 bg-amber-50 rounded text-xs text-amber-800">
                          <strong>Special Requests:</strong> {arrival.specialRequests}
                        </div>
                      )}
                    </div>
                    <div className="text-right ml-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Expected
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'checkin' ? 'bg-green-500' :
                    activity.type === 'checkout' ? 'bg-blue-500' :
                    activity.type === 'reservation' ? 'bg-purple-500' :
                    activity.type === 'maintenance' ? 'bg-red-500' :
                    'bg-amber-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">by {activity.user}</p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Pending Departures */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Pending Departures</h3>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                {pendingDepartures.length} checkouts
              </span>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {pendingDepartures.map((departure, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{departure.name}</p>
                      <div className="grid grid-cols-1 gap-1 text-sm text-gray-600 mt-1">
                        <div className="flex items-center">
                          <Home className="h-4 w-4 mr-2 text-gray-400" />
                          Room {departure.room}
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-gray-400" />
                          {departure.phone}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                          {departure.city}
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Incidentals: {departure.incidentals}
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <p className="font-medium text-amber-600">{departure.time}</p>
                      <p className="text-sm font-semibold text-gray-900">{departure.bill}</p>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                        departure.paymentStatus === 'Paid' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {departure.paymentStatus}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Revenue Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Weekly Performance</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {weeklyRevenue.map((day, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900 w-8">{day.day}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 w-24">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${day.occupancy}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{day.occupancy}%</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">₹{(day.revenue / 1000).toFixed(0)}K</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Room Status Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Room Status Overview</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">23</span>
              </div>
              <p className="text-sm font-medium text-gray-900">Available</p>
              <p className="text-xs text-gray-600">Clean & Ready</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">87</span>
              </div>
              <p className="text-sm font-medium text-gray-900">Occupied</p>
              <p className="text-xs text-gray-600">Guest In Room</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">12</span>
              </div>
              <p className="text-sm font-medium text-gray-900">Dirty</p>
              <p className="text-xs text-gray-600">Need Cleaning</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">8</span>
              </div>
              <p className="text-sm font-medium text-gray-900">Maintenance</p>
              <p className="text-xs text-gray-600">Out of Order</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">5</span>
              </div>
              <p className="text-sm font-medium text-gray-900">Blocked</p>
              <p className="text-xs text-gray-600">Not Available</p>
            </div>
            <div className="text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <p className="text-sm font-medium text-gray-900">Out of Order</p>
              <p className="text-xs text-gray-600">Maintenance Required</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;