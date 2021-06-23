import { useCallback } from 'react';
import clsx from 'clsx';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import textClass from '../utils/textClass';
import { box_color, menu_button_item } from '../types';

export function MenuButtonWidget({ items, color }: MenuButtonWidgetProps) {
    const handleClick = useCallback(
        (target) => () => {
            'function' === typeof target && target();
            'string' === typeof target && (location.href = target);
        },
        [],
    );

    return (
        <ul className={'px-2 py-3 rounded-md max-w-xxs divide-y'}>
            {items.map(({ icon, label, target }, index) => (
                <li
                    className={clsx(
                        textClass({ color: color, variant: 'light', hoverable: true }),
                        'flex space-x-2 py-2 px-4 rounded-md cursor-pointer',
                    )}
                    key={index}
                    onClick={handleClick(target)}
                >
                    {icon && <Icon icon={icon} />}
                    {label && <Text text={label} variant={'description'} />}
                </li>
            ))}
        </ul>
    );
}

export interface MenuButtonWidgetProps {
    items: menu_button_item[];
    color?: box_color;
}

export default MenuButtonWidget;
