export function useIcon({ icon, iconSize, ...rest }: any, props: any = {}) {
    return [
        {
            ...props,
            ...(icon ? { icon } : {}),
            ...(iconSize ? { size: iconSize } : {}),
        },
        rest,
    ];
}

export default useIcon;
