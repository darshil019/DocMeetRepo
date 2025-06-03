import React from "react";
import Navbar from "./Components/Common/Navbar";
import SignupPage from "./Components/Common/SignupPage";
import SignInPage from "./Components/Common/SignInPage";
import UserDashboard from "./Pages/user/Dashboard";
import { Routes,Route } from "react-router-dom";
import AdminDashboard from "./admin/AdminDashBoard";
import AdminLogin from './admin/AdminLogin';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="user/signup" element={<SignupPage/>}></Route>
        <Route path="user/signin" element={<SignInPage/>}></Route>
        <Route  path="user/dashboard" element={<UserDashboard/>}></Route>
        <Route path="admin/login" element={<AdminLogin/>}></Route>
        <Route path="/admin" element={<AdminDashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
