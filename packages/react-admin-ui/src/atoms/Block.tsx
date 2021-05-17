import React, {ReactNode} from 'react';
import clsx from "clsx";
import Button from "./Button";
import colorClass from "../utils/colorClass";
import {box_color, box_variant} from "../types";

export function Block({title, children, color, variant = 'contained', btnLabel}: BlockProps) {
    return (
        <div className={clsx('rounded-2xl relative flex flex-col shadow-block', colorClass({color, variant}))}>
            {title && (
                <div className={'p-10 border-b-1 flex justify-between items-center'}>
                    <h5 className={'text-2xl'}>{title}</h5>
                    {btnLabel && <Button color={color}>{btnLabel}</Button>}
                </div>
            )}
            <div className={'p-10 text-md'}>
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
}

export default Block