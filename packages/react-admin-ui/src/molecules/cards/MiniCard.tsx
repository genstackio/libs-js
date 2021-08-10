import Block from '../../atoms/Block';
import Image from '../../atoms/Image';
import { WithDescription, WithImage, WithTitle } from '../../withs';
import { AsWrapper } from '../../as';
import { HeadingText } from '../../atoms';

export function MiniCard({ className, children, description, image, title }: MiniCardProps) {
    return (
        <Block padding={'none'} className={className}>
            {image && <Image className={'w-full rounded-t-2xl'} {...image} />}
            {children || ''}
            <HeadingText
                title={title}
                subtitle={description}
                variant={'medium3'}
                titleClassName={'text-center'}
                subtitleClassName={'ml-8'}
            />
        </Block>
    );
}

export interface MiniCardProps extends AsWrapper, WithDescription, WithImage, WithTitle {}

// noinspection JSUnusedGlobalSymbols
export default MiniCard;
