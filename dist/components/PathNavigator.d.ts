import { Vue } from 'vue-property-decorator'
export default class PathNavigator extends Vue {
  pathNavigator: any
  private speed
  private range
  private getOptions
  private index
  created(): void
  createPathNavigator({ count, pathSimplifier, PathSimplifier }: any): void
  setSpeed(val: number): void
  setRange(val: Array<number>): void
  close(): void
  beforeDestroy(): void
  render(): null
}
