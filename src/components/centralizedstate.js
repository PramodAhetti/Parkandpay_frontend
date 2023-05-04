import React from 'react'
import { useState } from 'react'
export default function Centralizedstate(props) {
    const [user,setuser]=useState('ramod');
    const childElements = React.Children.map(props.children, child => {
        return React.cloneElement(child, { user: user });
      });
      

  return (
    <div>{props.children}</div>
  )
}
