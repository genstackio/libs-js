import { box_color, box_variant, class_name, share_icon_item } from '../types';
import clsx from 'clsx';
import { Icon } from '../atoms/Icon';
import boxClass from '../utils/boxClass';
import shareIconTypeClass from '../mappings/share-icon-types';

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

export interface ShareIconsProps {
    items?: share_icon_item[];
    color?: box_color;
    variant?: box_variant;
    className?: class_name;
}

// noinspection JSUnusedGlobalSymbols
export default ShareIcons;
