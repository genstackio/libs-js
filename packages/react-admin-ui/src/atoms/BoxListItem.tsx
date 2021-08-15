import Text from './Text';
import Cell from './Cell';
import useBox from '../hooks/useBox';
import { AsBox } from '../as';
import { WithLabel, WithTarget } from '../withs';

export function BoxListItem({ label, target, ...props }: BoxListItemProps) {
    const [box, rest] = useBox(props, { p: 'sm', color: 'primary', variant: 'filled', hoverable: true });

    return (
        <Cell box={box} full corner={'r-sm'} onClick={target} {...rest}>
            <Text ml={'md'} text={label} variant={'overline'} />
        </Cell>
    );
}

export interface BoxListItemProps extends AsBox, WithLabel, WithTarget {}

// noinspection JSUnusedGlobalSymbols
export default BoxListItem;
