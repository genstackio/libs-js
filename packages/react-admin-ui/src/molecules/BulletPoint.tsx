import { Icon, Text } from '../atoms';
import { box_color, box_variant, icon, rich_text } from '../types';

export function BulletPoint({ icon, text, title, color }: BulletPointProps) {
    return (
        <div className={'flex items-center'}>
            <Icon icon={icon} />
            <div className={'flex-column ml-4'}>
                <Text text={title} variant={'title5'} color={color} />
                <Text text={text} variant={'body'} color={color} />
            </div>
        </div>
    );
}

export interface BulletPointProps {
    color?: box_color;
    icon?: icon;
    text?: rich_text;
    title?: rich_text;
    variant?: box_variant;
}

export default BulletPoint;
