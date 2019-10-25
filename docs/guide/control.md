---
title: 'control'
---

## 参数配置
control组件支持[高德地图控件](https://lbs.amap.com/api/javascript-api/reference/map-control#control-bar)所有属性及事件。该组件提供了五种默认控件ControlBar、MapType、OverView、Scale、ToolBar及通用Control。
其中默认控件可以使用 `<el-amap-controlname/>` 的方式直接使用，而通用Control组件需要提供具体控件名称 `<el-amap-control control-name='controlName'/>`

## 示例

<demo-block>
<example-control-index slot="source"/>
<<< @/docs/.vuepress/components/example/control/index.vue
</demo-block>