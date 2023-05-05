import React, { useState } from 'react'
import Userdetails from './userdetail'
import axios from 'axios';
export default function Provider({children}) {
    
    const [currentspot,setspot]=useState({latitude:13,longitude:85});

    
    const [userposition,setuserposition]=useState({
        "latitude":13,
        "longitude":85
    });

    async function book(){
        try{
             let res=await axios.post('/user/book',{owned_id:currentspot.owned_id});
             alert(res.data.message);
          }catch(error){
             alert(error.response.data.message)
        }
    }


    async function cancel(){
        try{
             let res=await axios.post('/user/cancel');
             alert(res.data.message);
          }catch(error){
             alert(error.response.data.message)
        }
    }
    async function sell(){
      try{
        let res=await axios.post('/user/sell',{latitude:userposition.latitude,longitude:userposition.longitude,owned_id:localStorage.getItem('user_id')});
        alert(res.data.message);
     }catch(error){
        alert(error.response.data.message)
     }     
    }
    function near(pos){
        setuserposition(pos);
        axios.post('user/near', pos).then((info)=>{
            console.log(info.data)
            if(info.data!=''){
              setspot(info.data[0]);
              alert("Showing nearest spot");
            }else{
              alert("No parking spots found");
            }
            }).catch((error)=>{
                    alert(error.response.data.message);
            })
    }
    return (
    <Userdetails.Provider value={{currentspot,userposition,near,cancel,book,sell}}>
        {children}
    </Userdetails.Provider>
  )
}
