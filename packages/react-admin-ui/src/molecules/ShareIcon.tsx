import clsx from 'clsx';
import { Icon } from '../atoms/Icon';
import boxClass from '../utils/boxClass';
import shareIconTypeClass from '../mappings/share-icon-types';
import { WithItemsOfShareIcons, WithTarget } from '../withs';
import { AsBox } from '../as';

export function ShareIcon({ className, items = [], color, variant, target, ...item }: ShareIconProps) {
    return (
        <div
            className={clsx(
                boxClass({ color: color, variant: variant }),
                'flex rounded-full h-16 w-16 items-center justify-center',
            )}
        >
            <Icon icon={shareIconTypeClass(item['type'] || 'default')} size={'xl'} color={color} onClick={target} />
        </div>
    );
}

export interface ShareIconProps extends AsBox, WithItemsOfShareIcons, WithTarget {}

// noinspection JSUnusedGlobalSymbols
export default ShareIcon;
