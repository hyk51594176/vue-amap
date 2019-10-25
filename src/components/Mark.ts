import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

interface Label {
  content: string
  direction?: string
  offset?: any
}

interface Icon {
  image: string
  size: any
  imageSize?: any
  imageOffset?: any
  instance?: any
}

@Component
export default class AmapMark extends Vue {
  aMap: any
  aMapMarker: any
  @Prop({ type: Array, required: true }) private position!: [number, number]
  @Prop({ type: String }) private anchor!: string
  @Prop({ type: Array }) private offset!: [number, number]
  @Prop({ type: String }) private animation!: string
  @Prop({ type: Boolean, default: true }) private clickable!: boolean
  @Prop({ type: [Number, String] }) private angle!: number | string
  @Prop({ type: Object }) private label!: Label
  @Prop({ type: Number }) private zIndex!: number
  @Prop({ type: Boolean, default: false }) private draggable!: boolean
  @Prop({ type: String }) private cursor!: string
  @Prop({ type: String }) private content!: string | HTMLElement
  @Prop({ type: String }) private title!: string
  @Prop({ type: [Object, String] }) private icon!: Icon | string
  @Prop({ type: Object }) private shadow!: any
  @Prop({ type: Object }) private shape!: any
  @Prop() private extData!: any

  mounted() {
    this.$once('COMPONENTINIT', (aMap: any) => {
      const {
        position,
        offset,
        anchor,
        label,
        animation,
        clickable,
        angle,
        zIndex,
        draggable,
        cursor,
        content,
        title,
        icon,
        shadow,
        shape,
        extData,
        $attrs,
        $listeners
      } = this

      if (label && Array.isArray(label.offset)) {
        label.offset = new AMap.Pixel(...label.offset)
      }

      if (icon && typeof icon !== 'string') {
        icon.size = new AMap.Size(...icon.size)
        Array.isArray(icon.imageSize) &&
          (icon.imageSize = new AMap.Size(...icon.imageSize))
        Array.isArray(icon.imageOffset) &&
          (icon.imageOffset = new AMap.Pixel(...icon.imageOffset))
        icon.instance = new AMap.Icon(icon)
      }

      this.aMap = aMap
      this.aMapMarker = new AMap.Marker({
        ...$attrs,
        anchor,
        animation,
        clickable,
        label,
        angle,
        zIndex,
        draggable,
        cursor,
        content,
        title,
        extData,
        icon: icon && typeof icon !== 'string' ? icon.instance : icon,
        shadow,
        shape,
        position: new AMap.LngLat(...position),
        ...(Array.isArray(offset) ? { offset: new AMap.Pixel(...offset) } : {})
      })
      Object.keys($listeners).forEach(key => {
        this.aMapMarker.on(
          key,
          (<Function>$listeners[key]).bind(null, {
            marker: this.aMapMarker,
            aMap
          })
        )
      })
      this.aMap.add(this.aMapMarker)
      this.$parent.$emit('setFitView')
    })
  }
  @Watch('anchor')
  setAnchor(anchor: string) {
    this.aMapMarker && this.aMapMarker.setAnchor(anchor)
  }
  @Watch('animation')
  setAnimation(animation: string) {
    this.aMapMarker && this.aMapMarker.setAnimation(animation)
  }
  @Watch('clickable')
  setClickable(clickable: boolean) {
    this.aMapMarker && this.aMapMarker.setClickable(clickable)
  }
  @Watch('label', { deep: true })
  setLabel(label: Label) {
    if (label && Array.isArray(label.offset)) {
      label.offset = AMap.Pixel(...label.offset)
    }
    this.aMapMarker && this.aMapMarker.setLabel(label)
  }
  @Watch('angle')
  setAngle(angle: number) {
    this.aMapMarker && this.aMapMarker.setAngle(angle)
  }
  @Watch('zIndex')
  setzIndex(zIndex: number) {
    this.aMapMarker && this.aMapMarker.setzIndex(zIndex)
  }
  @Watch('draggable')
  setDraggable(draggable: boolean) {
    this.aMapMarker && this.aMapMarker.setDraggable(draggable)
  }
  @Watch('cursor')
  setCursor(cursor: string) {
    this.aMapMarker && this.aMapMarker.setCursor(cursor)
  }
  @Watch('content')
  setContent(content: string | HTMLElement) {
    this.aMapMarker && this.aMapMarker.setContent(content)
  }
  @Watch('title')
  setTitle(title: string) {
    this.aMapMarker && this.aMapMarker.setTitle(title)
  }
  @Watch('extData')
  setExtData(extData: any) {
    this.aMapMarker && this.aMapMarker.setExtData(extData)
  }
  @Watch('position', { deep: true })
  setPosition(position: [number, number]) {
    this.aMapMarker &&
      this.aMapMarker.setPosition(
        Array.isArray(position) ? new AMap.LngLat(...position) : position
      )
    this.$parent.$emit('setFitView')
  }
  @Watch('offset', { deep: true })
  setOffset(offset: [number, number]) {
    this.aMapMarker &&
      this.aMapMarker.setOffset(
        Array.isArray(offset) ? new AMap.Pixel(...offset) : offset
      )
  }
  beforeDestroy() {
    if (this.aMap && this.aMapMarker) {
      this.aMap.remove(this.aMapMarker)
      Object.keys(this.$listeners).forEach(key => {
        this.aMapMarker.off(key, this.$listeners[key])
      })
    }
  }
  render() {
    return null
  }
}
