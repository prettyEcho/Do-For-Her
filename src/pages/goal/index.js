import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import CONS from "../../common/const";
import { GoalPanel } from '../component/goalPanel'

import './style/index.scss'

@observer
class Goal extends Component {

  config = {
    navigationBarTitleText: '健康小助手'
  }

  componentWillMount () { }

  componentWillReact () {
    // this.props.home.login()
  }

  componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 导航到模块详情
  itemClick = (url, param) => {
    Taro.navigateTo({
      url: `${url}?page=${param}`
    })
  }

  render () {
    const goalItems = [
      {
        id: 'goal1',
        img: 'https://source.qunarzz.com/site/images/qmp/banklogo/nongye.png',
        name: '俯卧撑'
      }
    ]
    return (
      <View className="goal">
        <GoalPanel
          title='我的目标'
          goalItems={goalItems}
        ></GoalPanel>
      </View >
    )
  }
}

export default Goal
