import React from "react";
import Navbar from "./Components/Common/Navbar";
import SignupPage from "./Components/Common/SignupPage";
import SignInPage from "./Components/Common/SignInPage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SignupPage/>
      {/* <SignInPage/> */}
    </div>
  );
}

export default App;
