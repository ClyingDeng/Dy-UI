import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
@Component
export default class DyTable extends Vue {
  public static comName = 'DyTable';
  @Prop({ default: () => [] })
  private columns!: any[];
  @Prop({ default: () => [] })
  private data!: any[];
  @Prop({ default: '' })
  private height!: string;
  private cloneColumns: any[] = [];
  private cloneData: any[] = [];
  private selectItems: any = [];
  @Watch('selectItems')
  private onChangeValue() {
    // 设置半选状态
    let check: any = this.$refs.checkAll;
    if (this.cloneData.length !== this.selectItems.length) {
      if (this.selectItems.length > 0) {
        return (check[0].indeterminate = true); // 设置半选
      }
    }
    check[0].indeterminate = false;
  }

  get checkAllStatus() {
    return this.cloneData.length === this.selectItems.length;
  }
  private mounted() {
    this.cloneData = this.deepClone(this.data);
    this.cloneColumns = this.deepClone(this.columns);
    this.cloneData = this.cloneData.map(_ => {
      _.id = Math.random();
      return _;
    });
    this.cloneColumns = this.cloneColumns.map(col => {
      col.sortType = col.sortType ? col.sortType : 'normal';
      this.sort(col, col.sortType);
      return col;
    });
    this.$nextTick(() => {
      if (this.height) {
        let wrapper = this.$refs.wrapper; // 生成的新表格放里面
        let tableWrapper = this.$refs.tableWrapper; // 没有表头，上方padding头
        let table: any = this.$refs.table; // 把head拿出来

        (tableWrapper as HTMLElement).classList.add('table-wrapper');
        let copyTable: any = (table as HTMLElement).cloneNode(); // 只拷贝表格
        let thead = (table as HTMLElement).children[0];
        // console.log(table, thead.getBoundingClientRect().height); // 之前高度为0 需要先确认子元素是否浮动,有则清除浮动;确保元素已经渲染$nextTick
        (tableWrapper as HTMLElement).style.paddingTop =
          thead.getBoundingClientRect().height + 'px';
        copyTable.appendChild(thead);
        (copyTable as HTMLElement).style.width =
          (table as HTMLElement).offsetWidth + 'px';
        (copyTable as HTMLElement).classList.add('fix-header');
        let tds: any = table.querySelector('tbody tr').children;
        let ths: any = copyTable.querySelector('thead tr').children;
        tds.forEach((item: any, index: number) => {
          ths[index].style.width = item.getBoundingClientRect().width + 'px';
        });
        (wrapper as HTMLElement).appendChild(copyTable);
      }
    });
  }
  private isAsc(col: any) {
    return col.sortType === 'asc';
  }
  private isDesc(col: any) {
    return col.sortType === 'desc';
  }
  private sort(col: any, type: string) {
    let data = this.deepClone(this.data);
    col.sortType = type;
    if (col.sortable !== 'custom') {
      if (type !== 'normal') {
        let key = col.key;
        this.cloneData = data.sort((a: any, b: any) => {
          if (type === 'asc') {
            return a[key] - b[key];
          } else {
            return b[key] - a[key];
          }
        });
      } else {
        // 如果不需要排序 就把默认的结果 赋予给数据
        this.cloneData = data;
      }
    } else {
      this.$emit('on-sort-change', col, type);
    }
  }
  private selectOne(e: any, row: any) {
    if (e.target.checked) {
      this.selectItems.push(row);
    } else {
      this.selectItems = this.selectItems.filter((r: any) => r.id !== row.id);
    }
    this.$emit('on-select', this.selectItems, row);
  }
  private selectAll(e: any) {
    this.selectItems = [];
    if (e.target.checked) {
      this.selectItems = this.cloneData;
    }
    this.$emit('on-select-all', this.selectItems);
  }
  private isChecked(row: any) {
    return this.selectItems.some((_: any) => _.id === row.id);
  }
  private deepClone(target: any) {
    let newTarget: any = Array.isArray(target) ? [] : {};
    for (const key in target) {
      if (typeof target[key] === 'object' && target[key]) {
        newTarget[key] = this.deepClone(target[key]);
      } else {
        newTarget[key] = target[key];
      }
    }
    return newTarget;
  }
}
