"use client"
import {useState,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import "./page.css"
import Women from "./women";
import Man from "./man";
interface SideBarProps {
    display: string,
    w3_close:Function
  }

 

function SideBar({ display, w3_close }: SideBarProps){
    const [view,setView]=useState("women")
    const [women,setWomen]=useState([])
    const [man,setman]=useState([])





const getW=()=>{

    axios.post("http://localhost:5000/types",{
  
    gender:"Female"
      
    })
    .then((res)=>setWomen(res.data))
    .catch((err)=>console.log(err))
}

const getM=()=>{

    axios.post("http://localhost:5000/types",{
  
    gender:"Male"
      
    })
    .then((res)=>setman(res.data))
    .catch((err)=>console.log(err))
}

useEffect(()=>{
    getM()
    getW()
},[])

const changeView=(value:string)=>{
setView(value)
}


    const handleEvent=()=>{
        w3_close()
    }
    let content;
    if (view === "women") {
      content = <Women woman={women} />;
    } else {
      content = <Man  man={man}/>;
    }


return (
    <div className="w3-sidebar w3-bar-block w3-border-right" style={{ display: display }} id="side">
      <button onClick={handleEvent} className="w3-bar-item w3-large"> &times;</button>
      <div><h5 onClick={()=>changeView("women")} className="m" > women</h5> <h5 onClick={()=>changeView("man")} className="w">man</h5></div>
       

      {
      content
     }
       
    
    </div>
     
)

}

export default SideBar