import React from "react";

// import Header from "./components/Header";
// import { Home } from "./components/Home";
// import Props from "./components/Props";
// import Footer from "./components/Footer";
// import Page from "./components/Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./web/Navbar";
import Home from "./web/Home";
import Contact from "./web/Contact";
import Service from "./web/Service";
import Footer from "./web/Footer";
import { ToastContainer } from "react-toastify";
import Login from "./web/Login";
import Profile from "./web/Profile";
function App() {
  console.log("HIi I am Learning React Js ");
  const person = {
    name: "Mayur Adlak",
    college: "My college",
    country: "India",
    email: "abc@gmai.com",
  };

  const arr = [1, 2, 4, 5, 6];
  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  index Component={Home} />
          <Route path="/contact"  Component={Contact}/>
          <Route path="/service"  Component={Service}/>
          <Route path="/login"  Component={Login}/>
          <Route path="/profile"  Component={Profile}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    

    </React.Fragment>
  );
}
// students--> , student

export default App;
