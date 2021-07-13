import { box_color, box_variant, class_name, share_icons_item } from '../types';
import clsx from 'clsx';
import { Icon } from '../atoms/Icon';
import boxClass from '../utils/boxClass';

const mappings = {
    default: 'fa-far--moon',
    // free brands
    facebook: 'fa-fab--facebook-f',
    googleplus: 'fa-fab--google-plus-g',
    twitter: 'fa-fab--twitter',
    instagram: 'fa-fab--instagram',
    // solid svg
    rss: 'fa-fas--rss',
};

function getIconType(type: string) {
    return mappings[item_type || ''] || mappings['default'];
}

export function ShareIcons({ items = [], color = 'primary', variant = 'none', className }: ShareIconsProps) {
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
                    <Icon icon={getIconType(item.type)} size={'xl'} color={color} onClick={item.target} />
                </div>
            ))}
        </div>
    );
}

export interface ShareIconsProps {
    items?: share_icons_item[];
    color?: box_color;
    variant?: box_variant;
    className?: class_name;
}

export default ShareIcons;
