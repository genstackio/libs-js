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
    WithPadding,
    WithTarget,
    WithVariantOfMenu,
} from '../withs';
import useAmbiance from '@genstackio/react-contexts/lib/hooks/useAmbiance';
import { class_name } from '../types';

export function MenuItem({
    active = false,
    badges,
    color,
    className,
    icon,
    label,
    m = 'md-x',
    p = 'md',
    target,
    variant,
    iconClassName,
}: MenuItemProps) {
    const { menuItemCorner = 'rounded-small' } = useAmbiance();
    return (
        <Block
            active={active}
            color={color}
            contentClassName={'flex justify-between items-center space-x-4'}
            corner={menuItemCorner as any}
            elevation={0}
            hoverable
            onClick={target}
            p={p}
            variant={'light' === variant ? 'filled' : variant}
            className={clsx('', marginClass(m), className)}
        >
            <Row center responsive={false} spaced={4}>
                {icon && (
                    <Div flex className={'w-6'}>
                        <Icon className={clsx('flex-1', iconClassName)} icon={icon} />
                    </Div>
                )}
                <Text text={label} variant={'description'} className={'flex-1'} />
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
        WithPadding,
        WithBadges {
    iconClassName?: class_name;
}

// noinspection JSUnusedGlobalSymbols
export default MenuItem;
