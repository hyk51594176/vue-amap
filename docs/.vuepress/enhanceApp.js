import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import amap from '../../dist/vue-aMap.esm'
import DemoBlock from './components/demo-block'

export default ({ Vue }) => {
  Vue.use(elementUI, { size: 'small' })
  Vue.use(amap, {
    key: 'bb3cfe654eb9a990b4acbc0b58c7aaf8',
    plugin: ['AMap.Geocoder']
  })
  Vue.component('demo-block', DemoBlock)
}
