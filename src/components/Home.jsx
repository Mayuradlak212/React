import React from "react";

const Home =()=>{
    return (
        <div>
            <h1>Welcome to Home Page</h1>
            <p>This is the Home Page</p>
        </div>
    )
}

const Footer =()=>{
    const MyComponent =()=>{
        return (
            <div>
            <h1> Hii I am Insider Compoent </h1>
            </div>
        )
    }
    return (
        <>
           <h1> Hii I am Footer </h1>
           <MyComponent/>
        </>
    )
}

export  {Home,Footer};