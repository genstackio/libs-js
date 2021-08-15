export function useHeadingText({ title, subtitle, description, center, ...rest }: any, props: any = {}) {
    return [
        {
            ...props,
            ...(title ? { title } : {}),
            ...(subtitle ? { subtitle } : {}),
            ...(description ? { description } : {}),
            ...(undefined !== center ? { center } : {}),
        },
        rest,
        title || subtitle || description,
    ];
}

export default useHeadingText;
