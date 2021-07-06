import clsx from 'clsx';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import { box_color, box_variant, class_name, icon, rich_text } from '../types';

export function BulletPoint({ className, icon, text, title, color }: BulletPointProps) {
    return (
        <div className={clsx('flex items-center', className)}>
            <Icon icon={icon} />
            <div className={'flex-column ml-4'}>
                <Text text={title} variant={'title5'} color={color} />
                <Text text={text} variant={'body'} color={color} />
            </div>
        </div>
    );
}

export interface BulletPointProps {
    className?: class_name;
    color?: box_color;
    icon?: icon;
    text?: rich_text;
    title?: rich_text;
    variant?: box_variant;
}

export default BulletPoint;
