import React from "react";

import Header from "./components/Header";
import { Home } from "./components/Home";
import Props from "./components/Props";
import Footer from "./components/Footer";
function App() {
  console.log("HIi I am Learning React Js ");
  const person ={
    name:"Mayur Adlak",
    college:"My college",
    country:"India",
   email:"abc@gmai.com"
  }

  const arr=[1,2,4,5,6];
  return (
    <React.Fragment>
      {/* <Props name="Mayur Adlak" /> */}
      <Footer student={person} arr={arr} />
    </React.Fragment>
  );
}

export default App;
