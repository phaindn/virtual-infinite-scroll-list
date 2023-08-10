export interface IItem<StateType = any> {
    data: StateType;
    render(data: StateType): HTMLElement;
}

export interface IComponent<PropsType = any, StateType = any> {
    $el: HTMLElement;
    props: PropsType

    render?(data?: StateType): HTMLElement;
}