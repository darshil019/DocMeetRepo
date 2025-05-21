import React from "react";
import img from "../../assets/images/image.png";
<<<<<<< HEAD

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow"
      style={{
        backgroundColor: "#248a83",
        fontFamily: "'Poppins', sans-serif",
        padding: "12px 20px",
      }}
    >
      <div className="container-fluid">
        <a href="/" className="navbar-brand d-flex align-items-center">
          <img
            src={img}
            alt="Logo"
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              marginRight: "12px",
              border: "2px solid white",
            }}
          />
          <h3
            className="text-white m-0"
            style={{
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            DocMeet
          </h3>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold px-3" href="/">SignIn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold px-3" href="/Registration">SignUp</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold px-3" href="/Dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold px-3" href="/DescOfProject">Project Description</a>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-outline-light ms-3 fw-semibold"
                onClick={() => alert("Logout function here")}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
=======
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-100 shadow-lg py-3 px-5 font-['Poppins']">
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

>>>>>>> main
      </div>
    </nav>
  );
}

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> main
