
//修改头像
const conn = require('./conn.js')
module.exports = (req, res) => {
    let file=req.query.file
    let id=req.session.loginInfo.id
    let sql = 'update `Tusers` set `photo`="/pic/'+file+'" where `id`="'+id+'"'
    conn.query(sql,function (error, result) {
        if (error == null) {
            res.json({
                error: 0,
                message: 'ok',
            })

        } else {
            console.log(error)
            res.json({
                error: 1,
                message: 'error'
            })

        }
    })
}