const conn = require('./conn.js')
const md5 = require('md5')
var path = require('path')
module.exports = (req, res) => {
        let username=req.body.username,
        password=md5(req.body.password),
        phone=req.body.phone,
        email=req.body.email,
        sex=req.body.sex;
        
       let sql = 'insert into `Tusers` set ?'
        conn.query(sql,{
            username,password,phone,email,sex
        }, function (error, result) {
            if (error == null) {
                res.cookie('message',JSON.stringify({
                    status:'success',
                    link:'/login',
                    linkText:'登录',
                    msg:'注册成功'
                }))
                res.sendFile( path.resolve('./')+'/public/message.html')

            } else {
                res.cookie('message',JSON.stringify({
                    status:'error',
                    link:'/regist',
                    linkText:'重新注册',
                    msg:'注册失败'
                }))

            }
        })
}