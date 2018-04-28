//添加大纲
const conn = require('./conn.js')
module.exports = (req, res) => {
    let pid=req.body.pid,
    label=req.body.label
    let sql = 'insert into `outline` set `label`="'+label+'",`pid`="'+pid+'"'
    conn.query(sql, function (error, result) {
        if (error == null) {
            console.log(result)
            res.json({
                error: 0,
                message: 'ok',
                result:result
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