import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import ajax1 from './ajax1';
@Component({
  name: 'DyUpload',
})
export default class DyUpload extends Vue {
  private tempIndex: number = 1;
  private files: fileType[] = []; // 存储要展示的列表
  private reqs: any = {};
  @Prop({ default: 'file' })
  private name!: string;
  @Prop({ required: true, default: '' }) private action!: string;
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
  @Prop({ default: () => ajax1 }) httpRequest!: Function;
  @Watch('fileList', { immediate: true })
  handleFileList(fileList: Array<fileType>) {
    this.files = fileList.map(_ => {
      _.uid = Date.now() + this.tempIndex++;
      _.status = 'success';
      return _;
    });
    // console.log(this.files );
    
  }
  private mounted() {
    // console.log(this.httpRequest, ajax1);
  }
  private handleClick() {
    //点击之前 先清空输入框
    let el: any = this.$refs.input;
    el.value = '';
    el.click();
  }
  private handleStart(rawFile: rawFile) {
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
  private getFile(rawFile: rawFile) {
    return this.files.find(file => file.uid === rawFile.uid);
  }
  private handleProgress(ev: ProgressEvent, rawFile: rawFile) {
    console.log('处理上传中', ev, rawFile);
    // 通过源文件 用户上传的文件 => 格式化文件
    let file = this.getFile(rawFile);
    file!.status = 'uploading';
    file!.percentage = ev.percent || 0;
    this.onProgress(ev, rawFile);
  }
  private handleError(err: ProgressEvent, rawFile: rawFile) {
    console.log('失败', err, rawFile);
    let file = this.getFile(rawFile);
    file!.status = "fail";
    this.onError(err,rawFile);
    this.onChange(file);
    delete this.reqs[file!.uid]; //已失效的ajax 不需要后续在中断请求
  }
  private handleSuccess(res: ProgressEvent, rawFile: rawFile) {
    console.log('成功', res, rawFile);
    let file = this.getFile(rawFile);
    file!.status = 'success';
    this.onSuccess(res, rawFile);
    this.onChange(file);  // 只要状态变了 都要调一遍onChange
  }
  private post(rawFile: rawFile) {
    // 真正的上传逻辑
    // 调用httpRequest方法
    // 需要整合参数 调用ajax 处理上传的整个流程
    const uid = rawFile.uid;
    // ajax序号
    const options: fileOptions = {
      file: rawFile,
      filename: this.name,
      action: this.action,
      onProgress: ev => {
        // 处理上传中的状态
        this.handleProgress(ev, rawFile);
      },
      onSuccess: res => {
        // 处理成功的状态
        this.handleSuccess(res, rawFile);
      },
      onError: err => {
        // 处理失败时的状态
        this.handleError(err, rawFile);
      }
    };
    // req就是当前的请求
    console.log(options);

    let req = this.httpRequest(options);
    this.reqs[uid] = req; // 每个ajax 先存起来，稍后可以取消请求
    // 允许用户使用的时promise的ajax
    if (req && req.then) {
      req.then(options.onSuccess, options.onError);
    }
  }
  private upload(rawFile: rawFile) {
    // 先判断文件是否能够上传
    if (!this.beforeUpload) {
      //直接上传
    }
    // 否则 调用用户的函数获取返回值
    let flag = this.beforeUpload(rawFile);
    if (flag) {
      // 用户返回true 表示需要上传
      // 直接上传
      console.log('上传');

      return this.post(rawFile);
    }
  }
  private uploadFiles(files: Array<rawFile>) {
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
  private handleChange(e: targetEvent) {
    // 获取选中文件
    const files = e.target.files;
    // 多个文件如何上传
    this.uploadFiles(files);
    console.log('handleChange', files);
  }
}
