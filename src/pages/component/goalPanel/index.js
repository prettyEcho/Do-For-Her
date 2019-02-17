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
          <Text className="goalPanel__nav_add">add</Text>
        </View>
        <View className="goalPanel__subNav">
          <Text className="goalPanel__subNav_txt">进行中</Text>
          <Text className="goalPanel__subNav_txt">已结束</Text>
        </View>
        <View>
          {
            goalItems.map((item) => (
              <View key={item.id}>
                <Image src={item.img}></Image>
                <Button>{item.name}</Button>
              </View>
            ))
          }
        </View>
      </View >
    )
  }
}

export default GoalPanel
