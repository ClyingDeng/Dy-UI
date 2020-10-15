import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    name: 'DyAside',
})
export default class DyAside extends Vue {
    @Prop({
        default: '300px',
    })
    private width!: string;

}
