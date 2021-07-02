import MenuFold from '../atoms/MenuFold';
import MenuItem from '../atoms/MenuItem';
import SectionHeader from '../atoms/SectionHeader';
import { class_name, menu_item, box_color, box_variant } from '../types';
import clsx from "clsx";
import boxColorClass from "../mappings/box-colors";

export function Menu({ className, items = [], color = 'primary', variant = 'contained' }: MenuProps) {
    return (
        <div className={clsx(boxColorClass('clear'), className)}>
            {items.map(({ type, ...item }, index) => (
                <>
                    {'section' === type && (
                        <SectionHeader
                            title={item.label}
                            subtitle={item.description}
                            color={color}
                            variant={variant}
                            key={index}
                        />
                    )}
                    {'menu' === type && <MenuFold key={index} color={color} variant={'light'} {...item} />}
                    {'item' === type && <MenuItem key={index} color={color} variant={'light'} {...item} />}
                </>
            ))}
        </div>
    );
}

export interface MenuProps {
    className?: class_name;
    items: menu_item[];
    color?: box_color;
    variant?: box_variant;
}

export default Menu;
