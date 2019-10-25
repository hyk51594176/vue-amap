---
title: 'pathSimplifier'
---

## 参数配置
pathSimplifier组件支持[高德地图pathSimplifier类](https://lbs.amap.com/api/javascript-api/reference-amap-ui/mass-data/pathsimplifier)所有属性及事件。在此基础上，对以下属性变动在组件内部监听，并会主动触发对应对set方法

| 属性名 | 类型 | 默认值 |
| - | - | - |
| data | Data[] | - |

```ts
// Data接口定义
interface Data {
  name: string
  path: Array<Array<number>>
}
```


## 示例

<demo-block>
<example-pathsimplifier-index slot="source"/>
<<< @/docs/.vuepress/components/example/pathsimplifier/index.vue
</demo-block>