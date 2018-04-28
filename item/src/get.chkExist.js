const conn = require('./conn.js')
module.exports = (req, res) => {
    setTimeout(() => {
        var filed = req.query.filed,
            table = req.query.table,
            value = req.query.value

        var sql = 'select `id` from `' + table + '` where `' + filed + '`="' + value + '"'
        conn.query(sql, function (error, result) {
            if (error == null) {
                if (result.length == 0) {
                    res.json({
                        
                        error: 0,
                        message: '字段不存在',
                    })
                }else{
                    res.json({
                        error: 2,
                        message: '字段已存在',
                    })
                }
            } else {
                res.json({
                    error: 1,
                    message: 'error'
                })

            }
        })
    }, 1000)
}