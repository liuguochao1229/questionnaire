const conn=require('./conn.js')
module.exports=(req,res)=>{
    let content=req.body.content,
    item=req.body.item,
    cuid=req.body.cuid,
    paper_id=req.body.paper_id,
    note=req.body.note,
    title=req.body.title,
    sql='insert into `answer` set ?'
    conn.query(sql,{
        content,item,paper_id,note,title,cuid
    },function(error,result){
        if(error==null){
            res.json({
                error:0,
                message:'ok'
            })
        }else{
            console.log(error)
            res.json({
                error:1,
                message:'error'
            })
        }
    })
}