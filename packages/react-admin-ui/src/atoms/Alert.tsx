import {ReactNode, useCallback, useState} from 'react';
import clsx from 'clsx';
import boxClass from "../utils/boxClass";
import {box_color, box_variant} from '../types';
import CloseIcon from '@material-ui/icons/Close';

export function Alert({children, closable = false, color = 'primary', variant = 'contained'}: AlertProps) {
    const [show, setShow] = useState(true);
    const handleClick = useCallback(() => setShow(false), [setShow]);
    if (!show) return null
    return (
        <div className={clsx(boxClass({color, variant}), 'px-4 py-4 leading-normal flex items-center justify-between')}>
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
    closable?: boolean,
    color?: box_color,
    variant?: box_variant,
}

export default Alert