import Block from '../../atoms/Block';
import Image from '../../atoms/Image';
import HeadingText from '../../atoms/HeadingText';
import useBlock from '../../hooks/useBlock';
import useHeadingText from '../../hooks/useHeadingText';
import { AsWrapper } from '../../as';
import { WithHeadingText, WithImage } from '../../withs';

export function MiniCard({ image, ...props }: MiniCardProps) {
    const [bProps, rest, children] = useBlock(props, { p: 'none' });
    const [htProps] = useHeadingText(rest, { variant: 'medium3' });

    return (
        <Block {...bProps}>
            <Image className={'w-full rounded-t-2xl'} {...image} />
            {children}
            <HeadingText subtitleClassName={'ml-8'} titleClassName={'text-center'} {...htProps} />
        </Block>
    );
}

export interface MiniCardProps extends AsWrapper, WithHeadingText, WithImage {}

// noinspection JSUnusedGlobalSymbols
export default MiniCard;
