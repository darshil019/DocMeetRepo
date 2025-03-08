import React from "react";
import img from "../../assets/images/image.png";

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
      </div>
    </nav>
  );
}

export default Navbar;
