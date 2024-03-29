import { useCallback } from 'react';
import clsx from 'clsx';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import boxTextClass from '../mappings/box-texts';
import boxClass from '../mappings/boxs';
import { AsComponent } from '../as';
import { WithColorOfBox, WithItemsOfMenuButton } from '../withs';

const defaultItems = [];

export function MenuButtonWidget({ className, items = defaultItems, color }: MenuButtonWidgetProps) {
    const handleClick = useCallback(
        (target) => () => {
            'function' === typeof target && target();
            'string' === typeof target && (location.href = target);
        },
        [],
    );

    return (
        <ul
            className={clsx(
                boxClass({ color: 'light', variant: 'contained' }),
                'px-2 py-3 rounded-md max-w-xxs divide-y',
                className,
            )}
        >
            {items.map(({ icon, label, target }, index) => (
                <li
                    key={index}
                    onClick={handleClick(target)}
                    className={clsx(
                        boxTextClass({ color: color, variant: 'light', hoverable: true }),
                        'flex space-x-2 py-2 px-4 rounded-md cursor-pointer',
                    )}
                >
                    <Icon icon={icon} />
                    <Text text={label} variant={'description'} />
                </li>
            ))}
        </ul>
    );
}

export interface MenuButtonWidgetProps extends AsComponent, WithColorOfBox, WithItemsOfMenuButton {}

// noinspection JSUnusedGlobalSymbols
export default MenuButtonWidget;
