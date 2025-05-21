import React from "react";
import Navbar from "./Components/Common/Navbar";
import SignupPage from "./Components/Common/SignupPage";
<<<<<<< HEAD
=======
import SignInPage from "./Components/Common/SignInPage";
import { Routes,Route } from "react-router-dom";
>>>>>>> main

function App() {
  return (
    <div className="App">
      <Navbar/>
<<<<<<< HEAD
      <SignupPage/>
=======
      <Routes>
        <Route path="user/signin" element={<SignInPage/>}></Route>
        <Route path="user/signup" element={<SignupPage/>}></Route>
      </Routes>
>>>>>>> main
    </div>
  );
}

export default App;
