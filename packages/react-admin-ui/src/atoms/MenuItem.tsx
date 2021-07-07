import clsx from 'clsx';
import { Badge, Block, Icon, Text } from '../atoms';
import { class_name, box_color, menu_variant, icon, flag, target, rich_text, badge } from '../types';
import boxClass from '../utils/boxClass';

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
            contentClassName={clsx('flex justify-between items-center space-x-4')}
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

export interface MenuItemProps {
    className?: class_name;
    label: rich_text;
    icon?: icon;
    target: target;
    active?: flag;
    badges?: badge[];
    color?: box_color;
    variant?: menu_variant;
}

export default MenuItem;
