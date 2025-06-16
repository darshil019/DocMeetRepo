import React from 'react';
import img from "../../assets/images/doc1.png";
import Sidebar from './Sidebar';
function DoctorDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Doctor Dashboard</h1>
      <img 
        src="assets/images/doc1.png" 
        alt="Doctor Dashboard Illustration" 
        className="w-full max-w-md rounded-lg shadow-md"
      />
    </div>
  );
}

export default DoctorDashboard;
