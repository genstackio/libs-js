import clsx from 'clsx';
import ArgumentBlock from './ArgumentBlock';
import { Image } from '../atoms/Image';
import Block from '../atoms/Block';
import useButtons from '../hooks/useButtons';
import useBlock from '../hooks/useBlock';
import useHeadingText from '../hooks/useHeadingText';
import { image } from '../types';
import { AsComponent } from '../as';
import { WithButtons, WithHeadingText, WithImage } from '../withs';

export function PushArgument({ image, image2, imagePosition = 'left', ...props }: PushArgumentProps) {
    const [bProps, rest2] = useBlock(props, { color: 'clear' });
    const [htProps, rest] = useHeadingText(rest2);
    const [btProps] = useButtons(rest);
    return (
        <Block {...bProps}>
            <div
                className={clsx(
                    'maw-w-5/6 m-auto flex flew-row sm:flex-col sm:max-h: inherit',
                    imagePosition === 'right' && 'flex-row-reverse sm:flex-col sm:max-h: inherit',
                )}
            >
                <div className={'flex-1 flex items-center justify-end sm:items-end justify-center -mb-1'}>
                    {image2 && <Image {...image2} objectFit={'contain'} />}
                </div>
                <div className={'flex-1 flex items-center justify-center'}>
                    <ArgumentBlock {...htProps} {...btProps} image={image} noShadow={true} />
                </div>
            </div>
        </Block>
    );
}

export interface PushArgumentProps extends AsComponent, WithHeadingText, WithImage, WithButtons {
    image2?: image;
    imagePosition?: 'right' | 'left';
    mobileImagePosition?: 'right' | 'left';
}

// noinspection JSUnusedGlobalSymbols
export default PushArgument;
