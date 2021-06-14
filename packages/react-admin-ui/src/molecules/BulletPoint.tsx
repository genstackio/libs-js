import {ReactNode} from 'react';
import {Icon, Text} from "../atoms";
import {box_color, box_variant} from '../types';

export function BulletPoint({icon, text, title, color}: BulletPointProps) {
    return (
        <div className={'flex items-center'}>
            {icon && <Icon icon={icon}/>}
            <div className={'flex-column ml-4'}>
                <Text text={title} variant={'title5'} color={color}/>
                <Text text={text} variant={'body'} color={color}/>
            </div>
        </div>
    );
}

export interface BulletPointProps {
    color?: box_color,
    icon?: ReactNode,
    text?: ReactNode,
    title?: ReactNode,
    variant?: box_variant,
}

export default BulletPoint