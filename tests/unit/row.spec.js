import { shallowMount } from '@vue/test-utils';
import Row from '@/packages/layout/row/Row.vue';
import Col from '@/packages/layout/col/Col.vue';
import { expect } from 'chai';

describe('Row.vue',() => {
    it('1. 测试gutter是否ok', async () => {
        let wrapper = shallowMount(Row, {
            attachToDocument:true,
            stubs:{
               'dy-col': Col
            },
            slots:{
                default:'<dy-col></dy-col>'
            },
            propsData:{
                gutter:20
            }
        });
        expect(getComputedStyle(wrapper.vm.$el).marginLeft).to.eq('-10px');
        expect(getComputedStyle(wrapper.vm.$el).marginRight).to.eq('-10px');

        await wrapper.vm.$nextTick();
        let col = wrapper.vm.$el.querySelector('.dy-col');
        expect(getComputedStyle(col).paddingLeft).to.eq('10px');
        expect(getComputedStyle(col).paddingRight).to.eq('10px');
    });

    it('2. 测试justify属性', async () => {
        let wrapper = shallowMount(Row, {
            attachToDocument: true,
            stubs: {
                'dy-col': Col
            },
            slots:{
                default:'<dy-col></dy-col>'
            },
            propsData:{
                justify:'start'
            }
        });
        let col = wrapper.vm.$el;
        expect(getComputedStyle(col).justifyContent).to.eq('flex-start');
        wrapper.setProps({justify: 'end'})
        await wrapper.vm.$nextTick();
        expect(getComputedStyle(col).justifyContent).to.eq('flex-end');
        wrapper.setProps({justify: 'center'})
        await wrapper.vm.$nextTick();
        expect(getComputedStyle(col).justifyContent).to.eq('center');
        wrapper.setProps({justify: 'space-around'})
        await wrapper.vm.$nextTick();
        expect(getComputedStyle(col).justifyContent).to.eq('space-around');
        wrapper.setProps({justify: 'space-between'})
        await wrapper.vm.$nextTick();
        expect(getComputedStyle(col).justifyContent).to.eq('space-between');
    });
})