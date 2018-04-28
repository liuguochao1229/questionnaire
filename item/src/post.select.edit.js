//添加大纲
const conn = require('./conn.js')
module.exports = (req, res) => {
    let id=req.body.id,
    text=req.body.text
    let sql = 'update `select` set `text`="'+text+'" where `id`="'+id+'"'
    conn.query(sql, function (error, result) {
        if (error == null) {
            res.json({
                error: 0,
                message: 'ok',
            })

        } else {
            res.json({
                error: 1,
                message: 'error'
            })

        }
    })
}