import { Vue } from 'vue-property-decorator'
interface Point {
  lnglat: [number, number]
  name: string
  style: number
}
interface Style {
  anchor: any
  url: string
  size: any
  rotation?: number
}
interface StyleFn<T> {
  (arg: T): T
}
export default class MassMarks extends Vue {
  aMap: any
  massMarks: any
  private data
  private styles
  mounted(): void
  handleSingleStyleObject: StyleFn<Style>
  handleStyle: StyleFn<Style | Array<Style>>
  dataChange(val: Array<Point>): void
  styleChange(val: Style | Array<Style>): void
  beforeDestroy(): void
  render(): null
}
export {}
