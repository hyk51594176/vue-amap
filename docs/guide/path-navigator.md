---
title: 'pathNavigator'
---

## 介绍
pathNavigator巡航器组件一般配合轨迹组件同时使用，一条轨迹数据对应一个巡航器组件，具体使用方式参照示例

## 参数配置
pathNavigator组件支持[高德地图pathNavigator类](https://lbs.amap.com/api/javascript-api/reference-amap-ui/mass-data/pathsimplifier)所有属性及事件。在此基础上，对以下属性变动在组件内部监听，并会主动触发对应对set方法

| 属性名 | 类型 | 默认值 |
| - | - | - |
| speed | number | - |
| range | number[] | - |


## 示例

<demo-block>
<example-pathnavigator-index slot="source"/>
<<< @/docs/.vuepress/components/example/pathnavigator/index.vue
</demo-block>