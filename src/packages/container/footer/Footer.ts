import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    name: 'DyFooter',
})
export default class DyFooter extends Vue {
    @Prop({
        default: '60px',
    })
    private height!: string;
}
