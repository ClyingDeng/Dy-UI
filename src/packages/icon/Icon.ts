import '../../styles/icon.js';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DyIcon extends Vue {
  @Prop({
    required: true,
  })
  private readonly icon!: string;
}
