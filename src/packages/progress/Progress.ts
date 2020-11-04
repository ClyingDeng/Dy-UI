import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  name: 'DyProgress',
})
export default class DyProgress extends Vue {
  @Prop({ default: 0 })
  private percentage!: number;
  @Prop({ default: 6 }) private strokeWidth!: number;
  // tslint:disable-next-line: ban-types
  @Prop() private color!: string | Function | object[];
  @Prop({validator: (val) => ['success', 'exception', 'warning'].indexOf(val) > -1}) private status!: string;
  get barStyle() {
    let styles: any = {};
    styles.width = this.percentage + '%';
    styles.background = this.getCurrentColor(this.percentage);
    return styles;
  }
  // get strokeColor() {
  //   let ret;
  //   if (this.color) {
  //     ret = this.getCurrentColor(this.percentage);
  //   } else {
  //     switch (this.status) {
  //       case 'success':
  //         ret = '#13ce66';
  //         break;
  //       case 'exception':
  //         ret = '#ff4949';
  //         break;
  //       case 'warning':
  //         ret = '#e6a23c';
  //         break;
  //       default:
  //         ret = '#20a0ff';
  //     }
  //   }
  //   return ret;
  // }
  get iconClass() {
    if (this.status === 'warning') {
      return 'dy-icon-caution';
    }
    return this.status === 'success' ? 'dy-icon-check' : 'dy-icon-close';
  }
  private getCurrentColor(per: number) {
    if (typeof this.color === 'function') {
      return this.color(per);
    } else if (typeof this.color === 'string') {
      return this.color;
    } else {
      return this.getLevelColor(per);
    }
  }
  private getLevelColor(per: number) {
    let colorArr: colorArrary[] = this.getColorArrary().sort(
      (a: colorArrary, b: colorArrary) => a.percentage - b.percentage,
    );
    colorArr.forEach((_: colorArrary) => {
      if (_.percentage > per) {
        return _.color;
      }
    });
    return colorArr[colorArr.length - 1].color;
  }
  private getColorArrary() {
    let color: any = this.color;
    let span = 100 / color.length;
    return color.map((c: colorArrary, i: number) =>
      typeof c === 'string' ? { color: c, progress: (i + 1) * span } : c,
    );
  }
}
