---
title: 'massMarker'
---

## 参数配置
massMarker组件支持[高德地图massMarker类](https://lbs.amap.com/api/javascript-api/reference/layer#MassMarks)所有MassMarkerOption属性及事件。在此基础上，对以下属性变动在组件内部监听，并会主动触发对应对set方法

| 属性名 | 类型 | 默认值 |
| - | :-: | :-: | - |
| data | Point[] | - |
| styles | Style &#124; Style[] | - |

```ts
// Point及Style类型接口
interface Point {
  lnglat: [number, number]
  name: string
  style: number
}

interface Style {
  anchor: any
  url: string
  size: [number, number]
  rotation?: number
}
```

## 示例

<demo-block>
<example-massmarker-index slot="source"/>
<<< @/docs/.vuepress/components/example/massmarker/index.vue
</demo-block>