import React from 'react'

export default function description(props) {
  return (
    <div className='description'>
     <center className="title">{props.title}</center>
     <center className="desc">{props.desc}</center>   
   </div>
  )
}
