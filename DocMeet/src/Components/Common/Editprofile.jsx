import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const [userData, setUserData] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageStore, setImageStore] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        axios
            .get(`http://localhost:5001/docmeet/getuser`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                setUserData(res.data.user);
                setFormData(res.data.user);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageStore(file);
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = () => {
        const updatedForm = new FormData();

        // Only append editable fields
        updatedForm.append('fullname', formData.fullname || '');
        updatedForm.append('userBirthDay', formData.userBirthDay || '');

        if (imageStore) {
            updatedForm.append('myfile', imageStore); // KEY NAME MUST BE myfile
        }

        axios
            .put(
                `http://localhost:5001/docmeet/user/updateUserProfile?email=${userData.email}`, // Don't send possibly modified email
                updatedForm,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            )
            .then((res) => {
                setUserData(res.data.user);
                setIsEditing(false);
                alert('Profile updated successfully');
            })
            .catch((err) => {
                console.error(err);
                alert('Failed to update profile');
            });
    };


    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Your Profile
                </h2>

                <div className="flex flex-col items-center space-y-4 mb-6">
                    <img
                        src={
                            selectedImage ||
                            userData?.picture ||
                            '/default-user.png'
                        }


                        alt="Profile"
                        className="w-24 h-24 rounded-full border-2 border-[#5D6BFF] object-cover"
                    />

                    {isEditing && (
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="text-sm text-gray-600"
                        />
                    )}
                </div>

                <div className="space-y-6 text-sm text-gray-700">
                    <div className="grid grid-cols-2 gap-4 items-center">
                        <div className="font-medium">Full Name:</div>
                        <div>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="fullname"
                                    value={formData.fullname || ''}
                                    onChange={handleChange}
                                    className="border px-2 py-1 rounded w-full"
                                />
                            ) : (
                                userData?.fullname || 'N/A'
                            )}
                        </div>
                    </div>


                    <div className="grid grid-cols-2 gap-4 items-center">
                        <div className="font-medium">Birthday:</div>
                        <div>
                            {isEditing ? (
                                <input
                                    type="date"
                                    name="userBirthDay"
                                    value={
                                        formData.userBirthDay?.split("T")[0] || ''
                                    }
                                    onChange={handleChange}
                                    className="border px-2 py-1 rounded w-full"
                                />
                            ) : userData?.userBirthDay ? (
                                new Date(userData.userBirthDay).toLocaleDateString(
                                    'en-US',
                                    {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    }
                                )
                            ) : (
                                'N/A'
                            )}
                        </div>
                    </div>

                    <div className="mt-6 space-x-2">
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-gray-400 text-white px-4 py-2 rounded-xl font-medium shadow-md hover:bg-gray-500 transition duration-200"
                        >
                            ← Back
                        </button>

                        {!isEditing ? (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="bg-[#5D6BFF] text-white px-4 py-2 rounded-xl font-medium shadow-md hover:bg-[#4a5de4] transition duration-200"
                            >
                                Edit Information
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                className="bg-green-600 text-white px-4 py-2 rounded-xl font-medium shadow-md hover:bg-green-700 transition duration-200"
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
