export function useHeadingText({ title, subtitle, description, center, ...rest }: any, props: any = {}) {
    return [
        {
            ...props,
            title,
            subtitle,
            description,
            center,
        },
        rest,
        title || subtitle || description,
    ];
}

export default useHeadingText;
