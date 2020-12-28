import { Component, Prop, Vue } from 'vue-property-decorator';
// 判断点击是否时自己内部的元素
import clickOutSide from 'v-click-outside';
@Component({
  name: 'DyDatePicker',
  directives: {
    clickOutSide: clickOutSide.directive,
  },
})
export default class DyButton extends Vue {
  public static comName = 'DyDatePicker';
  @Prop({ default: () => new Date() })
  private value!: string | Date;
  private isVisible: boolean = false;
  private mode: string = 'dates'; // dates years months
  private time: Time = {
    year: '',
    month: '',
    day: '',
  };
  private tempTime: Time = {
    year: '',
    month: '',
    day: '',
  };
  private weeks: string[] = ['日', '一', '二', '三', '四', '五', '六'];
  private months: string[] = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ];
  // 计算属性
  get formateDate() {
    if (this.value) {
      let { year, month, day } = this.time;
      return `${year}-${month + 1}-${day}`;
    }
  }
  private mounted() {
    let [year, month, day] = this.getYearMonthDay(this.value || new Date());
    this.time = {
      year,
      month,
      day,
    };
    this.tempTime = {
      year,
      month,
      day,
    };
    console.log(this.mode);
  }
  private handleBlur() {
    this.isVisible = false;
    console.log('handleBlur');
  }
  private handleFocus() {
    this.isVisible = true;
    console.log('handleFocus');
  }

  private getYearMonthDay(date: any) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return [year, month, day];
  }
}
