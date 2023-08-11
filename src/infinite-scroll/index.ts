import { IComponent } from "../@types/component";
import { IElementConfig } from "../@types/dom";
import { createElement } from "../utils/dom";
import { DEFAULT_LIST_TAG, DEFAULT_ROOT_TAG, DEFAULT_TRIGGER_TAG } from "./consts";

interface IInfiniteProps {
    init: IntersectionObserverInit;
    threshold: number | number[];
    rootTag: string;
    root: IElementConfig;
    list?: IElementConfig;
    trigger?: IElementConfig;
    onReachingEnd: ($list: HTMLElement) => any;
}

export class InfiniteScroll implements IComponent<IInfiniteProps> {
    $el: HTMLElement;
    $list: HTMLElement;
    $trigger: HTMLElement;
    props: IInfiniteProps;

    observer: IntersectionObserver;

    constructor(el: HTMLElement, props: IInfiniteProps) {
        this.props = props;

        // render
        const { $root, $trigger, $list } = this._render();
        el.replaceWith($root);
        this.$el = el;
        this.$trigger = $trigger;
        this.$list = $list;

        this.observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                this.props.onReachingEnd(this.$list)
            }
        }, props.init);
        this.observer.observe($trigger);
    }

    _render() {
        const $root = createElement(this.props.root?.tag || DEFAULT_ROOT_TAG, this.props.root);
        const $list = createElement(this.props.list?.tag || DEFAULT_LIST_TAG, this.props.list);
        const $trigger = createElement(this.props.trigger?.tag || DEFAULT_TRIGGER_TAG, this.props.trigger);

        $root.appendChild($list);
        $root.appendChild($trigger);

        return { $root, $trigger, $list };
    }

}
