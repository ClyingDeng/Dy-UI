import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'DyIcon'
})
export default class DyIcon extends Vue {
  public static comName = 'DyIcon';
  @Prop({
    required: true
  })
  private readonly icon!: string;
}
