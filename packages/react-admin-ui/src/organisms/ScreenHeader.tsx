import clsx from 'clsx';
import { screen_header_item } from '../types';
import Breadcrumb from '../molecules/Breadcrumb';
import { WithBoxColor, WithClassName } from '../withs';

export function ScreenHeader({ className, color = 'primary', items = [] }: ScreenHeaderProps) {
    const title = items.slice(items.length - 1)[0].label;
    return (
        <div className={clsx('flex justify-between items-center', className)}>
            <div className={'text-2xl font-semibold'}>{title}</div>
            <Breadcrumb items={items} color={color} toRight />
        </div>
    );
}

export interface ScreenHeaderProps extends WithClassName, WithBoxColor {
    items: screen_header_item[];
}

export default ScreenHeader;
