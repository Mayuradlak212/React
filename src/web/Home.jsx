import React, { useState, useEffect } from "react";

function Home() {
  const [age, setAge] = useState(200);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  useEffect(() => {
    console.log("Page Loaded Successfully ", age);
  }, [age, name, city, email, phone]);

  const handleInputChange = (event) => {
    setAge(event.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const student = {
      name: name,
      email: email,
      phone: phone,
      age: age,
      city: city,
    };
    console.log("Student ", student);
  };
  return (
    <div>
      <h1> Welcome to Home Page </h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="Phone"
        />
        <input
          type="Number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          placeholder="Age"
        />
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="City"
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>Name : {name} </h3>
        <h3>Email : {email} </h3>
        <h3>Phone : {phone} </h3>
        <h3>City : {city} </h3>
      </div>
    </div>
  );
}

export default Home;
