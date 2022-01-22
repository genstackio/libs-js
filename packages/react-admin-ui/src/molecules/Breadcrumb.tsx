import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { flag } from '../types';
import { AsComponent } from '../as';
import { WithColorOfBox, WithItemsOfBreadcrumb } from '../withs';

const colors = {
    danger: 'text-danger',
    dark: 'text-dark',
    info: 'text-info',
    inherit: 'text-current',
    light: 'text-light',
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    warning: 'text-warning',
};
const useStyles = makeStyles({
    root: {
        '&.MuiBreadcrumbs-ol': {
            justifyContent: 'flex-end',
        },
    },
});

const defaultItems = [];

export function Breadcrumb({ className, color = 'primary', items = defaultItems, toRight = false }: BreadcrumbProps) {
    const classes = useStyles();
    const breadcrumbItems = items.slice(0, items.length - 1);
    const lastItem = items.slice(items.length - 1)[0];

    return (
        <Breadcrumbs
            aria-label={'breadcrumb'}
            classes={toRight ? { ol: classes.root } : undefined}
            className={className}
        >
            {breadcrumbItems.map(({ label, target }, index) => (
                <Link
                    key={index}
                    className={clsx(colors[color])}
                    {...('function' === typeof target ? { href: '' } : { href: target as string })}
                >
                    {index === 0 && <HomeOutlinedIcon className={clsx(colors[color], 'flex items-center')} />}
                    {index !== 0 && <div>{label}</div>}
                </Link>
            ))}
            <div>{lastItem.label}</div>
        </Breadcrumbs>
    );
}

export interface BreadcrumbProps extends AsComponent, WithColorOfBox, WithItemsOfBreadcrumb {
    toRight?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default Breadcrumb;
