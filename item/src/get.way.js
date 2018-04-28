
//获取答案方式
const conn = require('./conn.js')
module.exports = (req, res) => {
    let sql = 'select `text` from `way`'
    conn.query(sql,function (error, result) {
        if (error == null) {
            res.json({
                error: 0,
                message: 'ok',
                data:result[0]
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