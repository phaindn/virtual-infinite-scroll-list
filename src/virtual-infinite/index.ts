interface IConstructOptions<T> {
    itemHeight: number;
    items: T[];
    renderItem
}

class VirtualInfiniteScroll<T = any> {

    el: HTMLElement;
    options: IConstructOptions<T>;

    constructor(el: HTMLElement, props: IConstructOptions<T>) {
        this.el = el;
        this.options = props;
    }

}

export default VirtualInfiniteScroll;
