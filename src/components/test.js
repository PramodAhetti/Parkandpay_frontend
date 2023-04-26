import React from 'react'
import { useState } from 'react'
export default function () {
  const [title,setTitle]=useState("");
  const [counter,setcounter]=useState(0);
  const updatetitle=()=>{
setTitle("we have a title");
  }
  const updatecounter=()=>{
    setcounter(counter+1);
  }
  return (
    <div>
        <p>title:{title}</p>
        <p>counter:{counter}</p>
        <button onClick={updatetitle}>update title</button>
        <button onClick={updatecounter}>update counter</button>
    </div>
  )
}
