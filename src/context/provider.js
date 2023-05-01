import React, { useState } from 'react'
import Context from './maincontext'
export default function Provider({children}) {
    const [curpark,setcurpark]=useState('');

    function updatecurpark(data){
        setcurpark(data);
    }
    
    const [pos,setposition]=useState({
        "latitude":13,
        "longitude":85
    });
    function setpos(pos){
        setposition(pos);
    }
    let position=pos;
    return (
    <Context.Provider value={{curpark,updatecurpark,position,setpos}}>
        {children}
    </Context.Provider>
  )
}
