import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function AddDoctor() {
    const [doctorData, setDoctorData] = useState({});
    const [availableDays, setAvailableDays] = useState([]);
    const [imageStore, setImageStore] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.doctorData) {
            const doc = location.state.doctorData;
            setDoctorData(doc);
            setAvailableDays(doc.doctorAvailableDays || []);
        }
    }, [location.state]);

    const onHandleChange = (e) => {
        setDoctorData({
            ...doctorData,
            [e.target.name]: e.target.value,
        });
    };

    const onHandleClick = async () => {
        const formData = new FormData();

        for (const key in doctorData) {
            if (key !== "doctorImage") {
                formData.append(key, doctorData[key]);
            }
        }

        formData.append("doctorAvailableDays", JSON.stringify(availableDays));

        if (imageStore) {
            formData.append("myfile", imageStore);
        }

        try {
            if (doctorData._id) {
                // EDIT request
                const res = await axios.put(
                    `http://localhost:5001/docmeet/admin/updateDoctor/${doctorData._id}`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                console.log("Doctor updated", res.data);
            } else {
                // ADD request
                const res = await axios.post(
                    `http://localhost:5001/docmeet/admin/doctorAdd`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                console.log("Doctor added", res.data);
            }

            setDoctorData({});
            setAvailableDays([]);
            setImageStore(null);
            navigate("/admin/doctorlist");
        } catch (err) {
            console.log("Error submitting form", err);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white">
            <Sidebar />
            <form className="w-full p-4 md:p-8 flex flex-col">
                <div className="bg-white px-4 md:px-8 py-6 border rounded w-full max-w-6xl mx-auto flex-grow shadow-md">
                    <div className="text-center mb-6">
                        <p className="text-2xl font-semibold text-gray-700">
                            {doctorData._id ? "Edit Doctor" : "Add Doctor"}
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 text-gray-600">
                        {/* Left section */}
                        <div className="flex-1 space-y-4">
                            <InputField label="Doctor Name" name="doctorName" type="text" placeholder="Enter Doctor's Full Name" onChange={onHandleChange} value={doctorData.doctorName || ''} />
                            <InputField label="Doctor Email" name="doctorEmail" type="email" placeholder="Enter email" onChange={onHandleChange} value={doctorData.doctorEmail || ''} />
                            <InputField label="Doctor Password" name="doctorPassword" type="password" placeholder="Enter password" onChange={onHandleChange} value={doctorData.doctorPassword || ''} />
                            <InputField label="Doctor Experience" name="doctorExperience" type="text" placeholder="Enter experience in years" onChange={onHandleChange} value={doctorData.doctorExperience || ''} />
                            <InputField label="Doctor Degree" name="doctorDegree" type="text" placeholder="Enter degree" onChange={onHandleChange} value={doctorData.doctorDegree || ''} />
                            <TextareaField label="Doctor Address" name="doctorAddress" placeholder="Enter address" onChange={onHandleChange} value={doctorData.doctorAddress || ''} />
                            <div>
                                <p className="mb-1 font-medium">Doctor Speciality</p>
                                <select name="doctorSpeciality" className="w-full p-2 border rounded" onChange={onHandleChange} value={doctorData.doctorSpeciality || ''}>
                                    <option value="">Select Speciality</option>
                                    <option value="General Physician">General Physician</option>
                                    <option value="Gynecologist">Gynecologist</option>
                                    <option value="Dermatologist">Dermatologist</option>
                                    <option value="Pediatricians">Pediatricians</option>
                                    <option value="Neurologist">Neurologist</option>
                                    <option value="Gastroenterologist">Gastroenterologist</option>
                                </select>
                            </div>
                        </div>

                        {/* Right section */}
                        <div className="flex-1 space-y-6">
                            <InputField label="Slot Duration (minutes)" name="slotDuration" type="number" placeholder="e.g., 60" onChange={onHandleChange} value={doctorData.slotDuration || ''} />
                            <InputField label="Doctor Fees" name="doctorFees" type="number" placeholder="Enter fees" onChange={onHandleChange} value={doctorData.doctorFees || ''} />
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <p className="mb-1 font-medium">Start Time</p>
                                    <input type="time" name="doctorStart" value={doctorData.doctorStart || ''} className="w-full p-2 border rounded" onChange={onHandleChange} />
                                </div>
                                <div className="flex-1">
                                    <p className="mb-1 font-medium">End Time</p>
                                    <input type="time" name="doctorEnd" value={doctorData.doctorEnd || ''} className="w-full p-2 border rounded" onChange={onHandleChange} />
                                </div>
                            </div>
                            <div>
                                <p className="mb-2 font-medium">Available Days</p>
                                <div className="flex flex-wrap gap-4">
                                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                                        <label key={day} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                name="doctorAvailableDays"
                                                checked={availableDays.includes(day)}
                                                onChange={(e) => {
                                                    const { checked, value } = e.target;
                                                    setAvailableDays((prev) =>
                                                        checked ? [...prev, value] : prev.filter((d) => d !== value)
                                                    );
                                                }}
                                                value={day}
                                                className="form-checkbox text-blue-600"
                                            />
                                            <span className="text-gray-700">{day}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <InputField label="Doctor Phone Number" name="doctorPhno" type="text" placeholder="Enter phone number" onChange={onHandleChange} value={doctorData.doctorPhno || ''} />
                            <InputField label="Doctor Rating" name="doctorRating" type="number" step="0.1" min="1" max="5" placeholder="Enter rating (1-5)" onChange={onHandleChange} value={doctorData.doctorRating || ''} />
                            <div>
                                <p className="mb-1 font-medium">Doctor Image</p>
                                <input type="file" name="doctorImage" className="w-full p-2 border rounded" onChange={(e) => setImageStore(e.target.files[0])} />
                            </div>
                            <TextareaField label="Doctor Description" name="doctorDesc" placeholder="Enter description" onChange={onHandleChange} value={doctorData.doctorDesc || ''} />
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <button type="button" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onClick={onHandleClick}>
                            {doctorData._id ? "Update Doctor" : "Add Doctor"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

const InputField = ({ label, ...props }) => (
    <div>
        <p className="mb-1 font-medium">{label}</p>
        <input {...props} className="w-full p-2 border rounded" required />
    </div>
);

const TextareaField = ({ label, ...props }) => (
    <div>
        <p className="mb-1 font-medium">{label}</p>
        <textarea {...props} rows="4" className="w-full p-2 border rounded" required></textarea>
    </div>
);

export default AddDoctor;
