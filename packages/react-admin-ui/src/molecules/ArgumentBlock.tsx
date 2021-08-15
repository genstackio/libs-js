import clsx from 'clsx';
import Cell from '../atoms/Cell';
import Image from '../atoms/Image';
import Block from '../atoms/Block';
import Buttons from '../atoms/Buttons';
import HeadingText from '../atoms/HeadingText';
import useBlock from '../hooks/useBlock';
import useButtons from '../hooks/useButtons';
import useHeadingText from '../hooks/useHeadingText';
import { flag } from '../types';
import { AsBlock } from '../as';
import { WithButtons, WithHeadingText, WithImage } from '../withs';

export function ArgumentBlock({ className, image, noShadow = false, ...props }: ArgumentBlockProps) {
    const [bProps, rest2] = useBlock(props, {
        p: 'none',
        corner: 'rounded',
        className: clsx('flex flex-col overflow-hidden', className),
        elevation: noShadow ? 0 : 2,
    });
    const [htProps, rest] = useHeadingText(rest2, { variant: 'xxsmall3' });
    const [btProps] = useButtons(rest, { className: 'mt-2', btnColor: 'primary', btnType: 'contained' });

    return (
        <Block {...bProps}>
            <Cell col p={'_md'}>
                <HeadingText {...htProps} />
                <Buttons {...btProps} />
            </Cell>
            <Image contained {...image} />
        </Block>
    );
}

export interface ArgumentBlockProps extends AsBlock, WithHeadingText, WithImage, WithButtons {
    noShadow?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default ArgumentBlock;
