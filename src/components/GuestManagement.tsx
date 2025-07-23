import React, { useState } from 'react';
import { Search, Plus, Edit, Eye, Phone, Mail, MapPin, Star, Calendar, CreditCard, User, Building } from 'lucide-react';

const GuestManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [filterVIP, setFilterVIP] = useState('all');

  const guests = [
    {
      id: 1,
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 98765 43210',
      address: '123 Marine Drive, Mumbai, Maharashtra 400001',
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      nationality: 'Indian',
      idType: 'Aadhaar',
      idNumber: '1234 5678 9012',
      vipStatus: 'Gold',
      totalStays: 15,
      totalSpent: '₹8,45,000',
      lastStay: '2024-12-10',
      currentRoom: '205',
      status: 'In House',
      preferences: ['Vegetarian meals', 'High floor', 'Late checkout'],
      emergencyContact: 'Rahul Sharma - +91 98765 43211',
      company: 'Tech Solutions Pvt Ltd',
      gstNumber: '27ABCDE1234F1Z5',
      dateOfBirth: '1985-03-15',
      anniversary: '2010-12-25'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@email.com',
      phone: '+91 87654 32109',
      address: '456 Connaught Place, New Delhi 110001',
      city: 'New Delhi',
      state: 'Delhi',
      country: 'India',
      nationality: 'Indian',
      idType: 'Passport',
      idNumber: 'A1234567',
      vipStatus: 'Silver',
      totalStays: 8,
      totalSpent: '₹4,67,800',
      lastStay: '2024-11-28',
      currentRoom: null,
      status: 'Previous Guest',
      preferences: ['Non-smoking', 'Gym access', 'Business center'],
      emergencyContact: 'Sunita Kumar - +91 87654 32110',
      company: 'Kumar Industries',
      gstNumber: '07FGHIJ5678K2L6',
      dateOfBirth: '1978-07-22',
      anniversary: '2005-02-14'
    },
    {
      id: 3,
      name: 'Anita Patel',
      email: 'anita.patel@email.com',
      phone: '+91 76543 21098',
      address: '789 CG Road, Ahmedabad, Gujarat 380009',
      city: 'Ahmedabad',
      state: 'Gujarat',
      country: 'India',
      nationality: 'Indian',
      idType: 'Driving License',
      idNumber: 'GJ0120110012345',
      vipStatus: 'Platinum',
      totalStays: 32,
      totalSpent: '₹18,90,000',
      lastStay: '2024-12-15',
      currentRoom: '408',
      status: 'In House',
      preferences: ['Jain meals', 'Connecting rooms', 'Airport transfer'],
      emergencyContact: 'Kiran Patel - +91 76543 21099',
      company: 'Patel Textiles Ltd',
      gstNumber: '24MNOPQ9012R3S7',
      dateOfBirth: '1982-11-08',
      anniversary: '2008-05-20'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      email: 'vikram.singh@email.com',
      phone: '+91 65432 10987',
      address: '321 MI Road, Jaipur, Rajasthan 302001',
      city: 'Jaipur',
      state: 'Rajasthan',
      country: 'India',
      nationality: 'Indian',
      idType: 'Voter ID',
      idNumber: 'ABC1234567',
      vipStatus: 'Regular',
      totalStays: 3,
      totalSpent: '₹1,25,670',
      lastStay: '2024-09-15',
      currentRoom: null,
      status: 'Previous Guest',
      preferences: ['Traditional Rajasthani cuisine', 'Cultural tours'],
      emergencyContact: 'Meera Singh - +91 65432 10988',
      company: 'Heritage Hotels',
      gstNumber: '08TUVWX3456Y4Z8',
      dateOfBirth: '1990-01-12',
      anniversary: '2015-11-30'
    },
    {
      id: 5,
      name: 'Deepika Reddy',
      email: 'deepika.reddy@email.com',
      phone: '+91 54321 09876',
      address: '654 Brigade Road, Bangalore, Karnataka 560001',
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
      nationality: 'Indian',
      idType: 'Aadhaar',
      idNumber: '9876 5432 1098',
      vipStatus: 'Gold',
      totalStays: 22,
      totalSpent: '₹12,34,500',
      lastStay: '2024-12-12',
      currentRoom: null,
      status: 'Previous Guest',
      preferences: ['South Indian breakfast', 'Spa services', 'Pool access'],
      emergencyContact: 'Suresh Reddy - +91 54321 09877',
      company: 'IT Solutions Bangalore',
      gstNumber: '29ABCDE6789F5G0',
      dateOfBirth: '1987-06-25',
      anniversary: '2012-04-18'
    }
  ];

  const filteredGuests = guests.filter(guest => {
    const matchesSearch = guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guest.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guest.phone.includes(searchTerm) ||
                         guest.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVIP = filterVIP === 'all' || guest.vipStatus === filterVIP;
    return matchesSearch && matchesVIP;
  });

  const getStatusBadge = (status) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case 'In House':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'Previous Guest':
        return `${baseClasses} bg-gray-100 text-gray-800`;
      case 'No Show':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-blue-100 text-blue-800`;
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

  const vipCounts = {
    all: guests.length,
    Platinum: guests.filter(g => g.vipStatus === 'Platinum').length,
    Gold: guests.filter(g => g.vipStatus === 'Gold').length,
    Silver: guests.filter(g => g.vipStatus === 'Silver').length,
    Regular: guests.filter(g => g.vipStatus === 'Regular').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Guest Management</h2>
          <p className="text-gray-600">Manage guest profiles, preferences, and stay history</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Add Guest</span>
        </button>
      </div>

      {/* VIP Status Filter */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(vipCounts).map(([status, count]) => (
          <div
            key={status}
            className={`bg-white rounded-lg border-2 cursor-pointer transition-all p-4 text-center ${
              filterVIP === status ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setFilterVIP(status)}
          >
            <div className="text-2xl font-bold text-gray-900">{count}</div>
            <div className="text-sm text-gray-600 capitalize">
              {status === 'all' ? 'All Guests' : status}
            </div>
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search guests by name, email, phone, or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Guest List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Guest Directory ({filteredGuests.length} guests)
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guest Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Information
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  VIP Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stay History
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredGuests.map((guest) => (
                <tr key={guest.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{guest.name}</div>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {guest.city}, {guest.state}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {guest.idType}: {guest.idNumber}
                      </div>
                      {guest.company && (
                        <div className="text-xs text-blue-600 flex items-center mt-1">
                          <Building className="h-3 w-3 mr-1" />
                          {guest.company}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <div className="text-sm text-gray-900 flex items-center">
                        <Mail className="h-3 w-3 mr-2 text-gray-400" />
                        {guest.email}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Phone className="h-3 w-3 mr-2 text-gray-400" />
                        {guest.phone}
                      </div>
                      <div className="text-xs text-gray-400">
                        Emergency: {guest.emergencyContact}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={getVipBadge(guest.vipStatus)}>
                      {guest.vipStatus === 'Platinum' && <Star className="h-3 w-3 mr-1" />}
                      {guest.vipStatus}
                    </span>
                    {guest.gstNumber && (
                      <div className="text-xs text-gray-500 mt-1">
                        GST: {guest.gstNumber}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{guest.totalStays} stays</div>
                    <div className="text-sm text-gray-500">{guest.totalSpent} total</div>
                    <div className="text-xs text-gray-400 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      Last: {guest.lastStay}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <span className={getStatusBadge(guest.status)}>
                        {guest.status}
                      </span>
                      {guest.currentRoom && (
                        <div className="text-xs text-gray-500">Room {guest.currentRoom}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setSelectedGuest(guest)}
                        className="text-blue-600 hover:text-blue-800 p-1"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-amber-600 hover:text-amber-800 p-1" title="Edit">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Guest Details Modal */}
      {selectedGuest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Guest Profile</h3>
              <button
                onClick={() => setSelectedGuest(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 border-b pb-2">Personal Information</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Full Name</label>
                    <p className="text-gray-900">{selectedGuest.name}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Date of Birth</label>
                      <p className="text-gray-900">{selectedGuest.dateOfBirth}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Anniversary</label>
                      <p className="text-gray-900">{selectedGuest.anniversary}</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Nationality</label>
                    <p className="text-gray-900">{selectedGuest.nationality}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">ID Type</label>
                      <p className="text-gray-900">{selectedGuest.idType}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">ID Number</label>
                      <p className="text-gray-900">{selectedGuest.idNumber}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 border-b pb-2">Contact Information</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Email</label>
                    <p className="text-gray-900">{selectedGuest.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Phone</label>
                    <p className="text-gray-900">{selectedGuest.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Address</label>
                    <p className="text-gray-900">{selectedGuest.address}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Emergency Contact</label>
                    <p className="text-gray-900">{selectedGuest.emergencyContact}</p>
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 border-b pb-2">Business Information</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Company</label>
                    <p className="text-gray-900">{selectedGuest.company}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">GST Number</label>
                    <p className="text-gray-900">{selectedGuest.gstNumber}</p>
                  </div>
                </div>
              </div>

              {/* Preferences & Stay History */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 border-b pb-2">Preferences & History</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-600">VIP Status</label>
                    <div className="mt-1">
                      <span className={getVipBadge(selectedGuest.vipStatus)}>
                        {selectedGuest.vipStatus === 'Platinum' && <Star className="h-3 w-3 mr-1" />}
                        {selectedGuest.vipStatus}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Total Stays</label>
                      <p className="text-gray-900">{selectedGuest.totalStays}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Total Spent</label>
                      <p className="text-gray-900">{selectedGuest.totalSpent}</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Preferences</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedGuest.preferences.map((pref, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {pref}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Guest Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Add New Guest</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Personal Information</h4>
                <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="email" placeholder="Email Address" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="tel" placeholder="Phone Number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="date" placeholder="Date of Birth" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select ID Type</option>
                  <option value="aadhaar">Aadhaar Card</option>
                  <option value="passport">Passport</option>
                  <option value="driving">Driving License</option>
                  <option value="voter">Voter ID</option>
                </select>
                <input type="text" placeholder="ID Number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Address & Business</h4>
                <textarea placeholder="Complete Address" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="City" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="State" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Company Name (Optional)" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="GST Number (Optional)" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Emergency Contact" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button onClick={() => setShowAddModal(false)} className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
                Cancel
              </button>
              <button onClick={() => setShowAddModal(false)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Add Guest
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestManagement;