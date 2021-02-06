import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'DyCarouselItem'
})
export default class DyButton extends Vue {
  public static comName = 'DyCarouselItem';
  private index!: number;
  private reverse: boolean = false;
  private created() {
    let children = this.$parent.$children.filter(child => child.$options.name === 'DyCarouselItem');
    this.index = children.length - 1;
  }
  private get isShow() {
    // console.log(this.$parent.currentSelected, this.index);
    return this.$parent.currentSelected === this.index;
  }
}
