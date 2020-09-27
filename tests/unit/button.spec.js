import { shallowMount } from '@vue/test-utils'; // vue提供的快速测试的方法
import { expect } from 'chai';

import Button from '@/packages/button/Button.vue';
import Icon from '@/packages/icon/Icon.vue';

describe('button', () => {
    it('测试button能否正常显示', () => {    // 测试当前组件运行在浏览器的情况
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'dy-ui'
            }
        });
        expect(wrapper.text()).to.eq('dy-ui');
    });
    it('测试type按钮显示', () => {
        const wrapper = shallowMount(Button, {
            propsData: {
                type: 'info'
            }
        });
        expect(wrapper.find('.dy-btn-info').exists()).to.eq(true)
    })
    it('测试按钮是否点击正常', () => {
        const wrapper = shallowMount(Button, {
            //    stubs:['dy-ui'], // 不去渲染icon 只是一个加标签
        });
        wrapper.find('button').trigger('click');
        expect(wrapper.emitted('click').length).to.eq(1);
    });
    it('测试disable是否是禁用状态', () => {
        const wrapper = shallowMount(Button, {
            stubs: {
                'dy-icon': Icon// 替换功能
            },
            propsData: {
                disabled: true
            }
        });
        expect(wrapper.find('button').attributes('disabled')).to.eq('disabled');
    });
    it('测试icon传入能否正常显示', () => {
        const wrapper = shallowMount(Button, {
            stubs: {
                'dy-icon': Icon// 替换功能
            },
            propsData: {
                icon: 'play'
            }
        });
        expect(wrapper.find('.dy-icon-play').exists()).to.eq(true);
    });
    it('测试icon位置能否正常调换', () => {
        const wrapper = shallowMount(Button, {
            attachToDocument: true, // 将组件挂载到浏览器上
            stubs: {
                'dy-icon': Icon// 替换功能
            },
            slots: {
                default: 'dy-ui'
            },
            propsData: {
                icon: 'edit',
                iconPosition: 'left'
            }
        });
        let ele = wrapper.vm.$el.querySelector('span');
        expect(getComputedStyle(ele).order).to.eq('2');
        wrapper.setProps({ iconPosition: 'right' });// 设置props 必须要在下一个事件后去取值
        return wrapper.vm.$nextTick().then(() => {
            expect(getComputedStyle(ele).order).to.eq('1');
        })
    });
})