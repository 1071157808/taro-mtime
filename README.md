### 前言
本项目是基于 taro 和 taro-ui 的一个仿时光网的微信小程序学习项目，项目中的接口使用的时光网的API，有侵犯时光网权益的嫌疑，若被告知需停止使用，本人会及时删除此页面与整个项目

**安装使用**

```
# 全局安装 taro 开发工具
npm install -g @tarojs/cli
# 克隆项目
git clone https://github.com/calabash519/taro-mtime.git
cd taro-mtime
# 安装依赖
npm i
# 小程序预览（需下载下载并打开微信开发者工具，选择预览项目根目录）
npm run dev:weapp
# H5 预览
npm run dev:h5
```


**文件目录**

```
├── dist                   编译结果目录
├── config                 配置目录
|   ├── dev.js             开发时配置
|   ├── index.js           默认配置
|   └── prod.js            打包时配置
├── src                    源码目录
|   ├── pages              页面文件目录
|   |   ├── index          index页面目录
|   |   |   ├── index.js   index页面逻辑
|   |   |   └── index.css  index页面样式
|   ├── app.css            项目总通用样式
|   └── app.js             项目入口文件
└── package.json
```
