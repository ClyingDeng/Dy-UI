import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'DyInput',
})
export default class DyInput extends Vue {
  @Prop({
    default: 'text',
  })
  private type!: string;
  @Prop({
    default: '',
  })
  private value!: string | number;
  @Prop(String) private placeholder!: string;
  @Prop(String) private name!: string;
  @Prop({
    default: false,
  })
  private disabled!: boolean;
  @Prop({
    default: false,
  })
  private clearable!: boolean;
  @Prop({
    default: false,
  })
  private showPassword!: boolean;
  @Prop({
    default: '',
  })
  private prefixIcon!: string;
  @Prop({
    default: '',
  })
  private suffixIcon!: string;

  private passwordVisible: boolean = false;
  private showIcon: string = 'dy-icon-view-off';
  get inputClass() {
    let classes = [];
    if (this.clearable || this.showPassword || this.suffixIcon) {
      classes.push(`dy-input-suffix-icon`);
    }
    if (this.$slots.suffix) {
      classes.push(`dy-input-suffix-icon`);
    }
    if (this.$slots.prefix) {
      classes.push(`dy-input-prefix-icon`);
    }
    if (this.prefixIcon) {
      classes.push(`dy-input-prefix-icon`);
    }
    return classes;
  }
  private changeStatus() {
    this.passwordVisible = !this.passwordVisible;
    console.log(this.passwordVisible);
    this.$nextTick(() => {
      (this.$refs.input as HTMLElement).focus();
      this.showIcon = this.passwordVisible
        ? 'dy-icon-view'
        : 'dy-icon-view-off';
    });
  }
  // private getSuffixVisible() {
  //   console.log(this.$slots.suffix);
  //   return this.$slots.suffix ? true : false;
  // }
}
