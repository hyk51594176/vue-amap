import { Vue } from 'vue-property-decorator'
interface Label {
  content: string
  direction?: string
  offset?: any
}
export default class AmapMark extends Vue {
  aMap: any
  aMapMarker: any
  private position
  private anchor
  private offset
  private animation
  private clickable
  private angle
  private label
  private zIndex
  private draggable
  private cursor
  private content
  private title
  private icon
  private shadow
  private shape
  private extData
  mounted(): void
  setAnchor(anchor: string): void
  setAnimation(animation: string): void
  setClickable(clickable: boolean): void
  setLabel(label: Label): void
  setAngle(angle: number): void
  setzIndex(zIndex: number): void
  setDraggable(draggable: boolean): void
  setCursor(cursor: string): void
  setContent(content: string | HTMLElement): void
  setTitle(title: string): void
  setExtData(extData: any): void
  setPosition(position: [number, number]): void
  setOffset(offset: [number, number]): void
  beforeDestroy(): void
  render(): null
}
export {}
