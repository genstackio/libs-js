import clsx from 'clsx';

export function useBlock({ className, color, variant, children, ...rest }: any, props: any = {}) {
    return [
        {
            ...props,
            ...(color ? { color } : {}),
            ...(variant ? { variant } : {}),
            className: clsx(props.className, className),
        },
        rest,
        children || '',
    ];
}

export default useBlock;
