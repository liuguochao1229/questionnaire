//添加选项
const conn = require('./conn.js')
module.exports = (req, res) => {
    let pid=req.body.pid,
    text=req.body.text
    let sql = 'insert into `select` set `text`="'+text+'",`pid`="'+pid+'"'
    conn.query(sql, function (error, result) {
        if (error == null) {
            res.json({
                error: 0,
                message: 'ok',
                id:result.insertId
            })

        } else {
            res.json({
                error: 1,
                message: 'error'
            })

        }
    })
}