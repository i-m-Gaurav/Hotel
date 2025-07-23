import React, { useState } from 'react';
import { RectangleVertical as CleaningServices, Check, X, Clock, AlertTriangle, User, Phone, Star, Calendar } from 'lucide-react';

const Housekeeping = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedTask, setSelectedTask] = useState(null);

  const housekeepingTasks = [
    {
      id: 1,
      roomNumber: '205',
      status: 'Pending',
      priority: 'High',
      taskType: 'Checkout Cleaning',
      assignedTo: 'Sunita Devi',
      assignedPhone: '+91 98765 11111',
      estimatedTime: 45,
      actualTime: null,
      guestCheckOut: '11:00 AM',
      nextGuestCheckIn: '3:00 PM',
      nextGuestName: 'Priya Sharma',
      nextGuestVIP: 'Gold',
      specialInstructions: 'Deep clean bathroom, check minibar, fresh flowers for VIP guest',
      lastUpdated: '10:30 AM',
      roomType: 'Executive Suite',
      floor: 2,
      checklistItems: [
        { item: 'Vacuum carpet', completed: false },
        { item: 'Change bed linens', completed: false },
        { item: 'Clean bathroom', completed: false },
        { item: 'Restock minibar', completed: false },
        { item: 'Fresh towels', completed: false },
        { item: 'Check amenities', completed: false }
      ]
    },
    {
      id: 2,
      roomNumber: '312',
      status: 'In Progress',
      priority: 'Medium',
      taskType: 'Maintenance Clean',
      assignedTo: 'Ravi Kumar',
      assignedPhone: '+91 87654 22222',
      estimatedTime: 30,
      actualTime: 25,
      guestCheckOut: null,
      nextGuestCheckIn: null,
      nextGuestName: null,
      nextGuestVIP: null,
      specialInstructions: 'AC unit cleaned, new batteries in remote, check all electrical fixtures',
      lastUpdated: '11:15 AM',
      roomType: 'Premium Suite',
      floor: 3,
      checklistItems: [
        { item: 'Clean AC filters', completed: true },
        { item: 'Replace remote batteries', completed: true },
        { item: 'Check electrical fixtures', completed: false },
        { item: 'Vacuum carpet', completed: true },
        { item: 'Dust furniture', completed: false }
      ]
    },
    {
      id: 3,
      roomNumber: '408',
      status: 'Completed',
      priority: 'High',
      taskType: 'VIP Preparation',
      assignedTo: 'Meera Sharma',
      assignedPhone: '+91 76543 33333',
      estimatedTime: 60,
      actualTime: 55,
      guestCheckOut: '12:00 PM',
      nextGuestCheckIn: '4:00 PM',
      nextGuestName: 'Anita Patel',
      nextGuestVIP: 'Platinum',
      specialInstructions: 'Fresh flowers, champagne setup, extra towels, premium amenities, Jain meal preferences noted',
      lastUpdated: '2:30 PM',
      roomType: 'Presidential Suite',
      floor: 4,
      checklistItems: [
        { item: 'Premium bed setup', completed: true },
        { item: 'Fresh flower arrangement', completed: true },
        { item: 'Champagne setup', completed: true },
        { item: 'Extra towels & amenities', completed: true },
        { item: 'Welcome note placement', completed: true },
        { item: 'Temperature adjustment', completed: true }
      ]
    },
    {
      id: 4,
      roomNumber: '156',
      status: 'Pending',
      priority: 'Low',
      taskType: 'Routine Clean',
      assignedTo: 'Pooja Singh',
      assignedPhone: '+91 65432 44444',
      estimatedTime: 30,
      actualTime: null,
      guestCheckOut: null,
      nextGuestCheckIn: '6:00 PM',
      nextGuestName: 'Arjun Mehta',
      nextGuestVIP: 'Regular',
      specialInstructions: 'Standard turnover cleaning, check airport pickup arrangement note',
      lastUpdated: '9:45 AM',
      roomType: 'Superior Queen',
      floor: 1,
      checklistItems: [
        { item: 'Change bed linens', completed: false },
        { item: 'Clean bathroom', completed: false },
        { item: 'Vacuum room', completed: false },
        { item: 'Restock amenities', completed: false },
        { item: 'Check welcome note', completed: false }
      ]
    },
    {
      id: 5,
      roomNumber: '101',
      status: 'Inspection',
      priority: 'Medium',
      taskType: 'Quality Check',
      assignedTo: 'Supervisor - Lakshmi Iyer',
      assignedPhone: '+91 54321 55555',
      estimatedTime: 15,
      actualTime: 12,
      guestCheckOut: '10:00 AM',
      nextGuestCheckIn: '2:00 PM',
      nextGuestName: 'Deepika Reddy',
      nextGuestVIP: 'Gold',
      specialInstructions: 'Final inspection before VIP guest arrival, ensure South Indian breakfast menu is ready',
      lastUpdated: '1:45 PM',
      roomType: 'Deluxe King',
      floor: 1,
      checklistItems: [
        { item: 'Room cleanliness check', completed: true },
        { item: 'Amenities verification', completed: true },
        { item: 'Electrical systems check', completed: true },
        { item: 'Final walkthrough', completed: false }
      ]
    },
    {
      id: 6,
      roomNumber: '501',
      status: 'Pending',
      priority: 'High',
      taskType: 'Deep Clean',
      assignedTo: 'Kamala Devi',
      assignedPhone: '+91 43210 66666',
      estimatedTime: 90,
      actualTime: null,
      guestCheckOut: '9:00 AM',
      nextGuestCheckIn: '5:00 PM',
      nextGuestName: 'Rohit Gupta',
      nextGuestVIP: 'Silver',
      specialInstructions: 'Complete deep cleaning after long-stay guest, sanitize all surfaces, replace all linens',
      lastUpdated: '9:30 AM',
      roomType: 'Standard Twin',
      floor: 5,
      checklistItems: [
        { item: 'Strip and remake beds', completed: false },
        { item: 'Deep clean bathroom', completed: false },
        { item: 'Sanitize all surfaces', completed: false },
        { item: 'Replace all amenities', completed: false },
        { item: 'Carpet deep clean', completed: false },
        { item: 'Window cleaning', completed: false }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Inspection':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Ready':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-amber-100 text-amber-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTaskTypeIcon = (taskType) => {
    switch (taskType) {
      case 'VIP Preparation':
        return <Star className="h-4 w-4" />;
      case 'Maintenance Clean':
        return <AlertTriangle className="h-4 w-4" />;
      case 'Quality Check':
        return <Check className="h-4 w-4" />;
      default:
        return <CleaningServices className="h-4 w-4" />;
    }
  };

  const getVipBadge = (vipStatus) => {
    if (!vipStatus) return null;
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

  const filteredTasks = housekeepingTasks.filter(task => {
    return filterStatus === 'all' || task.status === filterStatus;
  });

  const statusCounts = {
    all: housekeepingTasks.length,
    Pending: housekeepingTasks.filter(t => t.status === 'Pending').length,
    'In Progress': housekeepingTasks.filter(t => t.status === 'In Progress').length,
    Completed: housekeepingTasks.filter(t => t.status === 'Completed').length,
    Inspection: housekeepingTasks.filter(t => t.status === 'Inspection').length,
  };

  const updateTaskStatus = (taskId, newStatus) => {
    console.log(`Updating task ${taskId} to ${newStatus}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Housekeeping Management</h2>
        <p className="text-gray-600">Monitor and manage room cleaning, maintenance, and preparation tasks</p>
      </div>

      {/* Status Filter Tabs */}
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
              {status === 'all' ? 'All Tasks' : status}
            </div>
          </div>
        ))}
      </div>

      {/* Tasks List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Housekeeping Tasks ({filteredTasks.length})
          </h3>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredTasks.map((task) => (
            <div key={task.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Room and Task Info */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      {getTaskTypeIcon(task.taskType)}
                      <span className="font-bold text-lg text-gray-900">Room {task.roomNumber}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">{task.taskType}</p>
                    <p className="text-xs text-gray-500">{task.roomType} • Floor {task.floor}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(task.status)}`}>
                        {task.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                        {task.priority} Priority
                      </span>
                    </div>
                  </div>

                  {/* Assignment and Timing */}
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Assigned to:</p>
                    <div className="flex items-center space-x-2 mb-1">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-700">{task.assignedTo}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{task.assignedPhone}</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Est: {task.estimatedTime} mins</span>
                      </div>
                      {task.actualTime && (
                        <div className="text-sm text-green-600">
                          Actual: {task.actualTime} mins
                        </div>
                      )}
                      <p className="text-xs text-gray-500">Updated: {task.lastUpdated}</p>
                    </div>
                  </div>

                  {/* Schedule and Next Guest */}
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Schedule:</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      {task.guestCheckOut && (
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                          Checkout: {task.guestCheckOut}
                        </div>
                      )}
                      {task.nextGuestCheckIn && (
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                          Next Arrival: {task.nextGuestCheckIn}
                        </div>
                      )}
                    </div>
                    {task.nextGuestName && (
                      <div className="mt-3 p-2 bg-blue-50 rounded">
                        <p className="text-xs font-medium text-blue-800">Next Guest:</p>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-blue-900">{task.nextGuestName}</span>
                          {task.nextGuestVIP && (
                            <span className={getVipBadge(task.nextGuestVIP)}>
                              {task.nextGuestVIP === 'Platinum' && <Star className="h-3 w-3 mr-1" />}
                              {task.nextGuestVIP}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Instructions and Progress */}
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Instructions:</p>
                    <p className="text-xs text-gray-600 mb-3">{task.specialInstructions}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-700">Progress:</span>
                        <span className="text-xs text-gray-600">
                          {task.checklistItems.filter(item => item.completed).length}/{task.checklistItems.length}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all" 
                          style={{ 
                            width: `${(task.checklistItems.filter(item => item.completed).length / task.checklistItems.length) * 100}%` 
                          }}
                        ></div>
                      </div>
                      <button
                        onClick={() => setSelectedTask(task)}
                        className="text-xs text-blue-600 hover:text-blue-800"
                      >
                        View Checklist
                      </button>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-2 min-w-[140px]">
                  {task.status === 'Pending' && (
                    <button
                      onClick={() => updateTaskStatus(task.id, 'In Progress')}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                    >
                      Start Task
                    </button>
                  )}
                  {task.status === 'In Progress' && (
                    <>
                      <button
                        onClick={() => updateTaskStatus(task.id, 'Completed')}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center space-x-1 transition-colors"
                      >
                        <Check className="h-4 w-4" />
                        <span>Complete</span>
                      </button>
                      <button
                        onClick={() => updateTaskStatus(task.id, 'Pending')}
                        className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                      >
                        Pause
                      </button>
                    </>
                  )}
                  {task.status === 'Completed' && (
                    <button
                      onClick={() => updateTaskStatus(task.id, 'Inspection')}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                    >
                      Inspect
                    </button>
                  )}
                  {task.status === 'Inspection' && (
                    <div className="flex flex-col space-y-1">
                      <button
                        onClick={() => updateTaskStatus(task.id, 'Ready')}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center space-x-1 transition-colors"
                      >
                        <Check className="h-4 w-4" />
                        <span>Approve</span>
                      </button>
                      <button
                        onClick={() => updateTaskStatus(task.id, 'Pending')}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center space-x-1 transition-colors"
                      >
                        <X className="h-4 w-4" />
                        <span>Reject</span>
                      </button>
                    </div>
                  )}
                  <button
                    onClick={() => setSelectedTask(task)}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Task Details Modal */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Room {selectedTask.roomNumber} - {selectedTask.taskType}
              </h3>
              <button
                onClick={() => setSelectedTask(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Task Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 border-b pb-2">Task Information</h4>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Room Number</label>
                      <p className="text-gray-900">#{selectedTask.roomNumber}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Room Type</label>
                      <p className="text-gray-900">{selectedTask.roomType}</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Task Type</label>
                    <p className="text-gray-900">{selectedTask.taskType}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Priority</label>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(selectedTask.priority)}`}>
                        {selectedTask.priority}
                      </span>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Status</label>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedTask.status)}`}>
                        {selectedTask.status}
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Special Instructions</label>
                    <p className="text-gray-900">{selectedTask.specialInstructions}</p>
                  </div>
                </div>
              </div>

              {/* Assignment & Schedule */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 border-b pb-2">Assignment & Schedule</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Assigned To</label>
                    <p className="text-gray-900">{selectedTask.assignedTo}</p>
                    <p className="text-sm text-gray-600">{selectedTask.assignedPhone}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Estimated Time</label>
                      <p className="text-gray-900">{selectedTask.estimatedTime} minutes</p>
                    </div>
                    {selectedTask.actualTime && (
                      <div>
                        <label className="text-sm font-medium text-gray-600">Actual Time</label>
                        <p className="text-gray-900">{selectedTask.actualTime} minutes</p>
                      </div>
                    )}
                  </div>
                  {selectedTask.nextGuestName && (
                    <div className="bg-blue-50 p-3 rounded">
                      <label className="text-sm font-medium text-blue-800">Next Guest</label>
                      <div className="flex items-center space-x-2 mt-1">
                        <p className="text-blue-900">{selectedTask.nextGuestName}</p>
                        {selectedTask.nextGuestVIP && (
                          <span className={getVipBadge(selectedTask.nextGuestVIP)}>
                            {selectedTask.nextGuestVIP === 'Platinum' && <Star className="h-3 w-3 mr-1" />}
                            {selectedTask.nextGuestVIP}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-blue-700">Check-in: {selectedTask.nextGuestCheckIn}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Checklist */}
              <div className="lg:col-span-2 space-y-4">
                <h4 className="font-semibold text-gray-900 border-b pb-2">Task Checklist</h4>
                <div className="space-y-2">
                  {selectedTask.checklistItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => {
                          // Here you would update the checklist item
                          console.log(`Toggle checklist item ${index}`);
                        }}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className={`text-sm ${item.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                        {item.item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                    <span className="text-sm text-gray-600">
                      {selectedTask.checklistItems.filter(item => item.completed).length}/{selectedTask.checklistItems.length} completed
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-blue-500 h-3 rounded-full transition-all" 
                      style={{ 
                        width: `${(selectedTask.checklistItems.filter(item => item.completed).length / selectedTask.checklistItems.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setSelectedTask(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Update Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Housekeeping;