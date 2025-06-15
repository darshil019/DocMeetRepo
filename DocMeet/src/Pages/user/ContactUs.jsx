import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../assets/images/image.png";

const ContactUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8" >

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                        {/* Doctor Image */}
                        <div className="w-full md:max-w-[360px]" data-aos="fade-right">
                            <img
                                src={img}
                                alt="Doctor"
                                className="rounded-xl w-full max-w-md h-auto object-cover"
                            />
                        </div>

                        {/* Contact Info */}
                        <div data-aos="fade-left">
                            <h2 className="text-4xl font-bold text-blue-700 mb-6">Contact Us</h2>
                            <p className="text-gray-700 text-lg mb-4">
                                We’re here to help you. Whether you have questions about appointments, services, or emergencies — feel free to reach out anytime.
                            </p>

                            <div className="space-y-4 mt-6">
                                <div className="flex items-start gap-3">
                                    <img src="https://cdn-icons-png.flaticon.com/512/484/484167.png" alt="Phone" className="w-6 h-6 mt-1" />
                                    <p className="text-gray-800 text-base">
                                        <strong>Phone:</strong> +91 98765 43210
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="w-6 h-6 mt-1" />
                                    <p className="text-gray-800 text-base">
                                        <strong>Email:</strong> support@hospitalcare.com
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Address" className="w-6 h-6 mt-1" />
                                    <p className="text-gray-800 text-base">
                                        <strong>Address:</strong> 123 Health Street, MedCity, Gujarat, India
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png" alt="Hours" className="w-6 h-6 mt-1" />
                                    <p className="text-gray-800 text-base">
                                        <strong>Working Hours:</strong> Mon–Sat: 9 AM – 8 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
               


                {/* Footer Section */}
                <footer className="mt-40 bg-white">
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
                            <div className="flex flex-col space-y-1 items-center md:items-start">
                                <span className="font-bold text-lg">Company</span>
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

                        {/* Bottom Text */}
                        <div className="text-center text-sm text-gray-500 mt-10 pt-4 border-t">
                            ©️ 2025 DocMeet.io – All Rights Reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default ContactUs;