import Vue from 'vue'
import regComponents from './components'
import AMapLoader, { Config } from './lib/loadMap'

let installed = false
const install = (_Vue: typeof Vue, options: Config) => {
  if (installed) return
  installed = true
  AMapLoader.setConfig(options)
  regComponents(_Vue)
}

export default install
export { AMapLoader }
