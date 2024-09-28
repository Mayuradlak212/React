import React from "react";

function Props(props) {
  const handleNameChange = (event) => {
    const name = event.target.value;
    console.log("Name : ", name);
  };

  return (
    <div>
      <h1> Hii I am There </h1>
      <h2> Hii I am Coming from Props : {props.name} </h2>
      <input
        type="text"
        onChange={handleNameChange}
        placeholder="Enter your Name "
      />
    </div>
  );
}

export default Props;
