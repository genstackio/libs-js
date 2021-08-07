import clsx from 'clsx';
import Clickable from '../atoms/Clickable';
import Badge from '../atoms/Badge';
import Block from '../atoms/Block';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import textClass from '../utils/textClass';
import { useToggle } from '../hooks';
import {
    WithColorOfBox,
    WithClassName,
    WithIcon,
    WithLabel,
    WithActive,
    WithBadges,
    WithItemsOfMenu,
    WithVariantOfMenu,
} from '../withs';
import Items from './Items';

export function MenuFold({ className, label, icon, active, badges, items = [], color, variant }: MenuFoldProps) {
    const [open, toggle] = useToggle(active || false);
    return (
        <>
            <Block
                padding={'small'}
                elevation={0}
                className={clsx(
                    'mx-4 cursor-pointer transition duration-500',
                    open && 'mb-2.5 bg-opacity-20',
                    className,
                )}
                corner={'rounded-small'}
                onClick={toggle}
                contentClassName={'flex justify-between'}
                active={active}
                hoverable
                color={color}
                variant={open ? 'contained' : 'light' === variant ? 'filled' : variant}
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
                    <Icon icon={open ? 'expand_more' : 'navigate_next'} />
                </div>
            </Block>
            {open &&
                items &&
                items.map(({ label, target }, index) => (
                    <Clickable
                        className={clsx(
                            'cursor-pointer mx-6 px-6 py-2 flex flex-col',
                            textClass({ color: color, variant: variant, hoverable: true }),
                        )}
                        key={index}
                        onClick={target}
                    >
                        - {label}
                    </Clickable>
                ))}
        </>
    );
}

export interface MenuFoldProps
    extends WithClassName,
        WithIcon,
        WithColorOfBox,
        WithLabel,
        WithActive,
        WithBadges,
        WithItemsOfMenu,
        WithVariantOfMenu {}

export default MenuFold;
