"use client"
import {useState} from "react"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import "bootstrap/dist/css/bootstrap.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import "./login.css"
import Navbar from "../navBar/page"
import {
    MDBInputGroup,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

function login(){
    const rout=useRouter()
    const [email,setInEmail]=useState('')
    const [password,setInPassword]=useState('')
    const [data,setData]=useState('')
const user={
    email:email,
    password:password
}

const toSignUp=()=>{
rout.push("/signUp")
}


const getUser=(event:{preventDefault:Function})=>{
    event.preventDefault()
    axios.post("http://localhost:5000/login",user)
    .then((res)=>{
        console.log(res.data)
    if(res.data==="email not found"){
        console.log("if pass")
   return ( 
    <h1>yey</h1>)
    }
if(res.data==="wrong password"){
    console.log('password pass')
}else{
    rout.push("/home")
}})
    .catch((err)=>console.log(err))
}


    return (
        <div className="body">
        <Navbar/>
      
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-black">
    LOG IN TO YOUR ACCOUNT
    </div>
  <MDBInputGroup className='mb-3 ' >
        <input onChange={e=> {
                        console.log(email)
                        setInEmail(e.target.value)}} className='form-controll email' type='text' placeholder='EMAIL' />
      </MDBInputGroup>

      <MDBInputGroup className='mb-3 ' >
        <input onChange={e=> {
                        console.log(password)
                        setInPassword(e.target.value)}} className='form-controll' type='password' placeholder='PASSWORD' />
      </MDBInputGroup>
      <div className="flex w-full">
      <button onClick={(event)=>getUser(event)}
  type="submit"
  className="h-10 w-25 bg-black hover:bg-gray-800 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-white"
>
  Login
</button>
</div>
<div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-black">
NEED AN ACCOUNT?
    </div >

     <button onClick={toSignUp}
  type="submit"
  className="py-2 px-4 bg-white hover:bg-gray-300  text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-BLACK w-56 "
>
  REGISTER
</button>








        </div>
    )
}


export default login