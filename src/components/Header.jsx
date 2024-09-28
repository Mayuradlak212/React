import React from "react";
import  "../../src/style/header.css"
import Image from "../assets/logo192.png"
const Header = () => {
  const name ="Mayur Adlak";



const A=(name)=>{
  console.log("Name ",name);
 
}
const B=()=>{
   let name="Mayur Adlak";
   A(name) 
}

  const myStyle ={backgroundColor:"red",color:"green",padding:"10px",margin:"10px"};
  return (
    <React.Fragment>
    
    <div className="header" >Hii my Name is  : {name} </div>
      <h1>Hii I am Using Image in Reatc </h1>
      <img src={Image} alt="" width="400px" height="300px"/>
    </React.Fragment>
  );
};

export default Header;
/*

CamelCase Syntaxt for Write CSS only in Inline 

--> Inline 
--> internal CSS -> X
--> External CSS 

*/