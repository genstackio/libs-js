import clsx from 'clsx';
import { children, class_name, image, rich_text } from '../../types';
import Block from '../../atoms/Block';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';

export function MiniCard({ className, children, description, image, title }: MiniCardProps) {
    return (
        <Block padding={'none'} className={clsx(className)}>
            {image && <Image className={'w-full rounded-t-2xl'} {...image} />}
            {children || ''}
            <Text center variant={'body'} text={title} />
            <Text className={'ml-8'} variant={'title4'} text={description} />
        </Block>
    );
}

export interface MiniCardProps {
    className?: class_name;
    children?: children;
    description?: rich_text;
    image?: image;
    title?: rich_text;
}

export default MiniCard;
