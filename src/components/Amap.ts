import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import AMapAPILoader from '../lib/loadMap'

const lazy = (fn: Function, time: number) => {
  let timer = null as any
  return (...args: any) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
      timer = null
    }, time)
  }
}

@Component({
  inheritAttrs: false
})
export default class AMapComponent extends Vue {
  @Prop({ type: Number }) private zoom!: number
  @Prop({ type: Array }) private center!: Array<number>
  aMap!: any
  mapLoading = true
  beforeCreate() {
    AMapAPILoader.sdkReady()
  }
  mounted() {
    AMapAPILoader.sdkReady()
      .then(this.mapInit)
      .finally(() => {
        this.mapLoading = false
      })
    this.$on(
      'setFitView',
      lazy(() => {
        this.aMap.setFitView()
      }, 200)
    )
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
    AMapAPILoader.sdkReady().then(this.mapInit)
  }
  mapInit() {
    if (!this.aMap) {
      this.aMap = new AMap.Map(this.$el, {
        resizeEnable: true,
        ...this.$attrs,
        zoom: this.zoom,
        center: this.center
      })
      Object.keys(this.$listeners).forEach(key => {
        this.aMap.on(key, (<Function>this.$listeners[key]).bind(null, this.aMap))
      })
    }
    this.$children.forEach(component => component.$emit('COMPONENTINIT', this.aMap))
  }
  beforeDestroy() {
    if (this.aMap) {
      Object.keys(this.$listeners).forEach(key => {
        this.aMap.off(key, this.$listeners[key])
      })
      this.aMap.destroy()
    }
  }
  render(h: Vue.CreateElement) {
    return h(
      'div',
      {
        attrs: this.$attrs,
        directives: [
          {
            name: 'loading',
            value: this.mapLoading
          }
        ]
      },
      this.$slots.default
    )
  }
}
