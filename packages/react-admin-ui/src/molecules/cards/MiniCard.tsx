import { children, image, rich_text } from '../../types';
import { Block, Image, Text } from '../../atoms';

export function MiniCard({ children, image, title }: MiniCardProps) {
    return (
        <div className={'w-2/3 rounded-2xl'}>
            <Block padding={'none'}>
                {image && (
                    <div className={'flex justify-center'}>
                        <Image className={'w-full rounded-t-2xl'} {...image} />
                    </div>
                )}
                {children || ''}
                {title && (
                    <div className={'ml-8'}>
                        <Text variant={'title4'} text={title} />
                    </div>
                )}
            </Block>
        </div>
    );
}

export interface MiniCardProps {
    children?: children;
    image?: image;
    title?: rich_text;
}

export default MiniCard;
