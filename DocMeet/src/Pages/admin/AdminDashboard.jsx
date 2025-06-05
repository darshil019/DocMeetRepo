import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import img from "../../assets/images/image.png";
import {
  FaTachometerAlt,
  FaCalendarPlus,
  FaUserMd,
  FaListUl,
  FaUser,
  FaCalendarCheck,
  FaSignOutAlt
} from 'react-icons/fa';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

const data = [
  { month: 'Jan', appointments: 20 },
  { month: 'Feb', appointments: 35 },
  { month: 'Mar', appointments: 28 },
  { month: 'Apr', appointments: 40 },
  { month: 'May', appointments: 22 },
  { month: 'Jun', appointments: 50 }
];

function AdminDashboard() {
  let navigate = useNavigate()
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-white border-b lg:border-b-0 lg:border-r border-gray-200 p-6">
         <a href="/" className="flex items-center no-underline" style={{ textDecoration: "none" }}>
                    <img
                      src={img}
                      alt="Logo"
                      className="h-12 w-12 rounded-full mr-3 border-2 border-white mb-2"
                    />
                    <h3 className="text-black font-semibold tracking-wider">
                      D<span className="text-[#5D6BFF]">o</span>cM
                      <span className="text-[#5D6BFF]">ee</span>t
                    </h3>
          </a>
        <nav className="flex flex-col space-y-4">
          <Link to="/admin/dashboard" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded transition no-underline" style={{ textDecoration: "none" }}>
            <FaTachometerAlt /> Dashboard
          </Link>
          <Link to="/admin/add-appointment" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded transition no-underline" style={{ textDecoration: "none" }}>
            <FaCalendarPlus /> Add Appointment
          </Link>
          <Link to="/admin/add-doctor" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded transition no-underline" style={{ textDecoration: "none" }}>
            <FaUserMd /> Add Doctor
          </Link>
          <Link to="/admin/doctor-list" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded transition no-underline" style={{ textDecoration: "none" }}>
            <FaListUl /> Doctor List
          </Link>
          <Link to='/admin/signin' className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded transition no-underline" style={{ textDecoration: "none" }}>
            <FaSignOutAlt /> Log Out
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 text-center lg:text-left">
          Admin Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
            <FaUser className="text-3xl text-blue-500" />
            <div>
              <p className="text-gray-600 text-sm">Total Patients</p>
              <p className="text-xl font-semibold text-gray-800">120</p>
            </div>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
            <FaUserMd className="text-3xl text-green-500" />
            <div>
              <p className="text-gray-600 text-sm">Total Doctors</p>
              <p className="text-xl font-semibold text-gray-800">25</p>
            </div>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
            <FaCalendarCheck className="text-3xl text-purple-500" />
            <div>
              <p className="text-gray-600 text-sm">Appointments</p>
              <p className="text-xl font-semibold text-gray-800">75</p>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700 text-center sm:text-left">
            Monthly Appointments
          </h2>
          <div className="w-full h-72 sm:h-80 md:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="appointments" fill="#5D6BFF" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
