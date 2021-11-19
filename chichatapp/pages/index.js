import Head from 'next/head'
import { useEffect } from 'react'
import firebase from './firebase'
import { getMessaging, getToken } from "firebase/messaging";

export default function Home() {

useEffect(()=>{
  const messaging = getMessaging();
  getToken(messaging,{ vapidKey : 'BFWaxp5qx5eGM6P5a0d_NxPMW3Chy-XHUzBL_fZH3GP9x-xiP1-d-VGVkpgE67QUaIv_JOJ4ixuNudFlGidy0qk'}).then((token)=>{
    if(token){
      console.log("Token:",token);
    }else {
      console.log("Token Empty");
    }
  }).catch((err)=>{
    console.log("Error: ",err)
  })
})

  return (
    <div>
hello      
    </div>
  )
}
