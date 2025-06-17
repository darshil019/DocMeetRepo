import React from 'react';
import Sidebar from './Sidebar';

function DoctorDashboard() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Welcome, Dr. Sharma</h1>
          <p className="text-sm text-gray-600">Here's your overview for today.</p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Today’s Appointments</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">8</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">New Patients</h2>
            <p className="text-3xl font-bold text-green-600 mt-2">3</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Pending Reports</h2>
            <p className="text-3xl font-bold text-red-500 mt-2">2</p>
          </div>
        </div>

        {/* Appointments Table */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Appointments</h2>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Patient</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Time</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4">John Doe</td>
                  <td className="px-6 py-4">10:00 AM</td>
                  <td className="px-6 py-4 text-green-600">Confirmed</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Aisha Khan</td>
                  <td className="px-6 py-4">11:30 AM</td>
                  <td className="px-6 py-4 text-yellow-600">Pending</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Rahul Mehta</td>
                  <td className="px-6 py-4">1:00 PM</td>
                  <td className="px-6 py-4 text-red-500">Cancelled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DoctorDashboard;
