import { Component, Prop, Vue } from 'vue-property-decorator';
import clickOutSide from 'v-click-outside';
@Component({
  name: 'DyDatePicker',
  directives:{
    clickOutSide: clickOutSide.directive
  }
})
export default class DyButton extends Vue {
  public static comName = 'DyDatePicker';
  @Prop({default: () => new Date()})
  private value!: string | Date;

}
