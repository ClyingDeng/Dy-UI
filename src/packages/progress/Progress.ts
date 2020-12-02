import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  name: 'DyProgress',
})
export default class DyProgress extends Vue {
  public static comName = 'DyProgress';
  @Prop({ default: 0 })
  // tslint:disable-next-line: ban-types
  private percentage!: number;
  @Prop({ default: 6 }) private strokeWidth!: number;
  // tslint:disable-next-line: ban-types
  @Prop({default: ''}) private color!: string | Function | colorArrary[];
  @Prop({validator: (val) => ['success', 'exception', 'warning'].indexOf(val) > -1}) private status!: string;
  // tslint:disable-next-line: ban-types
  @Prop() private format!: number | Function;
  get content() {
    if (typeof this.format === 'function') {
      return this.format(this.percentage) || '';
    } else {
      return `${this.percentage}%`;
    }
  }
  get barStyle() {
    let styles: any = {};
    styles.width = this.percentage + '%';
    styles.background = this.getCurrentColor(this.percentage);
    return styles;
  }
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
    let span = 100 / this.color.length;
    return color.map((c: colorArrary, i: number) =>
      typeof c === 'string' ? { color: c, progress: (i + 1) * span } : c,
    );
  }
}
