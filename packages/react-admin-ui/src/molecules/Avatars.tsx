import clsx from 'clsx';
import Avatar from '../atoms/Avatar';
import Items from '../atoms/Items';
import { WithItemsOfAvatar } from '../withs';
import { AsComponent } from '../as';

export function Avatars({ className, items = [] }: AvatarsProps) {
    return (
        <div className={clsx('-space-x-4', className)}>
            <Items items={items} component={Avatar} />
        </div>
    );
}

export interface AvatarsProps extends AsComponent, WithItemsOfAvatar {}

// noinspection JSUnusedGlobalSymbols
export default Avatars;
