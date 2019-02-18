import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import './index.scss'

class GoalPanel extends Component {

  componentWillMount () { }

  componentDidMount () {

  }

  render () {
    console.log(this.props)
    const { title = '我的目标', goalItems = [] } = this.props
    return (
      <View className="goalPanel">
        <View className="goalPanel__nav">
          <Text className="goalPanel__nav_title">{title}</Text>
          <Text className="iconfont goalPanel__nav_add">&#xe64f;</Text>
        </View>
        <View className="goalPanel__subNav">
          <Text className="goalPanel__subNav_txt">进行中</Text>
          <Text className="goalPanel__subNav_txt">已结束</Text>
        </View>
        <View className="goalPanel__main">
          {
            goalItems.map((item) => (
              <View className="goalPanel__main_item" key={item.id}>
                <Text className="iconfont goalPanel__main_item-icon">&#xe601;</Text>
                <View className="goalPanel__main_item-content">
                  <Text className="goalPanel__main_item-content-title">{item.title}</Text>
                  <Text className="goalPanel__main_item-content-mark">{`目标打卡${item.total}天，以坚持${item.insist}天`}</Text>
                </View>
                <View className="goalPanel__main_item-slide">
                  <Text className="goalPanel__main_item-slide-title">{`${item.rest} 天`}</Text>
                  <Text className="goalPanel__main_item-slide-mark">距离目标还剩</Text>
                </View>
              </View>
            ))
          }
        </View>
      </View >
    )
  }
}

export default GoalPanel
