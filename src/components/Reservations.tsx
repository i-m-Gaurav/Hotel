import React, { useState } from 'react';
import { Calendar, Search, Plus, Edit, X, User, Phone, Mail, Building, CreditCard, Star, MapPin, Eye } from 'lucide-react';

const Reservations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showNewReservation, setShowNewReservation] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

  const reservations = [
    {
      id: 'RES-001',
      guestName: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 98765 43210',
      address: 'Mumbai, Maharashtra',
      company: 'Tech Solutions Pvt Ltd',
      gstNumber: '27ABCDE1234F1Z5',
      roomType: 'Executive Suite',
      roomNumber: '205',
      checkIn: '2024-12-14',
      checkOut: '2024-12-17',
      nights: 3,
      adults: 2,
      children: 0,
      rate: 18500,
      baseAmount: 55500,
      taxes: 9990,
      total: 65490,
      status: 'Confirmed',
      source: 'Direct',
      created: '2024-12-01',
      paymentStatus: 'Advance Paid',
      advancePaid: 20000,
      specialRequests: 'High floor, city view, vegetarian meals',
      vipStatus: 'Gold',
      arrivalTime: '2:00 PM',
      departureTime: '12:00 PM'
    },
    {
      id: 'RES-002',
      guestName: 'Rajesh Kumar',
      email: 'rajesh.kumar@email.com',
      phone: '+91 87654 32109',
      address: 'New Delhi, Delhi',
      company: 'Kumar Industries',
      gstNumber: '07FGHIJ5678K2L6',
      roomType: 'Premium Suite',
      roomNumber: '312',
      checkIn: '2024-12-16',
      checkOut: '2024-12-18',
      nights: 2,
      adults: 1,
      children: 0,
      rate: 25500,
      baseAmount: 51000,
      taxes: 9180,
      total: 60180,
      status: 'Pending',
      source: 'MakeMyTrip',
      created: '2024-12-05',
      paymentStatus: 'Pending',
      advancePaid: 0,
      specialRequests: 'Late check-in, business center access',
      vipStatus: 'Silver',
      arrivalTime: '8:00 PM',
      departureTime: '11:00 AM'
    },
    {
      id: 'RES-003',
      guestName: 'Anita Patel',
      email: 'anita.patel@email.com',
      phone: '+91 76543 21098',
      address: 'Ahmedabad, Gujarat',
      company: 'Patel Textiles Ltd',
      gstNumber: '24MNOPQ9012R3S7',
      roomType: 'Presidential Suite',
      roomNumber: '408',
      checkIn: '2024-12-13',
      checkOut: '2024-12-18',
      nights: 5,
      adults: 4,
      children: 0,
      rate: 45000,
      baseAmount: 225000,
      taxes: 40500,
      total: 265500,
      status: 'Checked In',
      source: 'Direct',
      created: '2024-11-28',
      paymentStatus: 'Full Payment',
      advancePaid: 265500,
      specialRequests: 'Jain meals, connecting rooms, airport transfer, daily newspaper',
      vipStatus: 'Platinum',
      arrivalTime: '4:00 PM',
      departureTime: '12:00 PM'
    },
    {
      id: 'RES-004',
      guestName: 'Vikram Singh',
      email: 'vikram.singh@email.com',
      phone: '+91 65432 10987',
      address: 'Jaipur, Rajasthan',
      company: 'Heritage Hotels',
      gstNumber: '08TUVWX3456Y4Z8',
      roomType: 'Superior Queen',
      roomNumber: '156',
      checkIn: '2024-12-20',
      checkOut: '2024-12-21',
      nights: 1,
      adults: 2,
      children: 0,
      rate: 10500,
      baseAmount: 10500,
      taxes: 1890,
      total: 12390,
      status: 'Confirmed',
      source: 'Goibibo',
      created: '2024-12-10',
      paymentStatus: 'Advance Paid',
      advancePaid: 5000,
      specialRequests: 'Traditional Rajasthani cuisine, cultural tour information',
      vipStatus: 'Regular',
      arrivalTime: '3:00 PM',
      departureTime: '11:00 AM'
    },
    {
      id: 'RES-005',
      guestName: 'Deepika Reddy',
      email: 'deepika.reddy@email.com',
      phone: '+91 54321 09876',
      address: 'Bangalore, Karnataka',
      company: 'IT Solutions Bangalore',
      gstNumber: '29ABCDE6789F5G0',
      roomType: 'Deluxe King',
      roomNumber: '101',
      checkIn: '2024-12-22',
      checkOut: '2024-12-25',
      nights: 3,
      adults: 2,
      children: 1,
      rate: 12500,
      baseAmount: 37500,
      taxes: 6750,
      total: 44250,
      status: 'Confirmed',
      source: 'Direct',
      created: '2024-12-08',
      paymentStatus: 'Advance Paid',
      advancePaid: 15000,
      specialRequests: 'Extra bed for child, South Indian breakfast, spa services',
      vipStatus: 'Gold',
      arrivalTime: '2:30 PM',
      departureTime: '12:00 PM'
    }
  ];

  const getStatusBadge = (status) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case 'Confirmed':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'Pending':
        return `${baseClasses} bg-amber-100 text-amber-800`;
      case 'Checked In':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'Cancelled':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'No Show':
        return `${baseClasses} bg-gray-100 text-gray-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const getPaymentBadge = (paymentStatus) => {
    const baseClasses = "px-2 py-1 rounded text-xs font-medium";
    switch (paymentStatus) {
      case 'Full Payment':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'Advance Paid':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'Pending':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const getSourceBadge = (source) => {
    const baseClasses = "px-2 py-1 rounded text-xs font-medium";
    switch (source) {
      case 'Direct':
        return `${baseClasses} bg-purple-100 text-purple-800`;
      case 'MakeMyTrip':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'Goibibo':
        return `${baseClasses} bg-orange-100 text-orange-800`;
      case 'Booking.com':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const getVipBadge = (vipStatus) => {
    const baseClasses = "px-2 py-1 rounded text-xs font-medium flex items-center";
    switch (vipStatus) {
      case 'Platinum':
        return `${baseClasses} bg-purple-100 text-purple-800`;
      case 'Gold':
        return `${baseClasses} bg-amber-100 text-amber-800`;
      case 'Silver':
        return `${baseClasses} bg-gray-100 text-gray-800`;
      default:
        return `${baseClasses} bg-blue-100 text-blue-800`;
    }
  };

  const filteredReservations = reservations.filter(reservation => {
    const matchesSearch = 
      reservation.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.roomNumber.includes(searchTerm) ||
      reservation.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || reservation.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusCounts = {
    all: reservations.length,
    Confirmed: reservations.filter(r => r.status === 'Confirmed').length,
    Pending: reservations.filter(r => r.status === 'Pending').length,
    'Checked In': reservations.filter(r => r.status === 'Checked In').length,
    Cancelled: reservations.filter(r => r.status === 'Cancelled').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Reservations Management</h2>
          <p className="text-gray-600">Manage guest reservations, bookings, and modifications</p>
        </div>
        <button
          onClick={() => setShowNewReservation(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>New Reservation</span>
        </button>
      </div>

      {/* Status Filter */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(statusCounts).map(([status, count]) => (
          <div
            key={status}
            className={`bg-white rounded-lg border-2 cursor-pointer transition-all p-4 text-center ${
              statusFilter === status ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setStatusFilter(status)}
          >
            <div className="text-2xl font-bold text-gray-900">{count}</div>
            <div className="text-sm text-gray-600 capitalize">
              {status === 'all' ? 'All Reservations' : status}
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
              placeholder="Search by guest name, reservation ID, room number, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Reservations List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Reservations ({filteredReservations.length})
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reservation Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guest Information
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stay Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Room & Pricing
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredReservations.map((reservation) => (
                <tr key={reservation.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{reservation.id}</div>
                      <div className="text-sm text-gray-500">Created: {reservation.created}</div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={getSourceBadge(reservation.source)}>
                          {reservation.source}
                        </span>
                        <span className={getVipBadge(reservation.vipStatus)}>
                          {reservation.vipStatus === 'Platinum' && <Star className="h-3 w-3 mr-1" />}
                          {reservation.vipStatus}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900 flex items-center">
                        <User className="h-4 w-4 mr-2 text-gray-400" />
                        {reservation.guestName}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <Mail className="h-3 w-3 mr-1 text-gray-400" />
                        {reservation.email}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Phone className="h-3 w-3 mr-1 text-gray-400" />
                        {reservation.phone}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                        {reservation.address}
                      </div>
                      {reservation.company && (
                        <div className="text-xs text-blue-600 flex items-center mt-1">
                          <Building className="h-3 w-3 mr-1" />
                          {reservation.company}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        {reservation.checkIn} to {reservation.checkOut}
                      </div>
                      <div className="text-gray-500 mt-1">
                        {reservation.nights} nights • {reservation.adults} adults
                        {reservation.children > 0 && ` • ${reservation.children} children`}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Arrival: {reservation.arrivalTime} | Departure: {reservation.departureTime}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">#{reservation.roomNumber}</div>
                      <div className="text-sm text-gray-500">{reservation.roomType}</div>
                      <div className="text-sm text-gray-500">₹{reservation.rate.toLocaleString()}/night</div>
                      <div className="text-xs text-gray-400 mt-1">
                        Base: ₹{reservation.baseAmount.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-400">
                        Tax: ₹{reservation.taxes.toLocaleString()}
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        Total: ₹{reservation.total.toLocaleString()}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <span className={getPaymentBadge(reservation.paymentStatus)}>
                        {reservation.paymentStatus}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Advance: ₹{reservation.advancePaid.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">
                        Balance: ₹{(reservation.total - reservation.advancePaid).toLocaleString()}
                      </div>
                      {reservation.gstNumber && (
                        <div className="text-xs text-blue-600 mt-1">
                          GST: {reservation.gstNumber}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={getStatusBadge(reservation.status)}>
                      {reservation.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setSelectedReservation(reservation)}
                        className="text-blue-600 hover:text-blue-800 p-1" 
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-amber-600 hover:text-amber-800 p-1" title="Edit">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800 p-1" title="Cancel">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reservation Details Modal */}
      {selectedReservation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Reservation Details - {selectedReservation.id}</h3>
              <button
                onClick={() => setSelectedReservation(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Guest Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 border-b pb-2">Guest Information</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Guest Name</label>
                    <p className="text-gray-900">{selectedReservation.guestName}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Email</label>
                      <p className="text-gray-900">{selectedReservation.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Phone</label>
                      <p className="text-gray-900">{selectedReservation.phone}</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Address</label>
                    <p className="text-gray-900">{selectedReservation.address}</p>
                  </div>
                  {selectedReservation.company && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Company</label>
                        <p className="text-gray-900">{selectedReservation.company}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">GST Number</label>
                        <p className="text-gray-900">{selectedReservation.gstNumber}</p>
                      </div>
                    </div>
                  )}
                  <div>
                    <label className="text-sm font-medium text-gray-600">VIP Status</label>
                    <div className="mt-1">
                      <span className={getVipBadge(selectedReservation.vipStatus)}>
                        {selectedReservation.vipStatus === 'Platinum' && <Star className="h-3 w-3 mr-1" />}
                        {selectedReservation.vipStatus}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reservation Details */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 border-b pb-2">Reservation Details</h4>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Check-in</label>
                      <p className="text-gray-900">{selectedReservation.checkIn}</p>
                      <p className="text-xs text-gray-500">{selectedReservation.arrivalTime}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Check-out</label>
                      <p className="text-gray-900">{selectedReservation.checkOut}</p>
                      <p className="text-xs text-gray-500">{selectedReservation.departureTime}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Nights</label>
                      <p className="text-gray-900">{selectedReservation.nights}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Adults</label>
                      <p className="text-gray-900">{selectedReservation.adults}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Children</label>
                      <p className="text-gray-900">{selectedReservation.children}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Room Number</label>
                      <p className="text-gray-900">#{selectedReservation.roomNumber}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Room Type</label>
                      <p className="text-gray-900">{selectedReservation.roomType}</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Special Requests</label>
                    <p className="text-gray-900">{selectedReservation.specialRequests}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Source</label>
                      <span className={getSourceBadge(selectedReservation.source)}>
                        {selectedReservation.source}
                      </span>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Status</label>
                      <div className="mt-1">
                        <span className={getStatusBadge(selectedReservation.status)}>
                          {selectedReservation.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Billing Information */}
              <div className="lg:col-span-2 space-y-4">
                <h4 className="font-semibold text-gray-900 border-b pb-2">Billing Information</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Room Rate (per night)</label>
                      <p className="text-lg font-semibold text-gray-900">₹{selectedReservation.rate.toLocaleString()}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Base Amount</label>
                      <p className="text-lg font-semibold text-gray-900">₹{selectedReservation.baseAmount.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">{selectedReservation.nights} nights × ₹{selectedReservation.rate.toLocaleString()}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Taxes & Fees</label>
                      <p className="text-lg font-semibold text-gray-900">₹{selectedReservation.taxes.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">GST @ 18%</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-300 mt-4 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Total Amount</span>
                      <span className="text-2xl font-bold text-gray-900">₹{selectedReservation.total.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Advance Paid</label>
                      <p className="text-lg font-semibold text-green-600">₹{selectedReservation.advancePaid.toLocaleString()}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Balance Due</label>
                      <p className="text-lg font-semibold text-red-600">₹{(selectedReservation.total - selectedReservation.advancePaid).toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className={getPaymentBadge(selectedReservation.paymentStatus)}>
                      {selectedReservation.paymentStatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setSelectedReservation(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors">
                Edit Reservation
              </button>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Print Voucher
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Reservation Modal */}
      {showNewReservation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Create New Reservation</h3>
              <button
                onClick={() => setShowNewReservation(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Guest Information */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Guest Information</h4>
                <input type="text" placeholder="Guest Name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="email" placeholder="Email Address" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="tel" placeholder="Phone Number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <textarea placeholder="Complete Address" rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Company Name (Optional)" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="GST Number (Optional)" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="number" placeholder="Adults" min="1" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="number" placeholder="Children" min="0" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              {/* Reservation Details */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Reservation Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  <input type="date" placeholder="Check-in Date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="date" placeholder="Check-out Date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="time" placeholder="Arrival Time" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="time" placeholder="Departure Time" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Room Type</option>
                  <option value="standard-twin">Standard Twin - ₹8,500</option>
                  <option value="superior-queen">Superior Queen - ₹10,500</option>
                  <option value="deluxe-king">Deluxe King - ₹12,500</option>
                  <option value="executive-suite">Executive Suite - ₹18,500</option>
                  <option value="premium-suite">Premium Suite - ₹25,500</option>
                  <option value="presidential-suite">Presidential Suite - ₹45,000</option>
                </select>
                <input type="number" placeholder="Rate per Night (₹)" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Booking Source</option>
                  <option value="direct">Direct</option>
                  <option value="makemytrip">MakeMyTrip</option>
                  <option value="goibibo">Goibibo</option>
                  <option value="booking">Booking.com</option>
                  <option value="agoda">Agoda</option>
                </select>
                <input type="number" placeholder="Advance Amount (₹)" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium text-gray-900 mb-4">Special Requests & Preferences</h4>
              <textarea
                placeholder="Any special requests, dietary preferences, or notes..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowNewReservation(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowNewReservation(false)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Create Reservation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservations;