import Vue from 'vue'
import AMapLoader, { Config } from './lib/loadMap'
declare const install: (_Vue: import('vue').VueConstructor<Vue>, options: Config) => void
export default install
export { AMapLoader }
