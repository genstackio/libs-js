import Block from '../../atoms/Block';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import { WithDescription, WithImage, WithTitle } from '../../withs';
import { AsWrapper } from '../../as';

export function MiniCard({ className, children, description, image, title }: MiniCardProps) {
    return (
        <Block padding={'none'} className={className}>
            {image && <Image className={'w-full rounded-t-2xl'} {...image} />}
            {children || ''}
            <Text center variant={'body'} text={title} />
            <Text className={'ml-8'} variant={'title4'} text={description} />
        </Block>
    );
}

export interface MiniCardProps extends AsWrapper, WithDescription, WithImage, WithTitle {}

export default MiniCard;
