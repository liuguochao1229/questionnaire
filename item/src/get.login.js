var path = require('path')
module.exports = (req,res)=>{ 
    if(req.session.loginInfo){
        res.cookie('message', JSON.stringify({
            status: 'error',
            link: '/index',
            linkText: '返回首页',
            msg: '您已登录'
        }))
        res.sendFile(path.resolve('./') + '/public/message.html')
    } else{
        res.sendFile( path.resolve('./')+'/public/login.html')
    } 
   
    // res.send(__dirname)
}