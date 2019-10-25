---
title: 'map'
---

## 参数配置
map组件支持[高德地图map类](https://lbs.amap.com/api/javascript-api/reference/map)所有MapOption属性及事件。在此基础上，对以下属性在组件内部做变动监听，并会主动触发对应对set方法

| 属性名 | 类型 | 默认值 | 说明 |
| - | :-: | :-: | - |
| zoom | number | - | 地图显示的缩放级别，默认所在城市范围 |
| center | LngLat | - | 地图中心点坐标值，默认所在城市范围 |

## 示例

<demo-block>
<example-map-index slot="source"/>
<<< @/docs/.vuepress/components/example/map/index.vue
</demo-block>