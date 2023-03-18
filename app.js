// 引入express插件包并生成一个实例app
const express = require('express')

const app = express()
const expressWs = require('express-ws')(app) // 引入express-ws的WebSocket功能，并混入app，相当于为 app实例添加 .ws 方法

// 使用body-parser中间件解析post请求主体
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// 引入分模块管理的路由
const Router = require('./router') 

// 路由分模块
app.use(Router) 

// 在10000端口上启动后端服务
app.listen(10000, (req,res) => {
    console.log('后端服务端口地址为:  http://localhost:10000');
})