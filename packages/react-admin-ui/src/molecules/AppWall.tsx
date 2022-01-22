import clsx from 'clsx';
import Div from '../atoms/Div';
import Items from '../atoms/Items';
import AppWallItem from '../atoms/AppWallItem';
import { AsComponent } from '../as';
import { WithImage, WithCorner, WithItems } from '../withs';

const defaultItems = [];

export function AppWall({ className, items = defaultItems }: AppWallProps) {
    return (
        <Div grid={64} className={clsx('place-items-center gap-x-5 gap-y-11', className)}>
            <Items component={AppWallItem} items={items} />
        </Div>
    );
}

export interface AppWallProps extends AsComponent, WithImage, WithItems, WithCorner {}

// noinspection JSUnusedGlobalSymbols
export default AppWall;
