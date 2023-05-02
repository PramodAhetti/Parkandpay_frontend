import React, { useState } from 'react'
import Context from './userdetail'
export default function Provider({children}) {
    const [curpark,setcurpark]=useState({latitude:13,longitude:85});

    function updatecurpark(data){
        setcurpark(data);
    }
    
    const [position,setposition]=useState({
        "latitude":13,
        "longitude":85
    });
    function setpos(pos){
        setposition(pos);
    }
    return (
    <Context.Provider value={{curpark,updatecurpark,position,setpos}}>
        {children}
    </Context.Provider>
  )
}
