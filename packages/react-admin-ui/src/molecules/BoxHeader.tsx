import { target } from '../types';
import { Panel } from '../atoms/Panel';
import { Text } from '../atoms/Text';
import { Icon } from '../atoms/Icon';
import { Clickable } from '../atoms/Clickable';
import { WithTitle } from '../withs';
import { AsBox } from '../as';

export function BoxHeader({ title, onAddClick, ...props }: BoxHeaderProps) {
    return (
        <Panel {...props}>
            <Text text={title} variant={'title5'} />
            {!!onAddClick && (
                <Clickable onClick={onAddClick}>
                    <Icon icon={'fa-far--plus-square'} size={'lg'} />
                </Clickable>
            )}
        </Panel>
    );
}

export interface BoxHeaderProps extends AsBox, WithTitle {
    onAddClick?: target;
}

// noinspection JSUnusedGlobalSymbols
export default BoxHeader;
