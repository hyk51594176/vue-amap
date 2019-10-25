import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

interface Point {
  lnglat: [number, number]
  name: string
  style: number
}

interface Style {
  anchor: any
  url: string
  size: any
  rotation?: number
}

interface StyleFn<T> {
  (arg: T): T
}

@Component
export default class MassMarks extends Vue {
  aMap!: any
  massMarks!: any
  @Prop({ type: Array, required: true }) private data!: Array<Point>
  @Prop({ type: [Object, Array] }) private styles!: Style | Array<Style>
  mounted() {
    this.$once('COMPONENTINIT', (aMap: any) => {
      let { $attrs, $listeners, data, styles } = this
      if (styles) {
        styles = this.handleStyle(styles)
      }

      this.aMap = aMap
      this.massMarks = new AMap.MassMarks(data, {
        ...$attrs,
        style: styles
      })
      Object.keys($listeners).forEach(key => {
        this.massMarks.on(
          key,
          (<Function>$listeners[key]).bind(null, {
            massMarks: this.massMarks,
            aMap
          })
        )
      })
      this.massMarks.setMap(this.aMap)
    })
  }
  handleSingleStyleObject: StyleFn<Style> = style => {
    Array.isArray(style.anchor) && (style.anchor = new AMap.Pixel(...style.anchor))
    Array.isArray(style.size) && (style.size = new AMap.Size(...style.size))
    return style
  }
  handleStyle: StyleFn<Style | Array<Style>> = style => {
    if (Array.isArray(style)) {
      style.forEach(this.handleSingleStyleObject)
    } else if (style) {
      this.handleSingleStyleObject(style)
    }
    return style
  }
  @Watch('data', { deep: true })
  dataChange(val: Array<Point>) {
    this.massMarks && this.massMarks.setData(val)
  }
  @Watch('styles', { deep: true })
  styleChange(val: Style | Array<Style>) {
    val = this.handleStyle(val)
    this.massMarks && this.massMarks.setStyle(val)
  }
  beforeDestroy() {
    if (this.aMap && this.massMarks) {
      this.aMap.remove(this.massMarks)
      Object.keys(this.$listeners).forEach(key => {
        this.massMarks.off(key, this.$listeners[key])
      })
    }
  }
  render() {
    return null
  }
}
