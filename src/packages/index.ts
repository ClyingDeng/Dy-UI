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
// tslint:disable-next-line: no-shadowed-variable
const install = (Vue: any) => {
  Vue.component(DyButton.name, DyButton);
  Vue.component(DyIcon.name, DyIcon);
  Vue.component(DyButtonGroup.name, DyButtonGroup);
  Vue.component(DyCol.name, DyCol);
  Vue.component(DyRow.name, DyRow);

  Vue.component(DyAside.name, DyAside);
  Vue.component(DyContainer.name, DyContainer);
  Vue.component(DyFooter.name, DyFooter);
  Vue.component(DyHeader.name, DyHeader);
  Vue.component(DyMain.name, DyMain);
};
// 有可能组件会通过script标签的方式引入
// <script src="dy-ui"></script>
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue); // 全局直接通过script 引用的方式会默认调用install
}

export default {
  install,
};
