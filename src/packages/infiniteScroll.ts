import throttle from 'lodash/throttle';
// 无限滚动
const attributes = {
  delay: {
    default: 200
  },
  immediate: {
    default: true
  },
  distance: {
    default: 10
  },
  disabled: {
    default: false
  }
};
const getScrollOptions = (el: Element, vm: any) => {
  return Object.entries(attributes).reduce((map: any, [key, option]) => {
    let defaultValue = option.default;
    let value: any = el.getAttribute(`infinite-scroll-${key}`);
    value = vm[value] ? vm[value] : defaultValue;
    map[key] = value;
    return map;
  }, {});
};
const getScrollContainer = (el: any) => {
  // 递归向上查找 带有overflow 的元素
  let parent = el;
  while (parent) {
    if (document.documentElement === parent) {
      return window; // 表示未找到
    }
    // 获取当前元素上是否有overflow属性
    // getPropertyValue方法可以获取CSS样式申明对象上的属性值（直接属性名称）
    const overflow = getComputedStyle(parent).getPropertyValue('overflow-y');
    if (overflow.match(/scroll|auto/)) {
      return parent;
    }
    parent = parent.parentNode;
  }
};
const handleScroll = function(this: any, cb: any) {
  let { container, el, vm, obsever } = this[scope];
  // 用户是否已经没有新数据
  let { disabled, distance }: any = getScrollOptions(el, vm);
  // tslint:disable-next-line
  if (disabled) return; // 无更多数据
  let scrollBottom = container.scrollTop + container.clientHeight; // 当前底部高度
  if (container.scrollHeight - scrollBottom <= distance) {
    cb();
  } else {
    if (obsever) {
      // 解除
      obsever.disconnect();
      this[scope].observer = null;
    }
  }
};
const scope = 'infinite-scroll';
export default {
  comName: 'infinite-scroll',
  inserted() {
    // inserted(el: any, bindings: any, vnode: any) {
    const [el, bindings, vnode, ...others] = arguments;
    const cb = bindings.value;
    const vm = vnode.context;
    // 1. 我们先获取滚动的是哪个元素，如果没有元素则直接结束
    const container = getScrollContainer(el);
    if (container !== window) {
      // 2. 获取用户和默认的属性
      let { delay, immediate }: any = getScrollOptions(el, vm);
      // console.log('绑定事件', delay);
      // 3. 增加滚动事件
      let onScroll = throttle(handleScroll.bind(el, cb), delay);
      el[scope] = {
        // 需要别的
        onScroll,
        container,
        el,
        vm
      };
      // 绑定scroll事件
      if (immediate) {
        const observe = (el[scope].obsever = new MutationObserver(onScroll));
        observe.observe(container, {
          childList: true, // 监控孩子列表的变化
          subtree: true // 当子dom发生变化也触发
        });
        onScroll(); // 默认加载
      }
      container.addEventListener('scroll', onScroll);
    }
    console.log('指令生效');
  },
  unbind(el: any) {
    const { onScroll, container } = el[scope];
    if (container) {
      container.removeEventListener('scroll', onScroll);
      el[scope] = null;
    }
  }
};
