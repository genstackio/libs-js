export function useItems({ items, ...rest }: any, component, props: any = {}) {
    return [
        {
            ...props,
            items,
            component,
        },
        rest,
    ];
}

export default useItems;
