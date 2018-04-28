
//获取
const conn = require('./conn.js')
module.exports = (req, res) => {
    let text=req.query.text
    let sql = 'update `way` set ?'
    conn.query(sql,{text:text} ,function (error, result) {
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