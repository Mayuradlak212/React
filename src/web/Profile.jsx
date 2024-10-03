import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Profile() {
  const [city, setCity] = useState("");
  const [users, setUsers] = useState([]);
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const memo = useMemo(
    (state) => {
      return city;
    },
    [city]
  );

  useEffect(() => {
    const uri = "https://tech-backend-pink.vercel.app/api/batch/batch";
    fetch(uri, {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    }).then((response) => {
      const parsedData = response.json();
      parsedData.then((data) => {
        console.log("Users Data using API ", data);
        setUsers(data);
      });
    });
  }, []);
const successEvent=()=>{
     toast.success("Hii I am Success event")
}
const infoEvent=()=>{
  toast.info("Hii I am Info event")

}
const errorEvent=()=>{
  toast.error("Hii I am Error event")

}
  return (
    <div>
      <ToastContainer/>
      <h1> Hii Welcome to Profile Page </h1>
      <h2> Hii use Memo Hooks in React </h2>
      {/* <input
        type="text"
        placeholder="Enter your City Name "
        value={city}
        onChange={handleChange}
      />
      <h3>City Name : {memo}</h3> */}
      <div className=" display-flex flex-wrap">

       
   <button onClick={successEvent} className="btn btn-success m-2"> Success</button>
   <button onClick={errorEvent}  className="btn btn-danger m-2"> Error</button>
   <button  onClick={infoEvent} className="btn btn-info m-2">Information</button>

      {users.map((data,index) => {
        return (
          <div className="card" style={{width:"500px"}}>
            <img className="card-img-top" height="200px" src={data.url} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">
              {data.description}
              </p>
              <Link to="/" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        );
      })}
       </div>
    </div>
  );
}

export default Profile;
