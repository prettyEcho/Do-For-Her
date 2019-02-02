import { action, observable } from 'mobx'
import Taro from '@tarojs/taro'


export default class Home {

  // 目前登录微信小程序天然支持，这段代码待用
  @action
  login() {
    Taro.login({
      success: async (res) => {
        if (res.code) {
          try {
            const token = await this.getLoginToken(res.code)
            console.log('登录成功 token为', token)
          } catch (e) {
            console.log('获取用户登录态失败' + res.errMsg)
          }
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  }

  // 获取登录token
  getLoginToken(code) {
    return wx.cloud.callFunction({
      // 云函数名称
      name: 'login',
      // 传给云函数的参数
      data: { code },
    })
  }
} 