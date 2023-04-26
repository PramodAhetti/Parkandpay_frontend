import React from 'react'
import axios from 'axios'
export default function search() {
  async function run(){
    axios.get("/home").then((res)=>{
      console.log(res.data);
    })
  }
  return (
    <center className='searchbox'>
        <input placeholder="location" className="search"></input>
        <button onClick={run}>click</button>
    </center>
  )
}
