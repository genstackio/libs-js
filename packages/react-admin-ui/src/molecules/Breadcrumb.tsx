import clsx from 'clsx';
import { box_color, breadcrumb_item, class_name, flag } from '../types';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

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

export function Breadcrumb({ className, items = [], color = 'primary', toRight = false }: BreadcrumbProps) {
    const classes = useStyles();
    const breadcrumbItems = items.slice(0, items.length - 1);
    const lastItem = items.slice(items.length - 1)[0];

    return (
        <Breadcrumbs
            aria-label={'breadcrumb'}
            classes={toRight ? { ol: classes.root } : undefined}
            className={clsx(className)}
        >
            {breadcrumbItems.map(({ label, target }, index) => (
                <Link
                    className={clsx(colors[color])}
                    key={index}
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

export interface BreadcrumbProps {
    className?: class_name;
    color?: box_color;
    items: breadcrumb_item[];
    toRight?: flag;
}

export default Breadcrumb;
