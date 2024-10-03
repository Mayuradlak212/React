import React,{useEffect, useRef,useState} from 'react'

function Service() {
   const [count,setCount] =useState(0);
  const value=useRef(0);
  console.log("Ref ",count)
  useEffect(()=>{
    value.current=value.current+1;
  })
  return (
    <div  >
        <h1>  Welcome To Service Page </h1>
        <h2>Hii I am Learning useRef Hook in React </h2>
        <input type="text" value={count} onChange={(event)=>setCount(event.target.value)} />
    </div>
  )
}

export default Service
