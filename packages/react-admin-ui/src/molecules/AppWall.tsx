import { WithImage, WithCorner, WithItems } from '../withs';
import { AsComponent } from '../as';
import Items from '../atoms/Items';
import AppWallItem from '../atoms/AppWallItem';
import clsx from 'clsx';

export function AppWall({ items = [], className }: AppWallProps) {
    return (
        <div className={clsx('grid grid-cols-6 sm:grid-cols-4 gap-x-5 gap-y-11', className)}>
            <Items items={items} component={AppWallItem} />
        </div>
    );
}

export interface AppWallProps extends AsComponent, WithImage, WithItems, WithCorner {}

// noinspection JSUnusedGlobalSymbols
export default AppWall;
