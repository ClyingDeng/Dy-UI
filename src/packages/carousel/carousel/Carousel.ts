import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  name: 'DyCarousel'
})
export default class DyButton extends Vue {
  public static comName = 'DyCarousel';
  @Prop({ default: '200px' })
  private height!: string;
  @Prop({ default: true })
  private autoplay!: boolean;
  @Prop({ default: 3000 })
  private delay!: number;
  @Prop({ default: 0 })
  private initialIndex!: number;
  @Prop({ default: true })
  private loop!: boolean;
  private currentSelected: number = this.initialIndex;
  private len: number = 0;
  private reverse: boolean = false;
  private mounted() {
    this.len = this.$children.filter(
      child => child.$options.name === 'DyCarouselItem'
    ).length;
    // 让currentSelected不停增加
    this.run();
  }
  private run() {
    if (this.autoplay) {
      // 是否是自动播放
      this.timer = setInterval(() => {
        let index = this.currentSelected;
        let newIndex = index + 1;
        // 临界问题
        if (newIndex === this.len) {
          newIndex = 0;
        }
        if (newIndex === -1) {
          newIndex = this.len - 1;
        }
        // 0 => 1 正 1=>0 反
        this.reverse = index > newIndex ? true : false;
        // 无缝滚动  0 => 2 反   2=> 0 正
        if (this.loop) {
          if (index === 0 && newIndex === this.len - 1) {
            this.reverse = true;
          }
          if (index === this.len - 1 && newIndex === 0) {
            this.reverse = false;
          }
        }
        // 控制子组件
        this.$children.forEach((vm: any) => {
          // 用于更改子组件的数据
          vm.reverse = this.reverse;
        });
        this.$nextTick(() => {
          this.currentSelected = newIndex;
        });
      }, this.delay);
    }
  }
  private beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
}
