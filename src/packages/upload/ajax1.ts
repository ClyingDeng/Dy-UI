// 封装ajax
export default function ajax1(options: fileOptions) {
  // console.log(options);
  if (options) {
    // 创建xhr对象
    let xhr = new XMLHttpRequest();
    let action = options.action;
    let fd = new FormData(); // h5 用来上传文件的api

    fd.append(options.filename, options.file);
    // 开启请求 上传文件名和文件
    xhr.onerror = function(err) {
      options.onError(err); // 触发错误回调
    };
    xhr.onload = function() {
      let text = xhr.responseText || xhr.response;
      options.onSuccess(JSON.parse(text));
    };
    xhr.upload.onprogress = function(e) {
      if (e.total > 0) {
        e.percent = (e.loaded / e.total) * 100;
      }
      options.onProgress(e);
    };
    xhr.open('post', action, true);
    xhr.send(fd);
    return xhr;
  }
}
// export default function ajax;
