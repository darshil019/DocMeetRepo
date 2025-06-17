import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion';
import img from "../../assets/images/image.png";
import { useParams } from 'react-router-dom';

function PartDoc() {
  const { _id } = useParams()
  const [storeDoctorData, setStoreDoctorData] = useState(null)

  useEffect(() => {
    console.log(_id)
    axios.get(`http://localhost:5001/docmeet/user/partDoc/${_id}`)
      .then((res) => {
        console.log(res.data.data)
        setStoreDoctorData(res.data.data)
      })
      .catch((err) => {
        console.log("Err", err)
      })
  }, [])

  const now = new Date();
  const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });

  // Handle loading state
  if (!storeDoctorData) return <div className='text-center py-10'>Loading...</div>

  const isTodayAvailable = storeDoctorData.doctorAvailableDays.includes(dayName)
  const isAvailable = formattedTime > storeDoctorData.doctorTimmings.doctorStart &&
                      formattedTime < storeDoctorData.doctorTimmings.doctorEnd &&
                      isTodayAvailable

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 px-4 max-w-6xl mx-auto mt-6'>
        <motion.div
          key={storeDoctorData._id}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className='flex flex-col items-center space-y-2 border p-3 bg-white shadow-lg'
        >
          <img src={storeDoctorData.doctorImage?.imgPath} className='bg-[#5D6BFF]' />
          <div className="flex items-center space-x-2">
            <div
              className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-red-500'}`}
            ></div>
            <span
              className={`font-medium text-sm ${isAvailable ? 'text-green-500' : 'text-red-500'}`}
            >
              {isAvailable ? 'Available' : 'Not Available'}
            </span>
          </div>

          <span className='font-bold'>{storeDoctorData.doctorName}</span>
          <span className='font-semibold'>{storeDoctorData.doctorSpeciality}</span>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-40 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="flex flex-col space-y-1 max-w-md">
              <a href="/" className="flex items-center no-underline mb-2">
                <img src={img} alt="Logo" className="h-9 w-9 rounded-full mr-3 border-2 border-white" />
                <h3 className="text-black font-semibold tracking-wider mt-2">
                  D<span className="text-[#5D6BFF]">o</span>cM
                  <span className="text-[#5D6BFF]">ee</span>t
                </h3>
              </a>
              <span className="text-sm text-gray-600 leading-relaxed mt-2 md:pr-4 text-center md:text-left">
                DocMeet connects patients with certified medical professionals instantly. Book appointments, get consultations, and manage your health – all in one place.
              </span>
            </div>

            <div className="flex flex-col space-y-1 items-center md:items-start">
              <span className="font-bold text-lg">Company</span>
              <span>Home</span>
              <span>About</span>
              <span>Privacy</span>
            </div>

            <div className="flex flex-col space-y-1 items-center md:items-start">
              <span className="font-bold text-lg">GET IN TOUCH</span>
              <span>+91 79932 29000</span>
              <span>docmeet@gmail.com</span>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 mt-10 pt-4 border-t">
            © 2025 DocMeet.io – All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PartDoc
