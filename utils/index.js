import glob from 'glob'
import fs from 'fs'
import path from 'path'
let reg = /.*?(\/Controls\.ts|index\.ts)/
export default function() {
  let headerStr = ''
  let componentStr = ''
  glob
    .sync('src/components/*.ts')
    .filter(f => !reg.test(f))
    .forEach(f => {
      let names = f.split('/')
      let name = names[names.length - 1].replace('.ts', '')
      headerStr += `import ${name} from './${name}'\n`
      if (name === 'Amap') {
        componentStr += `\t_Vue.component('el-amap', ${name})\n`
      } else {
        componentStr += `\t_Vue.component('el-amap-${name.toLowerCase()}', ${name})\n`
      }
    })

  let str = `
import { Vue } from 'vue-property-decorator'
import {
  ControlBar,
  ToolBar,
  MapType,
  OverView,
  Scale,
  Control
} from './Controls'
${headerStr}
export default function (_Vue: typeof Vue) {
  _Vue.component('el-amap-controlbar', ControlBar)
  _Vue.component('el-amap-toolbar', ToolBar)
  _Vue.component('el-amap-maptype', MapType)
  _Vue.component('el-amap-overview', OverView)
  _Vue.component('el-amap-scale', Scale)
  _Vue.component('el-amap-control', Control)
${componentStr}
}
  `
  let indexPath = path.join(__dirname, '/src/components/index.ts')
  console.log(indexPath)
  fs.writeFileSync(indexPath, str)
}
