// 流行测试框架 jest （ = mocha + chai）只能通过jsdom来测试，无法真的把组件跑在浏览器环境下
// karma(提供一个浏览器框架) + mocha(测试框架) + chai(断言库) + vue/test-utils(测试包)

import { shallowMount } from '@vue/test-utils'; // 浅拷贝
import Carousel from '@/packages/carousel/carousel/Carousel.vue';
import CarouselItem from '@/packages/carousel/carousel-item/Carousel-item.vue';
import Button from '@/packages/button/button/Button.vue';
import icon from '@/packages/icon/Icon.vue';

import { expect } from 'chai';

// 套件
describe('测试当前carousel组件', () => {
    it('测试initialIndex 传入后是否符合我的预期 1', () => {
        let wrapper = shallowMount(Carousel, {
            attachToDocument: true, // 跑在浏览器上
            stubs: {
                'dy-carousel-item': CarouselItem,
                'dy-button': Button,
                'dy-icon': icon
            },
            slots: {
                default: `
            <dy-carousel-item style="background: #f0f">
                <h3 class="small">item1</h3>
            </dy-carousel-item>
            <dy-carousel-item style="background: #00f">
              <h3 class="small">u2</h3>
            </dy-carousel-item>
            <dy-carousel-item style="background: #ff0">
              <h3 class="small">u3</h3>
            </dy-carousel-item>
            `,
                propsData: {
                    initialIndex: 0,
                }
            }
        });
        let item = wrapper.findAll('.content');
        expect(item.length).to.eq(1);
        expect(item.at(0).text()).to.eq('<h3 class="small">item1</h3>');
    });
});