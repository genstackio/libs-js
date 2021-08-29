import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import Block, { BaseBlockProps } from '../../atoms/Block';
import useBlock from '../../hooks/useBlock';
import { WithDescription, WithImage, WithOnClick } from '../../withs';

export function BasicCard({ description, image, title, ...props }: BasicCardProps) {
    const [bProps] = useBlock(props, { p: 'xs' });

    return (
        <Block {...bProps}>
            <Image className={'w-full'} {...image} />
            <Text text={title} my={'md'} variant={'title4'} />
            <Text text={description} variant={'description'} />
        </Block>
    );
}

export interface BasicCardProps extends BaseBlockProps, WithDescription, WithImage, WithOnClick {}

// noinspection JSUnusedGlobalSymbols
export default BasicCard;
