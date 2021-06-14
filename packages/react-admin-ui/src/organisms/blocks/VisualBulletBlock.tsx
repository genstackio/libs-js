import clsx from 'clsx';
import {box_variant, box_color} from '../../types';
import {Icon, Block} from "../../atoms";
import textClass from "../../utils/textClass";
import boxClass from "../../utils/boxClass";

export function VisualBulletBlock({icon_color, items, text_color, variant, ...props}: VisualBulletBlockProps) {
    return (
        <Block {...props}>
            {items.map((item, index) => (
                <div key={index} className={'flex items-center'}>
                    {item.icon && <Icon className={clsx('mb-5', textClass({color: icon_color}))} size={40} icon={item.icon} />}
                    <div className={clsx('flex-column ml-4', boxClass({color: text_color, variant}))}>
                        <h6 className={'text-xl font-bold'}>{item.title}</h6>
                        <p>{item.subTitle || ''}</p>
                    </div>
                </div>
            ))}
        </Block>
    );
}

export interface VisualBulletBlockProps {
    icon_color?: box_color,
    items: {
        icon: string,
        subTitle: string,
        title: string,
    }[],
    text_color?: box_color,
    variant?: box_variant,
}

export default VisualBulletBlock