import {ReactNode} from 'react';
import clsx from "clsx";
import Icon from "../atoms/Icon";
import {BaseBlockProps, Block} from "../atoms";
import {box_variant, box_color} from '../types';

export function BulletPoint({title, text, icon, ...props}: BulletPointProps) {
    return (
        <Block {...props}>
            <div className={clsx('rounded-2xl shadow-block')}>
                <div className='p-5 flex items-center'>
                    {icon && <Icon icon={icon} />}
                    <div className='flex-column p-3'>
                        <h6 className={'mt-4 text-2xl font-bold'}>{title}</h6>
                        <p className=''>{text || ''}</p>
                    </div>
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