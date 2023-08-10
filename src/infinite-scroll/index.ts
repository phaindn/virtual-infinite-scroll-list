import { IComponent } from "../@types/component";

interface IInfiniteProps {
    init: IntersectionObserverInit;
    threshold: number | number[];
}

export class InfiniteScroll implements IComponent<IInfiniteProps> {
    $el: HTMLElement;
    props: any;

    observer: IntersectionObserver;

    constructor(el: HTMLElement, props: IInfiniteProps) {
        this.$el = el;
        this.props = props;

        this.observer = new IntersectionObserver((entries) => {

        }, props.init);
    }

}