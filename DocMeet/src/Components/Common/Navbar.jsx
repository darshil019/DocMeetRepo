// import React from "react";
// import img from "../../assets/images/image.png";
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons';

// function Navbar() {
//   const [isOpen,setIsOpen] = React.useState(false)
//   return (
//     <nav className="bg-gray-100 shadow-lg py-1.5 px-5 font-['Poppins']">
//       <div className="container mx-auto flex items-center justify-between relative">


//         <a href="/" className="flex items-center no-underline" style={{ textDecoration: "none" }}>
//           <img
//             src={img}
//             alt="Logo"
//             className="h-12 w-12 rounded-full mr-3 border-2 border-white mb-2"
//           />
//           <h3 className="text-black font-semibold tracking-wider">
//             D<span className="text-[#5D6BFF]">o</span>cM
//             <span className="text-[#5D6BFF]">ee</span>t
//           </h3>
//         </a>


//         <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
//           <a href="/features" style={{ textDecoration: "none" }}>
//             <span className="text-gray-800 hover:text-[#5D6BFF] transition-colors duration-300 font-semibold">HOME</span>
//           </a>
//           <a href="/AllDoctors" style={{ textDecoration: "none" }}>
//             <span className="text-gray-800 hover:text-[#5D6BFF] transition-colors duration-300 font-semibold">ALL DOCTORS</span>
//           </a>
//           <a href="/about" style={{ textDecoration: "none" }}>
//             <span className="text-gray-800 hover:text-[#5D6BFF] transition-colors duration-300 font-semibold">ABOUT</span>
//           </a>
//           <Link to="/contact" style={{ textDecoration: "none" }}>
//             <span className="text-gray-800 hover:text-[#5D6BFF] transition-colors duration-300 font-semibold">CONTACT</span>
//           </Link>
//         </div>

//         <div className="hidden md:flex items-center space-x-6">
//           <button
//             onClick={() => window.location.href = '/user/signup'}
//             className="bg-[#5D6BFF] text-white px-3 py-1 rounded-xl text-xs hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
//           >
//             SignUp
//           </button>
//           <button
//             onClick={() => window.location.href = '/login'}
//             className="bg-gray-300 text-black px-3 py-1 rounded-xl text-xs hover:bg-[#5D6BFF] hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
//           >
//             SignIn
//           </button>
//         </div>

//         <div className="md:hidden">
//           <button className="p-2" onClick={() => setIsOpen(true)}>
//             <FontAwesomeIcon icon={faBars} className="text-gray-800 text-2xl" />
//           </button>
//         </div>

//         {
//           isOpen && 
//             <div className="fixed bg-white inset-0 z-50 p-5">
//               <div id="nav-bar" className="flex justify-between items-center mb-8">
//                   <a href="/" className="flex items-center no-underline" style={{ textDecoration: "none" }}>
//                       <img
//                         src={img}
//                         alt="Logo"
//                         className="h-12 w-12 rounded-full mr-3 border-2 border-white mb-2"
//                       />
//                       <h3 className="text-black font-semibold tracking-wider">
//                         D<span className="text-[#5D6BFF]">o</span>cM
//                         <span className="text-[#5D6BFF]">ee</span>t
//                       </h3>
//                   </a>
//                   <div className="md:hidden">
//                     <button className="p-2" onClick={() => setIsOpen(false)}>
//                       <FontAwesomeIcon icon={faTimes} className="text-gray-800 text-2xl" />
//                     </button>
//                   </div>
//               </div>
//               <div className="flex flex-col space-y-6">
//                     <a href="/features" className="text-gray-800 font-semibold hover:text-[#5D6BFF]" style={{ textDecoration: "none" }}>HOME</a>
//                     <a href="/AllDoctors" className="text-gray-800 font-semibold hover:text-[#5D6BFF]" style={{ textDecoration: "none" }}>ALL DOCTORS</a>
//                     <a href="/about" className="text-gray-800 font-semibold hover:text-[#5D6BFF]" style={{ textDecoration: "none" }}>ABOUT</a>
//                     <Link to="/contact" className="text-gray-800 font-semibold hover:text-[#5D6BFF]" style={{ textDecoration: "none" }}>CONTACT</Link>
//                     <div className="flex flex-col space-y-3 p-3">
//                       <button onClick={() => window.location.href = '/user/signup'} className="bg-[#5D6BFF] text-white px-3 py-2 rounded-lg text-sm">SignUp</button>
//                       <button onClick={() => window.location.href = '/login'} className="bg-gray-300 text-black px-3 py-2 rounded-lg text-sm hover:bg-[#5D6BFF] hover:text-white">SignIn</button>
//                     </div>
//               </div>
//             </div>
//         }


//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/images/image.png";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [showAdminLogin, setShowAdminLogin] = React.useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = React.useState(false);
  const [adminUser, setAdminUser] = React.useState({ username: '', password: '' });
  const [error, setError] = React.useState('');

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminUser.username === 'admin' && adminUser.password === 'admin123') {
      setShowAdminLogin(false);
      setError('');
      navigate('/admin'); // ✅ Redirect to dashboard
    } else {
      setError('Invalid credentials');
    }
  };


  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setAdminUser({ username: '', password: '' });
  };

  return (
    <>
      <nav className="bg-gray-100 shadow-lg py-1.5 px-5 font-['Poppins']">
        <div className="container mx-auto flex items-center justify-between relative">
          <a href="/" className="flex items-center no-underline">
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
            <a href="/features" className="text-gray-800 hover:text-[#5D6BFF] font-semibold">HOME</a>
            <a href="/AllDoctors" className="text-gray-800 hover:text-[#5D6BFF] font-semibold">ALL DOCTORS</a>
            <a href="/about" className="text-gray-800 hover:text-[#5D6BFF] font-semibold">ABOUT</a>
            <Link to="/contact" className="text-gray-800 hover:text-[#5D6BFF] font-semibold">CONTACT</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => window.location.href = '/user/signup'}
              className="bg-[#5D6BFF] text-white px-3 py-1 rounded-xl text-xs hover:bg-blue-700 shadow-md"
            >
              SignUp
            </button>
            <button
              onClick={() => window.location.href = '/login'}
              className="bg-gray-300 text-black px-3 py-1 rounded-xl text-xs hover:bg-[#5D6BFF] hover:text-white shadow-md"
            >
              SignIn
            </button>
            <button
              onClick={() => setShowAdminLogin(true)}
              className="bg-red-500 text-white px-3 py-1 rounded-full text-xs hover:bg-red-700 shadow-md"
              title="Admin Panel"
            >
              Admin
            </button>
          </div>

          <div className="md:hidden">
            <button className="p-2" onClick={() => setIsOpen(true)}>
              <FontAwesomeIcon icon={faBars} className="text-gray-800 text-2xl" />
            </button>
          </div>

          {isOpen && (
            <div className="fixed bg-white inset-0 z-50 p-5">
              <div className="flex justify-between items-center mb-8">
                <a href="/" className="flex items-center no-underline">
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
                <a href="/features" className="text-gray-800 font-semibold hover:text-[#5D6BFF]">HOME</a>
                <a href="/AllDoctors" className="text-gray-800 font-semibold hover:text-[#5D6BFF]">ALL DOCTORS</a>
                <a href="/about" className="text-gray-800 font-semibold hover:text-[#5D6BFF]">ABOUT</a>
                <Link to="/contact" className="text-gray-800 font-semibold hover:text-[#5D6BFF]">CONTACT</Link>
                <div className="flex flex-col space-y-3 p-3">
                  <button onClick={() => window.location.href = '/user/signup'} className="bg-[#5D6BFF] text-white px-3 py-2 rounded-lg text-sm">SignUp</button>
                  <button onClick={() => window.location.href = '/login'} className="bg-gray-300 text-black px-3 py-2 rounded-lg text-sm hover:bg-[#5D6BFF] hover:text-white">SignIn</button>
                  <button onClick={() => setShowAdminLogin(true)} className="bg-red-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-700">Admin</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

   
      {showAdminLogin && (
        <div className="fixed inset-0 bg-gray-50 flex items-center justify-center z-50">

          <form
            onSubmit={handleAdminLogin}
            className="bg-white rounded-xl shadow-xl p-8 w-[90%] max-w-sm"
          >
            <h2 className="text-2xl font-semibold text-center text-[#5D6BFF] mb-6">
              Admin Login
            </h2>

            {error && (
              <p className="text-red-500 text-sm text-center mb-4">{error}</p>
            )}

            <div className="mb-4">
              <label htmlFor="username" className="block mb-1 text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={adminUser.username}
                onChange={(e) => setAdminUser({ ...adminUser, username: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D6BFF]"
                placeholder="Enter username"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={adminUser.password}
                onChange={(e) => setAdminUser({ ...adminUser, password: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D6BFF]"
                placeholder="Enter password"
                required
              />
            </div>
            <button type="submit" className="w-full bg-[#5D6BFF] text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Login
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Navbar;
