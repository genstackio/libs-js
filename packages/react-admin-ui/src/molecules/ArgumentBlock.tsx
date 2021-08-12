import clsx from 'clsx';
import Image from '../atoms/Image';
import Block from '../atoms/Block';
import Buttons from '../atoms/Buttons';
import HeadingText from '../atoms/HeadingText';
import useBlock from '../hooks/useBlock';
import useButtons from '../hooks/useButtons';
import useHeadingText from '../hooks/useHeadingText';
import { flag } from '../types';
import { AsComponent } from '../as';
import { WithButtons, WithHeadingText, WithImage } from '../withs';

export function ArgumentBlock({ className, image, noImage = false, noShadow = false, ...props }: ArgumentBlockProps) {
    const [bProps, rest2] = useBlock(props, {
        padding: 'none',
        corner: 'rounded',
        className: clsx('flex flex-col overflow-hidden bg-clear', className),
        elevation: noShadow ? 0 : 2,
    });
    const [htProps, rest] = useHeadingText(rest2, { variant: 'xxsmall3' });
    const [btProps] = useButtons(rest, { className: 'mt-2', btnColor: 'primary', btnType: 'outlined' });
    return (
        <Block {...bProps}>
            <div className={'flex-1 p-4 lg:p-3 sm:p-2 bg-clear'}>
                <HeadingText {...htProps} />
                <Buttons {...btProps} />
            </div>
            {!noImage && (
                <div className={'leading-none'}>
                    <Image {...image} objectFit={'contain'} />
                </div>
            )}
            {noImage && <div className={'h-80 flex items-center lg:h-60 sm:h-40'} />}
        </Block>
    );
}

export interface ArgumentBlockProps extends AsComponent, WithHeadingText, WithImage, WithButtons {
    noImage?: flag;
    noShadow?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default ArgumentBlock;
