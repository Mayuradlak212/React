import React from "react";

function Footer(props) {
  const array = props.arr;
  console.log("Array props ", array);
  return (
    <div>
      <h1> Hii Welcome to Footer</h1>
      <h1 key={1}> My Name is : </h1>
      <h1 key={2}> My College Name is :  </h1>
      <h1 key={5}> My Country Name is :  </h1>
      <h3>Hii I am Updating </h3>

      {/* {array.map((element, index) => {
        return (
          <p key={index}>
            Index : {index}  {" "}
            Element : {element}
            <br />  {" "}
          </p>
        );
      })} */}
    </div>
  );
}

export default Footer;
