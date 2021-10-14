import clsx from 'clsx';
import Items from './Items';
import Row from './Row';
import Div from './Div';
import Clickable from './Clickable';
import Badge from './Badge';
import Block from './Block';
import Icon from './Icon';
import Text from './Text';
import boxTextClass from '../mappings/box-texts';
import useToggle from '../hooks/useToggle';
import { AsComponent } from '../as';
import {
    WithColorOfBox,
    WithIcon,
    WithLabel,
    WithActive,
    WithBadges,
    WithItemsOfMenu,
    WithVariantOfMenu,
} from '../withs';

export function MenuFold({ active, badges, className, color, icon, label, items = [], variant }: MenuFoldProps) {
    const [open, toggle] = useToggle(active || false);

    return (
        <>
            <Block
                active={active}
                color={color}
                contentClassName={'flex justify-between'}
                corner={'rounded-small'}
                elevation={0}
                hoverable
                onClick={toggle}
                p={'md'}
                variant={open ? 'contained' : 'light' === variant ? 'filled' : variant}
                className={clsx(
                    'mx-4 cursor-pointer transition duration-500',
                    open && 'mb-2.5 bg-opacity-20',
                    className,
                )}
            >
                <Row center responsive={false} spaced={4}>
                    {icon && (
                        <Div flex className={'w-6'}>
                            <Icon icon={icon} className={'flex-1'} />
                        </Div>
                    )}
                    <Text text={label} variant={'description'} />
                </Row>
                <Row center responsive={false} spaced={2}>
                    <Items component={Badge} items={badges} />
                    <Icon icon={open ? 'expand_more' : 'navigate_next'} />
                </Row>
            </Block>
            {open &&
                items &&
                items.map(({ label, target }, index) => (
                    <Clickable
                        key={index}
                        onClick={target}
                        className={clsx(
                            'cursor-pointer mx-6 px-6 py-2 flex flex-col',
                            boxTextClass({ color: color, variant: variant, hoverable: true }),
                        )}
                    >
                        - {label}
                    </Clickable>
                ))}
        </>
    );
}

export interface MenuFoldProps
    extends AsComponent,
        WithIcon,
        WithColorOfBox,
        WithLabel,
        WithActive,
        WithBadges,
        WithItemsOfMenu,
        WithVariantOfMenu {}

// noinspection JSUnusedGlobalSymbols
export default MenuFold;
