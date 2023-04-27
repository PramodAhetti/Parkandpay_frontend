import React from 'react'

export default function description(props) {
  return (
    <div className='row' style={{border:"1px solid black"}}>
     <center className="title">{props.title}</center>
     <center className="desc">{props.desc}</center>   
   </div>
  )
}
