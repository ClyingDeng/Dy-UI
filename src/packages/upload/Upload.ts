import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
// tslint:disable-next-line: class-name
interface fileType {
  status: string; // 默认准备上传
  name?: string; // 文件名子
  size?: number; // 上传图片的大小
  percentage?: number; // 上传的进度
  uid: number;
  raw?: any;
  url?: string;
}
@Component({
  name: 'DyUpload',
})
export default class DyUpload extends Vue {
  private tempIndex: number = 1;
  private files: fileType[] = []; // 存储要展示的列表
  @Prop({ default: 'file' })
  private name!: string;
  @Prop({ required: true }) private action!: string;
  @Prop({ default: 'image/jpeg' }) private accept!: string;
  @Prop() private limit!: number;
  @Prop() private multiple!: boolean;
  // tslint:disable
  @Prop() private onExceed!: Function;
  @Prop() private onChange!: Function;
  @Prop() private onSuccess!: Function;
  @Prop() private onError!: Function;
  @Prop() private onProgress!: Function;
  @Prop() private beforeUpload!: Function;
  @Prop({ default: () => [] }) private fileList!: object[];
  @Watch('fileList', { immediate: true })
  handleFileList(fileList: fileType[]) {
    this.files = fileList.map(_ => {
      _.uid = Date.now() + this.tempIndex++;
      _.status = 'success';
      return _;
    });
  }
  private handleClick() {
    console.log('1');
    //点击之前 先清空输入框
    let el: any = this.$refs.input;
    el.value = '';
    el.click();
  }
  private handleStart(rawFile: any) {
    // 给文件生成一个唯一的id
    rawFile.uid = Math.random() + this.tempIndex++;
    let file: fileType = {
      // 构建了一条文件信息
      status: 'ready', // 默认准备上传
      name: rawFile.name, // 文件名子
      size: rawFile.size, // 上传图片的大小
      percentage: 0, // 上传的进度
      uid: rawFile.uid,
      raw: rawFile
    };
    file.url = URL.createObjectURL(rawFile); // 通过源文件创建一个路径
    this.files.push(file); // 将当前用户上传的文件push到列表中，过一会显示
    this.onChange && this.onChange(file);
  }
  private post(rawFile: any) {}
  private upload(rawFile: any) {
    // 先判断文件是否能够上传
    if (!this.beforeUpload) {
      //直接上传
    }
    // 否则
    let flag = this.beforeUpload(rawFile);
    if (flag) {
      // 用户返回true 表示需要上传
      // 直接上传
      // return this.post(rawFile);
    }
  }
  private uploadFiles(files: any) {
    //限制上传是否达到最大条件
    if (this.limit && this.fileList.length + files.length > this.limit) {
      return this.onExceed && this.onExceed(files, this.fileList);
    }
    [...files].forEach(_ => {
      // 用户的文件 需要做一些处理 可能用户频繁上传同一个文件
      // 将文件格式化成我想要的结果
      this.handleStart(_); // 处理上传之前
      this.upload(_); // 真正的上传
    });
  }
  private handleChange(e: any) {
    // 获取选中文件
    const files = e.target.files;
    // 多个文件如何上传
    this.uploadFiles(files);
    console.log('handleChange');
  }
}
