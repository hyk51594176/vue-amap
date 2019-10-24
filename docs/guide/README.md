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