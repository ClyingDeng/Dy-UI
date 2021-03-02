<template>
  <div id="app">
   <dy-container>
  <dy-header>Header</dy-header>
  <dy-main>Main</dy-main>
</dy-container>

<dy-container>
  <dy-header>Header</dy-header>
  <dy-main>Main</dy-main>
  <dy-footer>Footer</dy-footer>
</dy-container>

<dy-container>
  <dy-aside width="200px">Aside</dy-aside>
  <dy-main>Main</dy-main>
</dy-container>

<dy-container>
  <dy-header>Header</dy-header>
  <dy-container>
    <dy-aside width="200px">Aside</dy-aside>
    <dy-main>Main</dy-main>
  </dy-container>
</dy-container>
<dy-container>
  <dy-header>Header</dy-header>
  <dy-container>
    <dy-aside width="200px">Aside</dy-aside>
    <dy-container>
      <dy-main>Main</dy-main>
      <dy-footer>Footer</dy-footer>
    </dy-container>
  </dy-container>
</dy-container>

<dy-container>
  <dy-aside width="200px">Aside</dy-aside>
  <dy-container>
    <dy-header>Header</dy-header>
    <dy-main>Main</dy-main>
  </dy-container>
</dy-container>

<dy-container>
  <dy-aside width="200px">Aside</dy-aside>
  <dy-container>
    <dy-header>Header</dy-header>
    <dy-main>Main</dy-main>
    <dy-footer>Footer</dy-footer>
  </dy-container>
</dy-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  private currentPage1: number = 5;
  // private value: string = '';
  private value1: Date = new Date();
  // private fileList: object[] = [
  //   {
  //     name: 'food2.jpeg',
  //     url:
  //       'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
  //   }
  // ];
  // private customColor1 = '#909399';
  // private customColor2: colorArrary[] = [
  //   { color: '#f56c6c', percentage: 20 },
  //   { color: '#e6a23c', percentage: 40 },
  //   { color: '#5cb87a', percentage: 60 },
  //   { color: '#1989fa', percentage: 80 },
  //   { color: '#6f7ad3', percentage: 100 }
  // ];
  // private count: number = 0;
  // private hasMore: boolean = false;
  // private delay: number = 300;
  // private distance: number = 30;
  // private immediate: boolean = false;
  // private count1: number = 10;
  // private loading: boolean = false;
  // private visible: boolean = false;
  // private currentPage1: number = 5;
  // private columns1: any[] = [
  //   {
  //     type: 'selection',
  //     width: 60,
  //     align: 'center'
  //   },
  //   {
  //     title: 'Name',
  //     key: 'name'
  //   },
  //   {
  //     title: 'Age',
  //     key: 'age',
  //     sortable: true, // iview 默认排序 排序方法 custom（远程排序）
  //     sortType: 'asc'
  //   },
  //   {
  //     title: 'Address',
  //     key: 'address',
  //     sortable: 'custom'
  //   },
  //   {
  //     title: 'operator',
  //     slot: 'action',
  //     key: 'operator'
  //   }
  // ];
  // private data1: any[] = [
  //   {
  //     name: 'John Brown',
  //     age: 18,
  //     address: 'New York No. 1 Lake Park',
  //     date: '2016-10-03'
  //   },
  //   {
  //     name: 'Jim Green',
  //     age: 24,
  //     address: 'London No. 1 Lake Park',
  //     date: '2016-10-01'
  //   },
  //   {
  //     name: 'Joe Black',
  //     age: 22,
  //     address: 'Sydney No. 1 Lake Park',
  //     date: '2016-10-02'
  //   },
  //   {
  //     name: 'Jon Snow',
  //     age: 46,
  //     address: 'Ottawa No. 2 Lake Park',
  //     date: '2016-10-04'
  //   }
  // ];
  // private get noMore() {
  //   return this.count1 >= 20;
  // }
  // private get disabled() {
  //   return this.loading || this.noMore;
  // }
  // private load1() {
  //   this.loading = true;
  //   setTimeout(() => {
  //     this.count += 2;
  //     this.loading = false;
  //   }, 2000);
  // }
  // private mounted() {
  //   // console.log(typeof this.customColor2);
  // }
  // private format(percentage: number) {
  //   return percentage === 100 ? '满' : `${percentage}%`;
  // }
  // private customColorMethod(per: number) {
  //   if (per < 30) {
  //     return '#909399';
  //   } else if (per < 70) {
  //     return '#e6a23c';
  //   } else {
  //     return '#67c23a';
  //   }
  // }
  // private handleExceed(files: any, fileList: any) {
  //   console.log('用户传递上限！');
  // }
  // private handleChange(file: any) {
  //   console.log(file, '当前更新了！');
  // }
  // private beforeUpload(rawFile: any) {
  //   let limitSize = rawFile.size / 1024 > 500;
  //   console.log(rawFile.size, limitSize);
  //   if (limitSize) {
  //     console.log(rawFile.size, '当前文件超过了500k');
  //     return false;
  //   } else if (!rawFile.name.endsWith('.jpg')) {
  //     console.log('文件类型不对！');
  //     return false;
  //   }
  //   return true;
  // }
  // private beforeRemove(file: any, fileList: any) {
  //   console.log('删除之前确认', file.name);
  //   return true;
  // }
  // // tslint:disable
  // private handleSuccess() {}
  // private handleError() {}
  // private handleProgress() {}
  // private handleRemove(file: any, fileList: any) {
  //   console.log(file, fileList);
  // }
  // private load() {
  //   this.count += 2;
  // }
  private change() {
    console.log('index');
  }
  // // 表格
  // private select(selection: any, row: any) {
  //   // selection 表示选中的所有的 row表示当前是哪一行
  //   console.log(selection, row);
  // }
  // private selectAll(selection: any) {
  //   console.log(selection);
  // }
  // private sortChange(col: any, type: string) {
  //   // console.log(col, type);
  // }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
.list {
  height: 300px;
  list-style: none;
  padding: 0;
  margin: 0;
  .list-item {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #fff6f6;
    color: #ff8484;
  }
}
.infinite-list {
  height: 300px;
  // border: 1px solid #f00;
  padding: 0;
  margin: 0;
  list-style: none;
  .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #e8f3fe;
    margin: 10px;
    color: #7dbcfc;
  }
}
.dy-header,
.dy-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.dy-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.dy-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.dy-container {
  line-height: 260px;
}
.small {
  color: #eee;
}
.dy-carousdy-item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-content: center;
}

.dy-carousdy-item:nth-child(2n) {
  background-color: #99a9bf;
}

.dy-carousdy-item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
