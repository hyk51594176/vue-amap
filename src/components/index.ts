import { Vue } from 'vue-property-decorator'
import {
  ControlBar,
  ToolBar,
  MapType,
  OverView,
  Scale,
  Control
} from './Controls'
import Amap from './Amap'
import InfoWindow from './InfoWindow'
import Mark from './Mark'
import MassMarks from './MassMarks'
import PathNavigator from './PathNavigator'
import PathSimplifier from './PathSimplifier'

export default function(_Vue: typeof Vue) {
  _Vue.component('el-amap-controlbar', ControlBar)
  _Vue.component('el-amap-toolbar', ToolBar)
  _Vue.component('el-amap-maptype', MapType)
  _Vue.component('el-amap-overview', OverView)
  _Vue.component('el-amap-scale', Scale)
  _Vue.component('el-amap-control', Control)
  _Vue.component('el-amap', Amap)
  _Vue.component('el-amap-infowindow', InfoWindow)
  _Vue.component('el-amap-mark', Mark)
  _Vue.component('el-amap-massmarks', MassMarks)
  _Vue.component('el-amap-pathnavigator', PathNavigator)
  _Vue.component('el-amap-pathsimplifier', PathSimplifier)
}
