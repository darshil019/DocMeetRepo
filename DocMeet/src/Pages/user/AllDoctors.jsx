import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css';
import img from "../../assets/images/image.png";
import { motion } from 'framer-motion';
import axios from 'axios';

function AllDoctors() {
    const [storeDoctorData, setStoreDoctorData] = useState([])
    const [status1, setStatus1] = useState('all')
    useEffect(() => {
        axios.get(`http://localhost:5001/docmeet/user/${status1 === 'all' ? 'allDoctors' : status1}`)
            .then((res) => {
                console.log("going on")
                console.log(res.data.data)
                setStoreDoctorData(res.data.data)
            })
            .catch((err) => {
                console.log("Err", err)
            })
    }, [status1])
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8" >
            <div className="max-w-7xl mx-auto flex gap-8">
                {/* Left Sidebar: Category Filter */}
                <aside className="w-full sm:w-1/4">
                    <div className="flex flex-col gap-3">
                        {[
                            { label: "All Doctors", value: "alldoctors" },
                            { label: "Pediatricians", value: "getPediatriciansDoctors" },
                            { label: "Dermatologists", value: "getDermatologistDoctors" },
                            { label: "Gynecologist", value: "getGynecologistDoctors" },
                            { label: "GeneralPhysician", value: "getGeneralPhysician" },
                            { label: "Neurologist", value: "getNeurologist" },
                            { label: "Gastroenterologist", value: "getGastroenterologist" },
                        ].map(({ label, value }) => (
                        <button
                        key={value}
                        onClick={() => setStatus1(value)}
                        className={`text-left px-4 py-2 rounded-md border font-medium transition 
                        ${status1 === value
                            ? "bg-[#5D6BFF] text-white border-[#5D6BFF]"
                            : "bg-white text-gray-700 border-gray-200 hover:bg-blue-100"}`}
                        >
                        {label}
                        </button>
                        ))}
                    </div>
                </aside>
                <main className="w-full sm:w-3/4">
                    <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4'>
                        {
                            storeDoctorData.map((val) => {
                                const isTodayAvailable = val.doctorAvailableDays.includes(dayName);
                                const isAvailable =
                                    formattedTime > val.doctorTimmings.doctorStart &&
                                    formattedTime < val.doctorTimmings.doctorEnd && isTodayAvailable;
                                return (
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className='flex flex-col items-center space-y-2 border p-3 bg-white shadow-lg'
                                    >
                                        <img src={val.doctorImage.imgPath} className='bg-[#5D6BFF]' />
                                        <div className="flex items-center space-x-2">
                                            <div
                                                className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-red-500'
                                                    }`}
                                            ></div>
                                            <span
                                                className={`font-medium text-sm ${isAvailable ? 'text-green-500' : 'text-red-500'
                                                    }`}
                                            >
                                                {isAvailable ? 'Available' : 'Not Available'}
                                            </span>
                                        </div>

                                        <span className='font-bold'>{val.doctorName}</span>
                                        <span className='font-semibold'>{val.doctorSpeciality}</span>
                                    </motion.div>
                                )
                            })
                        }
                    </div>

                </main>
            </div>
            <footer className="mt-40 bg-white">
                <div className="max-w-6xl mx-auto px-4 py-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-10">

                        {/* Logo & Description */}
                        <div className="flex flex-col space-y-1 max-w-md">
                            <a href="/" className="flex items-center no-underline mb-2" style={{ textDecoration: "none" }}>
                                <img
                                    src={img}
                                    alt="Logo"
                                    className="h-9 w-9 rounded-full mr-3 border-2 border-white"
                                />
                                <h3 className="text-black font-semibold tracking-wider mt-2">
                                    D<span className="text-[#5D6BFF]">o</span>cM
                                    <span className="text-[#5D6BFF]">ee</span>t
                                </h3>
                            </a>
                            <span className="text-sm text-gray-600 leading-relaxed mt-2 md:pr-4 text-center md:text-left">
                                DocMeet connects patients with certified medical professionals instantly. Book appointments, get consultations, and manage your health – all in one place.
                            </span>
                        </div>

                        {/* Company Links */}
                        <div className="flex flex-col space-y-1 items-center md:items-start">
                            <span className="font-bold text-lg">Company</span>
                            <span>Home</span>
                            <span>About</span>
                            <span>Privacy</span>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col space-y-1 items-center md:items-start">
                            <span className="font-bold text-lg">GET IN TOUCH</span>
                            <span>+91 79932 29000</span>
                            <span>docmeet@gmail.com</span>
                        </div>
                    </div>

                    {/* Bottom Text */}
                    <div className="text-center text-sm text-gray-500 mt-10 pt-4 border-t">
                        © 2025 DocMeet.io – All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default AllDoctors