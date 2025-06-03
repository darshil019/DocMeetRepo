import React from "react";
import img from "../../assets/images/image.png";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  let navigate = useNavigate()
  const [isOpen,setIsOpen] = React.useState(false)
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


        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
          <a href="/features" style={{ textDecoration: "none" }}>
            <span className="text-gray-800 hover:text-[#5D6BFF] transition-colors duration-300 font-semibold">HOME</span>
          </a>
          <a href="/AllDoctors" style={{ textDecoration: "none" }}>
            <span className="text-gray-800 hover:text-[#5D6BFF] transition-colors duration-300 font-semibold">ALL DOCTORS</span>
          </a>
          <a href="/about" style={{ textDecoration: "none" }}>
            <span className="text-gray-800 hover:text-[#5D6BFF] transition-colors duration-300 font-semibold">ABOUT</span>
          </a>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <span className="text-gray-800 hover:text-[#5D6BFF] transition-colors duration-300 font-semibold">CONTACT</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => window.location.href = '/user/signup'}
            className="bg-[#5D6BFF] text-white px-3 py-1 rounded-xl text-xs hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            SignUp
          </button>
          <button
            onClick={() => window.location.href = '/user/signin'}
            className="bg-gray-300 text-black px-3 py-1 rounded-xl text-xs hover:bg-[#5D6BFF] hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            SignIn
          </button>
        </div>

        <div className="md:hidden">
          <button className="p-2" onClick={() => setIsOpen(true)}>
            <FontAwesomeIcon icon={faBars} className="text-gray-800 text-2xl" />
          </button>
        </div>

        {
          isOpen && 
            <div className="fixed bg-white inset-0 z-50 p-5">
              <div id="nav-bar" className="flex justify-between items-center mb-8">
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
                  <div className="md:hidden">
                    <button className="p-2" onClick={() => setIsOpen(false)}>
                      <FontAwesomeIcon icon={faTimes} className="text-gray-800 text-2xl" />
                    </button>
                  </div>
              </div>
              <div className="flex flex-col space-y-6">
                    <a href="/features" className="text-gray-800 font-semibold hover:text-[#5D6BFF]" style={{ textDecoration: "none" }}>HOME</a>
                    <a href="/AllDoctors" className="text-gray-800 font-semibold hover:text-[#5D6BFF]" style={{ textDecoration: "none" }}>ALL DOCTORS</a>
                    <a href="/about" className="text-gray-800 font-semibold hover:text-[#5D6BFF]" style={{ textDecoration: "none" }}>ABOUT</a>
                    <Link to="/contact" className="text-gray-800 font-semibold hover:text-[#5D6BFF]" style={{ textDecoration: "none" }}>CONTACT</Link>
                    <div className="flex flex-col space-y-3 p-3">
                      <button onClick={() => window.location.href = '/user/signup'} className="bg-[#5D6BFF] text-white px-3 py-2 rounded-lg text-sm">SignUp</button>
                      <button onClick={(()=>{navigate('/user/signin')})} className="bg-gray-300 text-black px-3 py-2 rounded-lg text-sm hover:bg-[#5D6BFF] hover:text-white">SignIn</button>
                    </div>
              </div>
            </div>
        }
        

      </div>
    </nav>
  );
}

export default Navbar;
