var path = require('path')
module.exports = (req, res) => {
    req.session.destroy(function (error) {
        res.cookie('message', JSON.stringify({
            status: 'success',
            link: '/login',
            linkText: '请先登录',
            msg: '注销成功'
        }))
        res.sendFile(path.resolve('./') + '/public/message.html')
    })
}