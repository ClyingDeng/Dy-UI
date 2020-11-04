// import Vue from 'vue'

// /** ElementUI component common definition */
// export declare class ElementUIComponent extends Vue {
//   /** Install component into Vue */
//   static install (vue: typeof Vue): void
// }

// /** Component size definition for button, input, etc */
// export type ElementUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

// /** Horizontal alignment */
// export type ElementUIHorizontalAlignment = 'left' | 'center' | 'right'
interface ProgressEvent<T extends EventTarget = EventTarget> extends Event {
  percent: number;
  readonly lengthComputable: boolean;
  readonly loaded: number;
  readonly target: T | null;
  readonly total: number;
}
interface fileType {
  status?: string; // 默认准备上传
  name?: string; // 文件名子
  size?: number; // 上传图片的大小
  percentage?: number; // 上传的进度
  uid: number;
  raw?: rawFile;
  url?: string;
}
interface fileOptions {
  action: string;
  file: File;
  filename: string;
  onProgress: (ev: ProgressEvent<EventTarget>) => any | null;
  onSuccess: (res: ProgressEvent<EventTarget>) => any | null;
  onError: (err: ProgressEvent<EventTarget>) => any | null;
}
interface rawFile extends File {
    uid: number
}
interface targetEvent extends HTMLInputElement{
  [x: string]: any;
}
interface colorArrary {
  color: string;
  percentage: number;
}