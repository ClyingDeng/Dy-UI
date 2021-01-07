import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'DyHeader'
})
export default class DyHeader extends Vue {
  public static comName = 'DyHeader';
  @Prop({
    default: '60px'
  })
  private height!: string;
}
