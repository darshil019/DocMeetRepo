import React from "react";
import Navbar from "./Components/Common/Navbar";
import SignupPage from "./Components/Common/SignupPage";
import SignInPage from "./Components/Common/SignInPage";
import Dashboard from "./Components/Common/Dashboard";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="user/signup" element={<SignupPage/>}></Route>
        <Route path="user/signin" element={<SignInPage/>}></Route>
        <Route  path="user/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
