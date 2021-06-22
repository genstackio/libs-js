import clsx from 'clsx';
import Button from './Button';
import Dropdown from './Dropdown';
import {box_color, box_variant, icon, rich_text, dropdown_item, class_name} from '../types';
import Icon from "./Icon";
import Text from "./Text";
import paddingClass from "../mappings/paddings";

export function BlockHeader({className, btnLabel, color = 'primary', dropdownItems, icon, title, variant = 'filled'}: BlockHeaderProps) {
    if (!title) return null;
    return (
        <div className={clsx(paddingClass('default'), 'border-b-1 flex justify-between items-center', className)}>
            <Text variant={'title5'} text={title} />
            {btnLabel && <Button color={color}>{btnLabel}</Button>}
            {dropdownItems && <Dropdown items={dropdownItems} color={color} variant={variant} />}
            <Icon icon={icon} />
        </div>
    );
}

export interface BlockHeaderProps {
    className?: class_name,
    btnLabel?: rich_text,
    color?: box_color,
    dropdownItems?: dropdown_item[],
    icon?: icon,
    title?: rich_text,
    variant?: box_variant,
}

export default BlockHeader
