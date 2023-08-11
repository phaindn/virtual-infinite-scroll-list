import { IComponent } from "../@types/component";
import { IElementConfig } from "../@types/dom";

interface IVirtualProps {
    threshold: number | number[];
    rootTag: string;
    root: IElementConfig;
}

export class VirtualScroll implements IComponent<IVirtualProps> {
    $el: HTMLElement;
    props: IVirtualProps;

    constructor(el: HTMLElement, props: IVirtualProps) {
        this.props = props;

        // render
        this.$el = el;

        this.bind();
    }

    _render() {
    }

    bind() {
        this.onScroll = this.onScroll.bind(this);
    }

    activate($el: HTMLElement) {
        $el.addEventListener('scroll', this.onScroll);
        $el.addEventListener('resize', this.onScroll);
    }

    onScroll(e: any) {}

}
