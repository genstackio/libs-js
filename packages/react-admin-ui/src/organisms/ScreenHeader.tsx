import clsx from 'clsx';
import Breadcrumb from '../molecules/Breadcrumb';
import { WithColorOfBox, WithClassName, WithItemsOfScreenHeader } from '../withs';

export function ScreenHeader({ className, color = 'primary', items = [] }: ScreenHeaderProps) {
    const title = items.slice(items.length - 1)[0].label;
    return (
        <div className={clsx('flex justify-between items-center', className)}>
            <div className={'text-2xl font-semibold'}>{title}</div>
            <Breadcrumb items={items} color={color} toRight />
        </div>
    );
}

export interface ScreenHeaderProps extends WithClassName, WithColorOfBox, WithItemsOfScreenHeader {}

export default ScreenHeader;
