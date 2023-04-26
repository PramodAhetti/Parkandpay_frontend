import React from 'react'

export default function description(props) {
  return (
    <>
     <center className="title">{props.title}</center>
     <center className="desc">{props.desc}</center>   
   </>
  )
}
