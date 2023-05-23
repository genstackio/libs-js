import buildStylesForClassName from './buildStylesForClassName';

export function buildStyles(
    { className = undefined, style = {}, ...rest }: { className?: string; style?: object; [key: string]: any },
    styleConfig: any = {},
) {
    className = (className || '').trim();
    const styles = {};
    if (className) {
        const classes = className.split(/\s+/g);
        const x = classes.reduce(
            (acc, c: string) => {
                const [a, b] = buildStylesForClassName(c, styleConfig);
                acc.classNames = [...acc.classNames, ...a];
                acc.styles = { ...acc.styles, ...b };
                return acc;
            },
            { classNames: [] as string[], styles: {} as object },
        );
        Object.assign(styles, x.styles);
        x.classNames.length && (rest.className = x.classNames.join(' '));
    }
    Object.assign(styles, style);
    return [styles, rest];
}

export default buildStyles;
