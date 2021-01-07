import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
@Component({
  name: 'DyButton'
})
export default class DyButton extends Vue {
  public static comName = 'DyButton';
  @Prop({
    default: '',
    validator(type) {
      if (
        type &&
        !['warning', 'success', 'danger', 'info', 'primary'].includes(type)
      ) {
        console.error(
          'type类型必须为：' +
            ['warning', 'success', 'danger', 'info', 'primary'].join('、')
        );
      }
      return true;
    }
  })
  private readonly type!: string;
  @Prop(String)
  private readonly icon!: string;
  @Prop({
    default: 'left',
    validator(type) {
      if (!['left', 'right'].includes(type)) {
        console.log('iconPosition属性必须为：' + 'left | right');
      }
      return true;
    }
  })
  private readonly iconPosition!: string;
  @Prop(Boolean)
  private disabled!: boolean; // 禁用
  @Prop(Boolean)
  private plain!: boolean; // 朴素
  // 禁用
  get btnClass() {
    let classes = [];
    if (this.type) {
      classes.push(`dy-btn-${this.type}`);
    }
    if (this.iconPosition) {
      classes.push(`dy-btn-${this.iconPosition}`);
    }
    return classes;
  }
  // tslint:disable-next-line: no-empty
  @Emit('click') private emitClickEvent(event: MouseEvent) {}
  private onClickBtn(event: MouseEvent) {
    // tslint:disable-next-line: no-unused-expression
    this.disabled ? '' : this.emitClickEvent(event);
  }
}
