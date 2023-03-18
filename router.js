const express = require('express')
const route = express.Router() // 实例化路由对象

const getNowTime = require('./utils/index')

// demo
route.get('/demo', (req, res) => {
  let apiRes = {
    code: 0,
    msg: "成功",
    data: '请求通过'
  }
  res.send(apiRes)
})

/**
 * route.ws('/url',(ws, req)=>{  })
 * 建立WebSocket服务，并指定对应接口url，及相应回调
 * ws为实例化的对象，req即为请求
 * 
 * ws.send方法用来向客户端发送信息
 * ws.on方法用于监听事件（如监听message事件，或监听close事件）
 * */
route.ws('/mySocketUrl', (ws, req) => {
  // console.log('连接成功', ws)

  ws.send('来自服务端推送的消息')

  ws.on('message', function (msg) {
    ws.send(`收到客户端的消息为：${msg}，再返回去`)
  })

  // 使用定时器不停的向客户端推动消息
  let timer = setInterval(() => {
    ws.send(`服务端定时推送消息: ${getNowTime()}`)
  }, 1000)

  ws.on('close', function (e) {
    // console.log('连接关闭')
    clearInterval(timer)
    timer = null
  })
})

module.exports = route // 暴露出去方便管理