import React from 'react';
import Sidebar from './Sidebar';

function AddDoctor() {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white">
            <Sidebar />
            <form className="w-full p-4 md:p-8 flex flex-col">
                <div className="bg-white px-4 md:px-8 py-6 border rounded w-full max-w-6xl mx-auto flex-grow shadow-md">
                    <div className="text-center mb-6">
                        <p className="text-2xl font-semibold text-gray-700">Add Doctor</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 text-gray-600">
                        {/* Left Column */}
                        <div className="flex-1 space-y-4">
                            <InputField label="Doctor Name" name="doctorName" type="text" placeholder="Enter Doctor's Full Name" required />
                            <InputField label="Doctor Email" name="doctorEmail" type="email" placeholder="Enter email" required/>
                            <InputField label="Doctor Password" name="doctorPassword" type="password" placeholder="Enter password" required/>
                            <InputField label="Doctor Experience" name="doctorExperience" type="text" placeholder="Enter experience in years" required/>
                            <InputField label="Doctor Degree" name="doctorDegree" type="text" placeholder="Enter degree" required/>
                            <TextareaField label="Doctor Address" name="doctorAddress" placeholder="Enter Doctor Address" required/>
                            <div>
                                <p className="mb-1 font-medium">Doctor Speciality</p>
                                <select name="doctorSpeciality" className="w-full p-2 border rounded" required>
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

                        {/* Right Column */}
                        <div className="flex-1 space-y-4">
                            <InputField label="Doctor Fees" name="doctorFees" type="number" placeholder="Enter fees"required />
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <p className="mb-1 font-medium">Start Time</p>
                                    <input
                                        type="time"
                                        name="doctorStart"
                                        placeholder="Enter Start Time"
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="mb-1 font-medium">End Time</p>
                                    <input
                                        type="time"
                                        name="doctorEnd"
                                        placeholder="Enter End Time"
                                        className="w-full p-2 border rounded"
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
                                                name="availableDays"
                                                value={day}
                                                className="form-checkbox text-blue-600"
                                                required
                                            />
                                            <span className="text-gray-700">{day}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>


                            <InputField label="Doctor Phone Number" name="doctorPhno" type="text" placeholder="Enter phone number"required />
                            <InputField label="Doctor Rating" name="doctorRating" type="number" step="0.1" min="1" max="5" placeholder="Enter rating (1-5)"required />
                            <div>
                                <p className="mb-1 font-medium">Doctor Image</p>
                                <input type="file" name="doctorImage" className="w-full p-2 border rounded" required />
                            </div>
                            <TextareaField label="Doctor Description" name="doctorDesc" placeholder="Enter description" required/>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
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

