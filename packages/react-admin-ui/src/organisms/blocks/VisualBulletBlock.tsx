import {box_variant, box_color} from '../../types';
import clsx from 'clsx';
import {Icon, Block} from "../../atoms";
import colorClass from "../../utils/colorClass";

export function VisualBulletBlock({items, icon_color, text_color, variant, ...props}: VisualBulletBlockProps) {
    return (
        <Block {...props}>
            {items.map((item, index) => (
                <div key={index} className='flex items-center'>
                    {item.icon && <Icon className={clsx('mb-5', colorClass({color: icon_color}))} size={40} icon={item.icon} />}
                    <div className={clsx('flex-column ml-4', colorClass({color: text_color, variant}))}>
                        <h6 className={'text-xl font-bold'}>{item.title}</h6>
                        <p className=''>{item.subTitle || ''}</p>
                    </div>
                </div>
            ))}
        </Block>
    );
}

export interface VisualBulletBlockProps {
    variant?: box_variant,
    icon_color?: box_color,
    text_color?: box_color,
    items: {title: string, subTitle: string, icon: string}[],
}

export default VisualBulletBlock