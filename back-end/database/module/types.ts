import connection from "../index";


const types=(gender:string[],callback:Function)=>{
const sql=`select type from products where gender="${gender}"`
connection.query(sql,function(err,result){
    callback(err,result)
})
}



export {types}