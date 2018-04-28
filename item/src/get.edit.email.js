
//编辑邮箱
const conn = require('./conn.js')
module.exports = (req, res) => {
    let value=req.query.value
    let id=req.session.loginInfo.id
    let sql = 'update `Tusers` set `email`="'+value+'" where `id`="'+id+'"'
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