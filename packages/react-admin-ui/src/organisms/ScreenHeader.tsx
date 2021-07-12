import clsx from 'clsx';
import { box_color, class_name, screen_header_item } from '../types';
import Breadcrumb from '../molecules/Breadcrumb';

export function ScreenHeader({ className, color = 'primary', items = [] }: ScreenHeaderProps) {
    const title = items.slice(items.length - 1)[0].label;
    return (
        <div className={clsx('flex justify-between items-center bg-light', className)}>
            <div className={'text-2xl font-semibold'}>{title}</div>
            <Breadcrumb items={items} color={color} toRight />
        </div>
    );
}

export interface ScreenHeaderProps {
    className?: class_name;
    color?: box_color;
    items: screen_header_item[];
}

export default ScreenHeader;
