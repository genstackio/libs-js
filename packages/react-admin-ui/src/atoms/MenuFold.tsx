import clsx from 'clsx';
import Clickable from '../atoms/Clickable';
import Badge from '../atoms/Badge';
import Block from '../atoms/Block';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import { menu_variant, badge, menu_item } from '../types';
import textClass from '../utils/textClass';
import boxClass from '../utils/boxClass';
import { useToggle } from '../hooks';
import { WithBoxColor, WithClassName, WithIcon, WithLabel, WithActive } from '../withs';

export function MenuFold({ className, label, icon, active, badges, items = [], color, variant }: MenuFoldProps) {
    const [open, toggle] = useToggle(active || false);
    return (
        <>
            <Block
                padding={'small'}
                elevation={0}
                className={clsx(
                    'mx-4 cursor-pointer transition duration-500',
                    open && 'mb-2.5 bg-opacity-5',
                    boxClass({ color: color, variant: open ? 'contained' : variant, hoverable: true }),
                    className,
                )}
                corner={'rounded-small'}
                onClick={toggle}
                contentClassName={'flex justify-between'}
            >
                <div className={'flex items-center space-x-4'}>
                    {icon && <Icon icon={icon} />}
                    <Text text={label} variant={'description'} />
                </div>
                <div className={'flex items-center space-x-2'}>
                    {badges && badges.map((badge, index) => <Badge key={index} {...badge} />)}
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

export interface MenuFoldProps extends WithClassName, WithIcon, WithBoxColor, WithLabel, WithActive {
    badges?: badge[];
    items?: menu_item[];
    variant?: menu_variant;
}

export default MenuFold;
