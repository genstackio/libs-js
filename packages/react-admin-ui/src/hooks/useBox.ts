import { useMemo } from 'react';

export function useBox(
    { color, variant, size, hoverable, ...rest }: any,
    { color: cx, variant: vx, size: sx, hoverable: hx, ...props }: any = {},
) {
    color = color || cx;
    variant = variant || vx;
    size = size || sx;
    hoverable = 'undefined' === typeof hoverable ? hx : hoverable;

    return [
        useMemo(
            () => ({
                ...(color ? { color } : {}),
                ...(variant ? { variant } : {}),
                ...(size ? { size } : {}),
                ...('undefined' !== typeof hoverable ? { hoverable } : {}),
            }),
            [color, variant, size, hoverable],
        ),
        { ...props, ...rest },
    ];
}

export default useBox;
