export function useBlock({ className, color, variant, children, ...rest }: any, props: any = {}) {
    return [
        {
            ...props,
            color,
            variant,
            className,
        },
        rest,
        children || '',
    ];
}

export default useBlock;
