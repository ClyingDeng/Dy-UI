import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
const on = (element: any, event: string, handler: any) => {
  element.addEventListener(event, handler, false);
};
const off = (element: any, event: string, handler: any) => {
  element.removeEventListener(event, handler, false);
};
@Component({
  name: 'DyPopover'
})
export default class DyButton extends Vue {
  public static comName = 'DyPopover';
  @Prop({ default: 'click' })
  private trigger!: string;
  @Prop({
    validator(type) {
      if (!['top', 'bottom', 'left', 'right'].includes(type)) {
        throw new Error(
          '属性必须是' + ['top', 'bottom', 'left', 'right'].join('、')
        );
      }
      return true;
    }
  })
  private placement!: string;
  @Prop()
  private title!: string;
  @Prop()
  private content!: string;
  @Prop({
    default: '200',
    validator(type) {
      return parseInt(type, 0) >= 150;
    }
  })
  private width!: string;
  @Prop({ default: false })
  private disabled!: boolean;
  private visible: boolean = false;
  @Watch('value', { immediate: true })
  private changeValue(value: boolean) {
    this.visible = value;
    if (value) {
      // 显示
      this.$nextTick(() => {
        let content: any = this.$refs.content;
        document.body.appendChild(content);
        if (this.trigger === 'hover') {
          on(this.$el, 'mouseenter', this.handleMouseEnter);
          on(this.$el, 'mouseleave', this.handleMouseLeave);
        }
      });
    }
  }
  private mounted() {
    let reference = this.$slots.reference;
    if (reference) {
      this.reference = reference[0].elm;
    }
    if (this.trigger === 'hover') {
      console.log(this.trigger, this.$el);
      on(this.$el, 'mouseenter', this.handleMouseEnter);
      on(this.$el, 'mouseleave', this.handleMouseLeave);
    } else if (this.trigger === 'click') {
      on(this.reference, 'click', this.toggle);
      on(document, 'click', this.handleDocumentClick);
    }
  }
  private toggle() {
    this.visible = !this.visible;
  }
  private handleDocumentClick(e: any) {
    if (this.$el.contains(e.target)) {
      return false;
    }
    this.visible = false;
  }
  private handleMouseEnter() {
    clearTimeout(this.timer);
    this.visible = true;
  }
  private handleMouseLeave() {
    this.timer = setTimeout(() => {
      this.visible = false;
    }, 200);
  }
  private beforeDestroy() {
    off(this.$el, 'mouseenter', this.handleMouseEnter);
    off(this.$el, 'mouseleave', this.handleMouseLeave);
    off(this.reference, 'click', this.toggle);
    off(document, 'click', this.handleDocumentClick);
  }
}
