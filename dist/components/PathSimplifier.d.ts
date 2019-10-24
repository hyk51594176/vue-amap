import { Vue } from 'vue-property-decorator'
interface Data {
  name: string
  path: Array<Array<number>>
}
export default class PathSimplifier extends Vue {
  aMap: any
  pathSimplifier: any
  private data
  PathSimplifier: any
  mounted(): void
  dataChange(val: Data): void
  updated(): void
  beforeDestroy(): void
  childrenInit(eventName?: string): void
  render(h: Vue.CreateElement): import('vue').VNode
}
export {}
