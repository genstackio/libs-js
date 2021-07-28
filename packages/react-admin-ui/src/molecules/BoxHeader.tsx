import { target } from '../types';
import { Panel } from '../atoms/Panel';
import { Text } from '../atoms/Text';
import { Icon } from '../atoms/Icon';
import { Clickable } from '../atoms/Clickable';
import { WithClassName, WithBox, WithTitle } from '../withs';

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

export interface BoxHeaderProps extends WithClassName, WithBox, WithTitle {
    onAddClick?: target;
}

export default BoxHeader;
