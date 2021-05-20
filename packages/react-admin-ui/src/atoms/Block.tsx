import {ReactNode} from 'react';
import clsx from "clsx";
import Button from "./Button";
import Dropdown from "./Dropdown";
import colorClass from "../utils/colorClass";
import {box_color, box_variant} from "../types";

export function Block({title, children, color, variant = 'contained', btnLabel, dropdownItems}: BlockProps) {
    return (
        <div className={clsx('rounded-2xl relative flex flex-col shadow-block', colorClass({color, variant}))}>
            {title && (
                <div className={'p-10 border-b-1 flex justify-between items-center xs:p-4'}>
                    <h5 className={'text-2xl'}>{title}</h5>
                    {btnLabel && <Button color={color}>{btnLabel}</Button>}
                    {dropdownItems && <Dropdown menuItems={dropdownItems} color={color} variant={variant} />}
                </div>
            )}
            <div className={'p-10 text-md xs:p-4'}>
                {children || ''}
            </div>
        </div>
    );
}

export interface BlockProps {
    title?: ReactNode,
    children?: ReactNode,
    color?: box_color,
    variant?: box_variant,
    btnLabel?: string,
    dropdownItems?: {name?: string}[],
}

export default Block