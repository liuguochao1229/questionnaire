
const express = require('express') //引入模块
const bodyParser = require('body-parser') //引入模块
const cookieParser = require('cookie-parser')
const session = require('express-session')
const multer = require('multer')
const app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}))

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //设置上传目录(目录要手动创建)
    cb(null, __dirname + '/static/pic')

  },
  filename: function (req, file, cb) {
    // 设置文件名
    var file = file.originalname;
    // var filename=Math.ceil(Math.random()*10000)
    cb(null, file)
  }
});
var upload = multer({ storage: storage })

app.post('/upload', upload.array('file', 3), function (req, res) {//upload.any()
  res.send(req.files)
})

app.use(cookieParser())
//设置静态目录
app.use(express.static('static'))
//post数据后去与解析
app.use(bodyParser.urlencoded({ extended: false }))

//首页
app.get('/index', require('./src/index.js'))
//页面跳转
app.get('/menu/:filename', require('./src/menu.js'))
//获取用户数据
app.get('/users/get', require('./src/users.get.js'))
//删除用户数据
app.get('/users/del', require('./src/users.del.js'))

//数据回填
app.get('/users/showForm', require('./src/users.showForm.js'))
//编辑数据
app.get('/users/edit', require('./src/users.edit.js'))

//注册
app.get('/regist', require('./src/get.regist.js'))

//字段是否存在
app.get('/chkExist', require('./src/get.chkExist.js'))

//添加用户信息
app.post('/users/add', require('./src/post.users.add.js'))
//登录
app.get('/login', require('./src/get.login.js'))

//验证登录
app.post('/login', require('./src/post.login.js'))

//注销
app.get('/logout', require('./src/get.logout.js'))

//大纲
app.get('/outline/show', require('./src/get.outline.show.js'))
//获取数据
app.get('/outline', require('./src/get.outline.js'))
//添加大纲
app.post('/outline/append', require('./src/post.outline.append.js'))

app.post('/outline/brot', require('./src/post.outline.brot.js'))
//编辑大纲
app.post('/outline/edit', require('./src/post.outline.edit.js'))
//删除大纲
app.get('/outline/remove', require('./src/get.outline.remove.js'))
//排序
app.post('/outline/sort', require('./src/post.outline.sort.js'))

//显示问卷管理
app.get('/papers/show', require('./src/get.papers.show.js'))
//保存问卷
app.post('/papers/add', require('./src/post.papers.add.js'))

//显示问卷
app.get('/papers', require('./src/get.papers.data.js'))
//删除问卷
app.get('/papers/del', require('./src/get.papers.del.js'))

//回填
app.get('/paper_edit', require('./src/get.papers.edit.js'))
//编辑
app.post('/papers/edit', require('./src/post.papers.edit.js'))

//显示问卷作答
app.get('/papers/release', require('./src/get.papers.release.js'))
//保存作答
app.post('/papers/release/add', require('./src/post.papers.release.js'))
//个人信息
app.get('/users/id', require('./src/get.users.id.js'))

app.get('/papers/answer', require('./src/get.papers.answer.js'))

//修改邮箱
app.get('/edit/email', require('./src/get.edit.email.js'))
//修改邮箱
app.get('/edit/phone', require('./src/get.edit.phone.js'))
//修改头像
app.get('/edit/photo', require('./src/get.edit.photo.js'))

//大纲
// app.get('/outline/show', require('./src/get.outline.show.js'))
//获取数据
app.get('/select', require('./src/get.select.js'))
//添加选项
app.post('/select/append', require('./src/post.select.append.js'))

app.post('/select/brot', require('./src/post.select.brot.js'))
//编辑选项
app.post('/select/edit', require('./src/post.select.edit.js'))
//删除选项
app.get('/select/remove', require('./src/get.select.remove.js'))
//排序
app.post('/select/sort', require('./src/post.select.sort.js'))

//问卷选项
app.get('/way', require('./src/get.way.js'))

//应用问卷选项
app.get('/way/use', require('./src/get.way.use.js'))
app.listen(88) //设置端口
