var path = require('path')
module.exports = (req, res) => {
    if (!req.session.username) {
        res.sendFile(path.resolve('./') + '/public/regist.html')
    }else{
        res.cookie('message',JSON.stringify({
            status:'success',
            link:'/index',
            linkText:'返回首页',
            msg:'您已登录'
        }))
        res.sendFile( path.resolve('./')+'/public/message.html')
    }

    // res.send(__dirname)
}