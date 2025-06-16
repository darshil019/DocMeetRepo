import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Heart, Shield, Star } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import doctorImg from '../../assets/images/doctor.png';
import filUploadImg from '../../assets/images/upload.png';
import MAImg from '../../assets/images/MA.png';
import congrats from '../../assets/images/firework.png'
import doctorImg1 from '../../assets/images/doctor.jpg'
import cat1 from '../../assets/images/cat1.svg'
import cat2 from '../../assets/images/cat2.svg'
import cat3 from '../../assets/images/cat3.svg'
import cat4 from '../../assets/images/cat4.svg'
import cat5 from '../../assets/images/cat5.svg'
import cat6 from '../../assets/images/cat6.svg'
import img from "../../assets/images/image.png";
import { motion } from 'framer-motion';
import axios from 'axios';

function UserDashboard() {
  const [storeDoctorData, setStoreDoctorData] = useState([])


  useEffect(() => {
    axios.get(`http://localhost:5001/docmeet/user/getDoctorImages`)
      .then((res) => {
        console.log(res.data.data)
        setStoreDoctorData(res.data.data)

      })
      .catch((err) => {
        console.log("Err", err)
      })
  }, [])


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  const now = new Date();
  const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8" >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" >
          <div className="space-y-6" data-aos="fade-right">
            <div className="flex items-center gap-2 text-indigo-600">
              <Heart className="w-5 h-5 mb-2" />
              <h5 className="font-medium text-sm uppercase tracking-wide">
                The Best Health Solution
              </h5>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              <div className="mb-2">
                Optimal <span className="text-indigo-600">Health</span>
              </div>
              <div>One Click Away!</div>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Experience personalized healthcare with our cutting-edge medical platform.
              Connect with top specialists, schedule appointments instantly, and take control
              of your wellness journey with advanced health monitoring tools.
            </p>


            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Trusted by 50K+ patients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-yellow-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">4.9/5 Rating</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#5D6BFF] hover:bg-indigo-700 text-white px-8 py-3 !rounded-full text-base font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
                Book An Appointment
              </button>

              <button className="bg-white hover:bg-gray-50 text-indigo-600 border-2 border-indigo-600 px-8 py-3 !rounded-full text-base font-medium flex items-center gap-2 transition-all duration-200 hover:shadow-lg">
                Learn More <ArrowUpRight size={20} />
              </button>
            </div>
          </div>


          <div className="relative" data-aos="fade-left">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
              <img

                src={doctorImg1}
                alt="Modern medical consultation"
                className="w-full h-96 lg:h-[500px] object-cover"
              />

              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-1.5 sm:p-4 shadow-lg">
                <div className="flex items-center sm:gap-3 gap-2">
                  <div className='text-center'>
                    <p className="text-lg sm:text-2xl font-bold text-indigo-600">24/7</p>
                    <p className="text-xs sm:text-sm text-gray-600">Support Available</p> </div>
                </div>
              </div>
            </div>


            <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-40"></div>
          </div>
        </div>


        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-8">Trusted by leading healthcare institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <p className="font-semibold text-gray-700">Mayo Clinic Partner</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <p className="font-semibold text-gray-700">Zydus Approved</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <p className="font-semibold text-gray-700">FDA Approved</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <p className="font-semibold text-gray-700">Apollo Approved</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <p className="font-semibold text-gray-700">HIPAA Compliant</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center py-5'>
        <div><p className='text-2xl font-bold'>- Fastest Solution</p></div>
        <div><p className='text-2xl md:text-4xl font bold'><span className='text-primary'>4 Easy Steps</span> And Get Your</p></div>
        <div><p className='text-2xl md:text-4xl font bold'>Solution</p></div>
      </div>
      <div className='grid mx-auto grid-cols-1 lg:grid-cols-4 md:grid-cols-2 2xl:grid-cols-2 gap-5 px-20 justify-items-center'>
        <div className='shadow-lg p-3 bg-gray-300 !rounded-lg lg:w-70 lg:h-102 w-80 hover:bg-[#5D6BFF] hover:text-white' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <img src={doctorImg1} alt="Not FOund" className='w-13 h-13 object-cover shadow-md !rounded-full bg-white'></img>
          <h2 className='py-3 font-bold'>Check Doctor Profile</h2>
          <p className=''>
            Browse through detailed doctor profiles to learn about their qualifications, areas of expertise, experience, and patient feedback — helping you make confident and informed healthcare choices tailored to your needs.
          </p>
        </div>
        <div className='shadow-lg p-3 bg-gray-300 !rounded-lg lg:w-70 lg:h-102 w-80 hover:bg-[#5D6BFF] hover:text-white' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <img src={MAImg} alt="Not FOund" className='w-13 h-13 object-cover shadow-md !rounded-full bg-white'></img>
          <h2 className='py-3'>Book Doctor Appointment</h2>
          <p>
            Easily schedule a visit with just a few clicks.
            Choose your preferred doctor, select a suitable time,
            and book your appointment instantly — no long calls or waiting lines required.
          </p>
        </div>
        <div className='shadow-lg p-3 bg-gray-300 !rounded-lg lg:w-70 lg:h-102 w-80 hover:bg-[#5D6BFF] hover:text-white' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <img src={filUploadImg} alt="Not FOund" className='w-13 h-13 object-cover shadow-md !rounded-full bg-white'></img>
          <h2 className='py-3'>Upload Your Record</h2>
          <p>
            Share your medical history securely by uploading test results,
            prescriptions, or reports. This allows your doctor to review your health background in advance
            and offer more precise, personalized care.
          </p>
        </div>
        <div className='shadow-lg p-3 bg-gray-300 !rounded-lg lg:w-70 lg:h-102 w-80 hover:bg-[#5D6BFF] hover:text-white' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <img src={congrats} alt="Not FOund" className='w-13 h-13 object-cover shadow-md !rounded-full bg-white'></img>
          <h2 className='py-3'>Congrats! Booked</h2>
          <p>
            You're all set! Your appointment has been confirmed.
            We'll handle the rest — just show up on time and let our healthcare team
            take care of you with the attention and expertise you deserve.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center py-5 mt-12'>
        <div><p className='text-3xl font-bold py-2'>Find By Speciality</p></div>
        <div><p className='text-xs md:text-xs font-bold m-0 lg:line-clamp-3'>Simply browse through our extensive list of trusted doctors,<br /><center> schedule your appointment hassle-free. </center></p></div>
      </div>
      <div className='grid grid-cols-3 lg:grid-cols-6 gap-2 max-w-6xl mx-auto '>
        <Link to="/user/GeneralPhysician" style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className='flex flex-col items-center space-y-2'
          >
            <img src={cat1} className='w-20 h-20 rounded-full object-cover shadow-md' />
            <span className='text-sm text-center text-gray-800 hover:text-[#5D6BFF]'>GeneralPhysician</span>
          </motion.div>
        </Link>
        <Link to="/user/Gynecologist" style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className='flex flex-col items-center space-y-2'
          >
            <img src={cat2} className='w-20 h-20 rounded-full object-cover shadow-md' />
            <span className='text-sm text-gray-800 hover:text-[#5D6BFF] text-center'>Gynecologist</span>
          </motion.div>
        </Link>
        <Link to="/user/Dermatologist" style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className='flex flex-col items-center space-y-2'
          >
            <img src={cat3} className='w-20 h-20 rounded-full object-cover shadow-md' />
            <span className='text-sm text-gray-800 hover:text-[#5D6BFF] text-center'>Dermatologist</span>
          </motion.div>
        </Link>
        <Link to="/user/Pediatricians" style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className='flex flex-col items-center space-y-2'
          >
            <img src={cat4} className='w-20 h-20 rounded-full object-cover shadow-md' />
            <span className='text-sm text-center text-gray-800 hover:text-[#5D6BFF]'>Pediatricians</span>
          </motion.div>
        </Link>
        <Link to="/user/Neurologist" style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className='flex flex-col items-center space-y-2'
          >
            <img src={cat5} className='w-20 h-20 rounded-full object-cover shadow-md' />
            <span className='text-sm text-center text-gray-800 hover:text-[#5D6BFF]'>Neurologist</span>
          </motion.div>
        </Link>
        <Link to="/user/Gastroenterologist" style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className='flex flex-col items-center space-y-2'
          >
            <img src={cat6} className='w-20 h-20 rounded-full object-cover shadow-md' />
            <span className='text-sm text-center text-gray-800 hover:text-[#5D6BFF]'>Gastroenterologist</span>
          </motion.div>
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center py-5 mt-13'>
        <div><p className='text-3xl font-bold py-2'>Top Doctors to Book</p></div>
        <div><p className='text-xs md:text-xs font-bold m-0 lg:line-clamp-3'>Simply browse through our extensive list of trusted doctors.</p></div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 px-4 max-w-6xl mx-auto mt-6'>
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
                <img src={val.doctorImage?.imgPath} className='bg-[#5D6BFF]' />
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

export default UserDashboard