import clsx from 'clsx';
import { Icon } from '../atoms/Icon';
import boxClass from '../utils/boxClass';
import shareIconTypeClass from '../mappings/share-icon-types';
import { WithBox, WithClassName, WithItemsOfShareIcons } from '../withs';

export function ShareIcons({ items = [], color, variant, className }: ShareIconsProps) {
    return (
        <div className={clsx('flex flex-row space-x-5', className)}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={clsx(
                        boxClass({ color: color, variant: variant }),
                        'flex rounded-full h-16 w-16 items-center justify-center',
                    )}
                >
                    <Icon icon={shareIconTypeClass(item.type)} size={'xl'} color={color} onClick={item.target} />
                </div>
            ))}
        </div>
    );
}

export interface ShareIconsProps extends WithClassName, WithBox, WithItemsOfShareIcons {}

// noinspection JSUnusedGlobalSymbols
export default ShareIcons;
