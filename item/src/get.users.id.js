const conn = require('./conn.js')
module.exports = (req, res) => {
    let id=req.session.loginInfo.id
    var sql = 'select * from `Tusers` where id="'+id+'"'
    conn.query(sql, function (error, result) {
        if (error == null) {
            res.json({
                error: 0,
                message: '成功',
                data: result
            })

        } else {
            res.json({
                error: 0,
                message: '失败'
            })

        }
    })
}