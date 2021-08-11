import clsx from 'clsx';
import Dropdown from './Dropdown';
import Icon from './Icon';
import Div from './Div';
import bgClass from '../utils/bgClass';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';
import { WithIcon, WithDropdownItems, WithHeadingText, WithButtons } from '../withs';
import { AsBoxWrapper } from '../as';
import HeadingText from './HeadingText';
import useButtons from '../hooks/useButtons';
import Buttons from './Buttons';
import useHeadingText from '../hooks/useHeadingText';

export function BlockHeader({
    className,
    color = 'primary',
    dropdownItems,
    icon,
    variant = 'filled',
    children,
    ...props
}: BlockHeaderProps) {
    const [buttonsProps, rest] = useButtons(props);
    const [htProps] = useHeadingText(rest);
    return props.title ? (
        <Div
            padding={'default'}
            className={clsx(bgClass({ color, variant }), 'border-b-1 flex justify-between items-center', className)}
        >
            <BoxProvider value={{ color, variant }}>
                <HeadingText {...htProps} full variant={'smmd'} />
                <Buttons {...buttonsProps} className={'flex justify-end'} />
                <Dropdown items={dropdownItems} color={color} variant={variant} />
                <Icon icon={icon} />
                {children || ''}
            </BoxProvider>
        </Div>
    ) : null;
}

export interface BlockHeaderProps extends AsBoxWrapper, WithDropdownItems, WithIcon, WithButtons, WithHeadingText {}

// noinspection JSUnusedGlobalSymbols
export default BlockHeader;
