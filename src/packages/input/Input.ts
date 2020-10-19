import { Component, Prop, Vue } from 'vue-property-decorator';

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

  get inputClass() {
      let classes = [];
      if (this.clearable) {
          classes.push(`dy-input-suffix-icon`);
      }
      return classes;
  }
}
