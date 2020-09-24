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
  readonly type!: string;

  get btnClass() {
    let classes = [];
    if (this.type) {
      classes.push(`dy-btn-${this.type}`);
    }
    return classes;
  }
}
