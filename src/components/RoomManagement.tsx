import React, { useState } from 'react';
import { Search, Filter, Bed, Wifi, Coffee, Car, Tv, Home, Thermometer, Bath, Users, Star, AlertTriangle } from 'lucide-react';

const RoomManagement = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      number: '101',
      type: 'Deluxe King',
      floor: 1,
      status: 'Available',
      guest: null,
      checkIn: null,
      checkOut: null,
      rate: 12500,
      maxOccupancy: 2,
      amenities: ['wifi', 'tv', 'coffee', 'ac', 'minibar'],
      lastCleaned: '2024-12-15 10:30 AM',
      housekeepingNotes: 'Deep cleaned, fresh flowers added',
      roomFeatures: ['King bed', 'City view', 'Work desk', 'Safe'],
      size: '350 sq ft',
      bedType: 'King',
      view: 'City View',
      smokingPolicy: 'Non-smoking',
      maintenanceHistory: []
    },
    {
      number: '102',
      type: 'Superior Queen',
      floor: 1,
      status: 'Occupied',
      guest: 'Priya Sharma',
      guestPhone: '+91 98765 43210',
      checkIn: '2024-12-14',
      checkOut: '2024-12-17',
      rate: 10500,
      maxOccupancy: 2,
      amenities: ['wifi', 'tv', 'ac', 'minibar'],
      lastCleaned: '2024-12-14 11:00 AM',
      housekeepingNotes: 'VIP guest - extra amenities provided',
      roomFeatures: ['Queen bed', 'Garden view', 'Balcony'],
      size: '320 sq ft',
      bedType: 'Queen',
      view: 'Garden View',
      smokingPolicy: 'Non-smoking',
      maintenanceHistory: [],
      guestPreferences: ['Vegetarian meals', 'Late checkout', 'Extra pillows']
    },
    {
      number: '205',
      type: 'Executive Suite',
      floor: 2,
      status: 'Dirty',
      guest: null,
      checkIn: null,
      checkOut: '2024-12-15',
      rate: 18500,
      maxOccupancy: 4,
      amenities: ['wifi', 'tv', 'coffee', 'parking', 'ac', 'minibar', 'jacuzzi'],
      lastCleaned: null,
      housekeepingNotes: 'Checkout cleaning needed - guest extended stay',
      roomFeatures: ['Separate living area', 'Dining table', 'Premium bathroom', 'City view'],
      size: '650 sq ft',
      bedType: 'King + Sofa bed',
      view: 'City View',
      smokingPolicy: 'Non-smoking',
      maintenanceHistory: []
    },
    {
      number: '312',
      type: 'Premium Suite',
      floor: 3,
      status: 'Maintenance',
      guest: null,
      checkIn: null,
      checkOut: null,
      rate: 25500,
      maxOccupancy: 4,
      amenities: ['wifi', 'tv', 'coffee', 'parking', 'ac', 'minibar', 'jacuzzi'],
      lastCleaned: '2024-12-14 9:00 AM',
      housekeepingNotes: 'AC unit repair scheduled for tomorrow',
      roomFeatures: ['Master bedroom', 'Living room', 'Kitchenette', 'Premium view'],
      size: '800 sq ft',
      bedType: 'King + Twin',
      view: 'Premium View',
      smokingPolicy: 'Non-smoking',
      maintenanceHistory: [
        { date: '2024-12-15', issue: 'AC not cooling properly', status: 'In Progress', technician: 'Ravi Kumar' }
      ]
    },
    {
      number: '408',
      type: 'Presidential Suite',
      floor: 4,
      status: 'Occupied',
      guest: 'Anita Patel',
      guestPhone: '+91 76543 21098',
      checkIn: '2024-12-13',
      checkOut: '2024-12-18',
      rate: 45000,
      maxOccupancy: 6,
      amenities: ['wifi', 'tv', 'coffee', 'parking', 'ac', 'minibar', 'jacuzzi', 'butler'],
      lastCleaned: '2024-12-13 12:00 PM',
      housekeepingNotes: 'VIP service - daily fresh flowers, premium amenities',
      roomFeatures: ['Master bedroom', 'Guest bedroom', 'Living room', 'Dining area', 'Pantry', 'Terrace'],
      size: '1200 sq ft',
      bedType: 'King + Queen',
      view: 'Panoramic View',
      smokingPolicy: 'Non-smoking',
      maintenanceHistory: [],
      guestPreferences: ['Jain meals', 'Connecting rooms', 'Airport transfer', 'Daily newspaper']
    },
    {
      number: '501',
      type: 'Standard Twin',
      floor: 5,
      status: 'Available',
      guest: null,
      checkIn: null,
      checkOut: null,
      rate: 8500,
      maxOccupancy: 2,
      amenities: ['wifi', 'tv', 'ac'],
      lastCleaned: '2024-12-15 2:00 PM',
      housekeepingNotes: 'Ready for next guest',
      roomFeatures: ['Twin beds', 'Work desk', 'City view'],
      size: '280 sq ft',
      bedType: 'Twin',
      view: 'City View',
      smokingPolicy: 'Non-smoking',
      maintenanceHistory: []
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Occupied':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Dirty':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Maintenance':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Blocked':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case 'wifi':
        return <Wifi className="h-4 w-4" title="WiFi" />;
      case 'tv':
        return <Tv className="h-4 w-4" title="Television" />;
      case 'coffee':
        return <Coffee className="h-4 w-4" title="Coffee/Tea" />;
      case 'parking':
        return <Car className="h-4 w-4" title="Parking" />;
      case 'ac':
        return <Thermometer className="h-4 w-4" title="Air Conditioning" />;
      case 'minibar':
        return <Home className="h-4 w-4" title="Minibar" />;
      case 'jacuzzi':
        return <Bath className="h-4 w-4" title="Jacuzzi" />;
      case 'butler':
        return <Users className="h-4 w-4" title="Butler Service" />;
      default:
        return <Home className="h-4 w-4" />;
    }
  };

  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.number.includes(searchTerm) || 
                         room.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (room.guest && room.guest.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterStatus === 'all' || room.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const statusCounts = {
    all: rooms.length,
    Available: rooms.filter(r => r.status === 'Available').length,
    Occupied: rooms.filter(r => r.status === 'Occupied').length,
    Dirty: rooms.filter(r => r.status === 'Dirty').length,
    Maintenance: rooms.filter(r => r.status === 'Maintenance').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Room Management</h2>
        <p className="text-gray-600">Monitor and manage room status, assignments, and maintenance</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(statusCounts).map(([status, count]) => (
          <div
            key={status}
            className={`bg-white rounded-lg border-2 cursor-pointer transition-all p-4 text-center ${
              filterStatus === status ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setFilterStatus(status)}
          >
            <div className="text-2xl font-bold text-gray-900">{count}</div>
            <div className="text-sm text-gray-600 capitalize">
              {status === 'all' ? 'Total Rooms' : status}
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by room number, type, or guest name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Rooms</option>
              <option value="Available">Available</option>
              <option value="Occupied">Occupied</option>
              <option value="Dirty">Dirty</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>
        </div>
      </div>

      {/* Room Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredRooms.map((room) => (
          <div key={room.number} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            {/* Room Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bed className="h-5 w-5 text-gray-400" />
                  <span className="text-lg font-bold text-gray-900">#{room.number}</span>
                  {room.type.includes('Presidential') && (
                    <Star className="h-4 w-4 text-amber-500" />
                  )}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(room.status)}`}>
                  {room.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{room.type} • Floor {room.floor}</p>
              <p className="text-xs text-gray-500">{room.size} • {room.bedType} • {room.view}</p>
            </div>

            {/* Room Details */}
            <div className="p-4 space-y-3">
              {/* Guest Info */}
              {room.guest ? (
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">{room.guest}</p>
                  <div className="text-xs text-blue-700 mt-1 space-y-1">
                    <p>Check-in: {room.checkIn}</p>
                    <p>Check-out: {room.checkOut}</p>
                    {room.guestPhone && <p>Phone: {room.guestPhone}</p>}
                  </div>
                  {room.guestPreferences && (
                    <div className="mt-2">
                      <p className="text-xs font-medium text-blue-800">Preferences:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {room.guestPreferences.slice(0, 2).map((pref, index) => (
                          <span key={index} className="bg-blue-200 text-blue-800 px-1 py-0.5 rounded text-xs">
                            {pref}
                          </span>
                        ))}
                        {room.guestPreferences.length > 2 && (
                          <span className="text-xs text-blue-600">+{room.guestPreferences.length - 2} more</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">No current guest</p>
                  {room.checkOut && (
                    <p className="text-xs text-gray-500">Last checkout: {room.checkOut}</p>
                  )}
                </div>
              )}

              {/* Rate and Occupancy */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Rate per night:</span>
                <span className="font-semibold text-gray-900">₹{room.rate.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Max occupancy:</span>
                <span className="text-sm text-gray-900">{room.maxOccupancy} guests</span>
              </div>

              {/* Room Features */}
              <div>
                <p className="text-xs text-gray-500 mb-2">Room Features:</p>
                <div className="flex flex-wrap gap-1">
                  {room.roomFeatures.slice(0, 3).map((feature, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                  {room.roomFeatures.length > 3 && (
                    <span className="text-xs text-gray-500">+{room.roomFeatures.length - 3}</span>
                  )}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <p className="text-xs text-gray-500 mb-2">Amenities:</p>
                <div className="flex flex-wrap gap-2">
                  {room.amenities.map((amenity) => (
                    <div key={amenity} className="p-1 bg-gray-100 rounded text-gray-600" title={amenity}>
                      {getAmenityIcon(amenity)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Maintenance Issues */}
              {room.maintenanceHistory.length > 0 && (
                <div className="bg-red-50 p-2 rounded">
                  <div className="flex items-center text-red-800 text-xs">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    <span>Maintenance Required</span>
                  </div>
                  {room.maintenanceHistory.map((issue, index) => (
                    <p key={index} className="text-xs text-red-700 mt-1">{issue.issue}</p>
                  ))}
                </div>
              )}

              {/* Housekeeping Info */}
              <div className="border-t border-gray-200 pt-3">
                <p className="text-xs text-gray-500">
                  Last cleaned: {room.lastCleaned || 'Not cleaned'}
                </p>
                {room.housekeepingNotes && (
                  <p className="text-xs text-amber-600 mt-1">{room.housekeepingNotes}</p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex space-x-2">
                <button 
                  onClick={() => setSelectedRoom(room)}
                  className="flex-1 px-3 py-2 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                >
                  Details
                </button>
                <button className="flex-1 px-3 py-2 text-xs bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors">
                  Assign
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Room Details Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Room {selectedRoom.number} Details</h3>
              <button
                onClick={() => setSelectedRoom(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Room Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 border-b pb-2">Room Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Room Number</label>
                    <p className="text-gray-900">#{selectedRoom.number}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Room Type</label>
                    <p className="text-gray-900">{selectedRoom.type}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Floor</label>
                    <p className="text-gray-900">{selectedRoom.floor}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Size</label>
                    <p className="text-gray-900">{selectedRoom.size}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Bed Type</label>
                    <p className="text-gray-900">{selectedRoom.bedType}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">View</label>
                    <p className="text-gray-900">{selectedRoom.view}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Max Occupancy</label>
                    <p className="text-gray-900">{selectedRoom.maxOccupancy} guests</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Rate per Night</label>
                    <p className="text-gray-900">₹{selectedRoom.rate.toLocaleString()}</p>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Room Features</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedRoom.roomFeatures.map((feature, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Amenities</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedRoom.amenities.map((amenity, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs flex items-center">
                        {getAmenityIcon(amenity)}
                        <span className="ml-1 capitalize">{amenity}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Current Status & Guest Info */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 border-b pb-2">Current Status</h4>
                <div>
                  <label className="text-sm font-medium text-gray-600">Status</label>
                  <div className="mt-1">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedRoom.status)}`}>
                      {selectedRoom.status}
                    </span>
                  </div>
                </div>

                {selectedRoom.guest && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-medium text-blue-900 mb-2">Current Guest</h5>
                    <div className="space-y-2">
                      <p className="text-blue-800">{selectedRoom.guest}</p>
                      <p className="text-sm text-blue-700">Phone: {selectedRoom.guestPhone}</p>
                      <p className="text-sm text-blue-700">Check-in: {selectedRoom.checkIn}</p>
                      <p className="text-sm text-blue-700">Check-out: {selectedRoom.checkOut}</p>
                      {selectedRoom.guestPreferences && (
                        <div>
                          <p className="text-sm font-medium text-blue-800">Guest Preferences:</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {selectedRoom.guestPreferences.map((pref, index) => (
                              <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">
                                {pref}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium text-gray-600">Housekeeping Status</label>
                  <p className="text-gray-900 mt-1">Last cleaned: {selectedRoom.lastCleaned || 'Not cleaned'}</p>
                  {selectedRoom.housekeepingNotes && (
                    <p className="text-sm text-amber-600 mt-1">{selectedRoom.housekeepingNotes}</p>
                  )}
                </div>

                {selectedRoom.maintenanceHistory.length > 0 && (
                  <div>
                    <label className="text-sm font-medium text-gray-600">Maintenance Issues</label>
                    <div className="mt-2 space-y-2">
                      {selectedRoom.maintenanceHistory.map((issue, index) => (
                        <div key={index} className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                          <p className="text-sm font-medium text-red-800">{issue.issue}</p>
                          <p className="text-xs text-red-600">Status: {issue.status}</p>
                          <p className="text-xs text-red-600">Technician: {issue.technician}</p>
                          <p className="text-xs text-red-600">Date: {issue.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setSelectedRoom(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Edit Room
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomManagement;