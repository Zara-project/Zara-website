


interface woman {
    type:String
  }

function Women({woman}:woman){
    return(
        <>
       { console.log(woman)}
   {woman.map((e)=>{
    return(
     <div>{e.type}</div>)
   })}
   
    </>)
}



export default Women