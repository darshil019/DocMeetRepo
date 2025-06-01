import React from "react";
import img from "../../assets/images/image.png";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-100 shadow-lg py-1.5 px-5 font-['Poppins']">
      <div className="container mx-auto flex items-center justify-between relative">
        <a href="/" className="flex items-center no-underline" style={{ textDecoration: "none" }}>
          <img
            src={img}
            alt="Logo"
            className="h-12 w-12 rounded-full mr-3 border-2 border-white mb-2"
          />
          <h3 className="text-black font-semibold tracking-wider">
            D<span className="text-[#5D6BFF]">o</span>cM
            <span className="text-[#5D6BFF]">ee</span>t
          </h3>
        </a>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
          <a
            href="/features"
            style={{ textDecoration: "none" }}
          >
            <span className="text-gray-800 hover:text-[#5D6BFF] transition-colors duration-300 font-semibold font-medium">HOME</span>
          </a>
          <a
            href="/AllDoctors"
            style={{ textDecoration: "none" }}
          >
            <span className="text-gray-800 hover:text-[#5D6BFF] transition-colors duration-300 font-semibold font-medium">ALL DOCTORS</span>
          </a>
          <a
            href="/about"
            style={{ textDecoration: "none" }}
          >
            <span className="text-gray-800 hover:text-[#5D6BFF] transition-colors duration-300 font-semibold font-medium">ABOUT</span>
          </a>
          <Link
            to="/contact"
            style={{ textDecoration: "none" }}
          >
            <span className="text-gray-800 hover:text-[#5D6BFF] transition-colors duration-300 font-semibold font-medium">CONTACT</span>
          </Link>
        </div>
        <div className="flex items-center space-x-6">
  <button
   onClick={() => window.location.href = '/user/signup'}
    className="bg-[#5D6BFF] text-white px-3 py-1 rounded-xl text-xs hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
  >
    SignUp
  </button>
  <button
    onClick={() => window.location.href = '/login'}
    className="bg-gray-300 text-black px-3 py-1 rounded-xl text-xs hover:bg-[#5D6BFF] hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
  >
    SignIn
  </button>
</div>

      </div>
    </nav>
  );
}

export default Navbar;
