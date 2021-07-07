import { useCallback, useState } from 'react';
import clsx from 'clsx';
import { Clickable, Badge, Block, Icon, Text } from '../atoms';
import { class_name, box_color, menu_variant, badge, icon, flag, menu_item, rich_text } from '../types';
import textClass from '../utils/textClass';
import boxClass from '../utils/boxClass';

export function MenuFold({ className, label, icon, active, badges, items = [], color, variant }: MenuFoldProps) {
    const [open, setOpen] = useState<boolean>(active || false);
    const handleClick = useCallback(() => {
        setOpen(!open);
    }, [setOpen, open]);
    return (
        <>
            <Block
                padding={'small'}
                elevation={0}
                className={clsx(
                    'mx-4 cursor-pointer',
                    open && 'mb-2.5 bg-opacity-5',
                    boxClass({ color: color, variant: open ? 'contained' : variant, hoverable: true }),
                    className,
                )}
                corner={'rounded-small'}
                onClick={handleClick}
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

export interface MenuFoldProps {
    className?: class_name;
    label: rich_text;
    icon?: icon;
    active?: flag;
    badges?: badge[];
    items?: menu_item[];
    color?: box_color;
    variant?: menu_variant;
}

export default MenuFold;
