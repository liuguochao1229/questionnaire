
const mysql=require('mysql');
const conn=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'db1'
})

conn.connect();
module.exports=conn;