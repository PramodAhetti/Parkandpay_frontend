import React, { useState } from 'react'
import Authcontext from './authenticationcontext'
export default function Authprovider({children}) {
  const [user,setuser]=useState({username:"Login"});
  function updateuser(data){
              setuser(data);
  }
  return (
    <Authcontext.Provider value={{user,updateuser}}>{children}</Authcontext.Provider>
  )
}
