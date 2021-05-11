import React from 'react';
import clsx from "clsx";
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

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

export function Breadcrumb({items = [], color = 'primary'}: BreadcrumbProps) {
    const breadcrumbItems = items.slice(0, (items.length - 1));
    const lastItem = items.slice(items.length - 1)[0];

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {breadcrumbItems.map(({label, target}, index) => (
                <Link className={clsx(colors[color])} href={target} key={index}>
                    {index === 0 && <HomeIcon className={clsx(colors[color], 'flex items-center')} />}
                    {index !== 0 && <div>{label}</div>}
                </Link>
            ))}
            <div>{lastItem.label}</div>
        </Breadcrumbs>
    );
}

export interface BreadcrumbProps {
    items?: any,
    color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
}

export default Breadcrumb