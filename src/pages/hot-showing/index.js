import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { AtTabBar, AtSearchBar, AtNoticebar } from 'taro-ui'
import BottomTab from "../components/bottom-tab"
import DataList from '../components/hot-showing'
import tradeData from "../../assets/data/hot-showing.js"
import './index.less'

export default class HotShowing extends Taro.Component {
    config = {
        navigationBarTitleText: '正在热映'
    }

    constructor() {
        super(...arguments)
        this.state = {
            currentTab: 1,
        }
    }

    render() {
        return (
            <View className='page'>
                <View className='page-top'>
                </View>
                <View className='page-main'>
                    <DataList data={tradeData[0]} type='sell'></DataList>
                </View>
                <View className='bottom-ta-bar margin-bottom-10'>
                    <BottomTab tab={this.state.currentTab}></BottomTab>
                </View>
            </View>
        )
    }
}
