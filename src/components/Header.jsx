import React from "react";
import  "../../src/style/header.css"
const Header = () => {
  const name ="Mayur Adlak";
  const myStyle ={backgroundColor:"red",color:"green",padding:"10px",margin:"10px"};
  return (
    <React.Fragment>
    
    <div className="header" >Hii my Name is  : {name} </div>
    
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