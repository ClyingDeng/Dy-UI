import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'DyContainer'
})
export default class DyContainer extends Vue {
  public static comName = 'DyContainer';
  private isVertical: boolean = true;
  private mounted() {
    this.isVertical = this.$children.some(child =>
      ['DyFooter', 'DyHeader'].includes(child.$options.name as string)
    );
  }
}
