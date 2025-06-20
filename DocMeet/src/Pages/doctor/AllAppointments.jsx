import React, { useState,useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Sidebar from './Sidebar';
import axios from 'axios';

function AppointmentsPage() {
    const doctorToken = localStorage.getItem("doctorToken");
    const [appointmentsAll, setAppointmentsAll] = useState([])
    const [status,setStatus] = useState(null)
    useEffect(() => {
        axios.get(`http://localhost:5001/docmeet/doctor/getAppointments`, {
        headers: {
            Authorization: `Bearer ${doctorToken}`
        }
        })
        .then((res) => {
            console.log(res.data.appointments)
            setAppointmentsAll(res.data.appointments)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const acceptStatus = async () => {
        if (doctorToken) {
            const appointmentStatus = {
              userID: appointmentsAll.UserID._id,
              doctorID: appointmentsAll.doctorID._id,
              slotTime : appointmentsAll.slotTime,
              slotDay : appointmentsAll.slotDay,
              slotDate : appointmentsAll.slotDate,
              status : 'approved'
            };
        
            try {
              const response = await axios.post(
                `http://localhost:5001/docmeet/doctor/updatestatuspostive`,
                appointmentStatus
              );
            } catch (err) {
              console.log(err);
            }
          } else {
            alert('Please sign in first');
          }
    }
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Appointments</h1>

        <div className="bg-white shadow rounded-xl overflow-x-auto">
          <table className="w-full table-auto divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Patient</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Slot</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {appointmentsAll.map((val,index) => (
                <tr key={index}>
                  <td className="px-6 py-4">{val.userID?.fullname}</td>
                  <td className="px-6 py-4">{val.slotTime}</td>
                  <td className="px-6 py-4 text-center capitalize font-medium text-gray-700">
                    {val.status}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      disabled={val.status !== 'pending'}
                      onClick={(()=>{acceptStatus()})}
                      className={`mx-1 transition ${
                        val.status === 'accept'
                          ? 'text-green-400 cursor-not-allowed'
                          : 'text-green-600 hover:text-green-800'
                      }`}
                    >
                      <FaCheckCircle size={20} />
                    </button>
                    <button
                      disabled={val.status !== 'pending'}
                      onClick={() => updateStatus(val._id, 'rejected')}
                      className={`mx-1 transition ${
                        val.status === ''
                          ? 'text-red-400 cursor-not-allowed'
                          : 'text-red-600 hover:text-red-800'
                      }`}
                    >
                      <FaTimesCircle size={20} />
                    </button>
                  </td>
                </tr>
              ))}
              {appointmentsAll.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                    No appointments available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default AppointmentsPage;
