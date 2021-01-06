// 无限滚动
const attributes = {
  delay: {
    default: 200,
  },
  immediate: {
    default: true,
  },
  distance: {
    default: 10,
  },
  disable: {
    default: false,
  },
};
export default {
  comName: 'infiniteScroll',
  inserted() {
    console.log('指令生效');
  },
  unbind() {
    console.log('指令shi效');
  },
};
