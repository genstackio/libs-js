import {ReactNode} from 'react';
import {BaseBlockProps, Block, Icon} from "../atoms";
import {box_color, box_variant} from '../types';

export function BulletPoint({icon, text, title, ...props}: BulletPointProps) {
    return (
        <Block {...props}>
                <div className={'flex items-center'}>
                    {icon && <Icon icon={icon} />}
                    <div className={'flex-column ml-4'}>
                        <h6 className={'text-2xl font-bold'}>{title}</h6>
                        <p>{text || ''}</p>
                    </div>
            </div>
        </Block>
    );
}

export interface BulletPointProps extends BaseBlockProps {
    color?: box_color,
    icon?: ReactNode,
    text?: ReactNode,
    title?: ReactNode,
    variant?: box_variant,
}

export default BulletPoint