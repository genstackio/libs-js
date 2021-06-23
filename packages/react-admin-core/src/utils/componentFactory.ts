export function componentFactory(
    name: string,
    importer: (name: string) => any,
    suffix: string | undefined = undefined,
) {
    return importer(
        `${name
            .split(/_/g)
            .map((x) => `${x.slice(0, 1).toUpperCase()}${x.slice(1)}`)
            .join('')}${suffix || ''}`,
    );
}

export default componentFactory;
