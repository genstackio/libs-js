import clsx from 'clsx';
import Button from './Button';
import Dropdown from './Dropdown';
import { box_color, box_variant, icon, rich_text, dropdown_item, class_name } from '../types';
import Icon from './Icon';
import Text from './Text';
import paddingClass from '../mappings/paddings';
import bgClass from '../utils/bgClass';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';

export function BlockHeader({
    className,
    btnLabel,
    color = 'primary',
    dropdownItems,
    icon,
    title,
    subtitle,
    variant = 'filled',
}: BlockHeaderProps) {
    if (!title) return null;
    return (
        <div
            className={clsx(
                bgClass({ color, variant }),
                paddingClass('default'),
                'border-b-1 flex justify-between items-center',
                className,
            )}
        >
            <BoxProvider value={{ color, variant }}>
                <div className={'w-full'}>
                    <Text variant={'title5'} text={title} />
                    <Text variant={'overline'} text={subtitle} />
                </div>
                {btnLabel && <Button color={color}>{btnLabel}</Button>}
                {dropdownItems && <Dropdown items={dropdownItems} color={color} variant={variant} />}
                <Icon icon={icon} />
            </BoxProvider>
        </div>
    );
}

export interface BlockHeaderProps {
    className?: class_name;
    btnLabel?: rich_text;
    color?: box_color;
    dropdownItems?: dropdown_item[];
    icon?: icon;
    title?: rich_text;
    subtitle?: rich_text;
    variant?: box_variant;
}

export default BlockHeader;
