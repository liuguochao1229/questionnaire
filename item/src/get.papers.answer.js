//问卷列表
const conn = require('./conn.js')
module.exports = (req, res) => {
    let id = req.cookies.paper_id;
    let sql = 'select a.id id,p.title title,a.paper_id paper_id,a.content content,a.item item,a.ctime ctime from `answer` a,`papers` p where a.paper_id="' + id + '" && a.paper_id=p.id'
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