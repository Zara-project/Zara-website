import connection from "../index";



export default {
    getAll:function(callback:Function){
      const  sql:string='select * from products'
      connection.query(sql, (err,result)=>{
        callback(err,result)
      })
    }
}