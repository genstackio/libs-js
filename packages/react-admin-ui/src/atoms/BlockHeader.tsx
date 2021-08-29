import Row, { RowProps } from './Row';
import Icon from './Icon';
import Buttons from './Buttons';
import Dropdown from './Dropdown';
import HeadingText from './HeadingText';
import useBox from '../hooks/useBox';
import useButtons from '../hooks/useButtons';
import useHeadingText from '../hooks/useHeadingText';
import { WithIcon, WithDropdownItems, WithHeadingText, WithButtons } from '../withs';

export function BlockHeader({ children, dropdownItems, icon, ...props }: BlockHeaderProps) {
    const [btProps, rest3] = useButtons(props);
    const [htProps, rest2] = useHeadingText(rest3, { variant: 'smmd' });
    const [box, rest] = useBox(rest2, { b: 'xs-b', color: 'primary', variant: 'filled', p: 'sl' });

    if (!props.title) return null;

    return (
        <Row box={box} center spaced {...rest}>
            <HeadingText full {...htProps} />
            <Buttons flex {...btProps} className={'justify-end'} />
            <Dropdown items={dropdownItems} {...box} />
            <Icon icon={icon} />
            {children || ''}
        </Row>
    );
}

export interface BlockHeaderProps extends RowProps, WithDropdownItems, WithIcon, WithButtons, WithHeadingText {}

// noinspection JSUnusedGlobalSymbols
export default BlockHeader;
