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
  @Prop()
  private disabled!: boolean;
  private showPreMore: boolean = false;
  private showNextMore: boolean = false;
  private get pagers() {
    let arr = [];
    let pagerCount = this.pagerCount;
    let total = this.total;
    let currentPage = this.currentPage;
    let showPreMore = this.showPreMore;
    let showNextMore = this.showNextMore;
    let middleValue = Math.floor(pagerCount / 2);
    // 显示。。。
    if (total > pagerCount) {
      // 左边显示。。。
      if (currentPage > middleValue + 1) {
        showPreMore = true;
      }
      // 右边显示。。。
      if (currentPage < total - middleValue) {
        showNextMore = true;
      }
    }
    for (let i = 2; i < this.total; i++) {
        arr.push(i);
    }
    this.showPreMore = showPreMore;
    this.showNextMore = showNextMore;
    return arr;
  }
  private mounted() {
    console.log(this.currentPage);
  }
}
