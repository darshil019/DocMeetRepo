import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion';
import img from "../../assets/images/image.png";
import { useParams } from 'react-router-dom';
import verfied from '../../assets/images/verfied.png'
import info from '../../assets/images/information.png'
import { AuthContext } from '../../Components/Common/AuthContext';

function PartDoc() {
  const { currencySymbol } = useContext(AuthContext);
  const { _id } = useParams()
  const [storeDoctorData, setStoreDoctorData] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slottime, setSlotTime] = useState('')
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const [totalDays, setTotalDays] = useState([])

  useEffect(() => {
    console.log(docSlots)
  }, [docSlots])

  useEffect(() => {
    console.log(_id)
    axios.get(`http://localhost:5001/docmeet/user/partDoc/${_id}`)
      .then((res) => {
        console.log(res.data.data)
        setStoreDoctorData(res.data.data)
        getAvailableSlots()
      })
      .catch((err) => {
        console.log("Err", err)
      })
  }, [_id])


  useEffect(() => {
    if (storeDoctorData?.doctorAvailableDays) {
      const filteredDays = storeDoctorData.doctorAvailableDays.filter(day =>
        daysOfWeek.includes(day)
      );
      console.log("Filtered Days:", filteredDays);
      setTotalDays(filteredDays);
    }
  }, [storeDoctorData]);

  const getAvailableSlots = async () => {
    setDocSlots([])

    //getting current data
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      //getting data with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      //setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        //add slots to array
        timeSlots.push({
          datatime: new Date(currentDate),
          time: formattedTime
        })

        //increment current time by 30 mins
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0e7ff] to-[#f0f4ff] px-4 py-8 ">

      {storeDoctorData ? (
        <>
          <div className='flex flex-col sm:flex-row gap-4'>
            <div>
              <img
                className='bg-[#5D6BFF] w-full sm:max-w-65 rounded-xl shadow-lg border border-white/30'
                src={storeDoctorData.doctorImage?.imgPath}
                alt="Doctor"
              />
            </div>

            <div className='flex-1 bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-xl p-8 py-7 mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
              <p className="text-lg font-semibold flex items-center gap-2 text-gray-900">
                {storeDoctorData.doctorName}
                <img src={verfied} alt="Verified" className="w-5 h-5" />
              </p>

              <div className='flex items-center gap-2 text-sm mt-1 text-gray-700'>
                <p>{storeDoctorData.doctorDegree} - {storeDoctorData.doctorSpeciality}</p>
                <button className='py-0.5 px-2 border text-xs rounded-full mb-3'>
                  {storeDoctorData.doctorExperience} Years
                </button>
              </div>

              <div>
                <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                  About
                  <img
                    src={info}
                    alt="Info"
                    className="w-3.5 h-3.5 cursor-pointer hover:scale-110 transition-transform duration-200"
                    title="Details about the doctor"
                  />
                </p>
                <p className='text-sm text-gray-600 max-w-[700px] mt-1'>
                  {storeDoctorData.doctorDesc}
                </p>
              </div>
              <p className='text-sm text-gray-600 max-w-[700px] '>
                Appointment Fees : <span className='text-gray-600 font-bold'>{currencySymbol}{storeDoctorData.doctorFees}</span>
              </p>
            </div>

            {/* booking slots */}

          </div>
          <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
            <p>Booking Slots</p>
            <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
              {
                docSlots.length && docSlots.map((item, index) => (
                  <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 !rounded-full cursor-pointer ${slotIndex === index ? 'bg-[#5D6BFF] text-white' : 'border border-gray-200'}`} key={index}>
                    <p>{item[0] && daysOfWeek[item[0].datatime.getDay()]}</p>
                    <p>{item[0] && item[0].datatime.getDate()}</p>
                  </div>
                ))
              }
            </div>
            <div className="flex items-center gap-3 w-full overflow-x-auto mt-4 pb-2 scrollbar-thin scrollbar-thumb-gray-300">
              {docSlots.length > 0 && docSlots[slotIndex]?.length > 0 ? (
                docSlots[slotIndex].map((item, index) => (
                  <p
                    key={index}
                    onClick={() => setSlotTime(item.time)}
                    className={`text-sm flex-shrink-0 px-5 py-3 rounded-lg cursor-pointer transition duration-200 
                        ${item.time === slottime
                        ? 'bg-[#5D6BFF] text-white font-semibold shadow-md'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    {item.time.toLowerCase()}
                  </p>
                ))
              ) : (
                <p className="text-sm text-gray-500">No slots available</p>
              )}
            </div>
            <div className="mt-6">
              <button
                onClick={() => {
                  console.log(totalDays);
                }}
                className="bg-[#5D6BFF] hover:bg-[#4a5ce3] text-white font-medium px-6 py-2 !rounded-lg shadow transition duration-200"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center mt-10 text-gray-600">Loading doctor details...</div>
      )}

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
