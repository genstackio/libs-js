import {ReactNode} from 'react';
import Icon from "../atoms/Icon";
import {BaseBlockProps, Block} from "../atoms";
import {box_variant, box_color} from '../types';

export function BulletPoint({title, text, icon, ...props}: BulletPointProps) {
    return (
        <Block {...props}>
                <div className='flex items-center'>
                    {icon && <Icon icon={icon} />}
                    <div className='flex-column ml-4'>
                        <h6 className={'text-2xl font-bold'}>{title}</h6>
                        <p className=''>{text || ''}</p>
                    </div>
            </div>
        </Block>
    );
}

export interface BulletPointProps extends BaseBlockProps {
    icon?: string | ReactNode,
    variant?: box_variant,
    color?: box_color,
    title?: ReactNode,
    text?: ReactNode,
}

export default BulletPoint