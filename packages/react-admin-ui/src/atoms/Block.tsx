import {ReactNode} from 'react';
import clsx from "clsx";
import Button from "./Button";
import Dropdown from "./Dropdown";
import colorClass from "../utils/colorClass";
import {box_color, box_variant} from "../types";

const paddings = {
    none: '',
    default: 'p-10 xs:p-4'
}
export function Block({title, padding = 'default', children, color, variant = 'filled', btnLabel, dropdownItems}: BlockProps) {
    return (
        <div className={clsx('rounded-2xl relative flex flex-col shadow-block', colorClass({color, variant}))}>
            {title && (
                <div className={clsx(paddings['default'], 'border-b-1 flex justify-between items-center')}>
                    <h5 className={'text-2xl'}>{title}</h5>
                    {btnLabel && <Button color={color}>{btnLabel}</Button>}
                    {dropdownItems && <Dropdown menuItems={dropdownItems} color={color} variant={variant} />}
                </div>
            )}
            <div className={clsx(paddings[padding], 'text-md')}>
                {children || ''}
            </div>
        </div>
    );
}

export interface BaseBlockProps {
    padding?: 'default' | 'none',
    color?: box_color,
    variant?: box_variant,
    children?: ReactNode,
}

export interface BlockProps extends BaseBlockProps {
    title?: ReactNode,
    btnLabel?: string,
    dropdownItems?: {name?: string}[],
}

export default Block