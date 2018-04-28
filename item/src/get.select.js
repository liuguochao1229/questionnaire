
//获取选项
const conn = require('./conn.js')
module.exports = (req, res) => {
    //递归
    function tree(data,pid=0,obj=[]){
        for(var i=0;i<data.length;i++){
            data[i].children=data[i].children||[]
            if(data[i].pid==pid){
                data[i].flag=false
                var index=obj.push(data[i])
                tree(data,data[i].id,obj[index-1].children)
            }
        }
        return obj
    }
    let sql = 'select * from `select` order by `sort`'
    conn.query(sql, function (error, result) {
        if (error == null) {
            res.json({
                error: 0,
                message: 'ok',
                data:tree(result)
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