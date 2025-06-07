import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/images/image.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../Common/AuthContext';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { userLoggedIn, setUserLoggedIn, logout, login, userData,setUserData } = useContext(AuthContext);
  return (
    <>
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
            {userLoggedIn ?
              <>
                <Link to="/user/dashboard" className="text-gray-800 hover:text-[#5D6BFF] font-semibold" style={{ textDecoration: "none" }}>HOME</Link>
                <a href="/AllDoctors" className="text-gray-800 hover:text-[#5D6BFF] font-semibold" style={{ textDecoration: "none" }}>ALL DOCTORS</a>
                <a href="/about" className="text-gray-800 hover:text-[#5D6BFF] font-semibold" style={{ textDecoration: "none" }}>ABOUT</a>
                <Link to="/user/dashboard" className="text-gray-800 hover:text-[#5D6BFF] font-semibold" style={{ textDecoration: "none" }}>CONTACT</Link>
              </> : ' '
            }
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {
              userLoggedIn ?
                <>
                    <span className="text-gray-800 hover:text-[#5D6BFF] font-semibold mt-3">
                        {
                          userData ? <p>Welcome {userData.fullname}</p>  : <p>Loading user data...</p>
                        }
                    </span>
                    <Link to="/user/signin">
                      <button
                        onClick={(() => { logout() })}
                        className="bg-gray-300 text-black px-3 py-1 rounded-xl text-xs hover:bg-[#5D6BFF] hover:text-white shadow-md"
                      >
                        LogOut
                      </button>
                    </Link>
                </>
                :
                <>
                  <button
                    onClick={() => window.location.href = '/user/signup'}
                    className="bg-[#5D6BFF] text-white px-3 py-1 rounded-xl text-xs hover:bg-blue-700 shadow-md"
                  >
                    SignUp
                  </button>
                  <button
                    onClick={() => window.location.href = '/user/signin'}
                    className="bg-gray-300 text-black px-3 py-1 rounded-xl text-xs hover:bg-[#5D6BFF] hover:text-white shadow-md"
                  >
                    SignIn
                  </button>
                </>
            }

          </div>

          <div className="md:hidden">
            <button className="p-2" onClick={() => setIsOpen(true)}>
              <FontAwesomeIcon icon={faBars} className="text-gray-800 text-2xl" />
            </button>
          </div>

          {isOpen && (
            <div className="fixed bg-white inset-0 z-50 p-5">
              <div className="flex justify-between items-center mb-8">
                <a href="/" className="flex items-center no-underline" style={{ textDecoration: "none" }}>
                  <img src={img} alt="Logo" className="h-12 w-12 rounded-full mr-3 border-2 border-white mb-2" />
                  <h3 className="text-black font-semibold tracking-wider">
                    D<span className="text-[#5D6BFF]">o</span>cM
                    <span className="text-[#5D6BFF]">ee</span>t
                  </h3>
                </a>
                <button className="p-2" onClick={() => setIsOpen(false)}>
                  <FontAwesomeIcon icon={faTimes} className="text-gray-800 text-2xl" />
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                <a href="/features" className="text-gray-800 font-semibold hover:text-[#5D6BFF]" style={{ textDecoration: "none" }}>HOME</a>
                <a href="/AllDoctors" className="text-gray-800 font-semibold hover:text-[#5D6BFF]" style={{ textDecoration: "none" }}>ALL DOCTORS</a>
                <a href="/about" className="text-gray-800 font-semibold hover:text-[#5D6BFF]" style={{ textDecoration: "none" }}>ABOUT</a>
                <Link to="/contact" className="text-gray-800 font-semibold hover:text-[#5D6BFF]" style={{ textDecoration: "none" }}>CONTACT</Link>
                {userLoggedIn ? (
                  <>
                   <Link to="/user/signin">
                    <button
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="bg-gray-300 text-black px-3 py-2 rounded-lg text-sm hover:bg-red-500 hover:text-white"
                    >
                      Logout
                    </button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/user/signup">
                      <button className="bg-[#5D6BFF] text-white px-3 py-2 rounded-lg text-sm">
                        Sign Up
                      </button>
                    </Link>
                    <Link to="/user/signin">
                      <button className="bg-gray-300 text-black px-3 py-2 rounded-lg text-sm hover:bg-[#5D6BFF] hover:text-white">
                        Sign In
                      </button>
                    </Link>
                  </>
                )}
              </div>

            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
