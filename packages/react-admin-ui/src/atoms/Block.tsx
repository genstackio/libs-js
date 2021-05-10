import React, {ReactNode} from 'react';
import clsx from "clsx";
import colorClass from "../utils/colorClass";
import {box_color, box_variant} from "../types";

export function Block({title, children, color, variant = 'contained'}: BlockProps) {
    return (
        <div className={clsx('rounded-2xl relative flex flex-col shadow-block', colorClass({color, variant}))}>
            {title && (
                <div className={'p-10 border-b-1'}>
                    <h5 className={'text-2xl'}>{title}</h5>
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
}

export default Block