// 所有组件的入口
import DyButton from './button/Button.vue';
import DyIcon from './icon/Icon.vue';
import DyButtonGroup from './buttonGroup/ButtonGroup.vue';
// tslint:disable-next-line: no-shadowed-variable
const install = (Vue: any) => {
  Vue.component(DyButton.name, DyButton);
  Vue.component(DyIcon.name, DyIcon);
  Vue.component(DyButtonGroup.name, DyButtonGroup);
};
// 有可能组件会通过script标签的方式引入
// <script src="dy-ui"></script>
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue); // 全局直接通过script 引用的方式会默认调用install
}

export default {
  install,
};
