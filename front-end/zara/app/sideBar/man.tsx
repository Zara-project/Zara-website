import axios from "axios"


interface man {
    type:String
  }

function Man({man}:man){





    return(
        
        <>
      {  console.log(man)}

      {
        man.map((e:String[])=>{
            return(
                <div>{e.type}</div>
            )
        })
      }
    
    </>)
}



export default Man