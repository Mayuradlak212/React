import React from "react";

import Header from "./components/Header";
import { Home,Footer } from "./components/Home";
function App() {
  console.log("HIi I am Learning React Js ")
  return (
    <React.Fragment>
       <Header/>
       <Home/>
       <Footer/>
    </React.Fragment>
  );
}

export default App;
