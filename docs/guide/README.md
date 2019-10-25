# 介绍
vue-amap是基于高德地图js-api封装的vue组件，结合[高德地图js-api文档](https://lbs.amap.com/api/javascript-api/summary)，可以方便快捷构建页面地图组件

## 安装
``` sh
# 安装
npm install -S @hanyk/vue-amap
```

``` js
// 使用
import Vue from 'vue'
import amap from '@hanyk/vue-amap'

Vue.use(amap, {
  key: 'Your Key',
  plugin: ['AMap.Geocoder'], // plugin list that you needed
  v: '1.4.15',
  UIVersion: '1.0'
})
```

## 内置处理
为了简便使用，组件内部对部分高德地图基础类均做了处理，在使用时传参与高德地图api文档稍有不同，在下面表格列出
* 出于方便表达的考虑，之后的文档中同类型均使用类名代替

| 类名 | 构造函数 | 传参类型 |
| :-: | :-: | - |
| Pixel | AMap.Pixel | [number, number] |
| Size | AMap.Size | [number, number] |
| LngLat | AMap.LngLat | [number, number] |
| Icon | AMap.Icon | { size: Size, imageSize?: Size, imageOffset?: Pixel, image: string } |