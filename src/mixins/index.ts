import { Vue, Component } from 'vue-property-decorator'
import loadMap from '../lib/loadMap'
@Component
export class ControlMixin extends Vue {
  control: any
  aMap: any
  controlName!: string
  created() {
    this.$once('COMPONENTINIT', (aMap: any) => {
      this.aMap = aMap
      if (loadMap.config.plugin.includes(`AMap.${this.controlName}`)) {
        this.pluginInt()
      } else {
        AMap.plugin(`AMap.${this.controlName}`, this.pluginInt)
      }
    })
  }
  pluginInt() {
    this.control = new AMap[this.controlName](this.$attrs)
    Object.keys(this.$listeners).forEach(key => {
      this.control.on(
        key,
        (<Function>this.$listeners[key]).bind(null, {
          [this.controlName]: this.control,
          aMap: this.aMap
        })
      )
    })
    this.aMap.addControl(this.control)
  }
  beforeDestroy() {
    if (this.control && this.aMap) {
      this.aMap.removeControl(this.control)
      Object.keys(this.$listeners).forEach(key => {
        this.control.off(key, this.$listeners[key])
      })
    }
  }
  render() {
    return null
  }
}
