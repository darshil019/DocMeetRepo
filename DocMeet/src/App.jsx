import React, { useEffect } from "react";
import UserLayout from "./layouts/UserLayout";
import SignupPage from "./Components/Common/SignupPage";
import SignInPage from "./Components/Common/SignInPage";
import UserDashboard from "./Pages/user/Dashboard";
import { Routes,Route } from "react-router-dom";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import AdminSignIn from "./Components/admin/AdminSignIn";
import AddDoctor from "./Pages/admin/AddDoctor";
import Pediatricians from "./Pages/user/Pediatricians";
import Dermatologist from "./Pages/user/Dermatologist";
import ForgotPasswordPage from "./Components/Common/forgotPasswordPage";
import Gastroenterologist from "./Pages/user/Gastroenterologist";
import GeneralPhysician from "./Pages/user/GeneralPhysician";
import Gynecologist from "./Pages/user/Gynecologist";
import Neurologist from "./Pages/user/Neurologist";
import AllDoctors from "./Pages/user/AllDoctors";
import ContactUs from "./Pages/user/ContactUs";
import Aboutus from "./Pages/user/Aboutus";
import AddPrescription from "./Pages/doctor/AddPrescription";
import PrescriptionAdded from "./Pages/doctor/PrescriptionAdded";
import OTP from "./Components/Common/OTP";
import {Navigate} from 'react-router-dom'
import AddMedicine from "./Pages/doctor/AddMedicine";
import DoctorDashboard from "./Pages/doctor/DoctorDashboard";
import DoctorSignIn from "./Pages/doctor/DoctorSignIn";
import PartDoc from "./Pages/user/PartDoc";
import DoctorList from "./Pages/admin/DoctorList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/user/dashboard" />} />
        <Route element={<UserLayout/>}>
            <Route path="user/signup" element={<SignupPage/>}></Route>
            <Route path="user/signin" element={<SignInPage/>}></Route>
            <Route path="user/dashboard" element={<UserDashboard/>}></Route>
            <Route path="user/otp" element={<OTP/>}></Route>
            <Route path="user/forgot-password" element={<ForgotPasswordPage/>}></Route>
            <Route path="user/Pediatricians" element={<Pediatricians/>}></Route>
            <Route path="user/Dermatologist" element={<Dermatologist/>}></Route>
            <Route path="user/Gynecologist" element={<Gynecologist/>}></Route>
            <Route path="user/GeneralPhysician" element={<GeneralPhysician/>}></Route>
            <Route path="user/Neurologist" element={<Neurologist/>}></Route>
            <Route path="user/Gastroenterologist" element={<Gastroenterologist/>}></Route>
            <Route path="user/alldoctors" element={<AllDoctors/>}></Route>
            <Route path="user/ContactUs" element={<ContactUs/>}></Route>
            <Route path="user/Aboutus" element={<Aboutus/>}></Route>
            <Route path="user/partDoc/:_id" element={<PartDoc/>} />
        </Route>
          <Route path="admin/signin" element={<AdminSignIn/>}></Route>
          <Route path="admin/dashboard" element={<AdminDashboard/>}></Route>
          <Route path="admin/adddoctor" element={<AddDoctor/>}></Route>
          <Route path="admin/doctor-list" element={<DoctorList/>}></Route>
          <Route path="doctor/addprescription" element={<AddPrescription/>}></Route>
          <Route path="doctor/prescriptionadded" element={<PrescriptionAdded/>}></Route>
          <Route path="doctor/addmedicine" element={<AddMedicine/>}></Route>
          <Route path="doctor/dashboard" element={<DoctorDashboard/>}></Route>
          <Route path="doctor/signin" element={<DoctorSignIn/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
