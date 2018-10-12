import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
// 共用组件
import BottomTab from "../components/bottom-tab"

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '我的时光网'
  }

  constructor(props) {
    super(props)
    this.state = {
      currentTab: 0
    }
  }

  render() {
    return (
      <View>
        <BottomTab tab={this.state.currentTab}></BottomTab>
      </View>
    )
  }
}

