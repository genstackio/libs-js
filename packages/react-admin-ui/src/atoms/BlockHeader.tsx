import clsx from 'clsx';
import Button from './Button';
import Dropdown from './Dropdown';
import Icon from './Icon';
import Text from './Text';
import Div from './Div';
import bgClass from '../utils/bgClass';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';
import { WithBox, WithTitle, WithSubtitle, WithIcon, WithButtonLabel, WithDropdownItems } from '../withs';
import { AsWrapper } from '../as';

export function BlockHeader({
    className,
    btnLabel,
    color = 'primary',
    dropdownItems,
    icon,
    title,
    subtitle,
    variant = 'filled',
    children,
}: BlockHeaderProps) {
    return title ? (
        <Div
            padding={'default'}
            className={clsx(bgClass({ color, variant }), 'border-b-1 flex justify-between items-center', className)}
        >
            <BoxProvider value={{ color, variant }}>
                <div className={'w-full'}>
                    <Text variant={'title5'} text={title} />
                    <Text variant={'overline'} text={subtitle} />
                </div>
                {btnLabel && <Button color={color}>{btnLabel}</Button>}
                <Dropdown items={dropdownItems} color={color} variant={variant} />
                <Icon icon={icon} />
                {children || ''}
            </BoxProvider>
        </Div>
    ) : null;
}

export interface BlockHeaderProps
    extends AsWrapper,
        WithDropdownItems,
        WithBox,
        WithTitle,
        WithSubtitle,
        WithIcon,
        WithButtonLabel {}

// noinspection JSUnusedGlobalSymbols
export default BlockHeader;
