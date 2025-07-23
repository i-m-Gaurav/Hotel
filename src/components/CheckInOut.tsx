import React, { useState } from 'react';
import { Search, LogIn, LogOut, CreditCard, User, Key, Calendar, Phone, MapPin, Building, Star, Clock, AlertCircle } from 'lucide-react';

const CheckInOut = () => {
  const [activeTab, setActiveTab] = useState('checkin');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuest, setSelectedGuest] = useState(null);

  const pendingCheckIns = [
    {
      id: 'RES-001',
      guestName: 'Priya Sharma',
      phone: '+91 98765 43210',
      email: 'priya.sharma@email.com',
      address: 'Mumbai, Maharashtra',
      company: 'Tech Solutions Pvt Ltd',
      room: '205',
      roomType: 'Executive Suite',
      checkIn: '2024-12-15',
      checkOut: '2024-12-17',
      nights: 3,
      adults: 2,
      children: 0,
      rate: 18500,
      total: 65490,
      advancePaid: 20000,
      balance: 45490,
      specialRequests: 'High floor, city view, vegetarian meals',
      arrivalTime: '2:00 PM',
      status: 'Expected',
      vipStatus: 'Gold',
      idType: 'Aadhaar',
      idNumber: '1234 5678 9012',
      gstNumber: '27ABCDE1234F1Z5',
      emergencyContact: 'Rahul Sharma - +91 98765 43211'
    },
    {
      id: 'RES-002',
      guestName: 'Rajesh Kumar',
      phone: '+91 87654 32109',
      email: 'rajesh.kumar@email.com',
      address: 'New Delhi, Delhi',
      company: 'Kumar Industries',
      room: '312',
      roomType: 'Premium Suite',
      checkIn: '2024-12-15',
      checkOut: '2024-12-18',
      nights: 2,
      adults: 1,
      children: 0,
      rate: 25500,
      total: 60180,
      advancePaid: 0,
      balance: 60180,
      specialRequests: 'Late check-in, business center access',
      arrivalTime: '8:00 PM',
      status: 'Confirmed',
      vipStatus: 'Silver',
      idType: 'Passport',
      idNumber: 'A1234567',
      gstNumber: '07FGHIJ5678K2L6',
      emergencyContact: 'Sunita Kumar - +91 87654 32110'
    },
    {
      id: 'RES-006',
      guestName: 'Arjun Mehta',
      phone: '+91 99887 76655',
      email: 'arjun.mehta@email.com',
      address: 'Pune, Maharashtra',
      company: 'Mehta Enterprises',
      room: '156',
      roomType: 'Superior Queen',
      checkIn: '2024-12-15',
      checkOut: '2024-12-16',
      nights: 1,
      adults: 2,
      children: 0,
      rate: 10500,
      total: 12390,
      advancePaid: 5000,
      balance: 7390,
      specialRequests: 'Airport pickup, early breakfast',
      arrivalTime: '6:00 PM',
      status: 'Confirmed',
      vipStatus: 'Regular',
      idType: 'Driving License',
      idNumber: 'MH0120110012345',
      gstNumber: '27PQRST7890U1V2',
      emergencyContact: 'Kavita Mehta - +91 99887 76656'
    }
  ];

  const pendingCheckOuts = [
    {
      id: 'RES-003',
      guestName: 'Anita Patel',
      phone: '+91 76543 21098',
      email: 'anita.patel@email.com',
      address: 'Ahmedabad, Gujarat',
      company: 'Patel Textiles Ltd',
      room: '408',
      roomType: 'Presidential Suite',
      checkIn: '2024-12-13',
      checkOut: '2024-12-15',
      nights: 5,
      adults: 4,
      children: 0,
      roomCharges: 225000,
      taxes: 40500,
      serviceCharges: 11250,
      incidentals: 15750,
      laundry: 2500,
      minibar: 8750,
      restaurant: 4500,
      finalBill: 292500,
      advancePaid: 265500,
      balance: 27000,
      paymentStatus: 'Balance Due',
      departureTime: '12:00 PM',
      vipStatus: 'Platinum',
      gstNumber: '24MNOPQ9012R3S7'
    },
    {
      id: 'RES-004',
      guestName: 'Vikram Singh',
      phone: '+91 65432 10987',
      email: 'vikram.singh@email.com',
      address: 'Jaipur, Rajasthan',
      company: 'Heritage Hotels',
      room: '156',
      roomType: 'Superior Queen',
      checkIn: '2024-12-14',
      checkOut: '2024-12-15',
      nights: 1,
      adults: 2,
      children: 0,
      roomCharges: 10500,
      taxes: 1890,
      serviceCharges: 525,
      incidentals: 3250,
      laundry: 750,
      minibar: 1500,
      restaurant: 1000,
      finalBill: 16165,
      advancePaid: 5000,
      balance: 11165,
      paymentStatus: 'Balance Due',
      departureTime: '11:00 AM',
      vipStatus: 'Regular',
      gstNumber: '08TUVWX3456Y4Z8'
    },
    {
      id: 'RES-007',
      guestName: 'Kavya Nair',
      phone: '+91 88776 65544',
      email: 'kavya.nair@email.com',
      address: 'Kochi, Kerala',
      company: 'Spice Exports Ltd',
      room: '203',
      roomType: 'Deluxe King',
      checkIn: '2024-12-13',
      checkOut: '2024-12-15',
      nights: 2,
      adults: 1,
      children: 0,
      roomCharges: 25000,
      taxes: 4500,
      serviceCharges: 1250,
      incidentals: 2750,
      laundry: 500,
      minibar: 1250,
      restaurant: 1000,
      finalBill: 33500,
      advancePaid: 30000,
      balance: 3500,
      paymentStatus: 'Balance Due',
      departureTime: '1:00 PM',
      vipStatus: 'Gold',
      gstNumber: '32WXYZ4567A8B9'
    }
  ];

  const handleCheckIn = (reservationId) => {
    console.log('Checking in reservation:', reservationId);
    setSelectedGuest(pendingCheckIns.find(g => g.id === reservationId));
  };

  const handleCheckOut = (reservationId) => {
    console.log('Checking out reservation:', reservationId);
    setSelectedGuest(pendingCheckOuts.find(g => g.id === reservationId));
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

  const getPaymentStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case 'Paid':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'Balance Due':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'Advance Paid':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Check In / Check Out Operations</h2>
        <p className="text-gray-600">Process guest arrivals and departures efficiently</p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('checkin')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === 'checkin'
                  ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <LogIn className="h-5 w-5" />
                <span>Check In ({pendingCheckIns.length})</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('checkout')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === 'checkout'
                  ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <LogOut className="h-5 w-5" />
                <span>Check Out ({pendingCheckOuts.length})</span>
              </div>
            </button>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder={`Search ${activeTab === 'checkin' ? 'arrivals' : 'departures'} by name, room number, or phone...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Check In Tab */}
        {activeTab === 'checkin' && (
          <div className="p-6">
            <div className="space-y-6">
              {pendingCheckIns.map((checkin) => (
                <div key={checkin.id} className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Guest Information */}
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <User className="h-5 w-5 text-gray-400" />
                          <span className="font-semibold text-lg text-gray-900">{checkin.guestName}</span>
                          <span className={getVipBadge(checkin.vipStatus)}>
                            {checkin.vipStatus === 'Platinum' && <Star className="h-3 w-3 mr-1" />}
                            {checkin.vipStatus}
                          </span>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-gray-400" />
                            {checkin.phone}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                            {checkin.address}
                          </div>
                          {checkin.company && (
                            <div className="flex items-center">
                              <Building className="h-4 w-4 mr-2 text-gray-400" />
                              {checkin.company}
                            </div>
                          )}
                          <div className="flex items-center text-blue-600">
                            <Clock className="h-4 w-4 mr-2" />
                            Expected: {checkin.arrivalTime}
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-xs text-gray-500">Reservation: {checkin.id}</p>
                          <p className="text-xs text-gray-500">{checkin.idType}: {checkin.idNumber}</p>
                          {checkin.gstNumber && (
                            <p className="text-xs text-blue-600">GST: {checkin.gstNumber}</p>
                          )}
                        </div>
                      </div>

                      {/* Stay Details */}
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Key className="h-5 w-5 text-gray-400" />
                          <span className="font-semibold text-lg text-gray-900">Room {checkin.room}</span>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p className="font-medium">{checkin.roomType}</p>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                            <span>{checkin.checkIn} to {checkin.checkOut}</span>
                          </div>
                          <p>{checkin.nights} nights • {checkin.adults} adults {checkin.children > 0 && `• ${checkin.children} children`}</p>
                          <p className="font-medium">₹{checkin.rate.toLocaleString()}/night</p>
                        </div>
                        <div className="mt-3 p-2 bg-blue-50 rounded">
                          <p className="text-xs font-medium text-blue-800">Payment Status:</p>
                          <p className="text-sm text-blue-900">Advance: ₹{checkin.advancePaid.toLocaleString()}</p>
                          <p className="text-sm text-blue-900">Balance: ₹{checkin.balance.toLocaleString()}</p>
                        </div>
                      </div>

                      {/* Special Requests & Emergency Contact */}
                      <div>
                        <p className="font-semibold text-gray-900 mb-3">Special Requests</p>
                        <p className="text-sm text-gray-600 mb-4">{checkin.specialRequests}</p>
                        
                        <div className="bg-amber-50 p-3 rounded">
                          <p className="text-xs font-medium text-amber-800">Emergency Contact:</p>
                          <p className="text-sm text-amber-900">{checkin.emergencyContact}</p>
                        </div>
                        
                        <div className="mt-3">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            checkin.status === 'Expected' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {checkin.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Amount and Actions */}
                    <div className="flex flex-col items-end space-y-4 min-w-[200px]">
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Total Amount</p>
                        <p className="text-3xl font-bold text-gray-900">₹{checkin.total.toLocaleString()}</p>
                        {checkin.balance > 0 && (
                          <p className="text-sm text-red-600">Balance Due: ₹{checkin.balance.toLocaleString()}</p>
                        )}
                      </div>
                      <div className="flex flex-col space-y-2 w-full">
                        {checkin.balance > 0 && (
                          <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                            <CreditCard className="h-4 w-4" />
                            <span>Collect Payment</span>
                          </button>
                        )}
                        <button
                          onClick={() => handleCheckIn(checkin.id)}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                        >
                          <LogIn className="h-4 w-4" />
                          <span>Check In</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Check Out Tab */}
        {activeTab === 'checkout' && (
          <div className="p-6">
            <div className="space-y-6">
              {pendingCheckOuts.map((checkout) => (
                <div key={checkout.id} className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Guest Information */}
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <User className="h-5 w-5 text-gray-400" />
                          <span className="font-semibold text-lg text-gray-900">{checkout.guestName}</span>
                          <span className={getVipBadge(checkout.vipStatus)}>
                            {checkout.vipStatus === 'Platinum' && <Star className="h-3 w-3 mr-1" />}
                            {checkout.vipStatus}
                          </span>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-gray-400" />
                            {checkout.phone}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                            {checkout.address}
                          </div>
                          {checkout.company && (
                            <div className="flex items-center">
                              <Building className="h-4 w-4 mr-2 text-gray-400" />
                              {checkout.company}
                            </div>
                          )}
                          <div className="flex items-center text-amber-600">
                            <Clock className="h-4 w-4 mr-2" />
                            Departure: {checkout.departureTime}
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-xs text-gray-500">Reservation: {checkout.id}</p>
                          {checkout.gstNumber && (
                            <p className="text-xs text-blue-600">GST: {checkout.gstNumber}</p>
                          )}
                        </div>
                      </div>

                      {/* Stay Details */}
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Key className="h-5 w-5 text-gray-400" />
                          <span className="font-semibold text-lg text-gray-900">Room {checkout.room}</span>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p className="font-medium">{checkout.roomType}</p>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                            <span>{checkout.checkIn} to {checkout.checkOut}</span>
                          </div>
                          <p>{checkout.nights} nights • {checkout.adults} adults {checkout.children > 0 && `• ${checkout.children} children`}</p>
                        </div>
                      </div>

                      {/* Detailed Billing */}
                      <div>
                        <p className="font-semibold text-gray-900 mb-3">Billing Summary</p>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div className="flex justify-between">
                            <span>Room Charges:</span>
                            <span>₹{checkout.roomCharges.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Service Charges:</span>
                            <span>₹{checkout.serviceCharges.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Taxes (GST):</span>
                            <span>₹{checkout.taxes.toLocaleString()}</span>
                          </div>
                          <div className="border-t border-gray-300 pt-1 mt-2">
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>Laundry:</span>
                              <span>₹{checkout.laundry.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>Minibar:</span>
                              <span>₹{checkout.minibar.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>Restaurant:</span>
                              <span>₹{checkout.restaurant.toLocaleString()}</span>
                            </div>
                          </div>
                          <div className="flex justify-between font-semibold border-t border-gray-200 pt-2 mt-2">
                            <span>Total Bill:</span>
                            <span>₹{checkout.finalBill.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-green-600">
                            <span>Advance Paid:</span>
                            <span>₹{checkout.advancePaid.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between font-semibold text-red-600">
                            <span>Balance Due:</span>
                            <span>₹{checkout.balance.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <span className={getPaymentStatusBadge(checkout.paymentStatus)}>
                            {checkout.paymentStatus}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col space-y-4 min-w-[200px]">
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Final Bill</p>
                        <p className="text-3xl font-bold text-gray-900">₹{checkout.finalBill.toLocaleString()}</p>
                        {checkout.balance > 0 && (
                          <div className="flex items-center justify-end text-red-600 mt-1">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            <span className="text-sm font-medium">₹{checkout.balance.toLocaleString()} due</span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col space-y-2">
                        {checkout.balance > 0 && (
                          <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                            <CreditCard className="h-4 w-4" />
                            <span>Collect Balance</span>
                          </button>
                        )}
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                          <span>Print Bill</span>
                        </button>
                        <button
                          onClick={() => handleCheckOut(checkout.id)}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                        >
                          <LogOut className="h-4 w-4" />
                          <span>Check Out</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckInOut;