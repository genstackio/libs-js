import { children, image, rich_text } from '../../types';
import { Block, Image, Text } from '../../atoms';

export function MiniCard({ children, description, image, title }: MiniCardProps) {
    return (
        <Block padding={'none'}>
            {image && <Image className={'w-full rounded-t-2xl'} {...image} />}
            {children || ''}
            <Text className="text-center" variant={'body'} text={title} />
            <Text className={'ml-8'} variant={'title4'} text={description} />
        </Block>
    );
}

export interface MiniCardProps {
    children?: children;
    description?: rich_text;
    image?: image;
    title?: rich_text;
}

export default MiniCard;
