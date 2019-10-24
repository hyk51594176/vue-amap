import { Vue } from 'vue-property-decorator'
declare class Info extends Vue {
  nodeEl: Array<Vue.VNode> | undefined
  upTime: number
  getEl(nodeEl: Array<Vue.VNode> | undefined): Promise<Element>
  render(h: Vue.CreateElement): import('vue').VNode
}
export default class InfoWindow extends Vue {
  aMap: any
  infoWindow: any
  private position
  private content
  private anchor
  private isOpen
  private offset
  private size
  private isCustom
  infoVue: Info
  created(): void
  setContent(val: string): void
  setPosition(val: [number, number]): void
  setAnchor(val: string): void
  setisOpen(): void
  setSize(val: [number, number]): void
  closeHandler(): void
  openHandler(): void
  toggle(): void
  beforeDestroy(): void
  setCustomContent(): void
  updated(): void
  render(): null
}
export {}
