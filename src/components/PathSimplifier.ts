import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

interface Data {
  name: string
  path: Array<Array<number>>
}

@Component({
  inheritAttrs: false
})
export default class PathSimplifier extends Vue {
  aMap!: any
  pathSimplifier: any
  @Prop({ type: Array, required: true }) private data!: Array<Data>
  PathSimplifier: any
  mounted() {
    this.$once('COMPONENTINIT', (aMap: any) => {
      this.aMap = aMap
      initAMapUI()
      AMapUI.load(['ui/misc/PathSimplifier'], (PathSimplifier: any) => {
        ;(<any>window).PathSimplifier = PathSimplifier
        this.PathSimplifier = PathSimplifier
        if (!PathSimplifier.supportCanvas) {
          alert('当前环境不支持 Canvas！')
        }
        this.$emit('ui-init', PathSimplifier)
        const { $attrs, data } = this
        // 创建组件实例
        this.pathSimplifier = new PathSimplifier({
          getPath(pathData: any) {
            return pathData.path
          },
          ...$attrs,
          data,
          map: aMap // 所属的地图实例
        })
        this.childrenInit()
        Object.keys(this.$listeners).forEach(key => {
          this.pathSimplifier.on(
            key,
            (<Function>this.$listeners[key]).bind(null, {
              pathSimplifier: this.pathSimplifier,
              aMap
            })
          )
        })
      })
    })
  }
  @Watch('data')
  dataChange(val: Data) {
    if (this.pathSimplifier) {
      this.pathSimplifier.setData(val)
      this.childrenInit('DATACHANGE')
    }
  }
  updated() {
    this.childrenInit()
  }
  beforeDestroy() {
    if (this.pathSimplifier && this.aMap) {
      Object.keys(this.$listeners).forEach(key => {
        this.pathSimplifier.off(key, this.$listeners[key])
      })
      this.pathSimplifier.setData([])
      this.pathSimplifier.destroy()
    }
  }
  childrenInit(eventName: string = 'COMPONENTINIT') {
    const { PathSimplifier, pathSimplifier } = this
    if (!PathSimplifier) return
    this.$children.forEach((component, count) => {
      if (count <= this.data.length - 1) {
        component.$emit(eventName, { count, PathSimplifier, pathSimplifier })
      }
    })
  }
  render(h: Vue.CreateElement) {
    return h('span', this.$slots.default)
  }
}
