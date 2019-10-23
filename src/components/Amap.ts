import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import AMapAPILoader from '../loadMap'

@Component({
  inheritAttrs: false
})
export default class AMapComponent extends Vue {
  @Prop({ type: Number }) private zoom!: number
  @Prop({ type: Array }) private center!: Array<number>
  aMap!: any
  loadError = ''
  mapLoading = true
  created() {
    AMapAPILoader.sdkReady()
      .then(() => {
        this.$nextTick(this.mapInit)
      })
      .catch(() => {
        this.loadError = '地图加载失败'
      })
      .finally(() => {
        this.mapLoading = false
      })
  }
  @Watch('zoom')
  zoomChange(val: number) {
    if (this.aMap) {
      this.aMap.setZoom(val)
    }
  }
  @Watch('center')
  centerChange(val: Array<number>) {
    if (this.aMap && val.length === 2) {
      this.aMap.setCenter(val)
    }
  }
  updated() {
    this.mapInit()
  }
  async mapInit() {
    if (!this.aMap) {
      await AMapAPILoader.sdkReady()
      this.aMap = new AMap.Map(this.$refs.map, {
        resizeEnable: true,
        ...this.$attrs,
        zoom: this.zoom,
        center: this.center
      })
      Object.keys(this.$listeners).forEach(key => {
        this.aMap.on(
          key,
          (<Function>this.$listeners[key]).bind(null, this.aMap)
        )
      })
    }
    this.$children.forEach(component =>
      component.$emit('COMPONENTINIT', this.aMap)
    )
  }
  beforeDestroy() {
    if (this.aMap) {
      Object.keys(this.$listeners).forEach(key => {
        this.aMap.off(key, this.$listeners[key])
      })
      this.aMap.destroy()
    }
  }
  getChildren() {
    let children: any = null
    if (this.loadError) {
      children = '地图加载失败'
    } else {
      children = this.aMap ? this.$slots.default : null
    }
    return children
  }
  render(h: Vue.CreateElement) {
    return h(
      'div',
      {
        ref: 'map',
        attrs: this.$attrs,
        directives: [
          {
            name: 'loading',
            value: this.mapLoading
          }
        ]
      },
      this.getChildren()
    )
  }
}
