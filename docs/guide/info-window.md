---
title: 'infoWindow'
---

## 参数配置
infoWindow组件支持[高德地图infoWindow类](https://lbs.amap.com/api/javascript-api/reference/infowindow#InfoWindow)所有属性及事件。在此基础上，对以下属性变动在组件内部监听，并会主动触发对应对set方法

| 属性名 | 类型 | 默认值 |
| - | - | - |
| position | LngLat | - |
| anchor | string | - |
| isOpen | boolean | false |
| size | Size | - |

infoWindow组件 `isCustom` 属性值默认为 `true` ，即可在其标签内插入自定义标签内容，建议使用这种方式来展示自定义样式，具体使用请参照示例

## 示例

<demo-block>
<example-infowindow-index slot="source"/>
<<< @/docs/.vuepress/components/example/infowindow/index.vue
</demo-block>