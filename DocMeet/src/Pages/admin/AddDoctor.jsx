import React, { useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

function AddDoctor() {
    const [doctorData,setDoctorData] = useState({})
    const [availableDays, setAvailableDays] = useState([]);
    const [imageStore,setImageStore] = useState({})
    const onHandleChange = (e) => {
        setDoctorData({
            ...doctorData,
            [e.target.name]:e.target.value,
        })
    }
    const onHandleClick = async (e) => {
        
        const formData = new FormData()
    
        for (const key in doctorData) {
            formData.append(key, doctorData[key]);
        }
    
        formData.append("doctorAvailableDays", JSON.stringify(availableDays));
    
        formData.append("myfile", imageStore);
    
        try {
            const res = await axios.post(`http://localhost:5001/docmeet/admin/doctorAdd`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            setDoctorData({})
            setAvailableDays([])
            setImageStore({})
            console.log("Added", res.data);
        } catch (err) {
            console.log("Error adding doctor", err);
        }
    };
    
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white">
            <Sidebar />
            <form className="w-full p-4 md:p-8 flex flex-col">
                <div className="bg-white px-4 md:px-8 py-6 border rounded w-full max-w-6xl mx-auto flex-grow shadow-md">
                    <div className="text-center mb-6">
                        <p className="text-2xl font-semibold text-gray-700">Add Doctor</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 text-gray-600">

                        <div className="flex-1 space-y-4">
                            <InputField label="Doctor Name" name="doctorName" type="text" placeholder="Enter Doctor's Full Name" onChange={((e)=>{onHandleChange(e)})} value = {doctorData.doctorName ? doctorData.doctorName : ''} required />
                            <InputField label="Doctor Email" name="doctorEmail" type="email" placeholder="Enter email" onChange={((e)=>{onHandleChange(e)})} value = {doctorData.doctorEmail ? doctorData.doctorEmail : ''} required/>
                            <InputField label="Doctor Password" name="doctorPassword" type="password" placeholder="Enter password" onChange={((e)=>{onHandleChange(e)})} value = {doctorData.doctorPassword ? doctorData.doctorPassword : ''} required/>
                            <InputField label="Doctor Experience" name="doctorExperience" type="text" placeholder="Enter experience in years" onChange={((e)=>{onHandleChange(e)})} value = {doctorData.doctorExperience ? doctorData.doctorExperience : ''} required/>
                            <InputField label="Doctor Degree" name="doctorDegree" type="text" placeholder="Enter degree" onChange={((e)=>{onHandleChange(e)})} value = {doctorData.doctorDegree ? doctorData.doctorDegree : ''} required/>
                            <TextareaField label="Doctor Address" name="doctorAddress" placeholder="Enter Doctor Address" onChange={((e)=>{onHandleChange(e)})} value = {doctorData.doctorAddress ? doctorData.doctorAddress : ''} required/>
                            <div>
                                <p className="mb-1 font-medium">Doctor Speciality</p>
                                <select name="doctorSpeciality" className="w-full p-2 border rounded" onChange={((e)=>{onHandleChange(e)})} value = {doctorData.doctorSpeciality || '' } required>
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

                        <div className="flex-1 space-y-4">
                            <InputField label="Doctor Fees" name="doctorFees" type="number" placeholder="Enter fees" onChange={((e)=>{onHandleChange(e)})} value = {doctorData.doctorFees ? doctorData.doctorFees : ''}required />
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <p className="mb-1 font-medium">Start Time</p>
                                    <input
                                        type="time"
                                        name="doctorStart"
                                        value = {doctorData.doctorStart ? doctorData.doctorStart : ''}
                                        placeholder="Enter Start Time"
                                        className="w-full p-2 border rounded"
                                        onChange={((e)=>{onHandleChange(e)})}
                                        required
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="mb-1 font-medium">End Time</p>
                                    <input
                                        type="time"
                                        name="doctorEnd"
                                        value = {doctorData.doctorEnd ? doctorData.doctorEnd : ''}
                                        placeholder="Enter End Time"
                                        className="w-full p-2 border rounded"
                                        onChange={((e)=>{onHandleChange(e)})}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="mb-2 font-medium">Available Days</p>
                                <div className="flex flex-wrap gap-4">
                                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                                        <label key={day} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                name="doctorAvailableDays"
                                                checked={availableDays.includes(day)}
                                                onChange={(e) => {
                                                    const { checked, value } = e.target;
                                                    setAvailableDays(prev =>
                                                      checked ? [...prev, value] : prev.filter(d => d !== value)
                                                    );
                                                }}
                                                value={day}
                                                className="form-checkbox text-blue-600"
                                                required
                                            />
                                            <span className="text-gray-700">{day}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>


                            <InputField label="Doctor Phone Number" name="doctorPhno" type="text" placeholder="Enter phone number" onChange={((e)=>{onHandleChange(e)})} value = {doctorData.doctorPhno ? doctorData.doctorPhno : ''} required />
                            <InputField label="Doctor Rating" name="doctorRating" type="number" step="0.1" min="1" max="5" placeholder="Enter rating (1-5)" onChange={((e)=>{onHandleChange(e)})} value = {doctorData.doctorRating ? doctorData.doctorRating : ''} required />
                            <div>
                                <p className="mb-1 font-medium">Doctor Image</p>
                                <input type="file" name="doctorImage" value = {doctorData.doctorImage || ''} className="w-full p-2 border rounded" onChange={((e)=>{setImageStore(e.target.files[0])})} required />
                            </div>
                            <TextareaField label="Doctor Description" name="doctorDesc" placeholder="Enter description" onChange={((e)=>{onHandleChange(e)})} value = {doctorData.doctorDesc ? doctorData.doctorDesc : ''} required/>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            onClick={(()=>{onHandleClick()})}
                        >
                            Submit
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

