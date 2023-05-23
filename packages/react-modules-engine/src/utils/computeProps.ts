import { background } from '../types';
import buildTextureUrl from './buildTextureUrl';
import clsx from 'clsx';

export function computeProps(items: background[]) {
    const { style, classNames } = items.reduce(
        (acc, item) => {
            if (!item?.value) return acc;
            switch (item.type) {
                case 'style':
                    Object.assign(acc.style, JSON.parse(item.value || '{}'));
                    break;
                case 'custom':
                    acc.style['background'] = item.value;
                    break;
                case 'color':
                    acc.style['backgroundColor'] = item.value;
                    break;
                case 'image':
                    if (!item?.value?.url) break;
                    acc.style['backgroundRepeat'] = 'no-repeat';
                    acc.style['backgroundPosition'] = 'top';
                    acc.style['backgroundPositionX'] = 'center';
                    acc.style['backgroundSize'] = 'auto';
                    acc.style['backgroundAttachment'] = 'fixed';
                    acc.style['backgroundImage'] = `url(${item.value?.url})`;
                    break;
                case 'texture':
                    let v = item.value || '';
                    let vfixed = false;
                    if ('!' === v.slice(0, 1)) {
                        v = v.slice(1);
                        vfixed = true;
                    }
                    if (!v) break;
                    vfixed && (acc.style['backgroundAttachment'] = 'fixed');
                    acc.style['backgroundImage'] = `url(${buildTextureUrl(v)})`;
                    break;
                default:
                    break;
            }
            return acc;
        },
        { style: {}, classNames: [] } as any,
    );
    return {
        ...(classNames.length ? { className: clsx(...classNames) } : {}),
        ...(style ? { style } : {}),
    };
}

export default computeProps;
