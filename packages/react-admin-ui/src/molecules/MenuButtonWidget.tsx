import { useCallback } from 'react';
import clsx from 'clsx';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import textClass from '../utils/textClass';
import { box_color, class_name, menu_button_item } from '../types';
import boxClass from '../utils/boxClass';

export function MenuButtonWidget({ className, items, color }: MenuButtonWidgetProps) {
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
    className?: class_name;
    items: menu_button_item[];
    color?: box_color;
}

export default MenuButtonWidget;
