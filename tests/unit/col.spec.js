import { shallowMount } from '@vue/test-utils';
import Col from '@/packages/layout/col/Col.vue';
import { expect } from 'chai';

describe('Col.vue',() => {
    it('1. 测试初始化是否成功', () => {
        const wrapper = shallowMount(Col, {
            slots: {
                default: 'dy-ui'
            }
        });
        expect(wrapper.text()).to.eq('dy-ui');
    });
    it('2. 测试自适应', () => {
        const wrapper = shallowMount(Col, {
            propsData:{
                xs: 10,
                sm: 7,
                md: 6,
                lg: 5,
                xl: 2
            }
        });
        expect(wrapper.find('.dy-col-xs-10').exists()).to.eq(true);
        expect(wrapper.find('.dy-col-sm-7').exists()).to.eq(true);
        expect(wrapper.find('.dy-col-md-6').exists()).to.eq(true);
        expect(wrapper.find('.dy-col-lg-5').exists()).to.eq(true);
        expect(wrapper.find('.dy-col-xl-2').exists()).to.eq(true);
    });
    it('3. 测试offset', async () => {
        const wrapper = shallowMount(Col, {
            propsData: {
                offset: 3
            }
        });
        expect(wrapper.find('.dy-col-offset-3').exists()).to.eq(true);
        wrapper.setProps({ offset: 10});
        await wrapper.vm.$nextTick();
        expect(wrapper.find('.dy-col-offset-10').exists()).to.eq(true);
    });
    it('4. 测试span', async () => {
        const wrapper = shallowMount(Col, {
            propsData: {
                span: 3
            }
        });
        expect(wrapper.find('.dy-col-3').exists()).to.eq(true);
        wrapper.setProps({ span: 4});
        await wrapper.vm.$nextTick();
        expect(wrapper.find('.dy-col-4').exists()).to.eq(true);
    });
});