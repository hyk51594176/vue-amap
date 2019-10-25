---
title: 'marker'
---

## 参数配置
marker组件支持[高德地图marker类](https://lbs.amap.com/api/javascript-api/reference/overlay#marker)所有MarkerOption属性及事件。在此基础上，对以下属性变动在组件内部监听，并会主动触发对应对set方法

| 属性名 | 类型 | 默认值 |
| - | :-: | :-: | - |
| position | LngLat | - |
| offset | Pixel | - |
| anchor | string | 'top-left' |
| label | { content: string, offset?: Pixel, direction?: string } | - |
| animation | string | 'AMAP_ANIMATION_NONE' |
| clickable | boolean | true |
| angle | number | - |
| zIndex | number | - |
| draggable | boolean | false |
| title | string | - |
| content | string | - |
| icon | string &#124; Icon | - |
| extData | any | - |

## 示例

<demo-block>
<example-marker-index slot="source"/>
<<< @/docs/.vuepress/components/example/marker/index.vue
</demo-block>