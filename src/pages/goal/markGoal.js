import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import sky from '../../img/sky.jpeg'
import fly from '../../img/fly.jpeg'
import CONS from "../../common/const";

import './style/index.scss'

@observer
class Goal extends Component {

  config = {
    navigationBarTitleText: '我的目标'
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
    console.log(CONS.HomeShow)
    return (
      <View className='app'>
        {/* HOME BG */}
        <Image className="app__bg" src={fly} />
        {/*  HOME ITEM */}
        <View className="app__main">
          {
            CONS.HomeShow.map((item, index) =>
              <Button
                onClick={this.itemClick.bind(this, item.url, item.param)}
                className={`app__main_item app__main_item-bgc${index}`}
                key={index}
              >
                {item.name}
              </Button>
            )
          }
        </View>
      </View >
    )
  }
}

export default Goal
