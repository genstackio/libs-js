import Block, { BaseBlockProps } from '../../atoms/Block';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import { WithDescription, WithImage, WithOnClick } from '../../withs';
import { useBlock } from '../../hooks';

export function BasicCard({ description, image, title, ...props }: BasicCardProps) {
    const [bProps] = useBlock(props, { padding: 'xsmall' });
    return (
        <Block {...bProps}>
            {image && <Image className={'w-full'} {...image} />}
            <Text className={'my-4'} variant={'title4'} text={title} />
            <Text variant={'description'} text={description} />
        </Block>
    );
}

export interface BasicCardProps extends BaseBlockProps, WithDescription, WithImage, WithOnClick {}

// noinspection JSUnusedGlobalSymbols
export default BasicCard;
