import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View, Text, Image } from '@tarojs/components'

import './index.less'

export default class DataList extends Component {
  render() {
    const { data, type } = this.props
    return (
      <View>
        {data.map(item => (
          <View className='list' key={item.id}>
            <View className='list-main'>
              <View className='list-main-left'>
                <Image className='list-main-image' src={item.image} />
              </View>
              <View className='list-main-right'>
                <View className='margin-bottom-15'>
                  <Text>{item.title}</Text>
                  <Text className={type}>{item.state}</Text>
                </View>
                <View className='margin-bottom-15'>
                  <Text>库存：{item.stock}</Text>
                  <Text>{item.location}</Text>
                </View>
                <View className='margin-bottom-15'>单价：{item.price}</View>
                <View className='margin-bottom-15'>电话：{item.phoneNum}</View>
              </View>
            </View>
            <View className='list-bottom'>
              <View className='list-bottom-time'>
                <Text>{item.time}</Text>
              </View>
              <View className='list-bottom-operation'>
                <Text className='high-light'>[ 点击分享 ]</Text>
                <Text className='high-light'>[ 查看详情 ]</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    )
  }
}

DataList.propTypes = {
  data: PropTypes.array
}
