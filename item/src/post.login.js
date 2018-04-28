const conn = require('./conn.js')
var path = require('path')
const md5 = require('md5')
module.exports = (req, res) => {
    var username = req.body.username,
        password = md5(req.body.password)

    var sql = 'select `id`,`username`,`email`,`phone`,`sex`,`photo` from `Tusers` where `username`="' + username + '" && `password`="' + password + '"'
    conn.query(sql, function (error, result) {
        if (error == null) {
            if (result.length == 0) {
                //登录失败
                res.cookie('message', JSON.stringify({
                    status: 'error',
                    link: '/login',
                    linkText: '重新登录',
                    msg: '登录失败,用户名或密码错误'
                }))
                res.sendFile(path.resolve('./') + '/public/message.html')
            } else {
                //登录成功
                req.session.username=username
                req.session.loginInfo=result[0]
                res.cookie('message', JSON.stringify({
                    status: 'success',
                    link: '/index',
                    linkText: '返回首页',
                    msg: '登录成功',
                    userInfo:result[0]
                }))
                res.sendFile(path.resolve('./') + '/public/message.html')
            }
        } else {
            console.log(error)
            res.json({
                error: 0,
                message: 'error'
            })

        }
    })

}