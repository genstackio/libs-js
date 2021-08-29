import { Icon } from '../atoms/Icon';
import { Text } from '../atoms/Text';
import { Panel } from '../atoms/Panel';
import { target } from '../types';
import { AsBox } from '../as';
import { WithIcon, WithTitle } from '../withs';

export function BoxHeader({
    icon = 'fa-far--plus-square',
    iconSize = 'lg',
    onAddClick,
    title,
    ...props
}: BoxHeaderProps) {
    return (
        <Panel col={false} {...props}>
            <Text text={title} variant={'title5'} />
            {!!onAddClick && <Icon icon={icon} onClick={onAddClick} size={iconSize} />}
        </Panel>
    );
}

export interface BoxHeaderProps extends AsBox, WithIcon, WithTitle {
    onAddClick?: target;
}

// noinspection JSUnusedGlobalSymbols
export default BoxHeader;
