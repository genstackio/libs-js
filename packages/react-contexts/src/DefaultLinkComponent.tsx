export function DefaultLinkComponent({href, to, active, children, ...props}: DefaultLinkComponentProps) {
    // noinspection SuspiciousTypeOfGuard
    return (
        <a href={to ? (('string' === typeof to) ? to : to['url']) : (href || '/')} {...props}>
            {children || ''}
        </a>
    );
}

export interface DefaultLinkComponentProps {
    t?: Function,
    tReady?: boolean,
    i18n?: any,
    classes?: any,
    href?: any
    to?: string,
    children?: any,
    theme?: any,
    active?: any,
}

export default DefaultLinkComponent