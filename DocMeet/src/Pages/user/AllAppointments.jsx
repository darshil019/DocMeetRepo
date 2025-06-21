import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Components/Common/AuthContext';

function UserAppointmentsPage() {
  const { userData } = useContext(AuthContext);
  const [appointmentsAll, setAppointmentsAll] = useState([]);
  const userToken = localStorage.getItem('token');

  useEffect(() => {
    if (!userData) return;

    axios
      .get(`http://localhost:5001/docmeet/user/getUserAppointments/${userData._id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        setAppointmentsAll(res.data.appointments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userData]);

  return (
      <div className="max-w-7xl mx-auto">

        <div className="overflow-x-auto bg-white shadow-2xl rounded-2xl">
          <table className="min-w-full table-auto border-collapse text-sm text-gray-700">
            <thead className="bg-indigo-100 text-gray-700">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Patient</th>
                <th className="px-6 py-3 text-left font-semibold">Time</th>
                <th className="px-6 py-3 text-left font-semibold">Date</th>
                <th className="px-6 py-3 text-center font-semibold">Status</th>
                <th className="px-6 py-3 text-left font-semibold">Doctor</th>
              </tr>
            </thead>
            <tbody>
              {appointmentsAll.length > 0 ? (
                appointmentsAll.map((val, index) => (
                  <tr
                    key={index}
                    className="hover:bg-indigo-50 transition duration-200"
                  >
                    <td className="px-6 py-4">{val.userID?.fullname}</td>
                    <td className="px-6 py-4">{val.slotTime}</td>
                    <td className="px-6 py-4">{val.slotDate}</td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          val.status === 'cancelled'
                            ? 'bg-red-100 text-red-600'
                            : val.status === 'completed'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-yellow-100 text-yellow-600'
                        }`}
                      >
                        {val.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{val.doctorID?.doctorName}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-6 text-center text-gray-500">
                    No appointments available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

  );
}

export default UserAppointmentsPage;
