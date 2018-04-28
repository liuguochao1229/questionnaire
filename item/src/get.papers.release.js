var path = require('path')
var conn = require('./conn.js')
var cuid = require('cuid')
module.exports = (req,res)=>{  
    if(!req.query.id){
        require('./message')({
            status:'error',
            msg:'已过时'
            
        },res)
        return
    }
  //验证用户是否已问卷
    
    var id=req.query.id
    if(req.cookies['releaseInfo'+id]){
        require('./message')({
            status:'error',
            msg:'已提交'
            
        },res)
        return
    }
    res.cookie('repaper_id',id)
    res.cookie('releaseInfo'+id,JSON.stringify({
        paper_id:id,
        cuid:cuid()
    }))
    res.sendFile( path.resolve('./')+'/public/release.html')
    // var id=req.query.id,
    // sql='select * from `papers` where `id`="'+id+'"' 
    // conn.query(sql,(error,result)=>{
    //     if(error==null){
    //         res.send({
    //             error:0,
    //             message:'ok',
    //         })
    //     }else{
    //         console.log(error)
    //         res.send({
    //             error:1,
    //             message:'error'
    //         })
    //     }
    // })
    
}