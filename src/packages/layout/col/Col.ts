import { Component, Prop, Vue } from 'vue-property-decorator';
declare module 'vue/types/vue' {
    interface Vue {
        [key: string]: any;
    }
}
@Component({
  name: 'DyCol',
})
export default class DyCol extends Vue {
  @Prop({ default: 24}) private readonly span!: number;
  @Prop({ default: 0}) private readonly offset!: number;
  @Prop([Number, Object])
  private xs!: number | object;
  @Prop([Number, Object])
  private sm!: number | object;
  @Prop([Number, Object])
  private md!: number | object;
  @Prop([Number, Object])
  private lg!: number | object;
  @Prop([Number, Object])
  private xl!: number | object;
  private gutter = 0;
  get colClass() {
    let classes: string[] = [];
    classes.push(`dy-col-${this.span}`);
    if (this.offset) {
      classes.push(`dy-col-offset-${this.offset}`);
    }
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach((type: string) => {
      // console.log(this, type);
      if (typeof this[type] === 'object') {
        let { span, offset } = this[type];
        // tslint:disable-next-line: no-unused-expression
        span && classes.push(`dy-col-${type}-${span}`);
        // tslint:disable-next-line: no-unused-expression
        offset && classes.push(`dy-col-${type}-${offset}`);
      } else {
          // tslint:disable-next-line: no-unused-expression
          this[type] && classes.push(`dy-col-${type}-${this[type]}`);
      }
    });
    return classes;
  }
  get colStyle() {
      let style = {};
      if (this.gutter) {
          style = {
              ...style,
              paddingLeft: this.gutter / 2 + 'px',
              paddingRight: this.gutter / 2 + 'px',
          };
      }
      return style;
  }
}
