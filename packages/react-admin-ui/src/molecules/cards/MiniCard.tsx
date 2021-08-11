import Block from '../../atoms/Block';
import Image from '../../atoms/Image';
import { WithHeadingText, WithImage } from '../../withs';
import { AsWrapper } from '../../as';
import HeadingText from '../../atoms/HeadingText';
import useHeadingText from '../../hooks/useHeadingText';
import { useBlock } from '../../hooks';

export function MiniCard({ image, ...props }: MiniCardProps) {
    const [bProps, rest, children] = useBlock(props, { padding: 'none' });
    const [htProps] = useHeadingText(rest, { variant: 'medium3' });
    return (
        <Block {...bProps}>
            {image && <Image className={'w-full rounded-t-2xl'} {...image} />}
            {children}
            <HeadingText {...htProps} titleClassName={'text-center'} subtitleClassName={'ml-8'} />
        </Block>
    );
}

export interface MiniCardProps extends AsWrapper, WithHeadingText, WithImage {}

// noinspection JSUnusedGlobalSymbols
export default MiniCard;
