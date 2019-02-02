// 云函数入口文件
const cloud = require('wx-server-sdk')
const { MINI_INFO, RES_MSG } = require('./const.js')

cloud.init()

const db = wx.cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  if (!event.code) {
    return {
      errCode: '500',
      errMsg: RES_MSG.NO_CODE
    }
  }

  // 换取用户session
  const { openid, session_key } = await getSession(event.code)

  if (!openid || !session_key) {
    return {
      errCode: '500',
      errMsg: RES_MSG.NO_SESSION
    }
  }

  db.collection('user').where({
    openid: openid
  }).get().then(res => {
    console.log('res', res)
    return {
      errorCode: '200',
      data: {
        token: res.token
      }
    }
  })
}

// 获取session
function getSession(code) {
  return Taro.request({
    url: 'https://api.weixin.qq.com/sns/jscode2session',
    data: {
      appid: MINI_INFO.appid,
      secret: MINI_INFO.secret,
      js_cdoe: code
    }
  })
}