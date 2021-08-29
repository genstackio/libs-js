import clsx from 'clsx';
import Badge from './Badge';
import Block from './Block';
import Icon from './Icon';
import Text from './Text';
import Items from './Items';
import Row from './Row';
import Div from './Div';
import marginClass from '../mappings/margins';
import { AsComponent } from '../as';
import {
    WithActive,
    WithBadges,
    WithColorOfBox,
    WithIcon,
    WithLabel,
    WithMargin,
    WithTarget,
    WithVariantOfMenu,
} from '../withs';

export function MenuItem({
    active = false,
    badges,
    color,
    className,
    icon,
    label,
    m = 'md-x',
    target,
    variant,
}: MenuItemProps) {
    return (
        <Block
            active={active}
            color={color}
            contentClassName={'flex justify-between items-center space-x-4'}
            corner={'rounded-small'}
            elevation={0}
            hoverable
            onClick={target}
            p={'md'}
            variant={'light' === variant ? 'filled' : variant}
            className={clsx('transition duration-500', marginClass(m), className)}
        >
            <Row center responsive={false} spaced={4}>
                {icon && (
                    <Div flex className={'w-6'}>
                        <Icon className={'flex-1'} icon={icon} />
                    </Div>
                )}
                <Text text={label} variant={'description'} />
            </Row>
            <Row center responsive={false} spaced={2}>
                <Items component={Badge} items={badges} />
            </Row>
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
        WithMargin,
        WithBadges {}

// noinspection JSUnusedGlobalSymbols
export default MenuItem;
