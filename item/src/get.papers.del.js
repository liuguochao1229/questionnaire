const conn = require('./conn.js')
module.exports = (req, res) => {
    setTimeout(()=>{
        let id=req.query.id;
        let sql = 'delete from `papers` where id='+id+''
        conn.query(sql, function (error, result) {
            if (error == null) {
                res.json({
                    error: 0,
                    message: 'ok',
                })

            } else {
                console.log(error)
                res.json({
                    error: 0,
                    message: 'error'
                })

            }
        })
    }, 1000)
}