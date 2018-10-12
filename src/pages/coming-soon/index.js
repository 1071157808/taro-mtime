import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { AtTabs, AtTabsPane } from 'taro-ui'
// 共用组件
import DataList from '../components/coming-soon'
import BottomTab from "../components/bottom-tab"
import priceData from "../../assets/data/coming-soon.js"

import './index.less'

export default class ComeSoon extends Taro.Component {
    config = {
        navigationBarTitleText: '即将上映'
    }

    constructor() {
        super(...arguments)
        this.state = {
            currentTab: 2
        }
    }

    render() {
        return (
            <View>
                <View>
                <DataList data={priceData}></DataList>
                </View>
                <View>
                    <BottomTab tab={this.state.currentTab}></BottomTab>
                </View>
            </View>
        )
    }
}

