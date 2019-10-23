import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component
class Info extends Vue {
  nodeEl: Array<Vue.VNode> | undefined = undefined
  upTime = 0
  getEl(nodeEl: Array<Vue.VNode> | undefined): Promise<Element> {
    this.nodeEl = nodeEl
    this.upTime++
    return new Promise(resolve => {
      this.$nextTick(() => {
        resolve(this.$el)
      })
    })
  }
  render(h: Vue.CreateElement) {
    return h(
      'div',
      {
        key: this.upTime
      },
      this.nodeEl
    )
  }
}
@Component
export default class InfoWindow extends Vue {
  aMap!: any
  infoWindow!: any
  @Prop({ type: Array }) private position!: [number, number]
  @Prop({ type: String }) private content!: string
  @Prop({ type: String }) private anchor!: string
  @Prop({ type: Boolean, default: false }) private isOpen!: boolean
  @Prop({ type: Array }) private offset!: [number, number]
  @Prop({ type: Array }) private size!: [number, number]
  @Prop({ type: Boolean, default: true }) private isCustom!: boolean
  infoVue = new Info().$mount()
  created() {
    this.$once('COMPONENTINIT', (aMap: any) => {
      this.aMap = aMap
      const { content, offset, position, anchor, $attrs, size, isCustom } = this
      this.infoWindow = new AMap.InfoWindow({
        autoMove: true,
        ...$attrs,
        content: isCustom ? null : content,
        position,
        isCustom,
        anchor,
        size: Array.isArray(size) ? new AMap.Size(...size) : size,
        offset: Array.isArray(offset) ? new AMap.Pixel(...offset) : offset
      })
      this.toggle()
      this.setCustomContent()
      this.infoWindow.on('close', this.closeHandler)
      this.infoWindow.on('open', this.openHandler)
      Object.keys(this.$listeners).forEach(key => {
        this.infoWindow.on(
          key,
          (<Function>this.$listeners[key]).bind(null, {
            infoWindow: this.infoWindow,
            aMap
          })
        )
      })
    })
  }
  @Watch('content')
  setContent(val: string) {
    if (this.infoWindow && !this.isCustom) {
      this.infoWindow.setContent(val)
    }
  }
  @Watch('position', { deep: true })
  setPosition(val: [number, number]) {
    if (this.infoWindow) {
      this.infoWindow.setPosition(val)
    }
  }
  @Watch('anchor')
  setAnchor(val: string) {
    if (this.infoWindow) {
      this.infoWindow.setAnchor(val)
    }
  }
  @Watch('isOpen')
  setisOpen() {
    if (this.infoWindow) {
      this.toggle()
    }
  }
  @Watch('size', { deep: true })
  setSize(val: [number, number]) {
    if (this.infoWindow) {
      this.infoWindow.setSize(Array.isArray(val) ? new AMap.Size(...val) : val)
    }
  }
  closeHandler() {
    this.$emit('update:isOpen', false)
  }
  openHandler() {
    this.$emit('update:isOpen', true)
  }
  toggle() {
    if (!this.aMap || !this.infoWindow) return
    const { isOpen, position } = this
    if (isOpen) {
      this.infoWindow.open(this.aMap, position)
    } else {
      this.infoWindow.close()
    }
  }
  beforeDestroy() {
    if (this.infoWindow && this.aMap) {
      Object.keys(this.$listeners).forEach(key => {
        this.infoWindow.off(key, this.$listeners[key])
      })
      this.infoWindow.off('close', this.closeHandler)
      this.infoWindow.off('open', this.openHandler)
      this.aMap.clearInfoWindow()
      this.infoVue.$destroy()
    }
  }
  setCustomContent() {
    if (this.isCustom && this.infoWindow) {
      this.infoVue.getEl(this.$slots.default).then((el: Element) => {
        this.infoWindow.setContent(el)
      })
    }
  }
  updated() {
    this.setCustomContent()
  }
  render() {
    return null
  }
}
