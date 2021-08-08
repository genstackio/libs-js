import clsx from 'clsx';
import Badge from '../atoms/Badge';
import Block from '../atoms/Block';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import { WithActive, WithBadges, WithColorOfBox, WithIcon, WithLabel, WithTarget, WithVariantOfMenu } from '../withs';
import Items from './Items';
import { AsComponent } from '../as';

export function MenuItem({ className, label, icon, target, active = false, badges, color, variant }: MenuItemProps) {
    return (
        <Block
            padding={'small'}
            elevation={0}
            className={clsx('mx-4 transition duration-500', className)}
            corner={'rounded-small'}
            onClick={target}
            contentClassName={'flex justify-between items-center space-x-4'}
            active={active}
            hoverable
            color={color}
            variant={'light' === variant ? 'filled' : variant}
        >
            <div className={'flex items-center space-x-4'}>
                {icon && (
                    <div className={'w-6 flex'}>
                        <Icon className={'flex-1'} icon={icon} />
                    </div>
                )}
                <Text text={label} variant={'description'} />
            </div>
            <div className={'flex items-center space-x-2'}>
                <Items items={badges} component={Badge} />
            </div>
        </Block>
    );
}

export interface MenuItemProps
    extends AsComponent,
        WithLabel,
        WithIcon,
        WithColorOfBox,
        WithActive,
        WithTarget,
        WithVariantOfMenu,
        WithBadges {}

// noinspection JSUnusedGlobalSymbols
export default MenuItem;
