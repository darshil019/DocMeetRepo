import React, { useEffect } from "react";
import UserLayout from "./layouts/UserLayout";
import SignupPage from "./Components/Common/SignupPage";
import SignInPage from "./Components/Common/SignInPage";
import UserDashboard from "./Pages/user/Dashboard";
import { Routes,Route } from "react-router-dom";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import AdminSignIn from "./Components/admin/AdminSignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<UserLayout/>}>
            <Route path="user/signup" element={<SignupPage/>}></Route>
            <Route path="user/signin" element={<SignInPage/>}></Route>
            <Route path="user/dashboard" element={<UserDashboard/>}></Route>
        </Route>
        <Route path="admin/signin" element={<AdminSignIn/>}></Route>
        <Route path="admin/dashboard" element={<AdminDashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
