import { Component, Mixins, Prop } from 'vue-property-decorator'
import { ControlMixin } from '../mixins'

@Component
export class ControlBar extends Mixins(ControlMixin) {
  controlName = 'ControlBar'
}

@Component
export class MapType extends Mixins(ControlMixin) {
  controlName = 'MapType'
}
@Component
export class OverView extends Mixins(ControlMixin) {
  controlName = 'OverView'
}

@Component
export class Scale extends Mixins(ControlMixin) {
  controlName = 'Scale'
}

@Component
export class ToolBar extends Mixins(ControlMixin) {
  controlName = 'ToolBar'
}

@Component
export class Control extends Mixins(ControlMixin) {
  @Prop({ type: String, required: true })
  controlName!: string
}
