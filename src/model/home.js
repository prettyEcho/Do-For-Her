import { action, observable } from 'mobx'
import Taro from '@tarojs/taro'


export default class Home {

  @action
  login() {
    Taro.login({
      success: function (res) {
        if (res.code) {
          console.log('res.code', res.code)
          /* Taro.request({
            url: 'https://test.com/login',
            data: {
              username: 'zhangsan', // 用户输入的账号
              password: 'pwd123456', // 用户输入的密码
              code: res.code
            },
            success: function (res) {
              // 登录成功
              if (res.statusCode === 200) {
                console.log(res.data.sessionId)// 服务器回包内容
              }
            }
          }) */
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  }

} 