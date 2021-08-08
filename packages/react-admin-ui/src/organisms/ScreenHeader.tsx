import clsx from 'clsx';
import Breadcrumb from '../molecules/Breadcrumb';
import { WithColorOfBox, WithItemsOfScreenHeader } from '../withs';
import { AsComponent } from '../as';

export function ScreenHeader({ className, color = 'primary', items = [] }: ScreenHeaderProps) {
    const title = items.slice(items.length - 1)[0].label;
    return (
        <div className={clsx('flex justify-between items-center', className)}>
            <div className={'text-2xl font-semibold'}>{title}</div>
            <Breadcrumb items={items} color={color} toRight />
        </div>
    );
}

export interface ScreenHeaderProps extends AsComponent, WithColorOfBox, WithItemsOfScreenHeader {}

// noinspection JSUnusedGlobalSymbols
export default ScreenHeader;
