import { Text } from './Text';
import { Clickable } from './Clickable';
import { WithBox, WithLabel, WithTarget } from '../withs';
import bgClass from '../utils/bgClass';
import clsx from 'clsx';
import { AsComponent } from '../as';

export function BoxListItem({ label, target, color = 'primary', variant = 'filled' }: BoxListItemProps) {
    return (
        <Clickable onClick={target} className={clsx(bgClass({ color, variant, hoverable: true }), 'p-2 rounded-sm')}>
            <Text text={label} variant={'overline'} className={'ml-4'} />
        </Clickable>
    );
}

export interface BoxListItemProps extends AsComponent, WithLabel, WithTarget, WithBox {}

// noinspection JSUnusedGlobalSymbols
export default BoxListItem;
