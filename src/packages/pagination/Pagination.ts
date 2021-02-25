import { Component, Prop, Vue } from 'vue-property-decorator';
// @Component必须要有，是组件初始化渲染 不加则组件传入的参数无法渲染
@Component({
  name: 'DyPagination'
})
export default class DyPagination extends Vue {
  public static comName = 'DyPagination';
  @Prop({ default: 1 }) private total!: number;
  @Prop({ default: 1 })
  private currentPage!: number;
  @Prop({ default: 1 })
  private pageCount!: number;
  @Prop({ default: 7 }) // 按钮数
  private pagerCount!: number;
  @Prop(Boolean)
  private disabled!: boolean;
  @Prop(Boolean) // 父组件调用可以直接使用 background
  private background!: boolean;
  private showPrevMore: boolean = false;
  private showNextMore: boolean = false;
  private get pagers() {
    let arr = [];
    let pagerCount = this.pagerCount; // 显示几个分页按钮
    let total = this.total;
    let currentPage = this.currentPage;
    let showPrevMore = false;
    let showNextMore = false;
    let middleValue = Math.floor(pagerCount / 2);
    // 显示。。。
    if (total > pagerCount) {
      // 左边显示。。。
      if (currentPage > middleValue + 1) {
        showPrevMore = true;
      }
      // 右边显示。。。
      if (currentPage < total - middleValue) {
        showNextMore = true;
      }
    }
    // 分页数从几开始显示
    if (showPrevMore && !showNextMore) {
      // 左边有。。。   1 ... 5 6 7 8 9 10
      let start = total - (pagerCount - 2);
      for (let i = start; i < total; i++) {
        arr.push(i);
      }
    } else if (!showPrevMore && showNextMore) {
      // 右边有。。。   1 2 3 4 5 6 ... 10
      for (let i = 2; i < pagerCount; i++) {
        arr.push(i);
      }
    } else if (showPrevMore && showNextMore) {
      // 左右都有 1 ... 3 4 5 6 7 8 ... 10
      let val = Math.floor((pagerCount - 2) / 2); // (中间显示几个) / 2 ==> 左右各几个
      for (let i = currentPage - val; i <= currentPage + val; i++) {
        arr.push(i);
      }
    } else {
      for (let i = 2; i < total; i++) {
        arr.push(i);
      }
    }

    this.showPrevMore = showPrevMore;
    this.showNextMore = showNextMore;
    return arr;
  }
  private select(currentPage: number) {
    if (!this.disabled) {
      if (currentPage < 1) {
        currentPage = 1;
      }
      if (currentPage > this.total) {
        currentPage = this.total;
      }
      if (currentPage !== this.currentPage) {
        this.$emit('update:current-page', currentPage);
      }
    }
  }
  private mounted() {
    console.log(this.disabled, this.background);
  }
}
