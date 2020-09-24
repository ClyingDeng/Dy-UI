import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class DyButton extends Vue {
  @Prop({
    default: '',
    validator(type) {
      if (
        type &&
        !['warning', 'success', 'danger', 'info', 'primary'].includes(type)
      ) {
        console.error(
          'type类型必须为：' +
            ['warning', 'success', 'danger', 'info', 'primary'].join('、'),
        );
      }
      return true;
    },
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
    },
  })
  private readonly iconPosition!: string;
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
}
