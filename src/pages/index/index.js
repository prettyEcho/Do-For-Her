import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import sky from '../../img/sky.jpeg'
import fly from '../../img/fly.jpeg'
import CONS from "../../common/const";

import './index.scss'

@inject('home')
@observer
class Home extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() {

    this.props.home.login()

  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='app'>
        {/* HOME BG */}
        <Image className="app-bg" src={fly} />
        {/*  HOME ITEM */}
        <View className="app-item-wrap">
          {
            CONS.HomeShow.map((item, index) => <Text className={`item item${index}-bgc`} key={index}>{item}</Text>)
          }
        </View>
      </View >
    )
  }
}

export default Home
