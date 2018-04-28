const conn = require('./conn.js')
module.exports = (req, res) => {
    let form = req.query.data;
    let id = req.cookies.id;
    let sql = 'update `Tusers` set `username`="' + form.username + '",`password`="' + form.password + '",`email`="' + form.email + '",`phone`="' + form.phone + '",`sex`="' + form.sex + '" where `id`="' + id + '"'
    conn.query(sql, function (error, result) {
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