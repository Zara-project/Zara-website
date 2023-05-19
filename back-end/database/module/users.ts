import connection from "../index";





const SignUp= function(user:string[],callback:Function){
    const sql:string="insert into users set ?"
    const userData = {
        name: user[0],
        surname: user[1],
        email: user[2],
        password: user[3]
      };
    connection.query(sql,userData,function(err,result){
        callback(err,result)
    })
}

const Login=function(log:{email:string,password:string},callback:Function){
    const sql=`select * from users where email="${log.email}"`
    connection.query(sql,function(err,result){
        callback(err,result)
    })

}
export {Login, SignUp}


 