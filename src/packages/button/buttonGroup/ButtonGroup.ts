import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'DyButtonGroup'
})
export default class DyButtonGroup extends Vue {
  public static comName = 'DyButtonGroup';
  private mounted() {
    // 校验内部子节点是否是button组件，如果不是报错
    let children = this.$el.children;
    // console.log(children);
    for (let i = 0; i < children.length; i++) {
      console.assert(children[i].tagName === 'BUTTON', '子元素必须为button');
    }
  }
}
