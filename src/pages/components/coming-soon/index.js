import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View, Text } from '@tarojs/components'

import './index.less'

export default class DataList extends Component {
    render() {
        const { data } = this.props
        return (
            <View>
                {data.map(item => (
                    <View className='list' key={item.id}>
                        <View className='list-main'>
                            <Text>{item.location}</Text>
                            <Text>{item.content}</Text>
                        </View>
                        <View className='list-bottom'>
                            <View className='list-bottom-operation'>
                                <Text>({item.time})</Text>
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
