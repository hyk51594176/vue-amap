import Vue from 'vue'

import AMapLoader, { Config } from './loadMap'
import Amap from './components/Amap'
import AmapMark from './components/AmapMark'
import InfoWindow from './components/InfoWindow'
import {
  ControlBar,
  ToolBar,
  MapType,
  OverView,
  Scale,
  Control
} from './components/Controls'
import PathSimplifier from './components/PathSimplifier'
import PathNavigator from './components/PathNavigator'
import MassMarks from './components/MassMarks'
let installed = false
const install = (_Vue: typeof Vue, options: Config) => {
  if (installed) return
  installed = true
  AMapLoader.setConfig(options)
  _Vue.component('el-amap', Amap)
  _Vue.component('el-amap-mark', AmapMark)
  _Vue.component('el-amap-maptype', MapType)
  _Vue.component('el-amap-overview', OverView)
  _Vue.component('el-amap-scale', Scale)
  _Vue.component('el-amap-toolbar', ToolBar)
  _Vue.component('el-amap-controlbar', ControlBar)
  _Vue.component('el-amap-control', Control)
  _Vue.component('el-amap-infowindow', InfoWindow)
  _Vue.component('el-amap-pathsimplifier', PathSimplifier)
  _Vue.component('el-amap-pathnavigator', PathNavigator)
  _Vue.component('el-amap-massmarks', MassMarks)
}

export default install
export { AMapLoader }
