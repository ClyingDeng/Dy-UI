import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
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
  // 监听时间变化
  @Watch('value')
  private onChangeValue(val: Date) {
    let [year, month, day] = this.getYearMonthDay(val);
    this.time = {
      year,
      month,
      day,
    };
    this.tempTime = { ...this.time }; // 拷贝用于后续更改
  }

  // 计算属性
  get formateDate() {
    if (this.value) {
      let { year, month, day } = this.time;
      return `${year}-${(month + 1 + '').padStart(2, '0')}-${(day + '').padStart(
        2,
        '0',
      )}`;
    }
  }
  // <!-- 直接将自己向前移动多少天后 开始循环42天 -->
  get visibleData() {
    let firstDay: any = new Date(
      parseInt(this.tempTime.year, 0),
      parseInt(this.tempTime.month, 0),
      1,
    ); // 当月一号
    let weekDay = firstDay.getDay(); // 周日 0  周六 6
    weekDay = weekDay === 0 ? 7 : weekDay;
    // 毫秒戳 运算
    let start = firstDay - weekDay * 60 * 60 * 24 * 1000; // 开始部分
    let arr = [];
    for (let i = 0; i < 42; i++) {
      // 转回成时间
      arr.push(new Date(start + i * 60 * 60 * 24 * 1000));
    }
    return arr;
  }
  get startYear() {
    // tslint:disable-next-line
    return parseInt(this.tempTime.year) - parseInt(this.tempTime.year) % 10;
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
  private handleChange(e: any) {
    // 失去焦点时更新用户输入
    let newValue = e.target.value;
    let regExp = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
    if (newValue.match(regExp)) {
       // tslint:disable-next-line
      this.$emit('input', new Date(parseInt(RegExp.$1), parseInt(RegExp.$2), parseInt(RegExp.$3)))
    } else {
      e.target.value = this.formateDate; // 将原来的值附回去
    }
    this.handleBlur();
  }
  private handleBlur() {
    this.isVisible = false;
    this.mode = 'dates';
    console.log('handleBlur');
  }
  private handleFocus() {
    this.isVisible = true;
    console.log('handleFocus');
  }
  private getCurrentDate(i: number , j: number) {
    return this.visibleData[(i - 1) * 7 + (j - 1)];
  }
  private isYear(date: string) {
    let [year] = this.getYearMonthDay(new Date());
    console.log(year, date);
    return year === date;
  }
  // 从月 跳到date面板
  private monthToDate(m: string) {
    this.tempTime.month = m;
    console.log(this.tempTime);
    this.mode = 'dates';
  }
  private isCurrentMonth(date: Date) {
    let {year, month} = this.tempTime;
    let [y, m] = this.getYearMonthDay(date);
    return year === y && month === m;
  }
  private isToday(date: Date) {
    let [y, m, d] = this.getYearMonthDay(date);
    let [year, month, day] = this.getYearMonthDay(new Date());
    return year === y && month === m && day === d;
  }
  private isSelect(date: Date) {
    let {year, month, day} = this.time;
    let[y, m, d] = this.getYearMonthDay(date);
    return year === y && month === m && day === d;
  }
  private selectDate(date: Date) {
    // 选择日期
    this.$emit('input', date); // 更改日期
    this.handleBlur(); // 隐藏面板
  }
  private changeYear(num: number) {
    // 不能直接加减
    const oldDate = new Date(parseInt(this.tempTime.year, 0), parseInt(this.tempTime.month, 0));
    const newDate = oldDate.setFullYear(oldDate.getFullYear() + num);
    let [year] = this.getYearMonthDay(new Date(newDate));
    this.tempTime.year = year;
  }
  private changeMonth(num: number) {
    const oldDate = new Date(parseInt(this.tempTime.year, 0), parseInt(this.tempTime.month, 0));
    const newDate = oldDate.setMonth(oldDate.getMonth() + num);
    let [year, month] = this.getYearMonthDay(new Date(newDate));
    this.tempTime.year = year;
    this.tempTime.month = month;
  }

  private getYearMonthDay(date: any) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return [year, month, day];
  }
}
