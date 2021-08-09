import clsx from 'clsx';
import Button from './Button';
import Dropdown from './Dropdown';
import Icon from './Icon';
import Div from './Div';
import bgClass from '../utils/bgClass';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';
import { WithIcon, WithButtonLabel, WithDropdownItems, WithHeadingText } from '../withs';
import { AsBoxWrapper } from '../as';
import HeadingText from './HeadingText';

export function BlockHeader({
    className,
    btnLabel,
    color = 'primary',
    dropdownItems,
    icon,
    title,
    subtitle,
    description,
    variant = 'filled',
    center,
    children,
}: BlockHeaderProps) {
    return title ? (
        <Div
            padding={'default'}
            className={clsx(bgClass({ color, variant }), 'border-b-1 flex justify-between items-center', className)}
        >
            <BoxProvider value={{ color, variant }}>
                <HeadingText
                    full
                    center={center}
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    variant={'smmd'}
                />
                {btnLabel && <Button color={color}>{btnLabel}</Button>}
                <Dropdown items={dropdownItems} color={color} variant={variant} />
                <Icon icon={icon} />
                {children || ''}
            </BoxProvider>
        </Div>
    ) : null;
}

export interface BlockHeaderProps extends AsBoxWrapper, WithDropdownItems, WithIcon, WithButtonLabel, WithHeadingText {}

// noinspection JSUnusedGlobalSymbols
export default BlockHeader;
