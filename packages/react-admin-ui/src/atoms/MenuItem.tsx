import clsx from 'clsx';
import Badge from '../atoms/Badge';
import Block from '../atoms/Block';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import { menu_variant, badge } from '../types';
import boxClass from '../utils/boxClass';
import { WithActive, WithBoxColor, WithClassName, WithIcon, WithLabel, WithTarget } from '../withs';

export function MenuItem({ className, label, icon, target, active = false, badges, color, variant }: MenuItemProps) {
    return (
        <Block
            padding={'small'}
            elevation={0}
            className={clsx(
                'mx-4 transition-all',
                boxClass({ color: color, variant: active ? 'contained' : variant, hoverable: true }),
                className,
            )}
            corner={'rounded-small'}
            onClick={target}
            contentClassName={'flex justify-between items-center space-x-4'}
        >
            <div className={'flex items-center space-x-4'}>
                {icon && <Icon icon={icon} />}
                <Text text={label} color={active ? color : undefined} variant={'description'} />
            </div>
            <div className={'flex items-center space-x-2'}>
                {badges && badges.map((badge, index) => <Badge key={index} {...badge} />)}
            </div>
        </Block>
    );
}

export interface MenuItemProps extends WithClassName, WithLabel, WithIcon, WithBoxColor, WithActive, WithTarget {
    badges?: badge[];
    variant?: menu_variant;
}

export default MenuItem;
