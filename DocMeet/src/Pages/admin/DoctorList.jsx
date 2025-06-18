import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

function DoctorList() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const res = await axios.get('http://localhost:5001/docmeet/admin/getDoctors');
                setDoctors(res.data);
            } catch (err) {
                console.error("Error fetching doctors", err);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <div className="flex min-h-screen bg-white">
            <Sidebar />
            <div className="p-6 w-full">
                <h2 className="text-2xl font-semibold mb-6">Doctor List</h2>
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="border px-4 py-2">Doctor Name</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Degree</th>
                            <th className="border px-4 py-2">Speciality</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doc, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="border px-4 py-2">{doc.doctorName}</td>
                                <td className="border px-4 py-2">{doc.doctorEmail}</td>
                                <td className="border px-4 py-2">{doc.doctorDegree}</td>
                                <td className="border px-4 py-2">{doc.doctorSpeciality}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DoctorList;
