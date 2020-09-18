// 所有组件的入口

import Button from './button/Button.vue';
import Icon from './icon/Icon.vue';

const install = (Vue: any) => {
    Vue.component(Button.name, Button);
    Vue.component(Icon.name, Icon);
};
// 有可能组件会通过script标签的方式引入
// <script src="dy-ui"></script>
if (typeof (window as any).Vue !== 'undefined') {
  install((window as any).Vue); // 全局直接通过script 引用的方式会默认调用install
}

export default {
  install,
};
