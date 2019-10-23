import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class PathNavigator extends Vue {
  pathNavigator: any
  @Prop({ type: Number }) private speed!: number
  @Prop({ type: Array }) private range!: Array<number>
  @Prop({ type: Function }) private getOptions!: Function
  @Prop({ type: Number }) private index!: number
  created() {
    this.$on('DATACHANGE', (data: any) => {
      if (this.pathNavigator) {
        this.close()
      }
      this.createPathNavigator(data)
    })
    this.$once('COMPONENTINIT', (data: any) => {
      this.createPathNavigator(data)
    })
  }
  createPathNavigator({ count, pathSimplifier, PathSimplifier }: any) {
    const { $attrs, speed, range, getOptions, index } = this
    let options = {
      ...$attrs,
      speed,
      range
    }
    if (getOptions) {
      options = {
        ...options,
        ...(getOptions(PathSimplifier) || {})
      }
    }
    let num = count
    if (index !== undefined) num = index
    this.pathNavigator = pathSimplifier.createPathNavigator(num, options)
    this.pathNavigator.start()
    Object.keys(this.$listeners).forEach(key => {
      this.pathNavigator.on(
        key,
        (<Function>this.$listeners[key]).bind(null, {
          pathNavigator: this.pathNavigator,
          pathSimplifier
        })
      )
    })
  }
  @Watch('speed')
  setSpeed(val: number) {
    if (this.pathNavigator) {
      this.pathNavigator.setSpeed(val)
    }
  }
  @Watch('range')
  setRange(val: Array<number>) {
    if (this.pathNavigator) {
      this.pathNavigator.setRange(val)
    }
  }
  close() {
    if (this.pathNavigator) {
      Object.keys(this.$listeners).forEach(key => {
        this.pathNavigator.off(key, this.$listeners[key])
      })
      this.pathNavigator.destroy()
    }
  }
  beforeDestroy() {
    this.close()
  }
  render() {
    return null
  }
}
