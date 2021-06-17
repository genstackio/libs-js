import clsx from 'clsx';
import {box_padding, children, class_name} from '../types';

const paddings = {
    none: '',
    default: 'p-10',
    small: 'x-p-small',
}

export function BlockContent({padding = 'default', className, children}: BlockContentProps) {
    return (
        <div className={clsx(paddings[padding], className, 'text-md')}>
            {children || ''}
        </div>
    );
}

export interface BlockContentProps {
    padding?: box_padding,
    className?: class_name,
    children?: children,
}

export default BlockContent