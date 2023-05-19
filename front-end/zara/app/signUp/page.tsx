"use client"
import {useState} from "react"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import "bootstrap/dist/css/bootstrap.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import {
    MDBInputGroup,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';



function signUp(){
const [email,setEmail]=useState("")
const [password,setpassword]=useState("")
const [rp,setrp]=useState("")
const [name,setname]=useState("")
const [surename,setsurename]=useState("")
const rout=useRouter()
const user={
    name:name,
    password:password,
    email:email,
    surname:surename
}



const addUser=()=>{
    if(password!==rp){
        return "no match"
    }else if(password===rp){
        axios.post("http://localhost:5000/Signup",user)
        .then((res)=>{
            rout.push("/login")
            console.log(res)})
        .catch((err)=>console.log(err))
    }
    
}

    return(
        <div className="body">
      
       
       <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg dark:bg-gray-000 sm:px-6 md:px-8 lg:px-10">
           <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-black">
           PERSONAL DETAILS
           </div>
           <div className="mt-8">
               <form action="#" autoComplete="off">
                  
                       <div className="flex flex-col mb-6">
                           <div className="flex relative ">
                               
                               <input onChange={(event)=>{setEmail(event.target.value)}} type="email" id="sign-in-Password" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-black  focus:border-transparent" placeholder="E-MAIL"/>
                               </div>
                           </div>
                           <div className="flex flex-col mb-6">
                           <div className="flex relative ">
                               
                               <input onChange={(event)=>{setpassword(event.target.value)}} type="password" id="sign-in-Password" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-black  focus:border-transparent" placeholder="PASSWORD"/>
                               </div>
                           </div>
                           <div className="flex flex-col mb-6">
                           <div className="flex relative ">
                               
                               <input onChange={(event)=>{setrp(event.target.value)}} type="password" id="sign-in-Password" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-black  focus:border-transparent" placeholder="REPEAT PASSWORD"/>
                               </div>
                           </div>

                           <div className="flex flex-col mb-6">
                           <div className="flex relative ">
                               
                               <input onChange={(event)=>{setname(event.target.value)}} type="email" id="sign-in-Password" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-black  focus:border-transparent" placeholder="NAME"/>
                               </div>
                           </div>

                           <div className="flex flex-col mb-6">
                           <div className="flex relative ">
                               
                               <input onChange={(event)=>{setsurename(event.target.value)}} type="email" id="sign-in-Password" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-black  focus:border-transparent" placeholder="SURNAME"/>
                               </div>
                           </div>

                           
                           <div className="flex items-center mb-6 -mt-4">
                              
                           </div>
                           <div className="flex w-full">
                           <button onClick={addUser}
         type="submit"
         className="py-2 px-4 bg-black hover:bg-gray-800  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-white  "
       >
         SIGN UP
       </button>
       
                           </div>
                       </form>
                   </div>
                   
               </div>
       <div>

        
      </div>
        </div>
    )
}

export default signUp



