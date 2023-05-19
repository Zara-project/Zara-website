import connection from "../index";
export default { 
    getProductByName :  async function (productName: string, callback: Function)  {
   const sql: string = `SELECT * FROM products WHERE name = ?`;
   console.log("model")
    connection.query(sql, (error, result) => {
       console.log(error, result)
       if (error) { 
           console.log(error);
           return error;
   } 
   callback(error, result) ; 
   
}) } }
