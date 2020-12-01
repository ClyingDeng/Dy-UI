// 所有组件的入口
import DyButton from './button/button/Button.vue';
import DyIcon from './icon/Icon.vue';
import DyButtonGroup from './button/buttonGroup/ButtonGroup.vue';
import DyCol from './layout/col/Col.vue';
import DyRow from './layout/row/Row.vue';

import DyAside from './container/aside/Aside.vue';
import DyContainer from './container/container/Container.vue';
import DyFooter from './container/footer/Footer.vue';
import DyHeader from './container/header/Header.vue';
import DyMain from './container/main/Main.vue';

import DyInput from './input/Input.vue';
import DyProgress from './progress/Progress.vue';
import DyUpload from './upload/Upload.vue';

let components = [
  DyButton,
  DyIcon,
  DyButtonGroup,
  DyCol,
  DyRow,
  DyAside,
  DyContainer,
  DyFooter,
  DyHeader,
  DyMain,
  DyInput,
  DyProgress,
  DyUpload,
];
const install = (Vue: any) => {
  // components.forEach( (_: any) => {
  console.log('DyButton', DyButton);
  //   Vue.component(_.name, _);
  // });
  Vue.component('DyButton', DyButton);
  // Vue.component(DyButton.name, DyButton);
  Vue.component('DyIcon', DyIcon);
  Vue.component('DyButtonGroup', DyButtonGroup);
  Vue.component('DyCol', DyCol);
  Vue.component('DyRow', DyRow);
  Vue.component('DyAside', DyAside);
  Vue.component('DyContainer', DyContainer);
  Vue.component('DyMain', DyMain);
  Vue.component('DyHeader', DyHeader);
  Vue.component('DyInput', DyInput);
  Vue.component('DyProgress', DyProgress);
  Vue.component('DyUpload', DyUpload);
};
// 有可能组件会通过script标签的方式引入
// <script src="dy-ui"></script>
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue); // 全局直接通过script 引用的方式会默认调用install
}

export default {
  install,
};
