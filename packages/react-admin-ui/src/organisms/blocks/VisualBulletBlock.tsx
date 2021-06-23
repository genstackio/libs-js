import clsx from 'clsx';
import { box_color } from '../../types';
import { Icon, Block, Text, BaseBlockProps } from '../../atoms';
import textClass from '../../utils/textClass';
import boxClass from '../../utils/boxClass';

export function VisualBulletBlock({ icon_color, items, text_color, ...props }: VisualBulletBlockProps) {
    return (
        <Block {...props}>
            {items.map((item, index) => (
                <div key={index} className={'flex items-center'}>
                    <Icon className={clsx('mb-5', textClass({ color: icon_color }))} size={40} icon={item.icon} />
                    <div className={clsx('flex-column ml-4', boxClass({ color: text_color, variant: props.variant }))}>
                        <Text color={props.color} text={item.title} variant={'title6'} />
                        <p>{item.subtitle || ''}</p>
                    </div>
                </div>
            ))}
        </Block>
    );
}

export interface VisualBulletBlockProps extends BaseBlockProps {
    icon_color?: box_color;
    items: {
        icon: string;
        subtitle: string;
        title: string;
    }[];
    text_color?: box_color;
}

export default VisualBulletBlock;
