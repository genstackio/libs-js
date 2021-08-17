import clsx from 'clsx';
import { WithItemsOfShareIcons } from '../withs';
import { AsBox } from '../as';
import Items from '../atoms/Items';
import ShareIcon from './ShareIcon';

export function ShareIcons({ className, items = [], ...props }: ShareIconsProps) {
    return (
        <div className={clsx('flex flex-row space-x-5', className)}>
            <Items items={items} component={ShareIcon} {...props} />
        </div>
    );
}

export interface ShareIconsProps extends AsBox, WithItemsOfShareIcons {}

// noinspection JSUnusedGlobalSymbols
export default ShareIcons;
