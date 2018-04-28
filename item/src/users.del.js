const conn = require('./conn.js')
module.exports = (req, res) => {
    let id = req.query.id;
    console.log(id)
    let sql = 'delete from `Tusers` where id="' + id + '"'
    conn.query(sql, function (error, result) {
        if (error == null) {
            res.json({
                error: 0,
                message: 'ok',
                data: result
            })

        } else {
            res.json({
                error: 0,
                message: 'error'
            })

        }
    })
}