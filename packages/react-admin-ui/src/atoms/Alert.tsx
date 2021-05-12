import React, {ReactNode, useCallback, useState} from 'react';
import clsx from 'clsx';
import colorClass from "../utils/colorClass";
import {box_color, box_variant} from '../types';
import CloseIcon from '@material-ui/icons/Close';

export function Alert({children, color = 'primary', variant = 'contained', closable = false}: AlertProps) {
    const [show, setShow] = useState(true);
    const handleClick = useCallback(() => setShow(false), [setShow]);
    if (!show) return null
    return (
        <div className={clsx(colorClass({color, variant}), 'px-4 py-4 leading-normal flex items-center justify-between')}>
            <div className={'w-full'}>{children || ''}</div>
            {closable && (
                <div className={'cursor-pointer'}>
                    <CloseIcon onClick={handleClick} />
                </div>
            )}
        </div>
    );
}

export interface AlertProps {
    children?: ReactNode,
    color?: box_color,
    variant?: box_variant,
    closable?: boolean,
}

export default Alert