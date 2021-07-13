import clsx from 'clsx';
import Icon from '../../atoms/Icon';
import Block, { BaseBlockProps } from '../../atoms/Block';
import Text from '../../atoms/Text';

export function VisualBulletBlock({ items, ...props }: VisualBulletBlockProps) {
    return (
        <Block {...props}>
            {items.map((item, index) => (
                <div key={index} className={'flex items-center'}>
                    <Icon className={clsx('mb-5')} size={'4xl'} icon={item.icon} />
                    <div className={clsx('flex-column ml-4')}>
                        <Text text={item.title} variant={'title6'} />
                        <p>{item.subtitle || ''}</p>
                    </div>
                </div>
            ))}
        </Block>
    );
}

export interface VisualBulletBlockProps extends BaseBlockProps {
    items: {
        icon: string;
        subtitle: string;
        title: string;
    }[];
}

// noinspection JSUnusedGlobalSymbols
export default VisualBulletBlock;
