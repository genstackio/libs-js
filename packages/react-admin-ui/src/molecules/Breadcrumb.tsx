import clsx from "clsx";
import {box_color} from "../types";
import Link from '@material-ui/core/Link';
import {makeStyles} from "@material-ui/core/styles";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const colors = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    info: 'text-info',
    warning: 'text-warning',
    danger: 'text-danger',
    light: 'text-light',
    dark: 'text-dark',
}

const useStyles = makeStyles({
    root: {
        '&.MuiBreadcrumbs-ol': {
            justifyContent: 'flex-end',
        }
    }
});

export function Breadcrumb({items = [], color = 'primary', right = false}: BreadcrumbProps) {
    const classes = useStyles();
    const breadcrumbItems = items.slice(0, (items.length - 1));
    const lastItem = items.slice(items.length - 1)[0];

    return (
        <Breadcrumbs aria-label="breadcrumb" classes={right ? {ol: classes.root} : undefined}>
            {breadcrumbItems.map(({label, target}, index) => (
                <Link className={clsx(colors[color])} href={target} key={index}>
                    {index === 0 && <HomeOutlinedIcon className={clsx(colors[color], 'flex items-center')} />}
                    {index !== 0 && <div>{label}</div>}
                </Link>
            ))}
            <div>{lastItem.label}</div>
        </Breadcrumbs>
    );
}

export interface BreadcrumbProps {
    items: {label?: string, target?: string}[],
    color?: box_color,
    right?: boolean,
}

export default Breadcrumb