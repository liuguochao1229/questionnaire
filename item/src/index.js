var path = require('path')
module.exports = (req,res)=>{   
    if (req.session.username) {
        res.sendFile(path.resolve('./') + '/public/index.html')
    }else{
        res.cookie('message',JSON.stringify({
            status:'success',
            link:'/login',
            linkText:'登录',
            msg:'请先登录'
        }))
        res.sendFile( path.resolve('./')+'/public/message.html')
    }
    // res.send(__dirname)
}