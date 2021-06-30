import clsx from 'clsx';
import { children, class_name } from '../types';
import paddingClass, { padding } from '../mappings/paddings';

export function BlockContent({ padding = 'default', className, children }: BlockContentProps) {
    return <div className={clsx(paddingClass(padding), 'text-md', className)}>{children || ''}</div>;
}

export interface BlockContentProps {
    padding?: padding;
    className?: class_name;
    children?: children;
}

export default BlockContent;
