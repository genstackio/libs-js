import ArgumentBlock from './ArgumentBlock';
import { Image } from '../atoms/Image';
import Block from '../atoms/Block';
import clsx from 'clsx';
import { WithButtonLabel, WithButtonTarget, WithImage, WithSubtitle, WithTitle } from '../withs';
import { image } from '../types';
import { AsComponent } from '../as';

export function PushArgument({
    className,
    title,
    subtitle,
    image,
    image2,
    imagePosition = 'left',
    btnLabel,
    btnTarget,
}: PushArgumentProps) {
    return (
        <Block className={clsx('bg-clear', className)}>
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
                    <ArgumentBlock
                        subtitle={subtitle}
                        title={title}
                        btnLabel={btnLabel}
                        btnTarget={btnTarget}
                        image={image}
                        noShadow={true}
                    />
                </div>
            </div>
        </Block>
    );
}

export interface PushArgumentProps
    extends AsComponent,
        WithTitle,
        WithSubtitle,
        WithImage,
        WithButtonLabel,
        WithButtonTarget {
    image2?: image;
    imagePosition?: 'right' | 'left';
    mobileImagePosition?: 'right' | 'left';
}

// noinspection JSUnusedGlobalSymbols
export default PushArgument;
