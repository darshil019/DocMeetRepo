import React, { useEffect } from 'react'
import { ArrowUpRight, Heart, Shield, Star } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import doctorImg from '../../assets/images/doctor.png';
import filUploadImg from '../../assets/images/upload.png';
import MAImg from '../../assets/images/MA.png';
import congrats from '../../assets/images/firework.png'
import doctorImg1 from '../../assets/images/doctor.jpg'

function UserDashboard() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
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
            <img src={doctorImg} alt="Not FOund" className='w-13 h-13 object-cover shadow-md !rounded-full bg-white'></img>
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
      <div className='flex flex-col items-center justify-center py-5 mt-8'>
          <div><p className='text-3xl font-bold py-2'>Find By Speciality</p></div>
          <div><p className='text-xs md:text-xs font bold m-0'>Simply browse through our extensive list of trusted doctors,</p></div>
          <div><p className='text-xs md:text-xs font bold m-0'>schedule your appointment hassle-free.</p></div>
      </div>
    </div>
  )
}

export default UserDashboard