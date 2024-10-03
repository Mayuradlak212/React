import React, { useState } from "react";

const Page = () => {
  console.log(" Hii I am running");
  const [age, setAge] = useState(0);
  //   let age = 0;
  const handleAgeChange = (event) => {
    const myAge = event.target.value;
    setAge(myAge);
  };

  //   if (age >= 18) {
  //     console.log(" Hii I am Eligible for  Voting ");
  //   } else {
  //     console.log("I am Not Eligible for Vote");
  //   }

  let message =
    age >= 18 ? "I am Eligible for Voting" : "Not Eligible for Voting";
  console.log("Message ", message);
  return (
    <div>
      <h1> Hii I am Learning Conditional Rendering </h1>

      <input
        type="number"
        placeholder="Enter your Age "
        onChange={handleAgeChange}
      />

      {age >= 18 ? (
        <div style={{ color: "green" }}>
          <h2>Hii Eigible for Vote</h2>{" "}
        </div>
      ) : (
        <div style={{ color: "red" }}> 
        <h2>

        Not Eligible for Vote
        </h2>
        
        
        </div>
      )}
    </div>
  );
};

export default Page;
