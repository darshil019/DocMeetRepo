import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from  "../../assets/images/doc3.png";
import img from "../../assets/images/image.png"
const Aboutus = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* About Section */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8" >

      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          About <span className="text-gray-700 font-medium">Us</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 px-4 md:px-20">
        <div className="w-full md:max-w-[360px]" data-aos="fade-right">
          <img
            src={img1}
            alt="Doctor"
            className="rounded-xl w-full max-w-md h-auto object-cover"
          />
        </div>

        <div className="space-y-4 text-gray-700 text-base" data-aos="fade-left">
          <p>
            At DocMeet Hospital, we are committed to delivering exceptional medical care with compassion, advanced technology, and a patient-first approach.
          </p>
          <p>
            From preventive care to specialized treatments, we offer a full range of medical services designed to meet the needs of individuals and families across all age groups.
          </p>
          <p>
            We believe that healing begins with trust, and we are honored to be the trusted healthcare partner for thousands of patients and families across Gujarat and beyond.
          </p>

          <h3 className="font-semibold text-xl text-blue-700">Our Vision</h3>
          <p>
            Our vision is to become a leading healthcare provider known for excellence in patient care, medical innovation, and community wellness.
          </p>

          <div className="text-xl my-4">
            <p>Why <span className="text-gray-700 font-semibold">Choose Us?</span></p>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-6 text-sm text-gray-700 mt-6">
            <div className="border px-10 md:px-8 py-6 flex-1 rounded-lg hover:bg-blue-50 transition-all duration-300">
              <b className="text-blue-700">Efficiency:</b>
              <p className="mt-2">
                We streamline the healthcare process — from scheduling to follow-ups — saving time for both patients and doctors.
              </p>
            </div>

            <div className="border px-10 md:px-8 py-6 flex-1 rounded-lg hover:bg-blue-50 transition-all duration-300">
              <b className="text-blue-700">Convenience:</b>
              <p className="mt-2">
                With 24/7 online access, mobile-friendly design, and real-time notifications, patients can manage appointments anytime.
              </p>
            </div>

            <div className="border px-10 md:px-8 py-6 flex-1 rounded-lg hover:bg-blue-50 transition-all duration-300">
              <b className="text-blue-700">Personalization:</b>
              <p className="mt-2">
                Every patient is unique. Our platform offers tailored recommendations and personal dashboards for better care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-40 bg-white ">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-between gap-10">

            {/* Logo & Description */}
            <div className="flex flex-col space-y-2 max-w-md">
              <a href="/" className="flex items-center mb-2 no-underline">
                <img
                  src={img}
                  alt="Logo"
                  className="h-9 w-9 rounded-full mr-3 border-2 border-white"
                />
                <h3 className="text-black font-semibold tracking-wider text-xl">
                  D<span className="text-[#5D6BFF]">o</span>cM
                  <span className="text-[#5D6BFF]">ee</span>t
                </h3>
              </a>
              <p className="text-sm text-gray-600 leading-relaxed">
                DocMeet connects patients with certified medical professionals instantly. Book appointments, get consultations, and manage your health – all in one place.
              </p>
            </div>

            {/* Company Links */}
            <div className="flex flex-col space-y-2">
              <span className="font-bold text-lg text-gray-700">Company</span>
              <a href="/user/dashboard" className="text-sm text-gray-600 hover:text-blue-700">HOME</a>
              <a href="/user/aboutus" className="text-sm text-gray-600 hover:text-blue-700">ABOUT US</a>
              <a href="/user/contactus" className="text-sm text-gray-600 hover:text-blue-700">CONTACT US</a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-2">
              <span className="font-bold text-lg text-gray-700">Get in Touch</span>
              <span className="text-sm text-gray-600">+91 79932 29000</span>
              <span className="text-sm text-gray-600">docmeet@gmail.com</span>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center text-sm text-gray-500 mt-10 pt-4 border-t">
            ©️ 2025 DocMeet.io – All Rights Reserved.
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Aboutus;