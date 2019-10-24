import { Vue } from 'vue-property-decorator'
export default class AMapComponent extends Vue {
  private zoom
  private center
  aMap: any
  mapLoading: boolean
  beforeCreate(): void
  mounted(): void
  zoomChange(val: number): void
  centerChange(val: Array<number>): void
  updated(): void
  mapInit(): void
  beforeDestroy(): void
  render(h: Vue.CreateElement): import('vue').VNode
}
