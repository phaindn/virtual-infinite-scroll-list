import { IElementConfig } from "../@types/dom";

export function cx(...args: (string | Record<string, boolean>)[]) {
    return args.map(item => {
        if (typeof item === 'string') {
            return item;
        }
        return Object.entries(item).filter(([, value]) => value).map(([key]) => key).join(' ')
    }).join(' ');
}

export function createElement(tagName: string, config: IElementConfig) {
    const $el = document.createElement(tagName);
    Object.keys(config).forEach(([key, value]) => {
        if (key == 'tag') {
            return;
        }
        $el[key] = value;
    });

    return $el;
}
